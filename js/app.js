function import$(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function in$(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n])return!0;return!1}function import$(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function in$(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n])return!0;return!1}function deepEq$(e,t,n){function r(e,t,a){var c,l,s,p,d,h,f,g;if(null==e||null==t)return e===t;if(e.__placeholder__||t.__placeholder__)return!0;if(e===t)return 0!==e||1/e==1/t;if(c=o.call(e),o.call(t)!=c)return!1;switch(c){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:0==e?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if("object"!=typeof e||"object"!=typeof t)return!1;for(l=a.length;l--;)if(a[l]==e)return!0;if(a.push(e),s=0,p=!0,"[object Array]"==c){if(d=e.length,h=t.length,i){switch(n){case"===":p=d===h;break;case"<==":p=h>=d;break;case"<<=":p=h>d}s=d,i=!1}else p=d===h,s=d;if(p)for(;s--&&(p=s in e==s in t&&r(e[s],t[s],a)););}else{if("constructor"in e!="constructor"in t||e.constructor!=t.constructor)return!1;for(f in e)if(u(e,f)&&(s++,!(p=u(t,f)&&r(e[f],t[f],a))))break;if(p){g=0;for(f in t)u(t,f)&&++g;i?p="<<="===n?g>s:"<=="===n?g>=s:s===g:(i=!1,p=s===g)}}return a.pop(),p}var o={}.toString,a={}.hasOwnProperty,u=function(e,t){return a.call(e,t)},i=!0;return r(e,t,[])}require.register("config.jsenv",function(e,t,n){n.exports={DOMAIN_NAME:"hsinchu-hack.mvrater.com",GITHUB_ACCOUNT:"asing1001",HACKFOLDR_ID:"hsinchu-hack",GA_ID:"UA-108258903-1",BUILD:"git-e69a2de",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","irc.g0v.tw","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("authz",{url:"/authz/{request}",templateUrl:"partials/authz.html",controller:"AuthzCtrl"}).state("about",{url:"/about",templateUrl:"partials/about.html"}).state("transaction",{url:"/transaction",templateUrl:"partials/transaction.html"}).state("project-new",{url:"/project-new",templateUrl:"partials/project.new.html",controller:"ProjectCtrl"}).state("mail-archive",{url:"/mail-archive",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("irc",{url:"/irc",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("irc.log",{url:"/log"}).state("project",{url:"/project",templateUrl:"partials/project.html",controller:"ProjectCtrl"}).state("project.detail",{url:"/{projectName}"}).state("people",{url:"/people",templateUrl:"partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId:[^/]{1,}}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}).state("home",{url:"/",templateUrl:"partials/home.html"}),t.otherwise("/"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var folderWhitelist,slice$=[].slice,replace$="".replace;folderWhitelist=function(e){return/^g0v-hackath/.exec(e)?!0:"meta"===e||"g0v-ly"===e||"g0v-cy"===e||"3du"===e||"don-democracy"===e||"g0vwelfare"===e||"kuansim"===e||"tisa"===e||"g0v-summit2014"===e||"projectpool"===e||"inLiveTW"===e||"social-art"===e?!0:void 0},angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$state","$rootScope","$timeout"].concat(function(e,t,n,r){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({MailArchive:["$scope"].concat(function(e){return e.mailArchiveActive=!0})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(e,t,n,r,o,a){var u,i;return u=require("config.jsenv").DOMAIN_NAME,import$(e,{hasViewMode:function(e){return null!=e?e.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:a.iframes,docs:a.docs,tree:a.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^\/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(e){return window.open(e.url,e.id),!1},activate:function(e){var t;return t=a.activate(e),"hackfoldr"===(null!=t?t.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(t,n,r){return e.saveModalOpen=t,r&&(e.saveBtn=$(r.target)),n&&(o.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:a,barframeSrc:function(e){var n;return n=e.opts.bar.replace(/\{(\w+)\}/g,function(){return e[arguments[1]]}),t.trustAsResourceUrl(n)},iframeCallback:function(t){return null==t&&(t={}),function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),r.current.title=t.title+" – "+u,"fail"===n?t.noiframe=!0:t.noiframe=!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return a.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(t){return folderWhitelist(t)?a.getIndex(t,!1,function(){e.$watch("docId",function(n){var o,u,i;if(n)r.params.docId===(null!=(u=a.docs[0])?u.id:void 0)&&r.transitionTo("hack.doc",{docId:null,hackId:e.hackId});else if(o=null!=(u=a.docs[0])?u.id:void 0)return void(null==e.docId&&(e.docId=o));return n&&(i=a.activate(n)),"hackfoldr"===(null!=i?i.type:void 0)?(e.showIndex=!0,a.loadRemoteCsv(i.id,function(r,o,u){var i,c,l;return i=function(){var e,t,r,o=[];for(e=0,r=(t=a.tree).length;r>e;++e)i=t[e],i.id===n&&o.push(i);return o}()[0],i.tagFilter=null!=(c=i.tags)&&null!=(l=c[0])?l.content:void 0,i.children||(null==i.children&&(i.children=null!=u?u[0].children:void 0),(c=a.docs).splice.apply(c,[o.length,0].concat(slice$.call(o)))),e.indexDocs=o,e.indexSearch=t.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===r.current.name,e.showIndex}):n.location.href="http://hackfoldr.org/"+n.location.pathname}),e.hackId=(i=r.params.hackId)?i:"g0v-hackath17n",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0}),e.sidebar=!1,e.toggleSidebar=function(){return e.collapsed=!1,e.sidebar=!e.sidebar}})}).directive("resize",["$window"].concat(function(e){return function(t,n,r){var o;return o=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(o)}),o()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var o,a,u;return o=e(r.ngxIframe)(t),a=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),o(t&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(u),a(this.contentWindow,!0)}),u=setTimeout(function(){return a(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t,n){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var o,a;return o=e(r.ngxClickMeta),a=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return a(e)&&!o(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t,n){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t,n,r){var o;return o=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(o)}),t.$watch("docs",o),o()}})).factory({HackFolder:["$http","$sce"].concat(function(e,t){var n,r,o,a,u;return n={},r=[],o=[],u={iframes:n,docs:r,tree:o,activate:function(e,a){function u(e){return e.id}var i,c,l,s,p,d,h,f,g,v,m;for(null==a&&(a=!1),c=function(){var t,n,o,a=[];for(t=0,o=(n=r).length;o>t;++t)i=n[t],i.id===e&&a.push(i);return a}()[0],l=null!=c?c.type:void 0,s=0,d=(p=o).length;d>s;++s)h=p[s],(f=null!=h&&null!=(g=h.children)?g.map(u):void 0)&&in$(e,f)&&(h.expand=!0);return v=a?"edit":"view",m=function(){var t;switch(t=[l],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+v+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+v;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+v;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=c.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"video"!==t[0]:if("youtube"===c.provider)return"https://www.youtube.com/embed/"+e;if("ustream"===c.provider)return"http://www.ustream.tv/embed/"+e+"?v=3";break;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),null!=c&&c.hashtag&&(m+=null!=c?c.hashtag:void 0),m&&(m=t.trustAsResourceUrl(m)),"hackfoldr"===(null!=c?c.type:void 0)?c:((f=n[e])?(f.src=m,f.mode=v):n[e]={src:m,doc:c,mode:v},c)},getIndex:function(t,n,o){var u,i,c=this;return a!==t||n?(u=0,(i=/^[-\w]{40}[-\w]*$/.exec(t)?function(){var e;return e=function(e){var n,u,i={}.hasOwnProperty;for(n in e)if(i.call(e,n))return u=e[n],r.length=0,a=t,void c.processCsv(u.toArray(),o)},Tabletop.init({key:t,callback:e,simpleSheet:!1})}:function(){return e.get("https://www.ethercalc.org/_/"+t+"/csv").error(function(){return++u>3?void 0:setTimeout(i,1e3)}).success(function(e){return a=t,r.length=0,c.processCsv(e,o)})})()):o(r)},processCsv:function(e,t){return this.loadCsv(e,r,o,function(e,n){return u.folderTitle=e,t(n)})},loadRemoteCsv:function(t,n){var r=this;return e.get("https://www.ethercalc.org/_/"+t+"/csv").success(function(e){var t,o;return t=[],o=[],r.loadCsv(e,t,o,function(e){return n(e,t,o)})})},loadCsv:function(e,t,n,r){function o(){try{return JSON.parse(w.replace(/""/g,'"'))}catch(e){}}function a(){var e;switch(e=[v],!1){case void 0!==e[0]:return l||(m&&(l=m,m=null),w&&(s=w)),{title:m,type:"dummy",id:"dummy"};case!(A=/^\/\/(.*?)(?:\#(.*))?$/.exec(e[0])):return{type:"hackfoldr",id:A[1],tag:A[2]};case!(A=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:A[1]};case!(A=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:A[1]};case!(A=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:A[1],id:A[2]};case!(A=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(e[0])):return{type:"video",provider:"youtube",id:A[1],icon:"http://g.etfv.co/"+v};case!(A=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(e[0])):return{type:"video",provider:"ustream",id:A[1],icon:"http://g.etfv.co/"+v};case!(A=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(v)),icon:"http://g.etfv.co/"+A[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",v):void 0}}function u(e){return e.length}function i(e){var t,n,r,o,a;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],r=t[1],o=t[2],a=slice$.call(t,3),{content:r,"class":null!=o?o:"warning"}}var c,l,s,p,d,h,f,g,v,m,w,b,y,k,_,j,C,U,I,A,P,x,L,E,O,S;for(c=e,"string"==typeof c&&(e=replace$.call(e,/^\"?#.*\n/gm,""),c=CSV.parse(e)),s={},d=[],h=0,f=c.length;f>h;++h)if(g=c[h],g.length){if(v=g[0],m=g[1],w=g[2],b=g[3],y=g[4],k=slice$.call(g,5),!m)continue;m=replace$.call(m,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=o()),null==w&&(w={}),b&&(b=replace$.call(b,/^"|"$/g,"")),_=v.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),j=_[0],C=_[1],v=_[2],U=_[3],I=import$({summary:y,hashtag:U,url:v,title:m,indent:C.length,opts:import$(import$({},s),w)},a()),"dummy"!==I.type||null!=(_=I.title)&&_.length?d.push(import$(import$({icon:"/img/"+I.type+".png"},I),{tags:(null!=(_=null!=(P=I.opts)?P.tags:void 0)?_:[]).concat((null!=(_=null!=b?b.split(","):void 0)?_:[]).filter(u).map(i))})):d.push(null)}for(p=d,p.filter(function(e){return null!=e?e.url:void 0}).map(function(e){var t,n,r;return"video"===e.type&&"youtube"===e.provider?(t=gapi.client.youtube.videos.list({id:e.id,part:"snippet"}),t.execute(function(t){var n;return"live"===(null!=(n=t.items)?n[0].snippet.liveBroadcastContent:void 0)?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=e.url.match(/ustream.tv\/embed\/([^?]+)/))?(r=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+r+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(t){var n,r;return"live"===JSON.parse(null!=(n=t.query)&&null!=(r=n.results)&&null!=(n=r.body)?n.p:void 0).results?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),t.splice.apply(t,[0,t.length].concat(slice$.call(p.filter(function(e){return null!=e})))),x=0,d=[],h=0,f=t.length;f>h;++h)E=h,I=t[h],E>0&&I.indent?(O=t[x],S=null!=(_=O.children)?_:O.children=[],S.push(I),d.push(null)):(x=E,d.push(I));return L=d,L=L.filter(function(e){return null!=e}),L=L.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:e.children.length<5),e}),n.splice.apply(n,[0,n.length].concat(slice$.call(L))),r(l,t)}}})}),angular.module("hub.g0v.tw",["ui.state","firebase","github"]).config(["$httpProvider"].concat(function(e){var t,n;return e.defaults.useXDomain=!0,n=(t=e.defaults.headers.common)["X-Requested-With"],delete t["X-Requested-With"],n})).controller({AuthzCtrl:["$scope","$window","$state","Hub"].concat(function(e,t,n,r){return e.$on("event:auth-logout",function(){return e.safeApply(e,function(){return"function"==typeof e.cleanup?e.cleanup():void 0})}),e.$on("event:auth-login",function(o,a){var u;return u=a.user,e.$apply(function(){var e,o;return e=r.root.child("following/"+u.username),o=r.root.child("authz/"+n.params.request),e.once("value",function(e){var a;return a=e.val(),o.once("value",function(e){var i,c,l;return i=e.val(),c=null!=(l=r.authUser.email)?l:null!=(l=r.authUser.emails)?l[0]:void 0,o.update({avatar:u.avatar,username:u.username,following:a,email:c,displayName:null!=(l=u.displayName)?l:u.username},function(e){var r;return e?console.log(e):(r=i.uri)?t.location.href=r+"/"+n.params.request:void 0})})})})})})}).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(e,t,n,r){return e.$watch("$state.params.tag",function(t){return e.tag=t,e.loadDisqus(t)}),import$(e,{toggle_tag:function(e){var t;return t=angular.element(e.srcElement),"none"===t.parent().next().css("display")?t.parent().next().css("display","block"):t.parent().next().css("display","none")},gotag:function(t){return e.go("/tag/"+encodeURIComponent(t))},projects:r.projects,people:r.people,loadDisqus:function(e){var t;if("localhost"!==n.host())return window.disqus_shortname="g0vhub",window.disqus_identifier=encodeURIComponent("tag-"+e),window.disqus_url="http://hack.g0v.tw/tag/"+e,window.disqus_title="g0v.tw 》 tag  》"+e,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){var e;return e=this.page,e.disqus_title=window.disqus_title,e.disqus_identifier=window.disqus_identifier,e.disqus_url=window.disqus_url,e}}),t=document.getElementById("disqusCommentScript"),t&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(t),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}(),angular.element(document.getElementById("disqus_thread")).html("")}})})}).controller({ProjectCtrl:["$scope","$state","$location","$http","$timeout","Hub","angularFire"].concat(function(e,t,n,r,o,a,u){return e.$on("event:hub-ready",function(){return o(function(){return e.safeApply(e,function(){var t,n,r,o,u,i;for(n=[],r=0,u=(o=a.projects).length;u>r;++r)i=o[r],i.thumbnail&&n.push(i);return t=n,e.featured=t[Math.floor(Math.random()*t.length)]})})}),import$(e,{newprj:{name:"",desc:"",hackathons:[{name:"hackath0n"},{name:"hackath1n"},{name:"hackath2n"},{name:"hackath3n"},{name:"hackath4n"}],url:"",submit:function(e){var t;return this.name=this.name.replace(/,/g," "),this.desc=this.desc.replace(/,/g," "),this.url=this.url.replace(/,/g," "),t=this.url+","+this.name+",,"+function(){function t(e){return e.checked}var n,r,o,a=[];for(n=0,o=(r=this.hackathons.filter(t)).length;o>n;++n)e=r[n],a.push(e.name);return a}.call(this).join(" ")+","+this.desc,$.ajax("https://ethercalc.org/_/g0v-t-ideaPool",{type:"POST",contentType:"Content-type: text/csv; charset=utf-8",data:t}).done(function(){return $("#newprj-uploaded").css("opacity","1").show().delay(2e3).fadeOut("slow")})}},avatarFor:function(e){var t,n;return null!=(t=null!=(n=a.people.getByName(e))?n.avatar:void 0)?t:"http://avatars.io/github/"+e},people:a.people,projects:a.projects,opts:{},remove_tag:function(e,t){var n;return e.keywords=function(){var r,o,a,u=[];for(r=0,a=(o=e.keywords).length;a>r;++r)n=o[r],n!==t&&u.push(n);return u}()},add_tag:function(t){return null==t.keywords&&(t.keywords=[]),in$(e.opts.newtag,t.keywords)||t.keywords.push(e.opts.newtag),e.opts.newtag="",!1},addfromURL:function(t,n){var o;return t||(t=prompt("Enter github user/repo with g0v.json","")),o="https://api.github.com/repos/"+t+"/contents/g0v.json",r.get(o).error(function(t){var n;return null!=t&&(n=t.message),e.opts.warning=null!=n?n:"unknown error"}).success(function(t){var r;return r=JSON.parse(Base64.decode(null!=t?t.content:void 0)),import$(e.project,r),"function"==typeof n?n():void 0})},newProject:function(){return e.opts.isnew=!0,e.opts.editMode=!0,e.project&&("function"==typeof e.cleanup&&e.cleanup(),delete e.project,t.transitionTo("project",{})),e.project={}},checkProject:function(t,n){var r;return e.opts.warning=null,r=n.filter(function(e){return!t[e]}),r.length>0&&(e.opts.warning="g0v.json 無法符合格式，缺少了 "+r.join(", ")+" 關鍵字"),e.opts.warning},saveNew:function(o){var u,i,c,l,s;return o.github?angular.element(".github-url").val().match(/^https?:\/\/github.com\/.*[a-zA-Z\d]\/.*[a-zA-Z\d]/)?a.loginUser?(u=o.github.split("/"),i=u[0],i=u[1],i=u[2],c=u[3],l=u[4],s="https://api.github.com/repos/"+c+"/"+l+"/contents/",r.get(s).error(function(t){var n;return null!=t&&(n=t.message),e.opts.warning=null!=n?n:"unknown error"}).success(function(n){var r,o,u,i,s,p;for(r=!1,o=null,u=0,i=n.length;i>u;++u)s=n[u],p=s.name,p.toLowerCase().match("g0v.json")&&(r=!0,o=s);return r?e.addfromURL(c+"/"+l,function(){var n,r;return n=e.project,e.checkProject(n,["name","keywords","description","description_zh","homepage"]),(r=e.opts.warning)?r:(a.root.child("projects/"+n.name).set((n.created_by=a.loginUser.username,n)),t.transitionTo("project.detail",{projectName:n.name}))}):e.opts.warning="Github 專案底下請放入 g0v.json"})):(alert("請先進行登入動作"),n.path("/people")):e.opts.warning="Github 網址不符合格式":e.opts.warning="Github 網址不可為空"}}),e.$watch("$state.params.projectName",function(t){var n;if(t)return e.projectName=t,e.opts.editMode=!1,"function"==typeof e.cleanup&&e.cleanup(),n=u(a.root.child("projects/"+t),e,"project",{}),n.then(function(t){return e.cleanup=t})})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(e,t,n,r){return e.tagCategorizations=require("config.jsenv").CATEGORIZATION,e.displayTagList=!1,import$(e,{gotag:function(t){return e.go("/tag/"+encodeURIComponent(t))},togglePerson:function(t){return e.showPerson=e.showPerson===t?null:t},remove_tag:function(e,t){var n;return e.tags=function(){var r,o,a,u=[];for(r=0,a=(o=e.tags).length;a>r;++r)n=o[r],n!==t&&u.push(n);return u}()},add_tag:function(t,n){var r;return null==t.tags&&(t.tags=[]),r=null!=n?n:e.newtag,in$(r,t.tags)||t.tags.push(r),n||(e.newtag=""),!1},follow_person:function(t){return in$(t,e.following)||e.following.push(t),e.followlist[t]=1},unfollow_person:function(t){var n,r,o,a,u,i;for(n=[],r=0,a=(o=e.following).length;a>r;++r)u=o[r],u!==t&&n.push(u);return e.following=n,i=(o=e.followlist)[t],delete o[t],i},projects:n.projects,filteredpeople:n.filteredpeople,people:n.people,auth:n.auth,hub:n,setUsername:n.setUsername,loginAndMerge:n.loginAndMerge,loginAndLink:n.loginAndLink}),e.$on("event:auth-login",function(t,o){var a;return a=o.user,e.safeApply(e,function(){var t,o;return e.toSetUsername=!1,t=r(n.root.child("people/"+a.username),e,"user",{}),o=r(n.root.child("following/"+a.username),e,"following",[]),e.$watch("following",function(t){var n;return e.followlist=function(){var e,r,o,a={};for(e=0,o=(r=null!=t?t:[]).length;o>e;++e)n=r[e],a[n]=!0;return a}()}),o.then(function(t){var n;return(n=e.cleanup)?e.cleanup=function(){return n(),t()}:void 0}),t.then(function(t){var n;return e.safeApply(e),(n=e.cleanup)?e.cleanup=function(){return n(),t()}:void 0})})}),e.$on("event:auth-logout",function(){return e.safeApply(e,function(){return"function"==typeof e.cleanup&&e.cleanup(),delete e.user,e.toSetUsername=!1})}),e.$on("event:auth-userNameRequired",function(t,n){var r,o;return r=n.existing,o=n.username,e.safeApply(e,function(){return e.toSetUsername=!0,e.usernameInUse=r,e.newUsername=o})}),e.$watch("hub.inited",function(t){var r;if(t)return r=function(t){var n,r,o,a,u,i,c,l;if(t){n={};for(r in t)if(o=t[r],a=o.tags)for(u=0,i=a.length;i>u;++u)c=a[u],null==n[c]&&(n[c]=0),n[c]++;return e.tagcloudMap=n,e.tagcloud=function(){var e,t=[];for(c in e=n)l=e[c],l>1&&t.push({tag:c,count:l});return t}().sort(function(e,t){return t.count-e.count})}},n.people.length&&r(e.people),setTimeout(function(){return e.$watch("people",e.safeApply(e,function(){return r}))},100)}),e.$watch("search",function(){deepEq$(e.search,void 0,"===")||(e.filteredpeople=e.people)}),n.loginUser?e.$emit("event:auth-login",{user:n.loginUser}):void 0})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(e,t,n){var r,o,a,u,i,c,l,s;return r=require("config.jsenv").FIREBASE,o={},a=new Firebase(r),u=function(){return n.$broadcast("event:hub-ready"),o.inited=!0},i=t(a.child("people").limit(50)),c=t(a.child("people")),l=t(a.child("projects"),u),s=function(e,t,r){return e=e.replace(/\./g,","),a.child("people/"+e).once("value",function(o){var a;return a=o.val(),(t||a)&&n.$broadcast("event:auth-userNameRequired",{existing:a,username:e}),a?void 0:"function"==typeof r?r():void 0})},o.setUsername=function(e){return o.authUser?s(e,!1,function(){var t,r,u,i,c;return t={tags:[],username:e},t.auth=(r={},r[o.authUser.provider+""]={id:(u=o.authUser).id,username:null!=(i=u.username)?i:""},r),o.authUser.displayName&&(t.displayName=o.authUser.displayName),t.avatar=function(){var e;switch(e=[o.authUser.provider],!1){case"github"!==e[0]:return o.authUser.avatar_url;case"twitter"!==e[0]:return"http://avatars.io/twitter/"+o.authUser.username;case"persona"!==e[0]:return"http://avatars.io/gravatar/"+o.authUser.hash;default:return"http://avatars.io/"+o.authUser.provider+"/"+o.authUser.id}}(),c=a,c.child("auth-map/"+o.authUser.provider+"/"+o.authUser.id).set({username:e}),c.child("people/"+e).set(t),a.child("people/"+e).once("value",function(e){return o.loginUser=e.val(),n.$broadcast("event:auth-login",{user:o.loginUser})})}):void 0},o.loginAndMerge=function(e){var t,r;return t=function(e){var t,r,u,i;return t=o.authUser,r=a.child("people/"+e+"/auth").update((u={},u[t.provider+""]={id:t.id,username:null!=(i=t.username)?i:""},u)),a.auth(t.firebaseAuthToken,function(r){return a.child("auth-map/"+t.provider+"/"+t.id).set({username:e}),n.$broadcast("event:auth-login",{user:o.loginUser})})},r=new FirebaseSimpleLogin(a,function(e,n){return e&&console.log(e),n?a.child("auth-map/"+n.provider+"/"+n.id).once("value",function(e){var n,r;return null!=(n=e.val())&&(r=n.username,n)?t(r):void 0}):void 0}),r.login(e)},o.loginAndLink=function(e){return o.authLink=o.authUser,o.authLinkUser=o.loginUser,o.auth.login(e)},o.auth=new FirebaseSimpleLogin(a,function(e,t){return e?console.log(e):t?(o.authUser=t,a.child("auth-map/"+t.provider+"/"+t.id).once("value",function(e){var r,u,i,c,l;return!o.authLink&&null!=(r=e.val())&&(u=r.username,r)?(i=a.child("people/"+u),i.once("value",function(e){return o.loginUser=e.val(),o.loginUser?n.$broadcast("event:auth-login",{user:o.loginUser}):s(u,!0)})):(c=o.authLink)?(u=o.authLinkUser.username,a.child("auth-map/"+t.provider+"/"+t.id).set({username:u}),a.auth(c.firebaseAuthToken,function(e){var n,r;return a.child("people/"+u+"/auth").update((n={},n[t.provider+""]={id:t.id,username:null!=(r=t.username)?r:""},n)),n=o.authLink,delete o.authLink,n})):(null==(r=o.authUser).username&&(r.username=null!=(r=o.authUser.email)&&null!=(l=r.split("@"))?l[0]:void 0),s(o.authUser.username,!0))})):n.$broadcast("event:auth-logout")}),import$(o,{root:a,people:c,projects:l,filteredpeople:i})})}),angular.module("irc.g0v.tw",["ui.state"]).controller({IRC:["$scope","$state"].concat(function(e,t){return e.$watch("$state.current.name",function(n){switch(n){case"irc":e.ircEnabled=!0;break;case"irc.log":e.irclogEnabled=!0}return e.ircActive=t.includes("irc")})})});var Github=function(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=function(e){var n=e.replace(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|\w{3})/,function(e,n,r,o,a,u,i,c){return o+" "+t[r-1]+" "+n+" "+a+":"+u+":"+i+" GMT"});return new Date(Date.parse(n))},r=function(t,n){e.isFunction(n)||console.error("pred must be a function");var r=-1;return e.each(t,function(e,t){return n(t,e)?(r=e,!1):void 0}),r},o=function(t,n){return e.isFunction(n)||console.error("eq must be a function"),e.grep(t,function(e,o){var a=r(t.slice(0,o),function(t,r){return n(t,e)});return 0>a})},a=function(e){if(e){var t=e.match(/^((http|https):\/\/github\.com\/([^\/]+)\/([^\/]+))(\/.*)?$/);return t?{url:t[1],owner:t[3],repo:t[4],name:t[3]+"/"+t[4]}:null}},u=function(e,t){var n=e.match(/^(((http|https):\/\/(api\.github\.com)(:[0-9]+)?)(\/.*)?)$/),r=n[2];require("config.jsenv").GITHUB_API_PROXY&&(r=require("config.jsenv").GITHUB_API_PROXY);for(var o=n[6]?n[6]:"";n=o.match(/^([^{}]*)({(\/([^\/{}]+))})(.*)$/);)o=n[1],t&&t[n[4]]&&(o+="/",o+=t[n[4]]),o+=n[5];return r+=o},i={},c=function(t,n){i[t]||(i[t]=n,e.getJSON(t,n))},l=function(){},s={},p={},d={updated_at_desc:function(e,t){var r=n(p[t].updated_at),o=n(p[e].updated_at);return(r>o)-(o>r)}},h=function(t){var n=s[t];n&&c(u(n.issues_url),function(n){e.each(n,function(e,n){n.key=t+"#"+n.number,n.repo=t.split("/")[1],p[n.key]=n}),l()})};return{add_repository:function(e,t){var n=a(e);n&&c(u("https://api.github.com/repos{/owner}{/repo}",n),function(e){e.has_issues&&(e.name_zh=t,s[e.full_name]=e,h(e.full_name))})},set_on_update:function(e){l=e},get_issues:function(t){var n=Object.keys(p).sort(d.updated_at_desc);return t&&t.by_project&&"all"!=t.by_project&&(n=e.grep(n,function(e){return e.split("/")[1].split("#")[0]==t.by_project})),t&&t.by_labels&&t.by_labels.length>0&&(n=e.grep(n,function(n){var o=e.grep(t.by_labels,function(e){return r(p[n].labels,function(t,n){return t.name==e})>=0});return o.length==t.by_labels.length})),e.map(n,function(e){return p[e]})},get_labels:function(t){delete t.by_labels;var n=Github.get_issues(t),r=o(e.map(n,function(e){return e.labels}),function(e,t){return e.name==t.name}).sort(function(e,t){var n=e&&e.name||"",r=t&&t.name||"";return n.localeCompare(r)});return r},get_repositories:function(){var t=Object.keys(s).sort(function(e,t){var n=s[e].name||"",r=s[t].name||"";return n.localeCompare(r)});return e.map(t,function(e){return s[e]})}}}(jQuery);angular.module("github",[]).controller("IssueCtrl",["$scope","Hub",function(e,t){e.opt_project="all",e.$watch("opt_project",function(){e.setPage()}),e.set_project=function(t){e.opt_project=t},e.opt_labels=[],e.$watch("opt_labels",function(){e.setPage()}),e.projects=[],e.issues=[],e.numPerPage=5,e.currentPage=1,e.setPage=function(){var t={by_project:e.opt_project,by_labels:e.opt_labels},n=Github.get_issues(t),r=Github.get_labels(t),o=function(e,t){
var n=e&&e.name||"",r=t&&t.name||"";return n.localeCompare(r)},a=$.map(require("config.jsenv").G0V_LABELS,function(e){return e.kind="g0v",e.text=e.zh?e.name+": "+e.zh:e.name,e}).sort(o),u=$.map($.grep(r,function(e){return $.inArray(e.name,$.map(a,function(e){return e.name}))<0}),function(e){return e.kind="other",e.text=e.name,e}).sort(o);e.labels=a.concat(u),e.numPages=Math.ceil(n.length/e.numPerPage);var i=(e.currentPage-1)*e.numPerPage;e.issues=n.slice(i,i+e.numPerPage)},e.$watch("currentPage",e.setPage),Github.set_on_update(function(){e.projects=Github.get_repositories(),e.setPage()}),e.label_css_classes=function(e){var t=[],n=parseInt(e.color,16),r=(16711680&n)>>16,o=(65280&n)>>8,a=255&n,u=.375*r+.5*o+.125*a;return u>140?t.push("light"):t.push("dark"),t},e.$on("event:hub-ready",function(){e.firebase_projects=t.projects,e.$watch("firebase_projects.length",function(){angular.forEach(e.firebase_projects,function(e,t){e.repository&&Github.add_repository(e.repository.url,e.name_zh)})})}),e.$watch("labels",function(){e.labels.length&&setTimeout(function(){$(".issues-label-filter select").trigger("chosen:updated")},500)})}]);