(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{r7o2:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("9AJC"),r=t("II6f"),a=t("5Awz"),d=t("8kqb"),s=t("uoK1"),c=t("SZbH"),p=t("ZYCi"),f=function(){function l(){this.tableOptions={table:{delBtn:"/user/group/delete/",editBtn:!0,selectable:!0,preview:!1,pagination:!1,editable:!0,mainUrl:"/user/group/datatables/",columns:{id:{title:"ID",show:!1,sortable:!0},name:{title:"Name",show:!0,sortable:!0},created_at:{title:"Created",show:!1,sortable:!0},updated_at:{title:"Updated",show:!1,sortable:!0}}},panel:{add:{enable:!0},filter:{enable:!0},actions:{enable:!1,options:[]},moreColumns:{enable:!0}}}}return l.prototype.ngOnInit=function(){},l}(),m=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function g(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-main-table",[],null,null,null,r.b,r.a)),e["\u0275did"](1,114688,null,0,a.a,[d.a,s.a,c.j,p.q,p.a],{options:[0,"options"]},null)],function(l,n){l(n,1,0,n.component.tableOptions)},null)}function v(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-api-user-groups",[],null,null,null,g,m)),e["\u0275did"](1,114688,null,0,f,[],null,null)],function(l,n){l(n,1,0)},null)}var h=e["\u0275ccf"]("kt-api-user-groups",f,v,{},{},[]),b=t("gIcY"),C=t("Ip0R"),R=t("26FU"),y=t("t/Na"),I=t("P6uZ"),k=t("67Y/"),w="api/user/group",F=function(){function l(l){this.http=l}return l.prototype.add=function(l){return this.http.post(w+"/add/",l).pipe(Object(I.a)(),Object(k.a)(function(l){return l}))},l.prototype.get=function(l){var n=(new y.HttpParams).set("id",l.toString());return this.http.get(w+"/edit/",{params:n}).pipe(Object(I.a)(),Object(k.a)(function(l){return l.group}))},l.prototype.save=function(l){return this.http.post(w+"/edit/",l).pipe(Object(I.a)(),Object(k.a)(function(l){return l}))},l.prototype.rights=function(){return this.http.post(w+"/rights/",{}).pipe(Object(I.a)(),Object(k.a)(function(l){return l.rights}))},l.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new l(e["\u0275\u0275inject"](y.HttpClient))},token:l,providedIn:"root"}),l}(),O=function(){function l(l,n){this.toastr=l,this.service=n,this.rights=new R.a([])}return l.prototype.ngOnInit=function(){var l=this;this.service.rights().subscribe(function(n){l.rights.next(n)}),this.validation.subscribe(function(n){for(var t in n)if(n[t])for(var e=0;e<n[t].length;e++)l.toastr.error(n[t][e])})},l.prototype.addRole=function(l){this.options.data.rights+=Math.pow(2,l)},l.prototype.delRole=function(l){this.options.data.rights-=Math.pow(2,l)},l.prototype.roleChecker=function(l){var n=this.options.data.rights.toString(2).split("").reverse();return n[l]&&1==n[l]},l}(),N=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addRole(l.parent.context.$implicit.value)&&e),e},null,null)),e["\u0275did"](1,147456,null,0,b.t,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](2,147456,null,0,b.C,[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](3,null,["",""]))],null,function(l,n){l(n,3,0,n.parent.context.$implicit.name)})}function j(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](2,16384,null,0,C.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,!n.component.roleChecker(n.context.$implicit.value))},null)}function A(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.delRole(l.parent.context.$implicit.value)&&e),e},null,null)),e["\u0275did"](1,147456,null,0,b.t,[e.ElementRef,e.Renderer2,[8,null]],null,null),e["\u0275did"](2,147456,null,0,b.C,[e.ElementRef,e.Renderer2,[8,null]],null,null),(l()(),e["\u0275ted"](3,null,["",""]))],null,function(l,n){l(n,3,0,n.parent.context.$implicit.name)})}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,A)),e["\u0275did"](2,16384,null,0,C.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](0,null,null,0))],function(l,n){l(n,2,0,n.component.roleChecker(n.context.$implicit.value))},null)}function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"div",[["class","tacgui-blockui-main"]],null,null,null,null,null))],null,null)}function T(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","tacgui-blockui-main-message"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,0,"div",[["class","kt-spinner kt-spinner--sm kt-spinner--success"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Please wait..."]))],null,null)}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,53,"div",[["class","col-md-9 col-lg-9"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,52,"div",[["class","card m-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,45,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,18,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](6,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275eld"](8,0,null,null,9,"input",[["class","form-control form-control-sm"],["placeholder","Name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,t){var u=!0,o=l.component;return"input"===n&&(u=!1!==e["\u0275nov"](l,13)._handleInput(t.target.value)&&u),"blur"===n&&(u=!1!==e["\u0275nov"](l,13).onTouched()&&u),"compositionstart"===n&&(u=!1!==e["\u0275nov"](l,13)._compositionStart()&&u),"compositionend"===n&&(u=!1!==e["\u0275nov"](l,13)._compositionEnd(t.target.value)&&u),"ngModelChange"===n&&(u=!1!==(o.options.data.name=t)&&u),u},null,null)),e["\u0275prd"](512,null,C["\u0275NgClassImpl"],C["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](10,278528,null,0,C.NgClass,[C["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),e["\u0275pod"](12,{"is-invalid":0}),e["\u0275did"](13,16384,null,0,b.e,[e.Renderer2,e.ElementRef,[2,b.a]],null,null),e["\u0275prd"](1024,null,b.n,function(l){return[l]},[b.e]),e["\u0275did"](15,671744,null,0,b.s,[[8,null],[8,null],[8,null],[6,b.n]],{model:[0,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,b.o,null,[b.s]),e["\u0275did"](17,16384,null,0,b.p,[[4,b.o]],null,null),(l()(),e["\u0275eld"](18,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,x)),e["\u0275did"](20,278528,null,0,C.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275eld"](22,0,null,null,0,"span",[["class","form-text text-muted"]],null,null,null,null,null)),(l()(),e["\u0275eld"](23,0,null,null,24,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,8,"div",[["class","form-group col-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Role List"])),(l()(),e["\u0275eld"](27,0,null,null,3,"select",[["class","form-control rights-list scroll-bar style-11"],["size","15"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,j)),e["\u0275did"](29,278528,null,0,C.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275eld"](31,0,null,null,0,"input",[["data-default",""],["data-pickup","true"],["data-type","input"],["name","cisco_wlc_roles"],["type","hidden"]],null,null,null,null,null)),(l()(),e["\u0275eld"](32,0,null,null,0,"input",[["name","cisco_wlc_roles_native"],["type","hidden"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,14,"div",[["class","form-group col-5"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Selected Roles"])),(l()(),e["\u0275eld"](36,0,null,null,7,"select",[["class","form-control rights-list"],["size","15"]],null,null,null,null,null)),e["\u0275prd"](512,null,C["\u0275NgClassImpl"],C["\u0275NgClassR2Impl"],[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2]),e["\u0275did"](38,278528,null,0,C.NgClass,[C["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),e["\u0275pod"](40,{"is-invalid":0}),(l()(),e["\u0275and"](16777216,null,null,2,null,_)),e["\u0275did"](42,278528,null,0,C.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275eld"](44,0,null,null,3,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,M)),e["\u0275did"](46,278528,null,0,C.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275and"](16777216,null,null,2,null,P)),e["\u0275did"](49,16384,null,0,C.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef]),(l()(),e["\u0275and"](16777216,null,null,2,null,T)),e["\u0275did"](52,16384,null,0,C.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),e["\u0275pid"](131072,C.AsyncPipe,[e.ChangeDetectorRef])],function(l,n){var t,u,o=n.component,i=l(n,12,0,null==(t=e["\u0275unv"](n,10,1,e["\u0275nov"](n,11).transform(o.validation)))?null:t.name);l(n,10,0,"form-control form-control-sm",i),l(n,15,0,o.options.data.name),l(n,20,0,null==(u=e["\u0275unv"](n,20,0,e["\u0275nov"](n,21).transform(o.validation)))?null:u.name),l(n,29,0,e["\u0275unv"](n,29,0,e["\u0275nov"](n,30).transform(o.rights)));var r,a,d=l(n,40,0,null==(r=e["\u0275unv"](n,38,1,e["\u0275nov"](n,39).transform(o.validation)))?null:r.rights);l(n,38,0,"form-control rights-list",d),l(n,42,0,e["\u0275unv"](n,42,0,e["\u0275nov"](n,43).transform(o.rights))),l(n,46,0,null==(a=e["\u0275unv"](n,46,0,e["\u0275nov"](n,47).transform(o.validation)))?null:a.rights),l(n,49,0,e["\u0275unv"](n,49,0,e["\u0275nov"](n,50).transform(o.loading))),l(n,52,0,e["\u0275unv"](n,52,0,e["\u0275nov"](n,53).transform(o.loading)))},function(l,n){l(n,8,0,e["\u0275nov"](n,17).ngClassUntouched,e["\u0275nov"](n,17).ngClassTouched,e["\u0275nov"](n,17).ngClassPristine,e["\u0275nov"](n,17).ngClassDirty,e["\u0275nov"](n,17).ngClassValid,e["\u0275nov"](n,17).ngClassInvalid,e["\u0275nov"](n,17).ngClassPending)})}var U=t("NqMs"),z=t("lkAW"),V=t("ruxR"),S=t("mrSG"),q=function(l){function n(n){void 0===n&&(n={});var t=l.call(this)||this;return t.data={},n=n||!1,t.init(),n&&Object.assign(t.data,n),t}return S.__extends(n,l),n.prototype.init=function(){this.data.id=void 0,this.data.name="",this.data.rights=0},n.prototype.makeClone=function(){return this.clone(this.data)},n.prototype.get=function(){return this.makeClone()},n}(t("0smX").a),G=function(){function l(l,n,t,e){this.toastr=l,this.router=n,this.route=t,this.service=e,this.validation=new R.a({}),this.loadingForm=new R.a(!0),this.path=this.router.url.split("/")[3],this.formFooter=new V.a(this.path,"edit"==this.path),this.group=new q}return l.prototype.ngOnInit=function(){var l=this;"add"==this.path?this.loadingForm.next(!1):this.route.paramMap.pipe(Object(I.a)()).subscribe(function(n){l.fillForm(+n.get("id"))})},l.prototype.fillForm=function(l){var n=this;this.service.get(l).subscribe(function(l){Object.assign(n.group.data,l),n.oldItem=n.group.makeClone(),n.loadingForm.next(!1)})},l.prototype.formAction=function(l){"add"==this.path?this.add(this.group.get()):this.save(this.group)},l.prototype.add=function(l){var n=this;this.loadingForm.next(!0),this.service.add(l).subscribe(function(l){n.validation.next(l.error.validation),l.error.status?n.loadingForm.next(!1):(l.group?(n.toastr.success("User Group Added!"),n.router.navigate(["../"],{relativeTo:n.route})):n.toastr.error("Unknown server error"),n.loadingForm.next(!1))})},l.prototype.save=function(l){var n=this;if(this.loadingForm.next(!0),JSON.stringify(l.data)==JSON.stringify(this.oldItem))return this.toastr.warning("No Changes Detected!"),void this.loadingForm.next(!1);this.service.save(l.get()).subscribe(function(l){n.validation.next(l.error.validation),l.error.status?n.loadingForm.next(!1):(l.save?(n.toastr.success("User Group Changed!"),n.router.navigate(["../../"],{relativeTo:n.route})):n.toastr.error("Unknown server error"),n.loadingForm.next(!1))})},l}(),J=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Z(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-api-usr-grps-form",[],null,null,null,E,N)),e["\u0275did"](1,114688,null,0,O,[c.j,F],{options:[0,"options"],validation:[1,"validation"],loading:[2,"loading"]},null),(l()(),e["\u0275eld"](2,0,null,null,1,"kt-main-form-footer",[],null,[[null,"trigger"]],function(l,n,t){var e=!0;return"trigger"===n&&(e=!1!==l.component.formAction(t)&&e),e},U.b,U.a)),e["\u0275did"](3,114688,null,0,z.a,[],{options:[0,"options"],loading:[1,"loading"]},{trigger:"trigger"})],function(l,n){var t=n.component;l(n,1,0,t.group,t.validation,t.loadingForm),l(n,3,0,t.formFooter,t.loadingForm)},null)}function $(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"kt-edit",[],null,null,null,Z,J)),e["\u0275did"](1,114688,null,0,G,[c.j,p.q,p.a,F],null,null)],function(l,n){l(n,1,0)},null)}var L=e["\u0275ccf"]("kt-edit",G,$,{},{},[]),B=t("4GxJ"),H=t("9Bt9"),K=t("qAlS"),W=t("18CH"),Y=t("Fzqc"),X=t("dWZg"),Q=t("wOIO"),ll=t("EFBj"),nl=t("ZWfn");t.d(n,"ApiUserGroupsModuleNgFactory",function(){return tl});var tl=e["\u0275cmf"](u,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,i.a,i.b,i.p,i.q,i.m,i.n,i.o,h,L]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,C.NgLocalization,C.NgLocaleLocalization,[e.LOCALE_ID,[2,C["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,b.A,b.A,[]),e["\u0275mpd"](4608,B.D,B.D,[e.ComponentFactoryResolver,e.Injector,B.xb,B.E]),e["\u0275mpd"](4608,H.g,H.g,[C.DOCUMENT,e.NgZone,K.j,H.i]),e["\u0275mpd"](1073742336,C.CommonModule,C.CommonModule,[]),e["\u0275mpd"](1073742336,p.t,p.t,[[2,p.z],[2,p.q]]),e["\u0275mpd"](1073742336,b.z,b.z,[]),e["\u0275mpd"](1073742336,b.k,b.k,[]),e["\u0275mpd"](1073742336,B.c,B.c,[]),e["\u0275mpd"](1073742336,B.g,B.g,[]),e["\u0275mpd"](1073742336,B.h,B.h,[]),e["\u0275mpd"](1073742336,B.l,B.l,[]),e["\u0275mpd"](1073742336,B.n,B.n,[]),e["\u0275mpd"](1073742336,B.t,B.t,[]),e["\u0275mpd"](1073742336,B.z,B.z,[]),e["\u0275mpd"](1073742336,B.F,B.F,[]),e["\u0275mpd"](1073742336,B.J,B.J,[]),e["\u0275mpd"](1073742336,B.O,B.O,[]),e["\u0275mpd"](1073742336,B.R,B.R,[]),e["\u0275mpd"](1073742336,B.U,B.U,[]),e["\u0275mpd"](1073742336,B.Z,B.Z,[]),e["\u0275mpd"](1073742336,B.db,B.db,[]),e["\u0275mpd"](1073742336,B.gb,B.gb,[]),e["\u0275mpd"](1073742336,B.jb,B.jb,[]),e["\u0275mpd"](1073742336,B.G,B.G,[]),e["\u0275mpd"](1073742336,W.a,W.a,[]),e["\u0275mpd"](1073742336,Y.a,Y.a,[]),e["\u0275mpd"](1073742336,X.b,X.b,[]),e["\u0275mpd"](1073742336,K.g,K.g,[]),e["\u0275mpd"](1073742336,K.e,K.e,[]),e["\u0275mpd"](1073742336,Q.a,Q.a,[]),e["\u0275mpd"](1073742336,H.h,H.h,[]),e["\u0275mpd"](1073742336,ll.a,ll.a,[]),e["\u0275mpd"](1073742336,nl.a,nl.a,[]),e["\u0275mpd"](1073742336,u,u,[]),e["\u0275mpd"](1024,p.m,function(){return[[{path:"",component:f},{path:"add",component:G},{path:"edit/:id",component:G}]]},[])])})}}]);