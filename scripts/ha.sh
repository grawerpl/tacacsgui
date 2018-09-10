#!/bin/bash
###	High Availability Configuration Script	###
# Special for project TacacsGUI	#
# Author: Aleksey Mochalin	#

####  VARIABLES  ####
ROOT_PATH="/opt/tacacsgui";
####  FUNCTIONS ####
source "$ROOT_PATH/scripts/functions/map.sh";
source "$FUN_GENERAL";
source "$FUN_HA";
####  FUNCTIONS ####  END

SCRIPT_VER="1.0.0";

if [ $# -eq 0 ]
then
clear;
	echo $'\n'\
"############################################################################"$'\n'\
"##############   TACACSGUI High Availability Configuration    ##############"$'\n'\
"############################################################################"$'\n'$'\n'"ver. ${SCRIPT_VER}"$'\n'$'\n'\
"######################     List of available options    ####################"$'\n'\

	PS3=$'\n'"Please enter your choice (5 to clear output): "
	options=("Show Current Status" "Configure Server as a Master" "Configure Server as a Slave" "Disable HA" "Clear and Refresh Menu" "Quit")
	select opt in "${options[@]}"
	do
	    case $opt in
	        "Show Current Status")
	            echo; echo "### $opt ###"; echo;

	            ;;
	        "Configure Server as a Master")
	            echo; echo "### $opt ###"; echo;
							if [[ $(root_access) -eq '0' ]];
              then
                error_message "Root Access is requered! Run script with sudo.";
                continue;
              fi
							###CHECK ROOT PASSWORD###
								while true; do
									if [[ -z $MYSQL_ROOT_TRY ]]; then
										MYSQL_ROOT_TRY=0
									fi
									if [[ $MYSQL_ROOT_TRY -eq 0 ]]; then
										echo -n "Try to get root password to MySQL...";
										if [[  $(cat /opt/tacacsgui/web/api/config.php 2>/dev/null | grep -o -P "(?<=ROOT_PASSWD=).*(?=$)" | wc -l) -gt 0 ]]; then
											echo -n "Verify...";
											MYSQL_PASSWORD=$( cat /opt/tacacsgui/web/api/config.php 2>/dev/null | grep -o -P "(?<=ROOT_PASSWD=).*(?=$)" );
											if [[ $(check_mysql_root $MYSQL_PASSWORD) -ne 0 ]]
											then
												echo "Success";
												break;
											else
												echo "Password Found, BUT INCORRECT!";
											fi
										else
											echo "Not Found";
										fi
										MYSQL_ROOT_TRY=1;
									fi

									echo -n 'Enter root password to mysql: ';
									stty -echo; read MYSQL_PASSWORD; stty echo; echo;
									if [[ $(check_mysql_root $MYSQL_PASSWORD) -eq 0 ]]
									then
										error_message 'Incorrect MYSQL root password! Exit.'
										echo; echo -n 'Try one more time? (y/n): '; read DECISION;
										if [ "$DECISION" == "${DECISION#[Yy]}" ]; then
											read -n 1 -s -r -p "Press any key to exit...";
											exit 0;
										else
											continue;
										fi
									fi
									echo 'Done. Correct password'
									echo -n 'Remember root password? (y/n): '; read DECISION;
									if [ "$DECISION" != "${DECISION#[Yy]}" ]; then
										REMEMBER_PASSWD=$MYSQL_PASSWORD;
										echo "Root Password Saved";
									fi
									break;
								done
								while true; do
									echo; echo "Type Pre-Shared key that will be used between master and slave."; echo -n 'Pre-Shared Key: '; read -e REPLICATION_PSK;
									if [[ -z $REPLICATION_PSK ]];then
									error_message "Pre-Shared Key can't be empty!";
									continue;
									fi
									break;
								done
								echo -n "Make backup my.cnf...";
								if [[ $(check_old_mycnf_tgui) -eq 0 ]]; then
									backup_old_mycnf
									if [[ $(check_old_mycnf_existance) -gt 0 ]]; then
										echo "Done."
									else
										echo; error_message "Backup file not found";
		                continue;
									fi
								else
									echo "the old file was generated by tgui. Backup was skipped."
								fi
								echo -n "Write to my.cnf..."
								make_master_mycnf;
								echo "Done";
								echo $REPLICATION_PSK;
	            ;;
	        "Configure Server as a Slave")
	            echo; echo "### $opt ###"; echo;

	            ;;
	        "Disable HA")
	            echo; echo "### $opt ###"; echo;

	            ;;
	        "Clear and Refresh Menu")
	            THIS_SCRIPT=$(readlink -f "$0");
	            exec $THIS_SCRIPT;
	            ;;
	        "Quit")
	            exit 0;
	            ;;
	        *) echo "invalid option $REPLY";;
	    esac
	done


fi

case $1 in
	info)
		echo; echo "High Availability Configuration Script. Version $SCRIPT_VER."; echo;
	;;
	init)
		if [[ ! -d /opt/tgui_data/ha/ ]]; then
			mkdir -p /opt/tgui_data/ha/;
		fi
	;;
	mycnf)
		if [[ $2 == 'slave' ]]; then
			echo -n "Make backup my.cnf...";
			if [[ $(check_old_mycnf_tgui) -eq 0 ]]; then
				backup_old_mycnf
				if [[ $(check_old_mycnf_existance) -gt 0 ]]; then
					echo "Done."
				else
					echo; error_message "Backup file not found";
					continue;
				fi
			else
				echo "the old file was generated by tgui. Backup was skipped."
			fi
			echo -n "Write to my.cnf..."
			make_slave_mycnf $3;
			echo "Done";
			echo -n "Service restart..."
			service mysql restart
			echo "Done";
			exit 0;
		fi
		if [[ -z $2 ]]; then
			echo 'Where is ip address?';
			exit 0;
		fi
		echo -n "Make backup my.cnf...";
		if [[ $(check_old_mycnf_tgui) -eq 0 ]]; then
			backup_old_mycnf
			if [[ $(check_old_mycnf_existance) -gt 0 ]]; then
				echo "Done."
			else
				echo; error_message "Backup file not found";
				continue;
			fi
		else
			echo "the old file was generated by tgui. Backup was skipped."
		fi
		echo -n "Write to my.cnf..."
		make_master_mycnf $2;
		echo "Done";
		echo -n "Service restart..."
		service mysql restart
		echo "Done";
	;;
	slave)
		# $2 reserved
		# start slave # rootpw, msterip, masterpasswd, log_file, position
		echo $(start_slave $3 $4 $5 $6 $7);
		return;
	;;
	replication) #$2 rootpw $3 psk $4 debug
		if [[ $(check_mysql_replication_user $2) -eq 0 ]]; then
			replication_user_create $2 $3;
			echo "Create new Replication user"
		else
			replication_user_new_passwd $2 $3;
			echo "Change replication user password"
		fi
	;;
	rootpw)
		if [[ ! -z $2 ]];then
			check_mysql_root $2;
		else
			rootPasswd;
		fi
	;;
	restore)
		if [[ ! -f '/opt/tacacsgui/temp/dumpForSlave.sql' ]]; then
			echo 'Where is dump file?';
			exit 0;
		fi

		slave_restore $2
		exit 0
	;;
	status)
		if [[ $2 == 'master' ]]; then
			if [[ -z $4 ]]; then
				master_status $3 'brief'
				exit 0;
			fi
			master_status $3
			exit 0;
		fi
		if [[ $2 == 'slave' ]]; then
			slave_status $3
			exit 0;
		fi
		echo 'Where is condition?';
		exit 0;
	;;
	dump)
		rm /opt/tacacsgui/temp/tgui_dump.sql
		mysqldump -u $2 -p$3 tgui | grep -v "Using a password" > /opt/tacacsgui/temp/tgui_dump.sql 2>&1
		if [ -f /opt/tacacsgui/temp/tgui_dump.sql ]; then
			echo -n 1
			exit 0
		fi
		echo 0
		exit 0
	;;
	*)
		echo 'Unexpected main argument. Exit.'
		exit 0
	;;
esac

exit 0;
