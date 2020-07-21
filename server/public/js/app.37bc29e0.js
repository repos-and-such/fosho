(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},2826:function(t,e,n){"use strict";var r=n("d652"),i=n.n(r);i.a},3360:function(t,e,n){},"4c06":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("error"),n("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}})]):t._e()},c=[],u={name:"Error",computed:{msg:function(){return this.$auth.error}}},l=u,d=n("2877"),f=Object(d["a"])(l,o,c,!1,null,null,null),p=f.exports,h={components:{Error:p}},m=h,v=(n("034f"),Object(d["a"])(m,a,s,!1,null,null,null)),g=v.exports,y=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column",height:"95vh"}},[n("app-header"),n("app-body",{staticStyle:{"overflow-y":"auto","margin-top":"50px"}})],1)},_=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("i",{staticClass:"material-icons",attrs:{id:"add-list"}},[t._v("add")]),n("i",{staticClass:"material-icons",attrs:{id:"search"},on:{click:t.openSearch}},[t._v("search")])]),n("div",[n("router-link",{attrs:{to:"/profile",id:"button"}},[n("i",{staticClass:"material-icons",attrs:{id:"profile"}},[t._v("person")])]),n("i",{staticClass:"material-icons",attrs:{id:"settings"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("settings")])],1)])},O=[],x={name:"AppHeader",data:function(){return{}},methods:{logout:function(){this.$auth.logout()},openSearch:function(){}}},w=x,C=(n("2826"),Object(d["a"])(w,k,O,!1,null,"d6877a3e",null)),$=C.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.lists,(function(t){return n("shopping-list",{key:t.id})})),1)},j=[],S=(n("96cf"),n("1da1")),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list"}},[n("shopping-list-header",{key:t.key}),t.isOpen?n("div",[n("shopping-list-body",{key:t.key})],1):t._e()],1)},L=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list-header"},on:{click:t.toggleListBody}},[n("div",[t._v(" "+t._s(this.list.created_on)+" "+t._s(this.list.name?this.list.name:null)+" ")]),t._m(0)])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"material-icons"},[t._v("menu")])])}],P={name:"ShoppingListHeader",data:function(){return{}},methods:{toggleListBody:function(){this.$store.commit("toggleListBody",this.list)}},computed:{list:function(){return this.$store.getters.getListById(this.key)},key:function(){return this.$vnode.key}}},A=P,T=(n("b710"),Object(d["a"])(A,R,B,!1,null,"a7ccae36",null)),U=T.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list-body"}},[n("insert-item"),t._l(t.items,(function(t){return n("shopping-item",{key:t.id})}))],2)},M=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"},attrs:{id:"shopping-item"}},[t._v(" "+t._s(t.item.name)+" "),n("i",{staticClass:"material-icons",attrs:{id:"clear-icon"},on:{click:function(e){return t.deleteItem(t.item.id)}}},[t._v("clear")])])},J=[],N=(n("b0c0"),n("d3b7"),n("d4ec")),G=n("bee2"),q=n("bc3a"),D=n.n(q),F="api/items/",K=function(){function t(){Object(N["a"])(this,t)}return Object(G["a"])(t,null,[{key:"getItems",value:function(t){return new Promise((function(e,n){D.a.get(F+t).then((function(t){e(t.data)})).catch((function(t){console.log(t),n(t)}))}))}},{key:"insertItem",value:function(t){return D.a.post(F,{name:t.name,list_id:t.list_id}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"deleteItem",value:function(t){return D.a.delete("".concat(F).concat(t)).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),z=K,X={name:"ShoppingItem",methods:{updateItem:function(){},deleteItem:function(t){var e=this;z.deleteItem(t).then((function(t){t.data[0]&&e.$store.commit("deleteItem",e.item)}))}},computed:{item:function(){return this.$store.getters.getItemById(this.key)},key:function(){return this.$vnode.key}}},Q=X,V=(n("bc46"),Object(d["a"])(Q,H,J,!1,null,"7350f87a",null)),Y=V.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],staticStyle:{display:"flex"},attrs:{spellcheck:"false",placeholder:"insert item",id:"insert-item"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertItem(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}})])},tt=[],et={name:"InsertItem",data:function(){return{entry:""}},methods:{insertItem:function(){var t=this;z.insertItem({name:this.entry,list_id:2}).then((function(e){if(e.data[0]){t.entry="";var n=Object.assign({},e.data[0]);console.log(n),t.$store.commit("insertItem",n)}}))}}},nt=et,rt=(n("7de3"),Object(d["a"])(nt,Z,tt,!1,null,"71fbc70d",null)),it=rt.exports,at={components:{ShoppingItem:Y,InsertItem:it},name:"ShoppingListBody",methods:{},created:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,z.getItems(t.list.id);case 2:n=e.sent,t.$store.commit("setItems",n),console.log(t.key),console.log(t.items);case 6:case"end":return e.stop()}}),e)})))()},computed:{list:function(){return this.$store.getters.getListById(this.key)},items:function(){return this.$store.state.items},key:function(){return this.$vnode.key}}},st=at,ot=(n("7fa1"),Object(d["a"])(st,W,M,!1,null,"9738430e",null)),ct=ot.exports,ut={components:{ShoppingListHeader:U,ShoppingListBody:ct},name:"ShoppingList",data:function(){return{}},methods:{},computed:{lists:function(){return this.$store.state.lists},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},key:function(){return this.$vnode.key}}},lt=ut,dt=(n("7403"),Object(d["a"])(lt,E,L,!1,null,"9a41f80e",null)),ft=dt.exports,pt="api/lists/",ht=function(){function t(){Object(N["a"])(this,t)}return Object(G["a"])(t,null,[{key:"getLists",value:function(t){return new Promise((function(e,n){D.a.get(pt+t).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))}}]),t}(),mt=ht,vt={components:{ShoppingList:ft},name:"AppBody",data:function(){return{}},methods:{compare:function(t,e){var n=t.created_on,r=e.created_on,i=0;return n>r?i=-1:n<r&&(i=1),i}},created:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,mt.getLists(t.$auth.user.email);case 2:n=e.sent,n.sort(t.compare),t.$store.commit("setLists",n);case 5:case"end":return e.stop()}}),e)})))()},computed:{lists:function(){return this.$store.state.lists}}},gt=vt,yt=Object(d["a"])(gt,I,j,!1,null,"47049a40",null),bt=yt.exports,_t={name:"Main",components:{AppHeader:$,AppBody:bt},methods:{}},kt=_t,Ot=Object(d["a"])(kt,b,_,!1,null,"24d9bcd9",null),xt=Ot.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$auth.user.nickname))]),n("h2",[t._v(t._s(t.$auth.user.email))]),n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})])},Ct=[],$t={},It=Object(d["a"])($t,wt,Ct,!1,null,null,null),jt=It.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" SETTINGS ")])},Et=[],Lt={},Rt=Object(d["a"])(Lt,St,Et,!1,null,null,null),Bt=Rt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" ABOUT PAGE "),n("button",{on:{click:t.back}},[t._v("BACK")])])},At=[],Tt={name:"About",methods:{back:function(){this.$router.push("/")}}},Ut=Tt,Wt=Object(d["a"])(Ut,Pt,At,!1,null,null,null),Mt=Wt.exports,Ht=(n("caad"),n("ac1f"),n("2532"),n("841c"),n("15fd")),Jt=n("9767"),Nt=function(){return window.history.replaceState({},document.title,window.location.pathname)},Gt=function(){return r},qt=function(t){var e=t.onRedirectCallback,n=void 0===e?Nt:e,a=t.redirectUri,s=void 0===a?window.location.origin:a,o=Object(Ht["a"])(t,["onRedirectCallback","redirectUri"]);return r||(r=new i["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.popupOpen=!0,n.prev=1,n.next=4,e.auth0Client.loginWithPopup(t);case 4:return n.next=6,e.auth0Client.getUser();case 6:return e.user=n.sent,n.next=9,e.auth0Client.isAuthenticated();case 9:e.isAuthenticated=n.sent,e.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),console.error(n.t0),e.error=n.t0;case 17:return n.prev=17,e.popupOpen=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(Jt["a"])({domain:o.domain,client_id:o.clientId,audience:o.audience,redirect_uri:s});case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:r=e.sent,i=r.appState,t.error=null,n(i);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),r)},Dt={install:function(t,e){t.prototype.$auth=qt(e)}},Ft=function(t,e,n){var r=Gt(),i=function(){if(r.isAuthenticated)return n();r.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!r.loading)return i();r.$watch("loading",(function(t){if(!1===t)return i()}))};i["a"].use(y["a"]);var Kt=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:xt,beforeEnter:Ft},{path:"/profile",name:"profile",component:jt,beforeEnter:Ft},{path:"/settings",name:"settings",component:Bt,beforeEnter:Ft},{path:"/about",name:"about",component:Mt}]}),zt=Kt,Xt=n("8160"),Qt=(n("7db0"),n("c975"),n("d81d"),n("a434"),n("5530")),Vt=n("2f62");i["a"].use(Vt["a"]);var Yt=new Vt["a"].Store({state:{lists:[],items:[]},mutations:{setLists:function(t,e){t.lists=e,t.lists.map((function(t){return t.isOpen=!1}))},setItems:function(t,e){t.items=e},insertItem:function(t,e){this.state.items.push(e)},deleteItem:function(t,e){var n=t.items.indexOf(e);this.state.items.splice(n,1)},toggleListBody:function(t,e){var n=t.lists.indexOf(e),r=Object(Qt["a"])({},e);r.isOpen=!r.isOpen,t.lists.splice(n,1,r)}},getters:{getListById:function(t){return function(e){return t.lists.find((function(t){return t.id===e}))}},getOpenStatusById:function(t){return function(e){return t.lists.find((function(t){return t.id===e})).isOpen}},getItemById:function(t){return function(e){return t.items.find((function(t){return t.id===e}))}}}});i["a"].use(Dt,{domain:Xt["b"],clientId:Xt["a"],onRedirectCallback:function(t){zt.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),i["a"].use(zt),i["a"].config.productionTip=!1,new i["a"]({router:zt,store:Yt,render:function(t){return t(g)}}).$mount("#app")},7403:function(t,e,n){"use strict";var r=n("4c06"),i=n.n(r);i.a},"7de3":function(t,e,n){"use strict";var r=n("3360"),i=n.n(r);i.a},"7fa1":function(t,e,n){"use strict";var r=n("97e3"),i=n.n(r);i.a},8160:function(t){t.exports=JSON.parse('{"b":"fo-sho.eu.auth0.com","a":"OJ7B0KzGXdMtfk5q9bSgaLosFLFfNa4q"}')},"85ec":function(t,e,n){},"97e3":function(t,e,n){},b710:function(t,e,n){"use strict";var r=n("d8f1"),i=n.n(r);i.a},bc46:function(t,e,n){"use strict";var r=n("f1cf"),i=n.n(r);i.a},d652:function(t,e,n){},d8f1:function(t,e,n){},f1cf:function(t,e,n){}});
//# sourceMappingURL=app.37bc29e0.js.map