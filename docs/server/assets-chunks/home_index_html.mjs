export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>MyFoodBlog</title>
  <base href="/Restaurant/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<style>body{padding-top:56px}:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, .75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, .5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, .175);--bs-border-radius:.375rem;--bs-border-radius-sm:.25rem;--bs-border-radius-lg:.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 .5rem 1rem rgba(0, 0, 0, .15);--bs-box-shadow-sm:0 .125rem .25rem rgba(0, 0, 0, .075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, .175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, .075);--bs-focus-ring-width:.25rem;--bs-focus-ring-opacity:.25;--bs-focus-ring-color:rgba(13, 110, 253, .25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}h1,h4{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){h1{font-size:2.5rem}}h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){h4{font-size:1.5rem}}p{margin-top:0;margin-bottom:1rem}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}img{vertical-align:middle}.img-fluid{max-width:100%;height:auto}.container{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}@media (min-width:1400px){.container{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.gx-4{--bs-gutter-x:1.5rem}@media (min-width:768px){.col-md-4{flex:0 0 auto;width:33.33333333%}}@media (min-width:992px){.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.gx-lg-5{--bs-gutter-x:3rem}}.btn{--bs-btn-padding-x:.75rem;--bs-btn-padding-y:.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15),0 1px 1px rgba(0, 0, 0, .075);--bs-btn-disabled-opacity:.65;--bs-btn-focus-box-shadow:0 0 0 .25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn.active,.btn:first-child:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn.active:focus-visible,.btn:first-child:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), .65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), .8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), .3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:.5rem;--bs-navbar-toggler-padding-y:.25rem;--bs-navbar-toggler-padding-x:.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), .15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:.25rem;--bs-navbar-toggler-transition:box-shadow .15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-dark{--bs-navbar-color:rgba(255, 255, 255, .55);--bs-navbar-hover-color:rgba(255, 255, 255, .75);--bs-navbar-disabled-color:rgba(255, 255, 255, .25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, .1);--bs-navbar-toggler-icon-bg:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), .03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.align-items-center{align-items:center!important}.m-0{margin:0!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.text-center{text-align:center!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.rounded{border-radius:var(--bs-border-radius)!important}@media (min-width:992px){.mb-lg-0{margin-bottom:0!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}}
</style><link rel="stylesheet" href="styles-IG45FNYW.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-IG45FNYW.css"></noscript><style ng-app-id="ng">.btn[_ngcontent-ng-c1931730932]{display:inline-block;padding:10px 20px;text-decoration:none;border-radius:5px;margin-right:10px}</style><style ng-app-id="ng">.card-text1[_ngcontent-ng-c2426698574]{width:90%;height:auto;display:block;margin-left:auto;margin-right:auto}video[_ngcontent-ng-c2426698574]{padding-left:30px;padding-bottom:19px;padding-right:15px;width:100%;height:100%;object-fit:cover}</style><style ng-app-id="ng">body[_ngcontent-ng-c338953090]{display:flex;flex-direction:column}footer[_ngcontent-ng-c338953090]{height:70px}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.1.4" ngh="1" ng-server-context="ssg"><router-outlet></router-outlet><app-home ngh="0"><app-navbar _nghost-ng-c1931730932 ngh="0"><div _ngcontent-ng-c1931730932 class="navbar navbar-dark bg-dark fixed-top"><div _ngcontent-ng-c1931730932 class="container px-1"><a _ngcontent-ng-c1931730932 class="navbar-brand">The Culinary Canvas</a><div _ngcontent-ng-c1931730932><a _ngcontent-ng-c1931730932 routerlinkactive="active" routerlink="/home" class="btn text-white active" href="/Restaurant/home" jsaction="click:;">Home</a><a _ngcontent-ng-c1931730932 routerlinkactive="active" routerlink="/login" class="btn text-white" href="/Restaurant/login" jsaction="click:;">Login</a><a _ngcontent-ng-c1931730932 routerlinkactive="active" routerlink="/booking" class="btn text-white" href="/Restaurant/booking" jsaction="click:;">Reservation</a></div></div></div></app-navbar><app-intro ngh="0"><div class="container px-4 px-lg-5"><div class="row gx-4 gx-lg-5 align-items-center my-5"><div class="col-lg-7"><img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" alt="..." class="img-fluid rounded mb-4 mb-lg-0"></div><div class="col-lg-5"><h1 class="font-weight-light">The Culinary Canvas</h1><h4>"Feast Your Eyes, Then Your Appetite!</h4><p>We believe food isn't about taste-it's about experience, because here, every dish is a masterpiece meant to be seen, savored and shared.</p><a routerlinkactive="active" routerlink="/menu" class="btn btn-primary" href="/Restaurant/menu" jsaction="click:;">Menu</a></div></div><div class="card text-white bg-secondary my-5 py-4 text-center"><div class="card-body"><p class="text-white m-0">"Stay hungry, stay curious! Follow our blog for mouthwatering updates, chef speacials and exclusive food content!"</p></div></div></div></app-intro><app-food _nghost-ng-c2426698574 ngh="0"><div _ngcontent-ng-c2426698574 class="row gx-4 gx-lg-5"><div _ngcontent-ng-c2426698574 class="col-md-4 mb-5"><div _ngcontent-ng-c2426698574><div _ngcontent-ng-c2426698574 class="card-body"><img _ngcontent-ng-c2426698574 src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" class="card-text1"></div></div></div><div _ngcontent-ng-c2426698574 class="col-md-4 mb-5"><div _ngcontent-ng-c2426698574><div _ngcontent-ng-c2426698574 class="card-body"><img _ngcontent-ng-c2426698574 src="https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" class="card-text1"></div></div></div><div _ngcontent-ng-c2426698574 class="col-md-4 mb-5"><div _ngcontent-ng-c2426698574><div _ngcontent-ng-c2426698574 class="card-body"><img _ngcontent-ng-c2426698574 src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" class="card-text1"></div></div></div><div _ngcontent-ng-c2426698574 class="row"><div _ngcontent-ng-c2426698574><div _ngcontent-ng-c2426698574><video _ngcontent-ng-c2426698574 controls><source _ngcontent-ng-c2426698574 src="https://videos.pexels.com/video-files/3196344/3196344-sd_640_360_25fps.mp4" type="video/mp4"></video><video _ngcontent-ng-c2426698574 controls><source _ngcontent-ng-c2426698574 src="https://videos.pexels.com/video-files/4686844/4686844-sd_960_506_25fps.mp4" type="video/webm"></video></div></div></div></div></app-food><app-footer _nghost-ng-c338953090 ngh="0"><footer _ngcontent-ng-c338953090 class="py-3 bg-dark"><div _ngcontent-ng-c338953090 class="container px-4 px-lg-5"><p _ngcontent-ng-c338953090 class="m-0 text-center text-white">Copyright © Pavithra Boyina 2025</p></div></footer></app-footer></app-home><!----></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="scripts-K2RQBEMO.js" defer></script><script src="main-BFQQK2JS.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{},{"c":{"0":[{"i":"c903013662","r":1}]}}]}</script></body></html>`;