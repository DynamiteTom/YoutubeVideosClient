!function(e){function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n){e.exports=require("@angular/platform-server")},function(e,n){e.exports=require("@angular/core")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(3),t(4);var l=t(0),o=t(1),r=t(5),u=t(6),i=t(7),a=t(8);o.enableProdMode();var p=process.env.PORT||4747,s=i.join(process.cwd(),"dist"),d=r();d.use(u());var c=a.readFileSync(i.join(s,"browser","index.html")).toString(),m=t(9).AppServerModuleNgFactory;d.engine("html",function(e,n,t){var o={document:c,url:n.req.url};l.renderModuleFactory(m,o).then(function(e){return t(null,e)})}),d.set("view engine","html"),d.set("views","src"),d.get("*.*",r.static(i.join(s,"browser"))),d.get("*",function(e,n){n.render("index",{req:e})}),d.listen(p,function(){console.log("listening on http://localhost:"+p+"!")})},function(e,n){e.exports=require("reflect-metadata")},function(e,n){e.exports=require("zone.js/dist/zone-node")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("compression")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("fs")},function(e,n,t){!function(e,n){for(var t in n)e[t]=n[t]}(n,function(e){function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}({"../../../../../src/app/app.component.css.shim.ngstyle.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=[""];n.styles=l},"../../../../../src/app/app.component.ngfactory.js":function(e,n,t){"use strict";function l(e){return u.ɵvid(0,[(e()(),u.ɵted(-1,null,["\n"])),(e()(),u.ɵeld(1,0,null,null,4,"div",[["style","text-align:center"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n  "])),(e()(),u.ɵeld(3,0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),u.ɵted(4,null,["\n    Beyond Test Dec 2017 ","!\n  "])),(e()(),u.ɵted(-1,null,["\n"])),(e()(),u.ɵted(-1,null,["\n"])),(e()(),u.ɵted(-1,null,["\n"])),(e()(),u.ɵeld(8,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.ɵdid(9,212992,null,0,i.RouterOutlet,[i.ChildrenOutletContexts,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null),(e()(),u.ɵted(-1,null,["\n"]))],function(e,n){e(n,9,0)},function(e,n){e(n,4,0,n.component.title)})}function o(e){return u.ɵvid(0,[(e()(),u.ɵeld(0,0,null,null,1,"app-root",[],null,null,null,l,s)),u.ɵdid(1,49152,null,0,a.AppComponent,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var r=t("../../../../../src/app/app.component.css.shim.ngstyle.js"),u=t("@angular/core"),i=t("@angular/router"),a=t("../../../../../src/app/app.component.ts"),p=[r.styles],s=u.ɵcrt({encapsulation:0,styles:p,data:{}});n.RenderType_AppComponent=s,n.View_AppComponent_0=l,n.View_AppComponent_Host_0=o;var d=u.ɵccf("app-root",a.AppComponent,o,{},{},[]);n.AppComponentNgFactory=d},"../../../../../src/app/app.component.ts":function(e,n,t){"use strict";var l=this&&this.__decorate||function(e,n,t,l){var o,r=arguments.length,u=r<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,l);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(r<3?o(u):r>3?o(n,t,u):o(n,t))||u);return r>3&&u&&Object.defineProperty(n,t,u),u},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var r=t("@angular/core"),u=function(){function e(){this.title="app"}return e=l([r.Component({selector:"app-root",templateUrl:"./app.component.html",styleUrls:["./app.component.css"]}),o("design:paramtypes",[])],e)}();n.AppComponent=u},"../../../../../src/app/app.module.ts":function(e,n,t){"use strict";var l=this&&this.__decorate||function(e,n,t,l){var o,r=arguments.length,u=r<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,l);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(r<3?o(u):r>3?o(n,t,u):o(n,t))||u);return r>3&&u&&Object.defineProperty(n,t,u),u};Object.defineProperty(n,"__esModule",{value:!0});var o=t("@angular/platform-browser"),r=t("@angular/core"),u=t("@angular/common/http"),i=t("@angular/flex-layout"),a=t("@angular/material/form-field"),p=t("@angular/material/input"),s=t("../../../../../src/app/app.component.ts"),d=t("@angular/platform-browser/animations"),c=t("../../../../../src/app/you-tube.service.ts"),m=t("../../../../../src/app/you-tube/you-tube.component.ts"),f=t("../../../../../src/app/video-detail/video-detail.component.ts"),g=t("../../../../../src/app/router.ts"),v=function(){function e(){}return e=l([r.NgModule({declarations:[s.AppComponent,m.YouTubeComponent,f.VideoDetailComponent],imports:[o.BrowserModule.withServerTransition({appId:"ng-cli-universal"}),u.HttpClientModule,i.FlexLayoutModule,d.BrowserAnimationsModule,o.BrowserTransferStateModule,a.MatFormFieldModule,p.MatInputModule,g.routing],exports:[a.MatFormFieldModule,p.MatInputModule],providers:[c.YouTubeService],bootstrap:[s.AppComponent]})],e)}();n.AppModule=v},"../../../../../src/app/app.server.module.ngfactory.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=t("@angular/core"),o=t("../../../../../src/app/app.server.module.ts"),r=t("../../../../../src/app/app.component.ts"),u=t("../../../../../src/app/you-tube/you-tube.component.ngfactory.js"),i=t("../../../../../src/app/video-detail/video-detail.component.ngfactory.js"),a=t("../../../../../src/app/app.component.ngfactory.js"),p=t("@angular/common"),s=t("@angular/platform-browser"),d=t("@angular/platform-server"),c=t("@angular/animations/browser"),m=t("@angular/platform-browser/animations"),f=t("@angular/common/http"),g=t("@angular/flex-layout"),v=t("@angular/animations"),y=t("@angular/cdk/platform"),x=t("@angular/material/core"),b=t("@angular/router"),h=t("../../../../../src/app/you-tube.service.ts"),M=t("@angular/http"),R=t("@angular/material/form-field"),C=t("@angular/material/input"),_=t("../../../../../src/app/you-tube/you-tube.component.ts"),O=t("../../../../../src/app/video-detail/video-detail.component.ts"),w=t("../../../../../src/app/app.module.ts"),P=l.ɵcmf(o.AppServerModule,[r.AppComponent],function(e){return l.ɵmod([l.ɵmpd(512,l.ComponentFactoryResolver,l.ɵCodegenComponentFactoryResolver,[[8,[u.YouTubeComponentNgFactory,i.VideoDetailComponentNgFactory,a.AppComponentNgFactory]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l.ɵmpd(5120,l.LOCALE_ID,l.ɵm,[[3,l.LOCALE_ID]]),l.ɵmpd(4608,p.NgLocalization,p.NgLocaleLocalization,[l.LOCALE_ID,[2,p.ɵa]]),l.ɵmpd(5120,l.IterableDiffers,l.ɵk,[]),l.ɵmpd(5120,l.KeyValueDiffers,l.ɵl,[]),l.ɵmpd(4608,s.DomSanitizer,s.ɵe,[p.DOCUMENT]),l.ɵmpd(6144,l.Sanitizer,null,[s.DomSanitizer]),l.ɵmpd(4608,s.HAMMER_GESTURE_CONFIG,s.HammerGestureConfig,[]),l.ɵmpd(5120,s.EVENT_MANAGER_PLUGINS,function(e,n,t,l,o){return[new s.ɵDomEventsPlugin(e,n),new s.ɵKeyEventsPlugin(t),new s.ɵHammerGesturesPlugin(l,o)]},[p.DOCUMENT,l.NgZone,p.DOCUMENT,p.DOCUMENT,s.HAMMER_GESTURE_CONFIG]),l.ɵmpd(4608,s.EventManager,s.EventManager,[s.EVENT_MANAGER_PLUGINS,l.NgZone]),l.ɵmpd(135680,s.ɵDomSharedStylesHost,s.ɵDomSharedStylesHost,[p.DOCUMENT]),l.ɵmpd(4608,s.ɵDomRendererFactory2,s.ɵDomRendererFactory2,[s.EventManager,s.ɵDomSharedStylesHost]),l.ɵmpd(4608,d.ɵc,d.ɵc,[s.DOCUMENT,[2,s.ɵTRANSITION_ID]]),l.ɵmpd(6144,s.ɵSharedStylesHost,null,[d.ɵc]),l.ɵmpd(4608,d.ɵServerRendererFactory2,d.ɵServerRendererFactory2,[l.NgZone,s.DOCUMENT,s.ɵSharedStylesHost]),l.ɵmpd(4608,c.AnimationDriver,c.ɵNoopAnimationDriver,[]),l.ɵmpd(5120,c.ɵAnimationStyleNormalizer,m.ɵd,[]),l.ɵmpd(4608,c.ɵAnimationEngine,m.ɵb,[c.AnimationDriver,c.ɵAnimationStyleNormalizer]),l.ɵmpd(5120,l.RendererFactory2,d.ɵa,[d.ɵServerRendererFactory2,c.ɵAnimationEngine,l.NgZone]),l.ɵmpd(4352,l.Testability,null,[]),l.ɵmpd(4608,s.Meta,s.Meta,[p.DOCUMENT]),l.ɵmpd(4608,s.Title,s.Title,[p.DOCUMENT]),l.ɵmpd(4608,f.HttpXsrfTokenExtractor,f.ɵg,[p.DOCUMENT,l.PLATFORM_ID,f.ɵe]),l.ɵmpd(4608,f.ɵh,f.ɵh,[f.HttpXsrfTokenExtractor,f.ɵf]),l.ɵmpd(5120,f.HTTP_INTERCEPTORS,function(e){return[e]},[f.ɵh]),l.ɵmpd(4608,f.XhrFactory,d.ɵd,[]),l.ɵmpd(4608,f.HttpXhrBackend,f.HttpXhrBackend,[f.XhrFactory]),l.ɵmpd(6144,f.HttpBackend,null,[f.HttpXhrBackend]),l.ɵmpd(5120,f.HttpHandler,d.ɵg,[f.HttpBackend,[2,f.HTTP_INTERCEPTORS]]),l.ɵmpd(4608,f.HttpClient,f.HttpClient,[f.HttpHandler]),l.ɵmpd(4608,f.ɵd,f.ɵd,[]),l.ɵmpd(5120,g.BREAKPOINTS,g.DEFAULT_BREAKPOINTS_PROVIDER_FACTORY,[]),l.ɵmpd(4608,g.BreakPointRegistry,g.BreakPointRegistry,[g.BREAKPOINTS]),l.ɵmpd(4608,g.MatchMedia,g.MatchMedia,[l.NgZone,p.DOCUMENT]),l.ɵmpd(5120,g.MediaMonitor,g.MEDIA_MONITOR_PROVIDER_FACTORY,[[3,g.MediaMonitor],g.BreakPointRegistry,g.MatchMedia]),l.ɵmpd(5120,g.ObservableMedia,g.OBSERVABLE_MEDIA_PROVIDER_FACTORY,[[3,g.ObservableMedia],g.MatchMedia,g.BreakPointRegistry]),l.ɵmpd(4608,v.AnimationBuilder,m.ɵBrowserAnimationBuilder,[l.RendererFactory2,s.DOCUMENT]),l.ɵmpd(4608,s.TransferState,s.TransferState,[]),l.ɵmpd(4608,y.Platform,y.Platform,[]),l.ɵmpd(4608,x.ErrorStateMatcher,x.ErrorStateMatcher,[]),l.ɵmpd(5120,b.ActivatedRoute,b.ɵf,[b.Router]),l.ɵmpd(4608,b.NoPreloading,b.NoPreloading,[]),l.ɵmpd(6144,b.PreloadingStrategy,null,[b.NoPreloading]),l.ɵmpd(135680,b.RouterPreloader,b.RouterPreloader,[b.Router,l.NgModuleFactoryLoader,l.Compiler,l.Injector,b.PreloadingStrategy]),l.ɵmpd(4608,b.PreloadAllModules,b.PreloadAllModules,[]),l.ɵmpd(5120,b.ROUTER_INITIALIZER,b.ɵi,[b.ɵg]),l.ɵmpd(5120,l.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[b.ROUTER_INITIALIZER]),l.ɵmpd(4608,h.YouTubeService,h.YouTubeService,[f.HttpClient,s.TransferState]),l.ɵmpd(4608,M.BrowserXhr,d.ɵd,[]),l.ɵmpd(4608,M.ResponseOptions,M.BaseResponseOptions,[]),l.ɵmpd(4608,M.XSRFStrategy,d.ɵe,[]),l.ɵmpd(4608,M.XHRBackend,M.XHRBackend,[M.BrowserXhr,M.ResponseOptions,M.XSRFStrategy]),l.ɵmpd(4608,M.RequestOptions,M.BaseRequestOptions,[]),l.ɵmpd(5120,M.Http,d.ɵf,[M.XHRBackend,M.RequestOptions]),l.ɵmpd(5120,d.BEFORE_APP_SERIALIZED,function(e,n,t){return[d.ɵb(e,n,t)]},[s.DOCUMENT,l.APP_ID,s.TransferState]),l.ɵmpd(512,p.CommonModule,p.CommonModule,[]),l.ɵmpd(1024,l.ErrorHandler,s.ɵa,[]),l.ɵmpd(1024,l.NgProbeToken,function(){return[b.ɵb()]},[]),l.ɵmpd(256,l.APP_ID,"ng-cli-universal",[]),l.ɵmpd(2048,s.ɵTRANSITION_ID,null,[l.APP_ID]),l.ɵmpd(512,b.ɵg,b.ɵg,[l.Injector]),l.ɵmpd(1024,l.APP_INITIALIZER,function(e,n,t,l,o){return[s.ɵh(e),s.ɵf(n,t,l),b.ɵh(o)]},[[2,l.NgProbeToken],s.ɵTRANSITION_ID,p.DOCUMENT,l.Injector,b.ɵg]),l.ɵmpd(512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l.ɵmpd(131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l.ɵConsole,l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l.ɵmpd(512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l.ɵmpd(512,s.BrowserModule,s.BrowserModule,[[3,s.BrowserModule]]),l.ɵmpd(512,f.HttpClientXsrfModule,f.HttpClientXsrfModule,[]),l.ɵmpd(512,f.HttpClientModule,f.HttpClientModule,[]),l.ɵmpd(512,g.MediaQueriesModule,g.MediaQueriesModule,[]),l.ɵmpd(512,g.FlexLayoutModule,g.FlexLayoutModule,[]),l.ɵmpd(512,m.BrowserAnimationsModule,m.BrowserAnimationsModule,[]),l.ɵmpd(512,s.BrowserTransferStateModule,s.BrowserTransferStateModule,[]),l.ɵmpd(512,y.PlatformModule,y.PlatformModule,[]),l.ɵmpd(512,R.MatFormFieldModule,R.MatFormFieldModule,[]),l.ɵmpd(512,C.MatInputModule,C.MatInputModule,[]),l.ɵmpd(1024,b.ɵa,b.ɵd,[[3,b.Router]]),l.ɵmpd(512,b.UrlSerializer,b.DefaultUrlSerializer,[]),l.ɵmpd(512,b.ChildrenOutletContexts,b.ChildrenOutletContexts,[]),l.ɵmpd(256,b.ROUTER_CONFIGURATION,{},[]),l.ɵmpd(1024,p.LocationStrategy,b.ɵc,[p.PlatformLocation,[2,p.APP_BASE_HREF],b.ROUTER_CONFIGURATION]),l.ɵmpd(512,p.Location,p.Location,[p.LocationStrategy]),l.ɵmpd(512,l.Compiler,l.Compiler,[]),l.ɵmpd(512,l.NgModuleFactoryLoader,l.SystemJsNgModuleLoader,[l.Compiler,[2,l.SystemJsNgModuleLoaderConfig]]),l.ɵmpd(1024,b.ROUTES,function(){return[[{path:"",pathMatch:"full",redirectTo:"youtube-videos"},{path:"youtube-videos",component:_.YouTubeComponent},{path:"video-detail",component:O.VideoDetailComponent},{path:"video-detail/:title/:pubDate/:descn/:vidid/:pos",component:O.VideoDetailComponent}]]},[]),l.ɵmpd(1024,b.Router,b.ɵe,[l.ApplicationRef,b.UrlSerializer,b.ChildrenOutletContexts,p.Location,l.Injector,l.NgModuleFactoryLoader,l.Compiler,b.ROUTES,b.ROUTER_CONFIGURATION,[2,b.UrlHandlingStrategy],[2,b.RouteReuseStrategy]]),l.ɵmpd(512,b.RouterModule,b.RouterModule,[[2,b.ɵa],[2,b.Router]]),l.ɵmpd(512,w.AppModule,w.AppModule,[]),l.ɵmpd(512,M.HttpModule,M.HttpModule,[]),l.ɵmpd(512,m.NoopAnimationsModule,m.NoopAnimationsModule,[]),l.ɵmpd(512,d.ServerModule,d.ServerModule,[]),l.ɵmpd(512,d.ServerTransferStateModule,d.ServerTransferStateModule,[]),l.ɵmpd(512,o.AppServerModule,o.AppServerModule,[]),l.ɵmpd(256,f.ɵe,"XSRF-TOKEN",[]),l.ɵmpd(256,f.ɵf,"X-XSRF-TOKEN",[])])});n.AppServerModuleNgFactory=P},"../../../../../src/app/app.server.module.ts":function(e,n,t){"use strict";var l=this&&this.__decorate||function(e,n,t,l){var o,r=arguments.length,u=r<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,l);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(r<3?o(u):r>3?o(n,t,u):o(n,t))||u);return r>3&&u&&Object.defineProperty(n,t,u),u};Object.defineProperty(n,"__esModule",{value:!0});var o=t("@angular/core"),r=t("@angular/platform-server"),u=t("../../../../../src/app/app.module.ts"),i=t("../../../../../src/app/app.component.ts"),a=function(){function e(){}return e=l([o.NgModule({imports:[u.AppModule,r.ServerModule,r.ServerTransferStateModule],bootstrap:[i.AppComponent]})],e)}();n.AppServerModule=a},"../../../../../src/app/router.ts":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=t("@angular/router"),o=t("../../../../../src/app/you-tube/you-tube.component.ts"),r=t("../../../../../src/app/video-detail/video-detail.component.ts");n.routes=[{path:"",pathMatch:"full",redirectTo:"youtube-videos"},{path:"youtube-videos",component:o.YouTubeComponent},{path:"video-detail",component:r.VideoDetailComponent},{path:"video-detail/:title/:pubDate/:descn/:vidid/:pos",component:r.VideoDetailComponent}],n.routing=l.RouterModule.forRoot(n.routes)},"../../../../../src/app/video-detail/video-detail.component.css.shim.ngstyle.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=["[_nghost-%COMP%]{\r\n    display: block;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient:vertical;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:column;\r\n            flex-direction:column;\r\n    -webkit-box-flex: flex-grow;\r\n        -ms-flex: flex-grow;\r\n            flex: flex-grow;\r\n    height:450px;\r\n    background-color:cyan;\r\n    width: 760px;\r\n    position:relative;\r\n    margin: auto;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n}\r\n\r\n.dmy[_ngcontent-%COMP%]{\r\n    font-size:xx-small;\r\n    color:gray;\r\n    width:200px;\r\n    position:relative;\r\n    top:5px;\r\n    \r\n}\r\n\r\n.musicPlayBck[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top: 10px;\r\n    \r\n    z-index:10;\r\n}\r\n.video[_ngcontent-%COMP%]{\r\n    z-index: 15;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -ms-flex-line-pack:justify;\r\n        align-content:space-between;\r\n    position:absolute;\r\n    left:44px; \r\n    top:0px;\r\n    height:50px;\r\n    -webkit-box-orient:horizontal;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:row;\r\n            flex-direction:row;\r\n    width:720px;\r\n    -ms-flex-flow:row wrap;\r\n        flex-flow:row wrap; \r\n}\r\n\r\n.video-title[_ngcontent-%COMP%]{\r\n    color: turquoise;\r\n    background-color:transparent;\r\n    font-size:x-small;\r\n    font-weight:bold;\r\n    position:relative;\r\n    top: -475px;\r\n    height:50px;\r\n    left: 502px;\r\n    width: 150px;\r\n}\r\n\r\n.videoSuround[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 500px;\r\n    height: 100px;\r\n    top:200px;\r\n    left: 500px;\r\n}\r\n\r\n.actualVideo[_ngcontent-%COMP%]{\r\n    z-index: 20;\r\n    position:absolute;\r\n    border:transparent;\r\n    border-top:transparent;\r\n    top: 37px;\r\n    z-index : 50;\r\n    width:443px;\r\n    left:43px;\r\n    height: 352px;\r\n}\r\n\r\n.MusicLogo[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    width: 183px;\r\n    height: 44px;\r\n    left: 44px;\r\n    top: 65px;\r\n}\r\n\r\n.MusicHeader[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    width: 140px;\r\n    height: 44px;\r\n    left: 3 4px;\r\n    top: 90px;\r\n}\r\n.descn[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-size:xx-small;\r\n    left:0px;\r\n    top:15px;\r\n    text-align:left;\r\n    width:210px;\r\n    background-color:transparent;\r\n    border: transparent;\r\n    display:block;\r\n    color: darkgray;\r\n    min-height:10px;\r\n}\r\n\r\n.backToList[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    font-size:xx-small;\r\n    color: turquoise;\r\n    background-color:transparent;\r\n    top: 30px;\r\n    left:0px;\r\n}"];n.styles=l},"../../../../../src/app/video-detail/video-detail.component.ngfactory.js":function(e,n,t){"use strict";function l(e){return u.ɵvid(0,[u.ɵpid(0,i.DatePipe,[u.LOCALE_ID]),(e()(),u.ɵeld(1,0,null,null,36,"div",[["class","container"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵeld(3,0,null,null,3,"div",[["class","MusicHeader"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n            "])),(e()(),u.ɵeld(5,0,null,null,0,"img",[["src","../../assets/IMAGES/header_bg.jpg"],["width","760px"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["                \n    "])),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵeld(8,0,null,null,3,"div",[],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n            "])),(e()(),u.ɵeld(10,0,null,null,0,"img",[["class","MusicLogo"],["src","../../assets/IMAGES/MusicPlay_logo.png"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵted(-1,null,["\n    \n    "])),(e()(),u.ɵeld(13,0,null,null,0,"img",[["src","../../assets/IMAGES/PlayingVideoBgd.jpg"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵted(-1,null,["     \n    "])),(e()(),u.ɵeld(16,0,null,null,17,"div",[["class","video-title"]],null,null,null,null,null)),(e()(),u.ɵted(17,null,[" \n        "," \n        "])),(e()(),u.ɵeld(18,0,null,null,0,"br",[],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n        "])),(e()(),u.ɵeld(20,0,null,null,2,"span",[["class","dmy"]],null,null,null,null,null)),(e()(),u.ɵted(21,null,["published on ",""])),u.ɵppd(22,2),(e()(),u.ɵted(-1,null,["\n        "])),(e()(),u.ɵeld(24,0,null,null,1,"div",[["class","descn"],["placeholder",""],["readonly",""]],null,null,null,null,null)),(e()(),u.ɵted(25,null,["\n            ","         \n        "])),(e()(),u.ɵted(-1,null,["                  \n        "])),(e()(),u.ɵeld(27,0,null,null,5,"a",[["class","backToList"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var l=!0;if("click"===n){l=!1!==u.ɵnov(e,28).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l}return l},null,null)),u.ɵdid(28,671744,null,0,a.RouterLinkWithHref,[a.Router,a.ActivatedRoute,i.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.ɵpad(29,1),(e()(),u.ɵted(-1,null,["\n          "])),(e()(),u.ɵeld(31,0,null,null,0,"img",[["src","../../assets/IMAGES/back_arrow.png"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["   Back to List\n        "])),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵeld(35,0,null,null,1,"iframe",[["class","actualVideo"],["id","dynFrame"],["src","https://www.youtube.com/embed/X0qwQqwKLlM"]],null,null,null,null,null)),(e()(),u.ɵted(-1,null,["\n    "])),(e()(),u.ɵted(-1,null,[" \n  "])),(e()(),u.ɵted(-1,null,["\n  "])),(e()(),u.ɵeld(39,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.ɵdid(40,212992,null,0,a.RouterOutlet,[a.ChildrenOutletContexts,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null),(e()(),u.ɵted(-1,null,["   "]))],function(e,n){e(n,28,0,e(n,29,0,"/youtube-videos")),e(n,40,0)},function(e,n){var t=n.component;e(n,17,0,t.vidTitle),e(n,21,0,u.ɵunv(n,21,0,e(n,22,0,u.ɵnov(n,0),t.vidPubDate,"MMM dd, yyyy"))),e(n,25,0,t.vidDescn),e(n,27,0,u.ɵnov(n,28).target,u.ɵnov(n,28).href)})}function o(e){return u.ɵvid(0,[(e()(),u.ɵeld(0,0,null,null,1,"app-video-detail",[],null,null,null,l,d)),u.ɵdid(1,114688,null,0,p.VideoDetailComponent,[a.ActivatedRoute,u.ElementRef],null,null)],function(e,n){e(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var r=t("../../../../../src/app/video-detail/video-detail.component.css.shim.ngstyle.js"),u=t("@angular/core"),i=t("@angular/common"),a=t("@angular/router"),p=t("../../../../../src/app/video-detail/video-detail.component.ts"),s=[r.styles],d=u.ɵcrt({encapsulation:0,styles:s,data:{}});n.RenderType_VideoDetailComponent=d,n.View_VideoDetailComponent_0=l,n.View_VideoDetailComponent_Host_0=o;var c=u.ɵccf("app-video-detail",p.VideoDetailComponent,o,{},{},[]);n.VideoDetailComponentNgFactory=c},"../../../../../src/app/video-detail/video-detail.component.ts":function(e,n,t){"use strict";var l=this&&this.__decorate||function(e,n,t,l){var o,r=arguments.length,u=r<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,l);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(r<3?o(u):r>3?o(n,t,u):o(n,t))||u);return r>3&&u&&Object.defineProperty(n,t,u),u},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var r=t("@angular/core"),u=t("@angular/router"),i=function(){function e(e,n){var t=this;this.route=e,this.el=n,this.vidId="https://www.youtube.com/embed/",this.vidId2="https://www.youtube.com/embed/X0qwQqwKL",console.log("VideoDetail Constructor"),this.route.params.subscribe(function(e){t.vidTitle=e.title,t.vidPubDate=e.pubDate,t.vidDescn=e.descn,t.vidId+=e.vidid,t.posn=e.pos,console.log("vidId is "+t.vidId+" and posn is "+t.posn)})}return e.prototype.ngOnInit=function(){this.el.nativeElement.querySelector("iframe#dynFrame").src=this.vidId},e=l([r.Component({selector:"app-video-detail",templateUrl:"./video-detail.component.html",styleUrls:["./video-detail.component.css"]}),o("design:paramtypes",[u.ActivatedRoute,r.ElementRef])],e)}();n.VideoDetailComponent=i},"../../../../../src/app/you-tube.service.ts":function(e,n,t){"use strict";var l=this&&this.__decorate||function(e,n,t,l){var o,r=arguments.length,u=r<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,l);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(r<3?o(u):r>3?o(n,t,u):o(n,t))||u);return r>3&&u&&Object.defineProperty(n,t,u),u},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var r=t("@angular/core"),u=t("@angular/common/http"),i=t("@angular/platform-browser"),a=i.makeStateKey("videos"),p=function(){function e(e,n){this.http=e,this.state=n,this.videos=[],this.youtubePath="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw",this.videos=this.state.get(a,null)}return e.prototype.getVideosStream=function(){return this.http.get(this.youtubePath)},e.prototype.getVideos=function(){var e=this;return new Promise(function(n){e.getVideosStream().subscribe(function(t){console.log("In YouTubeService ",t.items),e.videos=t.items,e.state.set(a,t.items),n(t.items)},function(){n(null)})})},e=l([r.Injectable(),o("design:paramtypes",[u.HttpClient,i.TransferState])],e)}();n.YouTubeService=p},"../../../../../src/app/you-tube/you-tube.component.css.shim.ngstyle.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=["[_nghost-%COMP%]{\r\n    display: block;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient:vertical;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:column;\r\n            flex-direction:column;\r\n    -webkit-box-flex: flex-grow;\r\n        -ms-flex: flex-grow;\r\n            flex: flex-grow;\r\n    background-color:cyan;\r\n    width: 760px;\r\n    position:relative;\r\n    margin: auto;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n}\r\n\r\n.musicPlay[_ngcontent-%COMP%]{\r\n    position:absolute;\r\n    top: 10px;\r\n    \r\n    z-index:10;\r\n}\r\n.video[_ngcontent-%COMP%]{\r\n    z-index: 15;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -ms-flex-line-pack:justify;\r\n        align-content:space-between;\r\n    position:absolute;\r\n    left:44px; \r\n    top:0px;\r\n    height:50px;\r\n    -webkit-box-orient:horizontal;\r\n    -webkit-box-direction:normal;\r\n        -ms-flex-direction:row;\r\n            flex-direction:row;\r\n    width:720px;\r\n    -ms-flex-flow:row wrap;\r\n        flex-flow:row wrap; \r\n}\r\n\r\n.videoCont[_ngcontent-%COMP%]{\r\n    position:ralative;\r\n    width:228px;\r\n    top:0px;\r\n    left:60px;\r\n    height:235px;       \r\n}\r\n\r\n.dmy[_ngcontent-%COMP%]{\r\n    font-size:xx-small;\r\n    color:gray;\r\n    width:200px;\r\n    \r\n}\r\n\r\n.video-title[_ngcontent-%COMP%]{\r\n    color: turquoise;\r\n    background-color:transparent;\r\n    font-size:x-small;\r\n    font-weight:bold;\r\n    position:relative;\r\n    top: 150px;\r\n    height: 50px;\r\n    left: 7px;\r\n    width: 150px;\r\n}\r\n\r\n.playBtn[_ngcontent-%COMP%]{\r\n    z-index:60;\r\n    \r\n}\r\n\r\n.video-play[_ngcontent-%COMP%]{\r\n    position:relative;\r\n    top: 120px;\r\n    width: 25px;\r\n    height: 25px;\r\n    left:185px; \r\n    z-index:30;\r\n}\r\n\r\n.video-desc[_ngcontent-%COMP%]{ \r\n    z-index: -50;\r\n    position:relative;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 200px;\r\n    font-style:italic;\r\n    background-color:transparent;\r\n    border: transparent;\r\n}\r\n\r\n.txtArea[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    font-size:xx-small;\r\n    left:0px;\r\n    text-align:left;\r\n    width:210px;\r\n    background-color:transparent;\r\n    border: transparent;\r\n    display:block;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    color: darkgray;\r\n    height:80px;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:-moz-read-only{\r\n    text-align:left;\r\n\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]:read-only{\r\n    text-align:left;\r\n\r\n}"];n.styles=l},"../../../../../src/app/you-tube/you-tube.component.ngfactory.js":function(e,n,t){"use strict";function l(e){return i.ɵvid(0,[(e()(),i.ɵeld(0,0,null,null,25,"div",[["class","videoCont"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n            "])),(e()(),i.ɵeld(2,0,null,null,1,"div",[["class","video-title"]],null,null,null,null,null)),(e()(),i.ɵted(3,null,[" \n                  "," \n                  ","\n            "])),(e()(),i.ɵted(-1,null,["\n            "])),(e()(),i.ɵeld(5,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(e,n,t){var l=!0;if("click"===n){l=!1!==i.ɵnov(e,6).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&l}return l},null,null)),i.ɵdid(6,671744,null,0,a.RouterLinkWithHref,[a.Router,a.ActivatedRoute,p.LocationStrategy],{routerLink:[0,"routerLink"]},null),i.ɵpad(7,6),(e()(),i.ɵted(-1,null,["\n                  "])),(e()(),i.ɵeld(9,0,null,null,0,"img",[["class","video-play"],["src","../../assets/IMAGES/play_button.svg"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n            "])),(e()(),i.ɵted(-1,null,[" \n            "])),(e()(),i.ɵeld(12,0,null,null,6,"div",[["class","dmy"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n                "])),(e()(),i.ɵeld(14,0,null,null,0,"img",[["height","125px"],["src","../../assets/IMAGES/bandDefault3.jpg"],["style","z-index:10;"],["width","211px"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n                "])),(e()(),i.ɵeld(16,0,null,null,0,"br",[],null,null,null,null,null)),(e()(),i.ɵted(17,null,["\n                published on "," \n            "])),i.ɵppd(18,2),(e()(),i.ɵted(-1,null,["\n            "])),(e()(),i.ɵeld(20,0,null,null,4,"div",[],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n                  "])),(e()(),i.ɵeld(22,0,null,null,1,"textarea",[["class","txtArea"],["placeholder",""],["readonly",""]],null,null,null,null,null)),(e()(),i.ɵted(23,null,["                        ","         \n                  "])),(e()(),i.ɵted(-1,null,["                  \n            "])),(e()(),i.ɵted(-1,null,["\n        "]))],function(e,n){e(n,6,0,e(n,7,0,"/video-detail",n.context.$implicit.snippet.title,n.context.$implicit.snippet.publishedAt,n.context.$implicit.snippet.description,n.context.$implicit.snippet.resourceId.videoId,n.context.$implicit.snippet.position))},function(e,n){e(n,3,0,n.context.$implicit.snippet.title,n.context.$implicit.snippet.resourceId.videoId),e(n,5,0,i.ɵnov(n,6).target,i.ɵnov(n,6).href),e(n,17,0,i.ɵunv(n,17,0,e(n,18,0,i.ɵnov(n.parent,0),n.context.$implicit.snippet.publishedAt,"MMM dd, yyyy"))),e(n,23,0,n.context.$implicit.snippet.description)})}function o(e){return i.ɵvid(0,[i.ɵpid(0,p.DatePipe,[i.LOCALE_ID]),(e()(),i.ɵeld(1,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n  you-tube works!\n"])),(e()(),i.ɵted(-1,null,["\n\n"])),(e()(),i.ɵeld(4,0,null,null,19,"div",[["class","container"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n    "])),(e()(),i.ɵeld(6,0,null,null,0,"img",[["height","1000px"],["src","../../assets/IMAGES/tallBynd2.jpg"],["width","760px"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n    "])),(e()(),i.ɵeld(8,0,null,null,3,"div",[["class","musicPlay"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n        "])),(e()(),i.ɵeld(10,0,null,null,0,"img",[["class","playBtn"],["height","52px"],["src","../../assets/IMAGES/MusicPlay.jpg"],["width","760px"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["   \n    "])),(e()(),i.ɵted(-1,null,["\n    "])),(e()(),i.ɵeld(13,0,null,null,1,"a",[],null,[[null,"click"]],function(e,n,t){var l=!0,o=e.component;if("click"===n){l=!1!==o.tstClick()&&l}return l},null,null)),(e()(),i.ɵted(-1,null,["Test Click"])),(e()(),i.ɵted(-1,null,["\n    "])),(e()(),i.ɵeld(16,0,null,null,5,"div",[["class","video"]],null,null,null,null,null)),(e()(),i.ɵted(-1,null,["\n        "])),(e()(),i.ɵand(16777216,null,null,1,null,l)),i.ɵdid(19,802816,null,0,p.NgForOf,[i.ViewContainerRef,i.TemplateRef,i.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(e()(),i.ɵted(-1,null,[" "])),(e()(),i.ɵted(-1,null,["\n    "])),(e()(),i.ɵted(-1,null,[" "])),(e()(),i.ɵted(-1,null,["  \n"])),(e()(),i.ɵted(-1,null,["\n"])),(e()(),i.ɵeld(25,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i.ɵdid(26,212992,null,0,a.RouterOutlet,[a.ChildrenOutletContexts,i.ViewContainerRef,i.ComponentFactoryResolver,[8,null],i.ChangeDetectorRef],null,null),(e()(),i.ɵted(-1,null,["\n"]))],function(e,n){e(n,19,0,n.component.videos),e(n,26,0)},null)}function r(e){return i.ɵvid(0,[(e()(),i.ɵeld(0,0,null,null,1,"app-you-tube",[],null,null,null,o,m)),i.ɵdid(1,114688,null,0,s.YouTubeComponent,[d.YouTubeService,a.Router,a.ActivatedRoute],null,null)],function(e,n){e(n,1,0)},null)}Object.defineProperty(n,"__esModule",{value:!0});var u=t("../../../../../src/app/you-tube/you-tube.component.css.shim.ngstyle.js"),i=t("@angular/core"),a=t("@angular/router"),p=t("@angular/common"),s=t("../../../../../src/app/you-tube/you-tube.component.ts"),d=t("../../../../../src/app/you-tube.service.ts"),c=[u.styles],m=i.ɵcrt({encapsulation:0,styles:c,data:{}});n.RenderType_YouTubeComponent=m,n.View_YouTubeComponent_0=o,n.View_YouTubeComponent_Host_0=r;var f=i.ɵccf("app-you-tube",s.YouTubeComponent,r,{},{},[]);n.YouTubeComponentNgFactory=f},"../../../../../src/app/you-tube/you-tube.component.ts":function(e,n,t){"use strict";var l=this&&this.__decorate||function(e,n,t,l){var o,r=arguments.length,u=r<3?n:null===l?l=Object.getOwnPropertyDescriptor(n,t):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,l);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(u=(r<3?o(u):r>3?o(n,t,u):o(n,t))||u);return r>3&&u&&Object.defineProperty(n,t,u),u},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)};Object.defineProperty(n,"__esModule",{value:!0});var r=t("@angular/core"),u=t("../../../../../src/app/you-tube.service.ts"),i=t("@angular/router"),a=function(){function e(e,n,t){this.youtubeService=e,this.router=n,this.route=t,this.videos=[],this.title="ABC",this.descn="",console.log("YouTubeComponent constructor")}return e.prototype.ngOnInit=function(){var e=this;this.youtubeService.getVideos().then(function(n){null!==n&&(console.log("In YouTubeComponent - about to get videos"),e.videos=n,console.log("In YouTubeComponent ",e.videos))})},e.prototype.loadVideo=function(){console.log("loadVideo()"),this.router.navigateByUrl("/video-detail")},e.prototype.tstClick=function(){console.log("tst click()")},e=l([r.Component({selector:"app-you-tube",templateUrl:"./you-tube.component.html",styleUrls:["./you-tube.component.css"]}),o("design:paramtypes",[u.YouTubeService,i.Router,i.ActivatedRoute])],e)}();n.YouTubeComponent=a},"../../../../../src/main.server.ts":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=t("../../../../../src/app/app.server.module.ngfactory.js");n.AppServerModuleNgFactory=l.AppServerModuleNgFactory;var o=t("../../../../../src/app/app.server.module.ts");n.AppServerModule=o.AppServerModule,n.LAZY_MODULE_MAP={}},0:function(e,n,t){e.exports=t("../../../../../src/main.server.ts")},"@angular/animations":function(e,n){e.exports=t(10)},"@angular/animations/browser":function(e,n){e.exports=t(11)},"@angular/cdk/platform":function(e,n){e.exports=t(12)},"@angular/common":function(e,n){e.exports=t(13)},"@angular/common/http":function(e,n){e.exports=t(14)},"@angular/core":function(e,n){e.exports=t(1)},"@angular/flex-layout":function(e,n){e.exports=t(15)},"@angular/http":function(e,n){e.exports=t(16)},"@angular/material/core":function(e,n){e.exports=t(17)},"@angular/material/form-field":function(e,n){e.exports=t(18)},"@angular/material/input":function(e,n){e.exports=t(19)},"@angular/platform-browser":function(e,n){e.exports=t(20)},"@angular/platform-browser/animations":function(e,n){e.exports=t(21)},"@angular/platform-server":function(e,n){e.exports=t(0)},"@angular/router":function(e,n){e.exports=t(22)}}))},function(e,n){e.exports=require("@angular/animations")},function(e,n){e.exports=require("@angular/animations/browser")},function(e,n){e.exports=require("@angular/cdk/platform")},function(e,n){e.exports=require("@angular/common")},function(e,n){e.exports=require("@angular/common/http")},function(e,n){e.exports=require("@angular/flex-layout")},function(e,n){e.exports=require("@angular/http")},function(e,n){e.exports=require("@angular/material/core")},function(e,n){e.exports=require("@angular/material/form-field")},function(e,n){e.exports=require("@angular/material/input")},function(e,n){e.exports=require("@angular/platform-browser")},function(e,n){e.exports=require("@angular/platform-browser/animations")},function(e,n){e.exports=require("@angular/router")}]);