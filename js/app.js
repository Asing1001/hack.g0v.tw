(function(){"use strict";var t="undefined"!=typeof window?window:global;if(typeof t.require!="function"){var e={},n={},r=function(t,e){return{}.hasOwnProperty.call(t,e)},o=function(t,e){var n,r,o=[];n=/^\.\.?(\/|$)/.test(e)?[t,e].join("/").split("/"):e.split("/");for(var i=0,a=n.length;a>i;i++)r=n[i],".."===r?o.pop():"."!==r&&""!==r&&o.push(r);return o.join("/")},i=function(t){return t.split("/").slice(0,-1).join("/")},a=function(e){return function(n){var r=i(e),a=o(r,n);return t.require(a)}},l=function(t,e){var r={id:t,exports:{}};e(r.exports,a(t),r);var o=n[t]=r.exports;return o},s=function(t){var i=o(t,".");if(r(n,i))return n[i];if(r(e,i))return l(i,e[i]);var a=o(i,"./index");if(r(n,a))return n[a];if(r(e,a))return l(a,e[a]);throw Error('Cannot find module "'+t+'"')},c=function(t,n){if("object"==typeof t)for(var o in t)r(t,o)&&(e[o]=t[o]);else e[t]=n};t.require=s,t.require.define=c,t.require.register=c,t.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(t,e,n){return t.state("authz",{url:"/authz/{request}",templaetUrl:"/partials/authz.html",controller:"AuthzCtrl"}).state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("project",{url:"/project",templateUrl:"/partials/project.html",controller:"ProjectCtrl"}).state("project.detail",{url:"/{projectName}"}).state("people",{url:"/people",templateUrl:"/partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"/partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.doc",{url:"/{docId}"}),e.otherwise("/g0v-hackath3n"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(t,e,n,r){return t.$state=e,t.$stateParam=n,t.go=function(t){return r.path(t)},t._build=window.global.config.BUILD}))}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;++n<r;)if(t===e[n]&&n in e)return!0;return!1}var n=[].slice,r="".replace;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$location","$rootScope","$timeout"].concat(function(t,e,n,r){return t.$location=e,t.$watch("$location.path()",function(e){return e||(e="/"),t.activeNavId=e,t}),t.getClass=function(e){return t.activeNavId.substring(0,e.length===e)?"active":""},r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(e,n,r){var o;return t(e,{hasViewMode:function(t){return t.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(t){return e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(t){return window.open(t.url,t.id),!1},activate:r.activate,HackFolder:r,iframeCallback:function(t){return function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(t){return"undefined"!=typeof console&&null!==console?console.log(t,this):void 0},reload:function(t){return r.getIndex(t,!0,function(){})}}),e.$watch("hackId",function(t){return r.getIndex(t,!1,function(){var t,o;return e.$watch("docId",function(t){return t?r.activate(t):void 0}),!e.docId&&(t=(o=r.docs[0])!=null?o.id:void 0)?n.transitionTo("hack.doc",{docId:t,hackId:e.hackId}):void 0})}),e.hackId=(o=n.params.hackId)?o:"g0v-hackath3n",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0})})}).directive("resize",["$window"].concat(function(t){return function(e,n){var r;return r=function(){return e.width=t.innerWidth,e.height=t.innerHeight,e.contentHeight=t.innerHeight-$(n).offset().top},angular.element(t).bind("resize",function(){return e.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(t){return{link:function(e,n,r){var o,i,a;return o=t(r.ngxIframe)(e),i=function(t,e){var n;return n=!function(){try{return t.location=="about:blank"}catch(e){}}(),e&&$.browser.mozilla?o("unsure"):o(n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),i(this.contentWindow,!0)}),a=setTimeout(function(){return i(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(t,e){return $(e).click(function(t){return t.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(t){return{link:function(e,n,r){var o;return o=t(r.ngxClickMeta),$(n).click(function(t){return t.metaKey&&!o(e)?(t.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(t,e){return $(e).click(function(t){return t.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(o){var i,a,l,s,c;return i={},a=[],l=[],c={iframes:i,docs:a,tree:l,activate:function(t,n){function r(t){return t.id}var o,s,c,u,p,d,f,h,g,m,v;for(null==n&&(n=!1),s=function(){var e,n,r,i=[];for(e=0,r=(n=a).length;r>e;++e)o=n[e],o.id===t&&i.push(o);return i}()[0],c=s.type,u=0,d=(p=l).length;d>u;++u)f=p[u],(h=null!=f?(g=f.children)!=null?g.map(r):void 0:void 0)&&e(t,h)&&(f.expand=!0);return m=n?"edit":"view",v=function(){var e;switch(e=[c],!1){case"gdoc"!==e[0]:return"https://docs.google.com/document/d/"+t+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"gpresent"!==e[0]:return"https://docs.google.com/presentation/d/"+t+"/"+m;case"gdraw"!==e[0]:return"https://docs.google.com/drawings/d/"+t+"/"+m;case"gsheet"!==e[0]:return"https://docs.google.com/spreadsheet/ccc?key="+t;case"hackpad"!==e[0]:return"https://"+((e=s.site)!=null?e:"")+"hackpad.com/"+t;case"ethercalc"!==e[0]:return"https://ethercalc.org/"+t;case"url"!==e[0]:return decodeURIComponent(decodeURIComponent(t));default:return""}}(),s.hashtag&&(v+=s.hashtag),(h=i[t])?(h.src=v,h.mode=m,h):i[t]={src:v,doc:s,mode:m}},getIndex:function(e,i,u){return s!==e||i?o.get("https://www.ethercalc.org/_/"+e+"/csv").success(function(o){function i(){try{return JSON.parse(null!=C?C:"{}")}catch(t){}}function p(){var t;switch(t=[w],!1){case void 0!==t[0]:return h||k&&(h=k,k=null),{title:k,type:"dummy",id:"dummy"};case!(U=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(t[0])):return{type:"ethercalc",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdoc",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(t[0])):return{type:"gsheet",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gdraw",id:U[1]};case!(U=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(t[0])):return{type:"gpresent",id:U[1]};case!(U=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(t[0])):return{type:"hackpad",site:U[1],id:U[2]};case!(U=/^(https?:\/\/[^\/]+)/.exec(t[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(w)),icon:"http://g.etfv.co/"+U[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",w):void 0}}function d(t){return t.length}function f(t){var e,r,o,i,a;return e=t.match(/^(.*?)(?::(.*))?$/),r=e[0],o=e[1],i=e[2],a=n.call(e,3),{content:o,"class":null!=i?i:"warning"}}var h,g,m,v,$,b,y,x,w,k,C,E,_,P,O,T,S,U,j,A,q,D,I,F;for(s=e,a.length=0,m=[],v=0,b=($=o.split(/\n/)).length;b>v;++v)y=$[v],y&&(x=y.split(/,/),w=x[0],k=x[1],C=x[2],E=x[3],_=n.call(x,4),k=r.call(k,/^"|"$/g,""),C&&(C=r.call(C,/^"|"$/g,"")),C&&(C=C.replace(/""/g,'"')),E&&(E=r.call(E,/^"|"$/g,"")),x=w.match(/^"?(\s*)(\S+?)?(#\S+)?"?$/),P=x[0],O=x[1],w=x[2],T=x[3],S=t({hashtag:T,url:w,title:k,indent:O.length,opts:i()},p()),S.type!=="dummy"||(x=S.title)!=null&&x.length?m.push(t(t({icon:"/img/"+S.type+".png"},S),{tags:((x=(j=S.opts)!=null?j.tags:void 0)!=null?x:[]).concat(((x=null!=E?E.split(","):void 0)!=null?x:[]).filter(d).map(f))})):m.push(null));for(g=m,a.splice.apply(a,[0,a.length].concat(n.call(g.filter(function(t){return null!=t})))),A=0,m=[],v=0,b=($=a).length;b>v;++v)D=v,S=$[v],D>0&&S.indent?(I=a[A],F=(x=I.children)!=null?x:I.children=[],F.push(S),m.push(null)):(A=D,m.push(S));return q=m,q=q.filter(function(t){return null!=t}),q=q.map(function(t){var e,n;return t.children&&(t.expand=(e=(n=t.opts)!=null?n.expand:void 0)!=null?e:t.children.length<5),t}),l.splice.apply(l,[0,l.length].concat(n.call(q))),c.folderTitle=h,u(a)}):u(a)}}})})}.call(this),function(){function t(t,e){var n={}.hasOwnProperty;for(var r in e)n.call(e,r)&&(t[r]=e[r]);return t}function e(t,e){for(var n=-1,r=e.length>>>0;++n<r;)if(t===e[n]&&n in e)return!0;return!1}angular.module("hub.g0v.tw",["ui.state","firebase"]).controller({AuthzCtrl:["$scope","$window","$state","Hub"].concat(function(t,e,n,r){return t.$on("event:auth-login",function(o,i){var a;return a=i.user,t.$apply(function(){var t;return console.log("hiauthz",n.params.request,a,r.authUser),t=r.root.child("authz/"+n.params.request),t.once("value",function(o){var i,l,s;return i=o.val(),l=(s=r.authUser.email)!=null?s:(s=r.authUser.emails)!=null?s[0]:void 0,t.update({username:a.username,email:l,displayName:(s=a.displayName)!=null?s:a.username},function(t){var r;return t?console.log(t):(r=i.uri)?e.location.href=r+"/"+n.params.request:void 0})})})})})}).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(e,n,r,o){return e.$watch("$state.params.tag",function(t){return e.tag=t,e.loadDisqus(t)}),t(e,{toggle_tag:function(t){var e;return e=angular.element(t.srcElement),e.parent().next().css("display")==="none"?e.parent().next().css("display","block"):e.parent().next().css("display","none")},gotag:function(t){return e.go("/tag/"+encodeURIComponent(t))},projects:o.projects,people:o.people,loadDisqus:function(t){var e;if(r.host()!=="localhost")return window.disqus_shortname="g0vhub",window.disqus_identifier=encodeURIComponent("tag-"+t),window.disqus_url="http://hack.g0v.tw/tag/"+t,window.disqus_title="g0v.tw 》 tag  》"+t,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){var t;return t=this.page,t.disqus_title=window.disqus_title,t.disqus_identifier=window.disqus_identifier,t.disqus_url=window.disqus_url,t}}),e=document.getElementById("disqusCommentScript"),e&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(e),function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}(),angular.element(document.getElementById("disqus_thread")).html("")}})})}).controller({ProjectCtrl:["$scope","$state","$location","Hub","angularFire"].concat(function(n,r,o,i,a){return t(n,{people:i.people,projects:i.projects,opts:{},remove_tag:function(t,e){var n;return t.keywords=function(){var r,o,i,a=[];for(r=0,i=(o=t.keywords).length;i>r;++r)n=o[r],n!==e&&a.push(n);return a}()},add_tag:function(t){return t.keywords==null&&(t.keywords=[]),e(n.opts.newtag,t.keywords)||t.keywords.push(n.opts.newtag),n.opts.newtag="",!1},newProject:function(){return n.opts.isnew=!0,n.opts.editMode=!0,n.project&&(typeof n.cleanup=="function"&&n.cleanup(),delete n.project,r.transitionTo("project",{})),n.project={}},saveNew:function(t){var e;return t.name?function(){var n,r,o,a=[];for(n=0,o=(r=i.projects).length;o>n;++n)e=r[n],e.name===t.name&&a.push(e);return a}().length?!1:(n.opts.isnew=!1,i.root.child("projects/"+t.name).set((t.created_by=i.loginUser.username,t)),r.transitionTo("project.detail",{projectName:t.name})):!1}}),n.$watch("$state.params.projectName",function(t){var e;if(t)return n.projectName=t,n.opts.editMode=!1,typeof n.cleanup=="function"&&n.cleanup(),e=a(i.root.child("projects/"+t),n,"project",{}),e.then(function(t){return n.cleanup=t})})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(n,r,o,i){return n.safeApply=function(t){var e;return e=n.$root.$$phase,"$apply"===e||"$digest"===e?"function"==typeof t?t():void 0:n.$apply(t)},t(n,{gotag:function(t){return n.go("/tag/"+encodeURIComponent(t))},remove_tag:function(t,e){var n;return t.tags=function(){var r,o,i,a=[];for(r=0,i=(o=t.tags).length;i>r;++r)n=o[r],n!==e&&a.push(n);return a}()},add_tag:function(t,r){var o;return t.tags==null&&(t.tags=[]),o=null!=r?r:n.newtag,e(o,t.tags)||t.tags.push(o),r||(n.newtag=""),!1},projects:o.projects,people:o.people,auth:o.auth,hub:o,setUsername:o.setUsername,loginAndMerge:o.loginAndMerge,loginAndLink:o.loginAndLink}),n.$on("event:auth-login",function(t,e){var r;return r=e.user,n.safeApply(function(){var t;return n.toSetUsername=!1,t=i(o.root.child("people/"+r.username),n,"user",{}),t.then(function(t){return n.safeApply(),n.cleanup=t})})}),n.$on("event:auth-logout",function(){return n.safeApply(function(){return typeof n.cleanup=="function"&&n.cleanup(),delete n.user,n.toSetUsername=!1})}),n.$on("event:auth-userNameRequired",function(t,e){var r,o;return r=e.existing,o=e.username,n.safeApply(function(){return n.toSetUsername=!0,n.usernameInUse=r,n.newUsername=o})}),n.$watch("hub.inited",function(t){var e;if(t)return e=function(t){var e,r,o,i,a,l,s,c;if(t){e={};for(r in t)if(o=t[r],i=o.tags)for(a=0,l=i.length;l>a;++a)s=i[a],e[s]==null&&(e[s]=0),e[s]++;return n.tagcloud=function(){var t,n=[];for(s in t=e)c=t[s],c>1&&n.push({tag:s,count:c});return n}().sort(function(t,e){return e.count-t.count})}},o.people.length&&e(n.people),setTimeout(function(){return n.$watch("people",n.safeApply(function(){return e}))},100)}),o.loginUser?n.$emit("event:auth-login",{user:o.loginUser}):void 0})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(e,n,r){var o,i,a,l,s,c,u;return o=window.global.config.FIREBASE,i={},a=new Firebase(o),l=function(){return i.inited=!0},s=n(a.child("people"),l),c=n(a.child("projects")),u=function(t,e,n){return t=t.replace(/\./g,","),a.child("people/"+t).once("value",function(o){var i;return i=o.val(),(e||i)&&r.$broadcast("event:auth-userNameRequired",{existing:i,username:t}),i?void 0:"function"==typeof n?n():void 0})},i.setUsername=function(t){return i.authUser?u(t,!1,function(){var e,n,o,l,s,c,u;return e={tags:[],username:t},e.auth=(n={},n[i.authUser.provider+""]={id:(o=i.authUser).id,username:(l=o.username)!=null?l:""},n),i.authUser.displayName&&(e.displayName=i.authUser.displayName),e.avatar=function(){var t;switch(t=[i.authUser.provider],!1){case"github"!==t[0]:return t=i.authUser.avatar_url.match(/https:\/\/secure.gravatar.com\/avatar\/(\w+)/),s=t[0],c=t[1],"http://avatars.io/gravatar/"+c;case"twitter"!==t[0]:return"http://avatars.io/twitter/"+i.authUser.username;case"persona"!==t[0]:return"http://avatars.io/gravatar/"+i.authUser.hash;default:return"http://avatars.io/"+i.authUser.provider+"/"+i.authUser.id}}(),u=a,u.child("auth-map/"+i.authUser.provider+"/"+i.authUser.id).set({username:t}),u.child("people/"+t).set(e),a.child("people/"+t).once("value",function(t){return i.loginUser=t.val(),r.$broadcast("event:auth-login",{user:i.loginUser})})}):void 0},i.loginAndMerge=function(t){var e,n;return e=function(t){var e,n,o,l;return e=i.authUser,n=a.child("people/"+t+"/auth").update((o={},o[e.provider+""]={id:e.id,username:(l=e.username)!=null?l:""},o)),a.auth(e.firebaseAuthToken,function(){return a.child("auth-map/"+e.provider+"/"+e.id).set({username:t}),r.$broadcast("event:auth-login",{user:i.loginUser})})},n=new FirebaseAuthClient(a,function(t,n){return t&&console.log(t),n?a.child("auth-map/"+n.provider+"/"+n.id).once("value",function(t){var n,r;return(n=t.val())!=null&&(r=n.username,n)?e(r):void 0}):void 0}),n.login(t)},i.loginAndLink=function(t){return i.authLink=i.authUser,i.authLinkUser=i.loginUser,i.auth.login(t)},i.auth=new FirebaseAuthClient(a,function(t,e){return t?console.log(t):e?(i.authUser=e,a.child("auth-map/"+e.provider+"/"+e.id).once("value",function(t){var n,o,l,s,c;return!i.authLink&&(n=t.val())!=null&&(o=n.username,n)?(l=a.child("people/"+o),l.once("value",function(t){return i.loginUser=t.val(),i.loginUser?r.$broadcast("event:auth-login",{user:i.loginUser}):u(o,!0)})):(s=i.authLink)?(o=i.authLinkUser.username,a.child("auth-map/"+e.provider+"/"+e.id).set({username:o}),a.auth(s.firebaseAuthToken,function(){var t,n;return a.child("people/"+o+"/auth").update((t={},t[e.provider+""]={id:e.id,username:(n=e.username)!=null?n:""},t)),t=i.authLink,delete i.authLink,t})):((n=i.authUser).username==null&&(n.username=(n=i.authUser.email)!=null?(c=n.split("@"))!=null?c[0]:void 0:void 0),u(i.authUser.username,!0))})):r.$broadcast("event:auth-logout")}),t(i,{root:a,people:s,projects:c})})})}.call(this),function(){var t={};t.exports={BUILD:"git-f7d7e2d",FIREBASE:"https://g0vhub.firebaseio.com"},window.global||(window.global={}),window.global.config=t.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);