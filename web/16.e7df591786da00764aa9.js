(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{EYJx:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){return e.e(15).then(e.bind(null,"8i78")).then(function(l){return l.CmQueriesModuleNgFactory})},o=function(){return e.e(13).then(e.bind(null,"S9s7")).then(function(l){return l.CmDevicesModuleNgFactory})},i=function(){return e.e(14).then(e.bind(null,"OEXR")).then(function(l){return l.CmModelsModuleNgFactory})},r=function(){return e.e(12).then(e.bind(null,"bBWd")).then(function(l){return l.CmCredentialsModuleNgFactory})},d=function(){return function(){}}(),a=e("9AJC"),s=e("pMnS"),c=e("4GxJ"),g=e("gIcY"),p=e("Ip0R"),m=e("26FU"),v=e("P6uZ"),f=e("67Y/"),h=e("t/Na"),C="api/confmanager/",b=function(){function l(l){this.http=l}return l.prototype.toggle=function(l){return this.http.post(C+"toggle/",l).pipe(Object(v.a)(),Object(f.a)(function(l){return l}))},l.prototype.cron_get=function(){return this.http.get(C+"settings/cron/").pipe(Object(v.a)(),Object(f.a)(function(l){return l.cron}))},l.prototype.cron_post=function(l){return this.http.post(C+"settings/cron/",l).pipe(Object(v.a)(),Object(f.a)(function(l){return l}))},l.prototype.info=function(){return this.http.get(C+"info/").pipe(Object(v.a)(),Object(f.a)(function(l){return l}))},l.prototype.preview=function(){return this.http.get(C+"settings/preview/").pipe(Object(v.a)(),Object(f.a)(function(l){return l}))},l.ngInjectableDef=u["\u0275\u0275defineInjectable"]({factory:function(){return new l(u["\u0275\u0275inject"](h.HttpClient))},token:l,providedIn:"root"}),l}(),R=function(){function l(l,n){this.service=l,this.toastr=n,this.statusMessage=new m.a(""),this.validation=new m.a({}),this.cm={period:"day",time:{hour:1,minute:0},week:1},this.git={period:60},this.timeReady=new m.a(!1),this.currentStatus=new m.a("Loading..."),this.configPreview=new m.a(""),this.loadingForm=new m.a(!1)}return l.prototype.ngOnInit=function(){var l=this;this.service.cron_get().subscribe(function(n){console.log(n),n.cm&&(l.cm.period=n.cm.period?n.cm.period:l.cm.period,l.cm.week=n.cm.week?n.cm.week:l.cm.week,n.cm.time=n.cm.time.split(":"),l.cm.time.hour=n.cm.time[0]?parseInt(n.cm.time[0]):l.cm.time.hour,l.cm.time.minute=n.cm.time[1]?parseInt(n.cm.time[1]):l.cm.time.minute),n.git&&(l.git.period=n.git.period?n.git.period:l.git.period),console.log(l.cm,l.git),l.timeReady.next(!0)}),this.getInfo()},l.prototype.toogle=function(l){var n=this;this.currentStatus.next("Loading..."),this.service.toggle({action:l}).subscribe(function(l){console.log(l),n.getInfo()})},l.prototype.getInfo=function(){var l=this;this.currentStatus.next("Loading..."),this.service.info().subscribe(function(n){console.log(n),l.currentStatus.next(n.info)})},l.prototype.showConfig=function(){var l=this;this.configPreview.next("Loading..."),this.service.preview().subscribe(function(n){console.log(n),l.configPreview.next(n.preview)})},l.prototype.makeClone=function(l){return JSON.parse(JSON.stringify(l))},l.prototype.save=function(){var l=this,n=this.makeClone(this.cm);n.time=n.time.hour+":"+n.time.minute,this.service.cron_post({cm:n,git:this.git}).subscribe(function(n){console.log(n),"done"==n.crontab?l.toastr.success("Settings Saved"):l.toastr.error("Unexpected Error"),l.getInfo()})},l}(),y=e("SZbH"),w=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,5,"ngb-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,e){var u=!0;return"ngModelChange"===n&&(u=!1!==(l.component.cm.time=e)&&u),u},a.l,a.g)),u["\u0275did"](2,573440,null,0,c.bb,[c.cb,c.ab,u.ChangeDetectorRef],{minuteStep:[0,"minuteStep"],size:[1,"size"]},null),u["\u0275prd"](1024,null,g.n,function(l){return[l]},[c.bb]),u["\u0275did"](4,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,g.o,null,[g.s]),u["\u0275did"](6,16384,null,0,g.p,[[4,g.o]],null,null)],function(l,n){var e=n.component;l(n,2,0,10,e.small),l(n,4,0,e.cm.time)},function(l,n){l(n,1,0,u["\u0275nov"](n,6).ngClassUntouched,u["\u0275nov"](n,6).ngClassTouched,u["\u0275nov"](n,6).ngClassPristine,u["\u0275nov"](n,6).ngClassDirty,u["\u0275nov"](n,6).ngClassValid,u["\u0275nov"](n,6).ngClassInvalid,u["\u0275nov"](n,6).ngClassPending)})}function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-default btn-elevate btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.configPreview.next("")&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Hide"]))],null,null)}function I(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),u["\u0275ted"](3,null,["",""])),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef])],null,function(l,n){var e=n.component;l(n,3,0,u["\u0275unv"](n,3,0,u["\u0275nov"](n,4).transform(e.configPreview)))})}function P(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,27,"div",[["class","col-md-9 col-lg-7"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,26,"div",[["class","card m-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,25,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](3,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Start/Stop/Reload Configuration Manager"])),(l()(),u["\u0275eld"](5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](6,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,13,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,12,"div",[["aria-label","..."],["class","btn-group btn-group-sm"],["role","group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](9,16777216,null,null,2,"button",[["class","btn btn-outline-info"],["ngbPopover","Start"],["triggers","mouseenter:mouseleave"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toogle("start")&&u),u},null,null)),u["\u0275did"](10,737280,null,0,c.M,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,c.N,u.NgZone,p.DOCUMENT,u.ChangeDetectorRef,u.ApplicationRef],{ngbPopover:[0,"ngbPopover"],triggers:[1,"triggers"]},null),(l()(),u["\u0275eld"](11,0,null,null,0,"i",[["class","fa fa-play"]],null,null,null,null,null)),(l()(),u["\u0275eld"](12,16777216,null,null,2,"button",[["class","btn btn-outline-info"],["ngbPopover","Stop"],["triggers","mouseenter:mouseleave"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toogle("stop")&&u),u},null,null)),u["\u0275did"](13,737280,null,0,c.M,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,c.N,u.NgZone,p.DOCUMENT,u.ChangeDetectorRef,u.ApplicationRef],{ngbPopover:[0,"ngbPopover"],triggers:[1,"triggers"]},null),(l()(),u["\u0275eld"](14,0,null,null,0,"i",[["class","fa fa-stop"]],null,null,null,null,null)),(l()(),u["\u0275eld"](15,16777216,null,null,2,"button",[["class","btn btn-outline-info"],["ngbPopover","Info"],["triggers","mouseenter:mouseleave"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.getInfo()&&u),u},null,null)),u["\u0275did"](16,737280,null,0,c.M,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,c.N,u.NgZone,p.DOCUMENT,u.ChangeDetectorRef,u.ApplicationRef],{ngbPopover:[0,"ngbPopover"],triggers:[1,"triggers"]},null),(l()(),u["\u0275eld"](17,0,null,null,0,"i",[["class","fa fa-info"]],null,null,null,null,null)),(l()(),u["\u0275eld"](18,16777216,null,null,2,"button",[["class","btn btn-outline-info"],["ngbPopover","Force Start"],["triggers","mouseenter:mouseleave"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toogle("force")&&u),u},null,null)),u["\u0275did"](19,737280,null,0,c.M,[u.ElementRef,u.Renderer2,u.Injector,u.ComponentFactoryResolver,u.ViewContainerRef,c.N,u.NgZone,p.DOCUMENT,u.ChangeDetectorRef,u.ApplicationRef],{ngbPopover:[0,"ngbPopover"],triggers:[1,"triggers"]},null),(l()(),u["\u0275eld"](20,0,null,null,0,"i",[["class","fa fa-rocket"]],null,null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,4,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Current Status"])),(l()(),u["\u0275eld"](26,0,null,null,1,"input",[["class","form-control form-control-sm"],["disabled",""],["type","text"]],[[8,"value",0]],null,null,null,null)),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](28,0,null,null,111,"div",[["class","col-md-9 col-lg-7"]],null,null,null,null,null)),(l()(),u["\u0275eld"](29,0,null,null,110,"div",[["class","card m-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](30,0,null,null,109,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Cron Settings"])),(l()(),u["\u0275eld"](33,0,null,null,106,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,69,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](35,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Configuration Manager Start"])),(l()(),u["\u0275eld"](37,0,null,null,22,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](38,0,null,null,20,"div",[["class","kt-radio-list"]],null,null,null,null,null)),(l()(),u["\u0275eld"](39,0,null,null,9,"label",[["class","kt-radio kt-radio--brand"]],null,null,null,null,null)),(l()(),u["\u0275eld"](40,0,null,null,6,"input",[["name","radio1"],["type","radio"],["value","day"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,41)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,41).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,41)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,41)._compositionEnd(e.target.value)&&t),"change"===n&&(t=!1!==u["\u0275nov"](l,42).onChange()&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,42).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.cm.period=e)&&t),t},null,null)),u["\u0275did"](41,16384,null,0,g.e,[u.Renderer2,u.ElementRef,[2,g.a]],null,null),u["\u0275did"](42,212992,null,0,g.v,[u.Renderer2,u.ElementRef,g.A,u.Injector],{name:[0,"name"],value:[1,"value"]},null),u["\u0275prd"](1024,null,g.n,function(l,n){return[l,n]},[g.e,g.v]),u["\u0275did"](44,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,g.o,null,[g.s]),u["\u0275did"](46,16384,null,0,g.p,[[4,g.o]],null,null),(l()(),u["\u0275ted"](-1,null,[" Every day "])),(l()(),u["\u0275eld"](48,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](49,0,null,null,9,"label",[["class","kt-radio kt-radio--brand"]],null,null,null,null,null)),(l()(),u["\u0275eld"](50,0,null,null,6,"input",[["name","radio1"],["type","radio"],["value","week"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,e){var t=!0,o=l.component;return"input"===n&&(t=!1!==u["\u0275nov"](l,51)._handleInput(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,51).onTouched()&&t),"compositionstart"===n&&(t=!1!==u["\u0275nov"](l,51)._compositionStart()&&t),"compositionend"===n&&(t=!1!==u["\u0275nov"](l,51)._compositionEnd(e.target.value)&&t),"change"===n&&(t=!1!==u["\u0275nov"](l,52).onChange()&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,52).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.cm.period=e)&&t),t},null,null)),u["\u0275did"](51,16384,null,0,g.e,[u.Renderer2,u.ElementRef,[2,g.a]],null,null),u["\u0275did"](52,212992,null,0,g.v,[u.Renderer2,u.ElementRef,g.A,u.Injector],{name:[0,"name"],value:[1,"value"]},null),u["\u0275prd"](1024,null,g.n,function(l,n){return[l,n]},[g.e,g.v]),u["\u0275did"](54,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,g.o,null,[g.s]),u["\u0275did"](56,16384,null,0,g.p,[[4,g.o]],null,null),(l()(),u["\u0275ted"](-1,null,[" Every Week "])),(l()(),u["\u0275eld"](58,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),u["\u0275eld"](59,0,null,null,0,"input",[["name","cm_period_native"],["type","hidden"]],null,null,null,null,null)),(l()(),u["\u0275eld"](60,0,null,null,41,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](61,0,null,null,3,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,2,null,k)),u["\u0275did"](63,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275eld"](65,0,null,null,36,"div",[["class","col-12"]],null,null,null,null,null)),(l()(),u["\u0275eld"](66,0,null,null,35,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](67,0,null,null,33,"select",[["class","form-control form-control-sm"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,68).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,68).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.cm.week=e)&&t),t},null,null)),u["\u0275did"](68,16384,null,0,g.x,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,g.n,function(l){return[l]},[g.x]),u["\u0275did"](70,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{isDisabled:[0,"isDisabled"],model:[1,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,g.o,null,[g.s]),u["\u0275did"](72,16384,null,0,g.p,[[4,g.o]],null,null),(l()(),u["\u0275eld"](73,0,null,null,3,"option",[["value","1"]],null,null,null,null,null)),u["\u0275did"](74,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](75,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Monday"])),(l()(),u["\u0275eld"](77,0,null,null,3,"option",[["value","2"]],null,null,null,null,null)),u["\u0275did"](78,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](79,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Tuesday"])),(l()(),u["\u0275eld"](81,0,null,null,3,"option",[["value","3"]],null,null,null,null,null)),u["\u0275did"](82,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](83,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Wednesday"])),(l()(),u["\u0275eld"](85,0,null,null,3,"option",[["value","4"]],null,null,null,null,null)),u["\u0275did"](86,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](87,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Thursday"])),(l()(),u["\u0275eld"](89,0,null,null,3,"option",[["value","5"]],null,null,null,null,null)),u["\u0275did"](90,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](91,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Friday"])),(l()(),u["\u0275eld"](93,0,null,null,3,"option",[["value","6"]],null,null,null,null,null)),u["\u0275did"](94,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](95,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Saturday"])),(l()(),u["\u0275eld"](97,0,null,null,3,"option",[["value","0"]],null,null,null,null,null)),u["\u0275did"](98,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](99,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["Sunday"])),(l()(),u["\u0275eld"](101,0,null,null,0,"input",[["name","week_native"],["type","hidden"]],null,null,null,null,null)),(l()(),u["\u0275eld"](102,0,null,null,1,"p",[["class","help-block"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["select time when to run configuration manager, time to start collecting data"])),(l()(),u["\u0275eld"](104,0,null,null,35,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),u["\u0275eld"](105,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Git Commit Start Every"])),(l()(),u["\u0275eld"](107,0,null,null,30,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),u["\u0275eld"](108,0,null,null,29,"select",[["class","form-control form-control-sm"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,e){var t=!0,o=l.component;return"change"===n&&(t=!1!==u["\u0275nov"](l,109).onChange(e.target.value)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,109).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.git.period=e)&&t),t},null,null)),u["\u0275did"](109,16384,null,0,g.x,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,g.n,function(l){return[l]},[g.x]),u["\u0275did"](111,671744,null,0,g.s,[[8,null],[8,null],[8,null],[6,g.n]],{model:[0,"model"]},{update:"ngModelChange"}),u["\u0275prd"](2048,null,g.o,null,[g.s]),u["\u0275did"](113,16384,null,0,g.p,[[4,g.o]],null,null),(l()(),u["\u0275eld"](114,0,null,null,3,"option",[["value","10"]],null,null,null,null,null)),u["\u0275did"](115,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](116,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["10 minutes"])),(l()(),u["\u0275eld"](118,0,null,null,3,"option",[["value","20"]],null,null,null,null,null)),u["\u0275did"](119,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](120,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["20 minutes"])),(l()(),u["\u0275eld"](122,0,null,null,3,"option",[["value","30"]],null,null,null,null,null)),u["\u0275did"](123,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](124,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["30 minutes"])),(l()(),u["\u0275eld"](126,0,null,null,3,"option",[["value","40"]],null,null,null,null,null)),u["\u0275did"](127,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](128,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["40 minutes"])),(l()(),u["\u0275eld"](130,0,null,null,3,"option",[["value","50"]],null,null,null,null,null)),u["\u0275did"](131,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](132,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["50 minutes"])),(l()(),u["\u0275eld"](134,0,null,null,3,"option",[["value","60"]],null,null,null,null,null)),u["\u0275did"](135,147456,null,0,g.t,[u.ElementRef,u.Renderer2,[2,g.x]],{value:[0,"value"]},null),u["\u0275did"](136,147456,null,0,g.C,[u.ElementRef,u.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),u["\u0275ted"](-1,null,["60 minutes"])),(l()(),u["\u0275eld"](138,0,null,null,1,"p",[["class","help-block"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["select time when configuration manager will check any changes inside of local files (configurations)"])),(l()(),u["\u0275eld"](140,0,null,null,8,"div",[["class","col-xs-11 offset-sm-1 offset-md-1 offset-lg-1"]],null,null,null,null,null)),(l()(),u["\u0275eld"](141,0,null,null,6,"button",[["class","btn btn-warning btn-elevate btn-sm"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.save()&&u),u},null,null)),u["\u0275prd"](512,null,p["\u0275NgClassImpl"],p["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](143,278528,null,0,p.NgClass,[p["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef]),u["\u0275pod"](145,{"kt-spinner kt-spinner--right kt-spinner--sm kt-spinner--light":0}),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275ted"](-1,null,["Save"])),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275eld"](149,0,null,null,13,"div",[["class","col-md-9 col-lg-7"]],null,null,null,null,null)),(l()(),u["\u0275eld"](150,0,null,null,12,"div",[["class","card m-3"]],null,null,null,null,null)),(l()(),u["\u0275eld"](151,0,null,null,11,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),u["\u0275eld"](152,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Full Configuration Preview"])),(l()(),u["\u0275eld"](154,0,null,null,1,"button",[["class","btn btn-sm btn-warning"],["type","button"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.showConfig()&&u),u},null,null)),(l()(),u["\u0275ted"](-1,null,["Show"])),(l()(),u["\u0275ted"](-1,null,["\xa0 "])),(l()(),u["\u0275and"](16777216,null,null,2,null,E)),u["\u0275did"](158,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef]),(l()(),u["\u0275and"](16777216,null,null,2,null,I)),u["\u0275did"](161,16384,null,0,p.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["\u0275pid"](131072,p.AsyncPipe,[u.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,10,0,"Start","mouseenter:mouseleave"),l(n,13,0,"Stop","mouseenter:mouseleave"),l(n,16,0,"Info","mouseenter:mouseleave"),l(n,19,0,"Force Start","mouseenter:mouseleave"),l(n,42,0,"radio1","day"),l(n,44,0,"radio1",e.cm.period),l(n,52,0,"radio1","week"),l(n,54,0,"radio1",e.cm.period),l(n,63,0,u["\u0275unv"](n,63,0,u["\u0275nov"](n,64).transform(e.timeReady))),l(n,70,0,"day"==e.cm.period,e.cm.week),l(n,74,0,"1"),l(n,75,0,"1"),l(n,78,0,"2"),l(n,79,0,"2"),l(n,82,0,"3"),l(n,83,0,"3"),l(n,86,0,"4"),l(n,87,0,"4"),l(n,90,0,"5"),l(n,91,0,"5"),l(n,94,0,"6"),l(n,95,0,"6"),l(n,98,0,"0"),l(n,99,0,"0"),l(n,111,0,e.git.period),l(n,115,0,"10"),l(n,116,0,"10"),l(n,119,0,"20"),l(n,120,0,"20"),l(n,123,0,"30"),l(n,124,0,"30"),l(n,127,0,"40"),l(n,128,0,"40"),l(n,131,0,"50"),l(n,132,0,"50"),l(n,135,0,"60"),l(n,136,0,"60");var t=l(n,145,0,u["\u0275unv"](n,143,1,u["\u0275nov"](n,144).transform(e.loadingForm)));l(n,143,0,"btn btn-warning btn-elevate btn-sm",t),l(n,158,0,u["\u0275unv"](n,158,0,u["\u0275nov"](n,159).transform(e.configPreview))),l(n,161,0,u["\u0275unv"](n,161,0,u["\u0275nov"](n,162).transform(e.configPreview)))},function(l,n){var e=n.component;l(n,26,0,u["\u0275unv"](n,26,0,u["\u0275nov"](n,27).transform(e.currentStatus))),l(n,40,0,u["\u0275nov"](n,46).ngClassUntouched,u["\u0275nov"](n,46).ngClassTouched,u["\u0275nov"](n,46).ngClassPristine,u["\u0275nov"](n,46).ngClassDirty,u["\u0275nov"](n,46).ngClassValid,u["\u0275nov"](n,46).ngClassInvalid,u["\u0275nov"](n,46).ngClassPending),l(n,50,0,u["\u0275nov"](n,56).ngClassUntouched,u["\u0275nov"](n,56).ngClassTouched,u["\u0275nov"](n,56).ngClassPristine,u["\u0275nov"](n,56).ngClassDirty,u["\u0275nov"](n,56).ngClassValid,u["\u0275nov"](n,56).ngClassInvalid,u["\u0275nov"](n,56).ngClassPending),l(n,67,0,u["\u0275nov"](n,72).ngClassUntouched,u["\u0275nov"](n,72).ngClassTouched,u["\u0275nov"](n,72).ngClassPristine,u["\u0275nov"](n,72).ngClassDirty,u["\u0275nov"](n,72).ngClassValid,u["\u0275nov"](n,72).ngClassInvalid,u["\u0275nov"](n,72).ngClassPending),l(n,108,0,u["\u0275nov"](n,113).ngClassUntouched,u["\u0275nov"](n,113).ngClassTouched,u["\u0275nov"](n,113).ngClassPristine,u["\u0275nov"](n,113).ngClassDirty,u["\u0275nov"](n,113).ngClassValid,u["\u0275nov"](n,113).ngClassInvalid,u["\u0275nov"](n,113).ngClassPending),l(n,141,0,u["\u0275unv"](n,141,0,u["\u0275nov"](n,146).transform(e.loadingForm)))})}function M(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"kt-cm-main",[],null,null,null,P,w)),u["\u0275did"](1,114688,null,0,R,[b,y.j],null,null)],function(l,n){l(n,1,0)},null)}var S=u["\u0275ccf"]("kt-cm-main",R,M,{},{},[]),x=e("ZYCi");e.d(n,"CmSettingsModuleNgFactory",function(){return D});var D=u["\u0275cmf"](d,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,a.b,a.p,a.q,a.m,a.n,a.o,s.a,S]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,p.NgLocalization,p.NgLocaleLocalization,[u.LOCALE_ID,[2,p["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,g.A,g.A,[]),u["\u0275mpd"](4608,c.D,c.D,[u.ComponentFactoryResolver,u.Injector,c.xb,c.E]),u["\u0275mpd"](1073742336,p.CommonModule,p.CommonModule,[]),u["\u0275mpd"](1073742336,g.z,g.z,[]),u["\u0275mpd"](1073742336,g.k,g.k,[]),u["\u0275mpd"](1073742336,c.c,c.c,[]),u["\u0275mpd"](1073742336,c.g,c.g,[]),u["\u0275mpd"](1073742336,c.h,c.h,[]),u["\u0275mpd"](1073742336,c.l,c.l,[]),u["\u0275mpd"](1073742336,c.n,c.n,[]),u["\u0275mpd"](1073742336,c.t,c.t,[]),u["\u0275mpd"](1073742336,c.z,c.z,[]),u["\u0275mpd"](1073742336,c.F,c.F,[]),u["\u0275mpd"](1073742336,c.J,c.J,[]),u["\u0275mpd"](1073742336,c.O,c.O,[]),u["\u0275mpd"](1073742336,c.R,c.R,[]),u["\u0275mpd"](1073742336,c.U,c.U,[]),u["\u0275mpd"](1073742336,c.Z,c.Z,[]),u["\u0275mpd"](1073742336,c.db,c.db,[]),u["\u0275mpd"](1073742336,c.gb,c.gb,[]),u["\u0275mpd"](1073742336,c.jb,c.jb,[]),u["\u0275mpd"](1073742336,c.G,c.G,[]),u["\u0275mpd"](1073742336,x.t,x.t,[[2,x.z],[2,x.q]]),u["\u0275mpd"](1073742336,d,d,[]),u["\u0275mpd"](1024,x.m,function(){return[[{path:"queries",loadChildren:t},{path:"devices",loadChildren:o},{path:"models",loadChildren:i},{path:"credentials",loadChildren:r},{path:"main",component:R}]]},[])])})}}]);