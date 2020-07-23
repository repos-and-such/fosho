(function(t){function e(e){for(var i,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"17e0":function(t,e,n){},2207:function(t,e,n){},"35d9":function(t,e,n){},3831:function(t,e,n){},"4bdb":function(t,e,n){},"544e":function(t,e,n){"use strict";var i=n("4bdb"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("error"),n("router-view")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}})]):t._e()},c=[],u={name:"Error",computed:{msg:function(){return this.$auth.error}}},l=u,d=n("2877"),f=Object(d["a"])(l,o,c,!1,null,null,null),p=f.exports,h={components:{Error:p}},m=h,g=(n("034f"),Object(d["a"])(m,a,s,!1,null,null,null)),v=g.exports,y=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column",height:"95vh"}},[n("app-header"),n("app-body",{staticStyle:{"overflow-y":"auto","margin-top":"50px"}})],1)},b=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("i",{staticClass:"material-icons",attrs:{id:"add-list"},on:{click:t.insertList}},[t._v("add")]),n("i",{staticClass:"material-icons",attrs:{id:"search"},on:{click:t.openSearch}},[t._v("search")])]),n("div",[n("router-link",{attrs:{to:"/profile",id:"button"}},[n("i",{staticClass:"material-icons",attrs:{id:"profile"}},[t._v("person")])]),n("i",{staticClass:"material-icons",attrs:{id:"settings"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("settings")])],1)])},_=[],O=(n("96cf"),n("1da1")),w=(n("d3b7"),n("d4ec")),$=n("bee2"),L=n("bc3a"),I=n.n(L),C="api/lists/",S=function(){function t(){Object(w["a"])(this,t)}return Object($["a"])(t,null,[{key:"getLists",value:function(t,e){return new Promise((function(n,i){I.a.get(C+t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){n(t.data)})).catch((function(t){i(t)}))}))}},{key:"insertList",value:function(t,e){return I.a.post(C,{email:t},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"updateList",value:function(t,e){return I.a.put(C,t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),j=S,R={name:"AppHeader",data:function(){return{}},methods:{logout:function(){this.$auth.logout()},insertList:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=j,e.t1=t.$auth.user.email,e.next=4,t.$auth.getTokenSilently();case 4:e.t2=e.sent,e.t0.insertList.call(e.t0,e.t1,e.t2).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("insertList",n)}else console.log("Database error: "+e.data[1])})).catch((function(t){console.log(t)}));case 6:case"end":return e.stop()}}),e)})))()},openSearch:function(){}}},E=R,B=(n("cabd"),Object(d["a"])(E,x,_,!1,null,"2451aee1",null)),T=B.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.lists,(function(t){return n("shopping-list",{key:t.id})})),1)},P=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list"}},[n("shopping-list-header",{key:t.key}),n("transition",{attrs:{name:"slide"}},[t.isOpen?n("div",[n("shopping-list-body",{key:t.key})],1):t._e()])],1)},U=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"list-open":t.isOpen,"list-closed":!t.isOpen},attrs:{id:"list-header"},on:{click:t.setOpen}},[n("div",{class:{"list-text-open":t.isOpen,"list-text-closed":!t.isOpen},staticStyle:{display:"flex","align-items":"center","flex-wrap":"wrap"}},[n("span",{staticStyle:{"margin-right":"12px",display:"flex","white-space":"nowrap"},attrs:{id:"date-time"}},[t._v(" "+t._s(t.dateTimeDisplay)+" ")]),n("span",{staticStyle:{display:"flex","align-items":"center","white-space":"nowrap"},attrs:{id:"list-name"}},[t.list.name&&t.editedListId!==t.key?n("span",[t._v(" "+t._s(t.list.name)+" ")]):t._e(),n("span",{staticStyle:{display:"flex","align-items":"center"}},[t.editedListId!==t.key?n("i",{staticClass:"material-icons",staticStyle:{display:"inline-flex","padding-left":"10px","font-size":"22px"},on:{click:t.openNameField}},[t._v("create")]):t._e(),t.key===t.editedListId?n("insert-list-name",{key:this.key}):t._e()],1)])]),t.itemsLoading&&t.isOpen?n("span",{staticClass:"lds-dual-ring",staticStyle:{"margin-right":"5px"}}):n("i",{staticClass:"material-icons",staticStyle:{display:"flex"},on:{click:t.openListMenu}},[t._v("menu")])])},M=[],D=(n("a15b"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","align-items":"center","margin-right":"20px"},attrs:{id:"insert-list-name"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{spellcheck:"false",placeholder:"list name",id:"text-area"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertListName(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons",attrs:{id:"insert-button"},on:{click:function(e){return t.insertListName()}}},[t._v("check")]),n("i",{staticClass:"material-icons",attrs:{id:"close-button"},on:{click:function(e){return t.closeNameField()}}},[t._v("clear")])])}),F=[],W={name:"InsertList",data:function(){return{entry:""}},methods:{insertListName:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.entry){e.next=9;break}return n=t.entry,t.entry="",e.t0=j,e.t1={name:n,list_id:t.key},e.next=7,t.$auth.getTokenSilently();case 7:e.t2=e.sent,e.t0.updateList.call(e.t0,e.t1,e.t2).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("updateList",[t.listBeforeUpdate,n])}else console.log("Database error: "+e.data[1]);t.closeNameField()})).catch((function(t){console.log(t)}));case 9:case"end":return e.stop()}}),e)})))()},closeNameField:function(){console.log("closing"),this.$store.commit("setEditedListId",null)}},computed:{key:function(){return this.$vnode.key},listBeforeUpdate:function(){return this.$store.getters.getListById(this.key)}}},H=W,J=(n("544e"),Object(d["a"])(H,D,F,!1,null,"626334a0",null)),G=J.exports,q={name:"ShoppingListHeader",components:{InsertListName:G},data:function(){return{}},methods:{setOpen:function(){console.log(this.isOpen),this.$store.commit("setOpen",this.key)},openListMenu:function(){alert("yo")},openNameField:function(){this.$store.commit("setEditedListId",this.key)}},computed:{list:function(){return this.$store.getters.getListById(this.key)},dateTimeDisplay:function(){var t=this.list.created_on.split("T")[0],e=t.split("-"),n=e.reverse().join("-"),i=this.list.created_on.split("T")[1];return i=i.split(".")[0],n+" "+i},key:function(){return this.$vnode.key},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},itemsLoading:function(){return this.$store.state.itemsLoading},editedListId:function(){return this.$store.state.editedListId}}},K=q,X=(n("6ef8"),Object(d["a"])(K,z,M,!1,null,"338ecb40",null)),Q=X.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemsLoading?t._e():n("div",{attrs:{id:"shopping-list-body"}},[n("insert-item",{key:t.key}),n("div",{attrs:{id:"shopping-list-items"}},t._l(t.items,(function(t){return n("shopping-item",{key:t.id})})),1)],1)},Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"},attrs:{id:"shopping-item"}},[t._v(" "+t._s(t.item.name)+" "),n("i",{staticClass:"material-icons",attrs:{id:"clear-icon"},on:{click:function(e){return t.deleteItem(t.item.id)}}},[t._v("clear")])])},tt=[],et=(n("b0c0"),"api/items/"),nt=function(){function t(){Object(w["a"])(this,t)}return Object($["a"])(t,null,[{key:"getItems",value:function(t,e){return new Promise((function(n,i){I.a.get(et+t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){n(t.data)})).catch((function(t){console.log(t),i(t)}))}))}},{key:"insertItem",value:function(t,e){return I.a.post(et,{name:t.name,list_id:t.list_id},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"deleteItem",value:function(t,e){return I.a.delete(et+t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),it=nt,rt={name:"ShoppingItem",methods:{updateItem:function(){},deleteItem:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=it,n.t1=t,n.next=4,e.$auth.getTokenSilently();case 4:n.t2=n.sent,n.t0.deleteItem.call(n.t0,n.t1,n.t2).then((function(t){t.data&&"ERROR"!==t.data[0]&&e.$store.commit("deleteItem",e.item)}));case 6:case"end":return n.stop()}}),n)})))()}},computed:{item:function(){return this.$store.getters.getItemById(this.key)},key:function(){return this.$vnode.key}}},at=rt,st=(n("8ea5"),Object(d["a"])(at,Z,tt,!1,null,"1d63bf26",null)),ot=st.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","margin-right":"20px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{spellcheck:"false",placeholder:"insert item",id:"insert-item"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertItem(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons",attrs:{id:"insert-button"},on:{click:function(e){return t.insertItem()}}},[t._v("check")])])},ut=[],lt={name:"InsertItem",data:function(){return{entry:""}},methods:{insertItem:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.entry){e.next=10;break}return n=t.entry,t.entry="",console.log(t.key),e.t0=it,e.t1={name:n,list_id:t.key},e.next=8,t.$auth.getTokenSilently();case 8:e.t2=e.sent,e.t0.insertItem.call(e.t0,e.t1,e.t2).then((function(e){if(e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("insertItem",n)}}));case 10:case"end":return e.stop()}}),e)})))()}},computed:{key:function(){return this.$vnode.key}}},dt=lt,ft=(n("c174"),Object(d["a"])(dt,ct,ut,!1,null,"b58fb2dc",null)),pt=ft.exports,ht={components:{ShoppingItem:ot,InsertItem:pt},name:"ShoppingListBody",methods:{},created:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("setLoading",!0),e.t0=it,e.t1=t.list.id,e.next=5,t.$auth.getTokenSilently();case 5:e.t2=e.sent,e.t0.getItems.call(e.t0,e.t1,e.t2).then((function(e){if(e){var n=e;t.$store.commit("setItems",n),t.$store.commit("setLoading",!1)}})).catch((function(e){throw t.$store.commit("setLoading",!1),e}));case 7:case"end":return e.stop()}}),e)})))()},computed:{list:function(){return this.$store.getters.getListById(this.key)},items:function(){return this.$store.state.items},key:function(){return this.$vnode.key},itemsLoading:function(){return this.$store.state.itemsLoading}}},mt=ht,gt=(n("f7f4"),Object(d["a"])(mt,V,Y,!1,null,"34965f8a",null)),vt=gt.exports,yt={components:{ShoppingListHeader:Q,ShoppingListBody:vt},name:"ShoppingList",data:function(){return{}},methods:{},computed:{lists:function(){return this.$store.state.lists},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},key:function(){return this.$vnode.key}}},kt=yt,bt=(n("ad81"),Object(d["a"])(kt,N,U,!1,null,"7755617e",null)),xt=bt.exports,_t={components:{ShoppingList:xt},name:"AppBody",data:function(){return{}},methods:{compare:function(t,e){var n=t.created_on,i=e.created_on,r=0;return n>i?r=-1:n<i&&(r=1),r}},created:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=j,e.t1=t.$auth.user.email,e.next=4,t.$auth.getTokenSilently();case 4:e.t2=e.sent,e.t0.getLists.call(e.t0,e.t1,e.t2).then((function(e){if(e){var n=e;t.$store.commit("setLists",n),t.$store.commit("setLoading",!1)}})).catch((function(e){throw t.$store.commit("setLoading",!1),e}));case 6:case"end":return e.stop()}}),e)})))()},computed:{lists:function(){var t=this.$store.state.lists;return t.sort(this.compare)}}},Ot=_t,wt=Object(d["a"])(Ot,A,P,!1,null,"16ceb6e4",null),$t=wt.exports,Lt={name:"Main",components:{AppHeader:T,AppBody:$t},methods:{}},It=Lt,Ct=Object(d["a"])(It,k,b,!1,null,"24d9bcd9",null),St=Ct.exports,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$auth.user.nickname))]),n("h2",[t._v(t._s(t.$auth.user.email))]),n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})])},Rt=[],Et={},Bt=Object(d["a"])(Et,jt,Rt,!1,null,null,null),Tt=Bt.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" SETTINGS ")])},Pt=[],Nt={},Ut=Object(d["a"])(Nt,At,Pt,!1,null,null,null),zt=Ut.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" ABOUT PAGE "),n("button",{on:{click:t.back}},[t._v("BACK")])])},Dt=[],Ft={name:"About",methods:{back:function(){this.$router.push("/")}}},Wt=Ft,Ht=Object(d["a"])(Wt,Mt,Dt,!1,null,null,null),Jt=Ht.exports,Gt=(n("caad"),n("2532"),n("841c"),n("15fd")),qt=n("9767"),Kt=function(){return window.history.replaceState({},document.title,window.location.pathname)},Xt=function(){return i},Qt=function(t){var e=t.onRedirectCallback,n=void 0===e?Kt:e,a=t.redirectUri,s=void 0===a?window.location.origin:a,o=Object(Gt["a"])(t,["onRedirectCallback","redirectUri"]);return i||(i=new r["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.popupOpen=!0,n.prev=1,n.next=4,e.auth0Client.loginWithPopup(t);case 4:return n.next=6,e.auth0Client.getUser();case 6:return e.user=n.sent,n.next=9,e.auth0Client.isAuthenticated();case 9:e.isAuthenticated=n.sent,e.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),console.error(n.t0),e.error=n.t0;case 17:return n.prev=17,e.popupOpen=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(qt["a"])({domain:o.domain,client_id:o.clientId,audience:o.audience,redirect_uri:s});case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:i=e.sent,r=i.appState,t.error=null,n(r);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),i)},Vt={install:function(t,e){t.prototype.$auth=Qt(e)}},Yt=function(t,e,n){var i=Xt(),r=function(){if(i.isAuthenticated)return n();i.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!i.loading)return r();i.$watch("loading",(function(t){if(!1===t)return r()}))};r["a"].use(y["a"]);var Zt=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:St,beforeEnter:Yt},{path:"/profile",name:"profile",component:Tt,beforeEnter:Yt},{path:"/settings",name:"settings",component:zt,beforeEnter:Yt},{path:"/about",name:"about",component:Jt}]}),te=Zt,ee=n("8160"),ne=(n("7db0"),n("c975"),n("a434"),n("5530")),ie=n("2f62");r["a"].use(ie["a"]);var re=new ie["a"].Store({state:{lists:[],items:[],openListIndex:0,itemsLoading:!1,editedListId:null},mutations:{setLists:function(t,e){t.lists=e},setItems:function(t,e){t.items=e},insertItem:function(t,e){t.items.push(e)},insertList:function(t,e){t.lists.push(e)},updateList:function(t,e){var n=t.lists.indexOf(e[0]),i=Object(ne["a"])({},e[1]);t.lists.splice(n,1,i)},deleteItem:function(t,e){var n=t.items.indexOf(e);t.items.splice(n,1)},setOpen:function(t,e){var n=t.lists.indexOf(t.lists.find((function(t){return t.id===e})));t.openListIndex=n},setLoading:function(t,e){t.itemsLoading=e},setEditedListId:function(t,e){t.editedListId=e}},getters:{getListById:function(t){return function(e){return t.lists.find((function(t){return t.id===e}))}},getItemById:function(t){return function(e){return t.items.find((function(t){return t.id===e}))}},getOpenStatusById:function(t){return function(e){return t.openListIndex===t.lists.indexOf(t.lists.find((function(t){return t.id===e})))}}}});r["a"].use(Vt,{domain:ee["c"],clientId:ee["b"],audience:ee["a"],onRedirectCallback:function(t){te.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),r["a"].use(te),r["a"].config.productionTip=!1,new r["a"]({router:te,store:re,render:function(t){return t(v)}}).$mount("#app")},"6ef8":function(t,e,n){"use strict";var i=n("2207"),r=n.n(i);r.a},8160:function(t){t.exports=JSON.parse('{"c":"fo-sho.eu.auth0.com","b":"OJ7B0KzGXdMtfk5q9bSgaLosFLFfNa4q","a":"fosho-general"}')},"85ec":function(t,e,n){},8987:function(t,e,n){},"8ea5":function(t,e,n){"use strict";var i=n("35d9"),r=n.n(i);r.a},"9d09":function(t,e,n){},ad81:function(t,e,n){"use strict";var i=n("17e0"),r=n.n(i);r.a},c174:function(t,e,n){"use strict";var i=n("8987"),r=n.n(i);r.a},cabd:function(t,e,n){"use strict";var i=n("9d09"),r=n.n(i);r.a},f7f4:function(t,e,n){"use strict";var i=n("3831"),r=n.n(i);r.a}});
//# sourceMappingURL=app.9dc1f66d.js.map