(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},s=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"0a00":function(t,e,n){},1184:function(t,e,n){"use strict";var i=n("c3e4"),r=n.n(i);r.a},"283f":function(t,e,n){},3101:function(t,e,n){"use strict";var i=n("283f"),r=n.n(i);r.a},"4c06":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("error"),n("router-view")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}})]):t._e()},c=[],u={name:"Error",computed:{msg:function(){return this.$auth.error}}},l=u,d=n("2877"),f=Object(d["a"])(l,o,c,!1,null,null,null),p=f.exports,h={components:{Error:p}},m=h,v=(n("034f"),Object(d["a"])(m,s,a,!1,null,null,null)),g=v.exports,y=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column",height:"95vh"}},[n("app-header"),n("app-body",{staticStyle:{"overflow-y":"auto","margin-top":"50px"}})],1)},b=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("i",{staticClass:"material-icons",attrs:{id:"add-list"},on:{click:t.insertList}},[t._v("add")]),n("i",{staticClass:"material-icons",attrs:{id:"search"},on:{click:t.openSearch}},[t._v("search")])]),n("div",[n("router-link",{attrs:{to:"/profile",id:"button"}},[n("i",{staticClass:"material-icons",attrs:{id:"profile"}},[t._v("person")])]),n("i",{staticClass:"material-icons",attrs:{id:"settings"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("settings")])],1)])},O=[],x=(n("d3b7"),n("d4ec")),L=n("bee2"),$=n("bc3a"),I=n.n($),w="api/lists/",C=function(){function t(){Object(x["a"])(this,t)}return Object(L["a"])(t,null,[{key:"getLists",value:function(t){return new Promise((function(e,n){I.a.get(w+t).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))}},{key:"insertList",value:function(t){return I.a.post(w,{email:t}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"updateList",value:function(t){return I.a.put(w,t).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),j=C,S={name:"AppHeader",data:function(){return{}},methods:{logout:function(){this.$auth.logout()},insertList:function(){var t=this;j.insertList(this.$auth.user.email).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("insertList",n)}else console.log("Database error: "+e.data[1])})).catch((function(t){console.log(t)}))},openSearch:function(){}}},E=S,R=(n("99d6"),Object(d["a"])(E,_,O,!1,null,"6da2d5f6",null)),B=R.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.lists,(function(t){return n("shopping-list",{key:t.id})})),1)},A=[],T=(n("96cf"),n("1da1")),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list"}},[n("shopping-list-header",{key:t.key}),t.isOpen?n("div",[n("shopping-list-body",{key:t.key})],1):t._e()],1)},U=[],M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"list-open":t.isOpen,"list-closed":!t.isOpen},attrs:{id:"list-header"},on:{click:t.setOpen}},[n("div",{class:{"list-text-open":t.isOpen,"list-text-closed":!t.isOpen}},[n("span",{staticStyle:{"margin-right":"12px"}},[t._v(" "+t._s(t.dateTime)+" ")]),t.list.name?n("span",[t._v(" "+t._s(t.list.name)+" ")]):t._e(),t.editedListId?t._e():n("i",{staticClass:"material-icons",staticStyle:{display:"inline-flex","align-self":"center","padding-left":"10px","font-size":"22px"},on:{click:t.openNameField}},[t._v("create")]),t.key===t.editedListId?n("insert-list-name",{key:this.key}):t._e()],1),t.itemsLoading&&t.isOpen?n("span",{staticClass:"lds-dual-ring"}):t._e(),n("div",[n("i",{staticClass:"material-icons",staticStyle:{display:"flex"},on:{click:t.openListMenu}},[t._v("menu")])])])},F=[],W=(n("ac1f"),n("5319"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","margin-right":"20px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{spellcheck:"false",placeholder:"insert list name",id:"insert-list-name"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertListName(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons",attrs:{id:"insert-button"},on:{click:function(e){return t.insertListName()}}},[t._v("check")]),n("i",{staticClass:"material-icons",attrs:{id:"close-button"},on:{click:function(e){return t.closeNameField()}}},[t._v("clear")])])}),D=[],H={name:"InsertList",data:function(){return{entry:""}},methods:{insertListName:function(){var t=this;if(this.entry){var e=this.entry;this.entry="",j.updateList({name:e,list_id:this.key}).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("updateList",[t.listBeforeUpdate,n])}else console.log("Database error: "+e.data[1]);t.closeNameField()})).catch((function(t){console.log(t)}))}},closeNameField:function(){console.log("closing"),this.$store.commit("setEditedListId",null)}},computed:{key:function(){return this.$vnode.key},listBeforeUpdate:function(){return this.$store.getters.getListById(this.key)}}},J=H,G=(n("3101"),Object(d["a"])(J,W,D,!1,null,"04cc95a4",null)),q=G.exports,z={name:"ShoppingListHeader",components:{InsertListName:q},data:function(){return{}},methods:{setOpen:function(){this.$store.commit("setOpen",this.key)},openListMenu:function(){alert("yo")},openNameField:function(){this.$store.commit("setEditedListId",this.key)}},computed:{list:function(){return this.$store.getters.getListById(this.key)},dateTime:function(){return this.list.created_on.replace("T"," ").split(".")[0]},key:function(){return this.$vnode.key},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},itemsLoading:function(){return this.$store.state.itemsLoading},editedListId:function(){return this.$store.state.editedListId}}},K=z,X=(n("1184"),Object(d["a"])(K,M,F,!1,null,"55eaf83e",null)),Q=X.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list-body"}},[n("insert-item",{key:t.key}),t.itemsLoading?t._e():n("div",{attrs:{id:"shopping-list-items"}},t._l(t.items,(function(t){return n("shopping-item",{key:t.id})})),1)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"},attrs:{id:"shopping-item"}},[t._v(" "+t._s(t.item.name)+" "),n("i",{staticClass:"material-icons",attrs:{id:"clear-icon"},on:{click:function(e){return t.deleteItem(t.item.id)}}},[t._v("clear")])])},tt=[],et=(n("b0c0"),"api/items/"),nt=function(){function t(){Object(x["a"])(this,t)}return Object(L["a"])(t,null,[{key:"getItems",value:function(t){return new Promise((function(e,n){I.a.get(et+t).then((function(t){e(t.data)})).catch((function(t){console.log(t),n(t)}))}))}},{key:"insertItem",value:function(t){return I.a.post(et,{name:t.name,list_id:t.list_id}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"deleteItem",value:function(t){return I.a.delete("".concat(et).concat(t)).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),it=nt,rt={name:"ShoppingItem",methods:{updateItem:function(){},deleteItem:function(t){var e=this;it.deleteItem(t).then((function(t){t.data&&"ERROR"!==t.data[0]&&e.$store.commit("deleteItem",e.item)}))}},computed:{item:function(){return this.$store.getters.getItemById(this.key)},key:function(){return this.$vnode.key}}},st=rt,at=(n("6162"),Object(d["a"])(st,Z,tt,!1,null,"41c64468",null)),ot=at.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","margin-right":"20px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{spellcheck:"false",placeholder:"insert item",id:"insert-item"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertItem(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons",attrs:{id:"insert-button"},on:{click:function(e){return t.insertItem()}}},[t._v("check")])])},ut=[],lt={name:"InsertItem",data:function(){return{entry:""}},methods:{insertItem:function(){var t=this;if(this.entry){var e=this.entry;this.entry="",console.log(this.key),it.insertItem({name:e,list_id:this.key}).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("insertItem",n)}}))}}},computed:{key:function(){return this.$vnode.key}}},dt=lt,ft=(n("fa3c"),Object(d["a"])(dt,ct,ut,!1,null,"7e993eac",null)),pt=ft.exports,ht={components:{ShoppingItem:ot,InsertItem:pt},name:"ShoppingListBody",methods:{},created:function(){var t=this;this.$store.commit("setLoading",!0),it.getItems(this.list.id).then((function(e){if(e){var n=e;t.$store.commit("setItems",n),t.$store.commit("setLoading",!1)}})).catch((function(e){throw t.$store.commit("setLoading",!1),e}))},computed:{list:function(){return this.$store.getters.getListById(this.key)},items:function(){return this.$store.state.items},key:function(){return this.$vnode.key},itemsLoading:function(){return this.$store.state.itemsLoading}}},mt=ht,vt=(n("6709"),Object(d["a"])(mt,V,Y,!1,null,"e16be564",null)),gt=vt.exports,yt={components:{ShoppingListHeader:Q,ShoppingListBody:gt},name:"ShoppingList",data:function(){return{}},methods:{},computed:{lists:function(){return this.$store.state.lists},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},key:function(){return this.$vnode.key}}},kt=yt,bt=(n("7403"),Object(d["a"])(kt,N,U,!1,null,"9a41f80e",null)),_t=bt.exports,Ot={components:{ShoppingList:_t},name:"AppBody",data:function(){return{}},methods:{compare:function(t,e){var n=t.created_on,i=e.created_on,r=0;return n>i?r=-1:n<i&&(r=1),r}},created:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j.getLists(t.$auth.user.email);case 2:n=e.sent,t.$store.commit("setLists",n);case 4:case"end":return e.stop()}}),e)})))()},computed:{lists:function(){var t=this.$store.state.lists;return t.sort(this.compare)}}},xt=Ot,Lt=Object(d["a"])(xt,P,A,!1,null,"c5eb9e36",null),$t=Lt.exports,It={name:"Main",components:{AppHeader:B,AppBody:$t},methods:{}},wt=It,Ct=Object(d["a"])(wt,k,b,!1,null,"24d9bcd9",null),jt=Ct.exports,St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$auth.user.nickname))]),n("h2",[t._v(t._s(t.$auth.user.email))]),n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})])},Et=[],Rt={},Bt=Object(d["a"])(Rt,St,Et,!1,null,null,null),Pt=Bt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" SETTINGS ")])},Tt=[],Nt={},Ut=Object(d["a"])(Nt,At,Tt,!1,null,null,null),Mt=Ut.exports,Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" ABOUT PAGE "),n("button",{on:{click:t.back}},[t._v("BACK")])])},Wt=[],Dt={name:"About",methods:{back:function(){this.$router.push("/")}}},Ht=Dt,Jt=Object(d["a"])(Ht,Ft,Wt,!1,null,null,null),Gt=Jt.exports,qt=(n("caad"),n("2532"),n("841c"),n("15fd")),zt=n("9767"),Kt=function(){return window.history.replaceState({},document.title,window.location.pathname)},Xt=function(){return i},Qt=function(t){var e=t.onRedirectCallback,n=void 0===e?Kt:e,s=t.redirectUri,a=void 0===s?window.location.origin:s,o=Object(qt["a"])(t,["onRedirectCallback","redirectUri"]);return i||(i=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.popupOpen=!0,n.prev=1,n.next=4,e.auth0Client.loginWithPopup(t);case 4:return n.next=6,e.auth0Client.getUser();case 6:return e.user=n.sent,n.next=9,e.auth0Client.isAuthenticated();case 9:e.isAuthenticated=n.sent,e.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),console.error(n.t0),e.error=n.t0;case 17:return n.prev=17,e.popupOpen=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(zt["a"])({domain:o.domain,client_id:o.clientId,audience:o.audience,redirect_uri:a});case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:i=e.sent,r=i.appState,t.error=null,n(r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),i)},Vt={install:function(t,e){t.prototype.$auth=Qt(e)}},Yt=function(t,e,n){var i=Xt(),r=function(){if(i.isAuthenticated)return n();i.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!i.loading)return r();i.$watch("loading",(function(t){if(!1===t)return r()}))};r["a"].use(y["a"]);var Zt=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:jt,beforeEnter:Yt},{path:"/profile",name:"profile",component:Pt,beforeEnter:Yt},{path:"/settings",name:"settings",component:Mt,beforeEnter:Yt},{path:"/about",name:"about",component:Gt}]}),te=Zt,ee=n("8160"),ne=(n("7db0"),n("c975"),n("a434"),n("5530")),ie=n("2f62");r["a"].use(ie["a"]);var re=new ie["a"].Store({state:{lists:[],items:[],openListIndex:0,itemsLoading:!1,editedListId:null},mutations:{setLists:function(t,e){t.lists=e},setItems:function(t,e){t.items=e},insertItem:function(t,e){t.items.push(e)},insertList:function(t,e){t.lists.push(e)},updateList:function(t,e){var n=t.lists.indexOf(e[0]),i=Object(ne["a"])({},e[1]);t.lists.splice(n,1,i)},deleteItem:function(t,e){var n=t.items.indexOf(e);t.items.splice(n,1)},setOpen:function(t,e){var n=t.lists.indexOf(t.lists.find((function(t){return t.id===e})));t.openListIndex=n},setLoading:function(t,e){t.itemsLoading=e},setEditedListId:function(t,e){t.editedListId=e}},getters:{getListById:function(t){return function(e){return t.lists.find((function(t){return t.id===e}))}},getItemById:function(t){return function(e){return t.items.find((function(t){return t.id===e}))}},getOpenStatusById:function(t){return function(e){return t.openListIndex===t.lists.indexOf(t.lists.find((function(t){return t.id===e})))}}}});r["a"].use(Vt,{domain:ee["b"],clientId:ee["a"],onRedirectCallback:function(t){te.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),r["a"].use(te),r["a"].config.productionTip=!1,new r["a"]({router:te,store:re,render:function(t){return t(g)}}).$mount("#app")},6162:function(t,e,n){"use strict";var i=n("d6ba"),r=n.n(i);r.a},6709:function(t,e,n){"use strict";var i=n("8e1b"),r=n.n(i);r.a},7403:function(t,e,n){"use strict";var i=n("4c06"),r=n.n(i);r.a},"7a93":function(t,e,n){},8160:function(t){t.exports=JSON.parse('{"b":"fo-sho.eu.auth0.com","a":"OJ7B0KzGXdMtfk5q9bSgaLosFLFfNa4q"}')},"85ec":function(t,e,n){},"8e1b":function(t,e,n){},"99d6":function(t,e,n){"use strict";var i=n("0a00"),r=n.n(i);r.a},c3e4:function(t,e,n){},d6ba:function(t,e,n){},fa3c:function(t,e,n){"use strict";var i=n("7a93"),r=n.n(i);r.a}});
//# sourceMappingURL=app.c1ef25b7.js.map