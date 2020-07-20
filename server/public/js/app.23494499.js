(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"52a6":function(t,e,n){},5379:function(t,e,n){"use strict";var r=n("87c3"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("error"),n("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}})]):t._e()},u=[],c={name:"Error",computed:{msg:function(){return this.$auth.error}}},l=c,p=n("2877"),d=Object(p["a"])(l,s,u,!1,null,null,null),h=d.exports,f={components:{Error:h}},m=f,v=(n("034f"),Object(p["a"])(m,a,o,!1,null,null,null)),g=v.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column",height:"95vh"}},[n("app-header"),n("app-body",{staticStyle:{"overflow-y":"auto","margin-top":"50px"}})],1)},O=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("div",[n("router-link",{attrs:{to:"/profile",id:"button"}},[n("i",{staticClass:"material-icons",attrs:{id:"profile"}},[t._v("person")])]),n("i",{staticClass:"material-icons",attrs:{id:"settings"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("settings")])],1)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"material-icons",attrs:{id:"add-list"}},[t._v("add")])])}],k={name:"AppHeader",data:function(){return{}},methods:{logout:function(){this.$auth.logout()}}},y=k,C=(n("5379"),Object(p["a"])(y,w,x,!1,null,"e058acb0",null)),j=C.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.lists,(function(t){return n("div",{key:t.id,attrs:{list:t}},[n("shopping-list",{attrs:{list:t}}),n("br")],1)})),0)},$=[],E=(n("96cf"),n("1da1")),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list"},on:{click:t.handleClick}},[n("shopping-list-header",{attrs:{list:this.list}}),t.isOpen?n("div",[n("shopping-list-body",{attrs:{listId:this.list.id}})],1):t._e()],1)},A=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list-header"}},[n("div",[t._v(" "+t._s(t.dateTime)+" ")])])},T=[],I=(n("b0c0"),n("ac1f"),n("5319"),n("1276"),{props:{list:Object},name:"ShoppingListHeader",data:function(){return{}},computed:{dateTime:function(){return this.list.created_on.replace("T"," ").split(".")[0]+" "+(this.list.name?this.list.name:"")}}}),L=I,U=Object(p["a"])(L,P,T,!1,null,null,null),B=U.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.items,(function(t){return n("div",{key:t.id},[n("shopping-item",{attrs:{itemName:t.name}})],1)})),0)},W=[],M=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-item"}},[n("div",[t._v(" "+t._s(t.itemName)+" ")])])}),H=[],J={props:{itemName:String},name:"ShoppingItem"},G=J,q=Object(p["a"])(G,M,H,!1,null,null,null),F=q.exports,K=(n("d3b7"),n("d4ec")),z=n("bee2"),D=n("bc3a"),X=n.n(D),Q="api/items/",V=function(){function t(){Object(K["a"])(this,t)}return Object(z["a"])(t,null,[{key:"getItems",value:function(t){return console.log("listId: "+t),new Promise((function(e,n){X.a.get(Q+t).then((function(t){e(t.data)})).catch((function(t){console.log(t),n(t)}))}))}}]),t}(),Y=V,Z={props:{listId:Number},components:{ShoppingItem:F},name:"ShoppingListBody",data:function(){return{items:[]}},methods:{},created:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Y.getItems(t.listId);case 2:t.items=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},tt=Z,et=Object(p["a"])(tt,N,W,!1,null,"0439d770",null),nt=et.exports,rt={props:{list:Object},components:{ShoppingListHeader:B,ShoppingListBody:nt},name:"ShoppingList",data:function(){return{isOpen:!1}},methods:{handleClick:function(){this.isOpen=!this.isOpen,console.log(this.list)}}},it=rt,at=(n("7831"),Object(p["a"])(it,R,A,!1,null,"4893e640",null)),ot=at.exports,st="api/lists/",ut=function(){function t(){Object(K["a"])(this,t)}return Object(z["a"])(t,null,[{key:"getLists",value:function(t){return console.log("useremail: "+t),new Promise((function(e,n){X.a.get(st+t).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))}}]),t}(),ct=ut,lt={components:{ShoppingList:ot},name:"AppBody",data:function(){return{lists:[]}},methods:{},created:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ct.getLists(t.$auth.user.email);case 2:t.lists=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},pt=lt,dt=Object(p["a"])(pt,S,$,!1,null,"695e034a",null),ht=dt.exports,ft={name:"Main",components:{AppHeader:j,AppBody:ht},methods:{}},mt=ft,vt=Object(p["a"])(mt,_,O,!1,null,"24d9bcd9",null),gt=vt.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$auth.user.nickname))]),n("h2",[t._v(t._s(t.$auth.user.email))]),n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})])},_t=[],Ot={},wt=Object(p["a"])(Ot,bt,_t,!1,null,null,null),xt=wt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" SETTINGS ")])},yt=[],Ct={},jt=Object(p["a"])(Ct,kt,yt,!1,null,null,null),St=jt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" ABOUT PAGE "),n("button",{on:{click:t.back}},[t._v("BACK")])])},Et=[],Rt={name:"About",methods:{back:function(){this.$router.push("/")}}},At=Rt,Pt=Object(p["a"])(At,$t,Et,!1,null,null,null),Tt=Pt.exports,It=(n("caad"),n("2532"),n("841c"),n("15fd")),Lt=n("9767"),Ut=function(){return window.history.replaceState({},document.title,window.location.pathname)},Bt=function(){return r},Nt=function(t){var e=t.onRedirectCallback,n=void 0===e?Ut:e,a=t.redirectUri,o=void 0===a?window.location.origin:a,s=Object(It["a"])(t,["onRedirectCallback","redirectUri"]);return r||(r=new i["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.popupOpen=!0,n.prev=1,n.next=4,e.auth0Client.loginWithPopup(t);case 4:return n.next=6,e.auth0Client.getUser();case 6:return e.user=n.sent,n.next=9,e.auth0Client.isAuthenticated();case 9:e.isAuthenticated=n.sent,e.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),console.error(n.t0),e.error=n.t0;case 17:return n.prev=17,e.popupOpen=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Lt["a"])({domain:s.domain,client_id:s.clientId,audience:s.audience,redirect_uri:o});case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:r=e.sent,i=r.appState,t.error=null,n(i);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),r)},Wt={install:function(t,e){t.prototype.$auth=Nt(e)}},Mt=function(t,e,n){var r=Bt(),i=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!r.loading)return i();r.$watch("loading",(function(t){if(!1===t)return i()}))};i["a"].use(b["a"]);var Ht=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:gt,beforeEnter:Mt},{path:"/profile",name:"profile",component:xt,beforeEnter:Mt},{path:"/settings",name:"settings",component:St,beforeEnter:Mt},{path:"/about",name:"about",component:Tt}]}),Jt=Ht,Gt=n("8160");i["a"].use(Wt,{domain:Gt["b"],clientId:Gt["a"],onRedirectCallback:function(t){Jt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),i["a"].use(Jt),i["a"].config.productionTip=!1,new i["a"]({router:Jt,render:function(t){return t(g)}}).$mount("#app")},7831:function(t,e,n){"use strict";var r=n("52a6"),i=n.n(r);i.a},8160:function(t){t.exports=JSON.parse('{"b":"fo-sho.eu.auth0.com","a":"OJ7B0KzGXdMtfk5q9bSgaLosFLFfNa4q"}')},"85ec":function(t,e,n){},"87c3":function(t,e,n){}});
//# sourceMappingURL=app.23494499.js.map