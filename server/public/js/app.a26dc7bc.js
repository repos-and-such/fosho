(function(t){function e(e){for(var i,a,c=e[0],o=e[1],u=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("85ec"),s=n.n(i);s.a},"111a":function(t,e,n){"use strict";var i=n("a483"),s=n.n(i);s.a},"1c79":function(t,e,n){"use strict";var i=n("724d"),s=n.n(i);s.a},"35d9":function(t,e,n){},4678:function(t,e,n){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("error"),n("router-view")],1)},a=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.msg?n("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}})]):t._e()},o=[],u={name:"Error",computed:{msg:function(){return this.$auth.error}}},l=u,d=n("2877"),f=Object(d["a"])(l,c,o,!1,null,null,null),p=f.exports,m={components:{Error:p}},h=m,g=(n("034f"),Object(d["a"])(h,r,a,!1,null,null,null)),b=g.exports,v=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column",height:"95vh"}},[n("app-header"),n("app-body",{staticStyle:{"overflow-y":"auto","margin-top":"50px"}})],1)},j=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticStyle:{display:"flex"}},[t.insertListLoadingTemp?n("loading-icon",{staticStyle:{padding:"10px"}}):n("i",{staticClass:"material-icons",attrs:{id:"add-list"},on:{click:t.insertList}},[t._v("add")]),n("i",{staticClass:"material-icons",attrs:{id:"search"},on:{click:t.openSearch}},[t._v("search")])],1),n("div",[n("router-link",{attrs:{to:"/profile",id:"button"}},[n("i",{staticClass:"material-icons",attrs:{id:"profile"}},[t._v("person")])]),n("i",{staticClass:"material-icons",attrs:{id:"settings"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("settings")])],1)])},x=[],_=(n("96cf"),n("1da1")),O=(n("d3b7"),n("d4ec")),L=n("bee2"),w=n("bc3a"),$=n.n(w),I=n("c1df"),S=n.n(I),C="api/lists/",R=function(){function t(){Object(O["a"])(this,t)}return Object(L["a"])(t,null,[{key:"getLists",value:function(t){return new Promise((function(e,n){$.a.get(C,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))}},{key:"insertList",value:function(t){return $.a.post(C,{localTimestamp:S()().format()},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"updateList",value:function(t,e){return $.a.put(C,t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"deleteList",value:function(t,e){return $.a.delete(C+t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),E=R,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"lds-dual-ring",staticStyle:{"margin-right":"5px"}})])}],B={name:"LoadingIcon",data:function(){return{}},methods:{},computed:{}},A=B,M=(n("111a"),Object(d["a"])(A,z,T,!1,null,"0642d009",null)),P=M.exports,N={components:{LoadingIcon:P},name:"AppHeader",data:function(){return{insertListLoadingTemp:!1}},methods:{logout:function(){this.$auth.logout()},insertList:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.insertListLoadingTemp=!0,console.log(t.insertListLoadingTemp),e.t0=E,e.next=5,t.$auth.getTokenSilently();case 5:e.t1=e.sent,e.t0.insertList.call(e.t0,e.t1).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("insertList",n),t.insertListLoadingTemp=!1}else console.log(e.data[1])})).catch((function(t){console.log(t)}));case 7:case"end":return e.stop()}}),e)})))()},openSearch:function(){}},computed:{listInsertLoading:function(){return this.$store.state.listInsertLoading}}},U=N,F=(n("fc51"),Object(d["a"])(U,k,x,!1,null,"14cedb6b",null)),D=F.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.lists,(function(t){return n("shopping-list",{key:t.id})})),1)},q=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"shopping-list"}},[n("shopping-list-header",{key:t.key}),n("transition",{attrs:{name:"slide"}},[t.menuIsOpen?n("div",[n("list-menu",{key:t.key})],1):t._e()]),n("transition",{attrs:{name:"slide"}},[t.isOpen?n("div",[n("shopping-list-body",{key:t.key})],1):t._e()])],1)},J=[],G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"list-open":t.isOpen,"list-closed":!t.isOpen},attrs:{id:"list-header"}},[n("div",{class:{"list-text-open":t.isOpen,"list-text-closed":!t.isOpen},staticStyle:{display:"flex","align-items":"center","flex-wrap":"wrap"},on:{click:t.setOpen}},[n("span",{staticStyle:{"margin-right":"12px",display:"flex","white-space":"nowrap"},attrs:{id:"date-time"}},[t._v(" "+t._s(t.dateTimeDisplay)+" ")]),n("span",{staticStyle:{display:"flex","align-items":"center","white-space":"nowrap"},attrs:{id:"list-name"}},[t.list.name&&t.editedListId!==t.key?n("span",[t._v(" "+t._s(t.list.name)+" ")]):t._e(),n("span",{staticStyle:{display:"flex","align-items":"center"}},[t.editedListId!==t.key?n("i",{staticClass:"material-icons",staticStyle:{display:"inline-flex","padding-left":"10px","font-size":"22px"},on:{click:t.openNameField}},[t._v("create")]):t._e(),t.key===t.editedListId?n("insert-list-name",{key:this.key}):t._e()],1)])]),t.itemsLoading&&t.isOpen?n("span",{staticClass:"lds-dual-ring",staticStyle:{"margin-right":"5px"}}):n("i",{staticClass:"material-icons",staticStyle:{display:"flex"},on:{click:t.toggleListMenu}},[t._v("menu")])])},K=[],X=(n("a15b"),n("ac1f"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","align-items":"center","margin-right":"20px"},attrs:{id:"insert-list-name"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{spellcheck:"false",placeholder:"list name",id:"text-area"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertListName(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons",attrs:{id:"insert-button"},on:{click:function(e){return t.insertListName()}}},[t._v("check")]),n("i",{staticClass:"material-icons",attrs:{id:"close-button"},on:{click:function(e){return t.closeNameField()}}},[t._v("clear")])])}),Q=[],V={name:"InsertList",data:function(){return{entry:""}},methods:{insertListName:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.entry){e.next=9;break}return n=t.entry,t.entry="",e.t0=E,e.t1={name:n,list_id:t.key},e.next=7,t.$auth.getTokenSilently();case 7:e.t2=e.sent,e.t0.updateList.call(e.t0,e.t1,e.t2).then((function(e){if(e.data&&"ERROR"!==e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("updateList",[t.listBeforeUpdate,n])}else console.log(e.data[1]);t.closeNameField()})).catch((function(t){console.log(t)}));case 9:case"end":return e.stop()}}),e)})))()},closeNameField:function(){this.$store.commit("setEditedListId",null)}},computed:{key:function(){return this.$vnode.key},listBeforeUpdate:function(){return this.$store.getters.getListById(this.key)}}},Y=V,Z=(n("934d"),Object(d["a"])(Y,X,Q,!1,null,"51da0c74",null)),tt=Z.exports,et={name:"ShoppingListHeader",components:{InsertListName:tt},data:function(){return{}},methods:{setOpen:function(){this.$store.commit("setOpen",this.key)},toggleListMenu:function(){this.menuIsOpen?this.$store.commit("setOpenListMenu",null):this.$store.commit("setOpenListMenu",this.key)},openNameField:function(){this.$store.commit("setEditedListId",this.key)}},computed:{list:function(){return this.$store.getters.getListById(this.key)},dateTimeDisplay:function(){if(this.list.created_on){var t=this.list.created_on.split("T")[0],e=t.split("-"),n=e.reverse().join("-"),i=this.list.created_on.split("T")[1];return i=i.split(".")[0],n+" "+i}return""},key:function(){return this.$vnode.key},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},menuIsOpen:function(){return this.$store.getters.getOpenMenuStatusById(this.key)},itemsLoading:function(){return this.$store.state.itemsLoading},editedListId:function(){return this.$store.state.editedListId}}},nt=et,it=(n("1c79"),Object(d["a"])(nt,G,K,!1,null,"3ceef537",null)),st=it.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.itemsLoading?t._e():n("div",{attrs:{id:"shopping-list-body"}},[n("insert-item",{key:t.key}),n("div",{attrs:{id:"shopping-list-items"}},t._l(t.items,(function(t){return n("shopping-item",{key:t.id})})),1)],1)},at=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"},attrs:{id:"shopping-item"}},[t._v(" "+t._s(t.item.name)+" "),n("i",{staticClass:"material-icons",attrs:{id:"clear-icon"},on:{click:function(e){return t.deleteItem(t.item.id)}}},[t._v("clear")])])},ot=[],ut=(n("b0c0"),"api/items/"),lt=function(){function t(){Object(O["a"])(this,t)}return Object(L["a"])(t,null,[{key:"getItems",value:function(t,e){return new Promise((function(n,i){$.a.get(ut+t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){n(t.data)})).catch((function(t){console.log(t),i(t)}))}))}},{key:"insertItem",value:function(t,e){return $.a.post(ut,{name:t.name,list_id:t.list_id},{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}},{key:"deleteItem",value:function(t,e){return $.a.delete(ut+t,{headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){return t})).catch((function(t){console.log(t)}))}}]),t}(),dt=lt,ft={name:"ShoppingItem",methods:{updateItem:function(){},deleteItem:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.t0=dt,n.t1=t,n.next=4,e.$auth.getTokenSilently();case 4:n.t2=n.sent,n.t0.deleteItem.call(n.t0,n.t1,n.t2).then((function(t){t.data&&"ERROR"!==t.data[0]&&e.$store.commit("deleteItem",e.item)}));case 6:case"end":return n.stop()}}),n)})))()}},computed:{item:function(){return this.$store.getters.getItemById(this.key)},key:function(){return this.$vnode.key}}},pt=ft,mt=(n("8ea5"),Object(d["a"])(pt,ct,ot,!1,null,"1d63bf26",null)),ht=mt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","margin-right":"20px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"entry"}],attrs:{spellcheck:"false",placeholder:"insert item",id:"insert-item"},domProps:{value:t.entry},on:{keydown:[function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertItem(e)}],input:function(e){e.target.composing||(t.entry=e.target.value)}}}),t._v(" "),n("i",{staticClass:"material-icons",attrs:{id:"insert-button"},on:{click:function(e){return t.insertItem()}}},[t._v("check")])])},bt=[],vt={name:"InsertItem",data:function(){return{entry:""}},methods:{insertItem:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.entry){e.next=10;break}return n=t.entry,t.entry="",console.log(t.key),e.t0=dt,e.t1={name:n,list_id:t.key},e.next=8,t.$auth.getTokenSilently();case 8:e.t2=e.sent,e.t0.insertItem.call(e.t0,e.t1,e.t2).then((function(e){if(e.data[0]){var n=Object.assign({},e.data[0]);t.$store.commit("insertItem",n)}}));case 10:case"end":return e.stop()}}),e)})))()}},computed:{key:function(){return this.$vnode.key}}},yt=vt,jt=(n("c174"),Object(d["a"])(yt,gt,bt,!1,null,"b58fb2dc",null)),kt=jt.exports,xt={components:{ShoppingItem:ht,InsertItem:kt},name:"ShoppingListBody",methods:{},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("setLoading",!0),e.t0=dt,e.t1=t.list.id,e.next=5,t.$auth.getTokenSilently();case 5:e.t2=e.sent,e.t0.getItems.call(e.t0,e.t1,e.t2).then((function(e){if(e){var n=e;t.$store.commit("setItems",n),t.$store.commit("setLoading",!1)}})).catch((function(e){throw t.$store.commit("setLoading",!1),e}));case 7:case"end":return e.stop()}}),e)})))()},computed:{list:function(){return this.$store.getters.getListById(this.key)},items:function(){return this.$store.state.items},key:function(){return this.$vnode.key},itemsLoading:function(){return this.$store.state.itemsLoading}}},_t=xt,Ot=(n("65ad"),Object(d["a"])(_t,rt,at,!1,null,"6841dabb",null)),Lt=Ot.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{on:{click:t.deleteList}},[t._v(" delete list ")]),n("div",[t._v(" copy list ")]),n("div",[t._v(" edit ??? ")])])},$t=[],It={name:"ListMenu",methods:{deleteList:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("deleted key:"+t.key),e.t0=E,e.t1=t.key,e.next=5,t.$auth.getTokenSilently();case 5:e.t2=e.sent,e.t0.deleteList.call(e.t0,e.t1,e.t2).then((function(e){e.data&&"ERROR"!==e.data[0]&&t.$store.commit("deleteList",t.list)}));case 7:case"end":return e.stop()}}),e)})))()}},computed:{list:function(){return this.$store.getters.getListById(this.key)},key:function(){return this.$vnode.key}}},St=It,Ct=Object(d["a"])(St,wt,$t,!1,null,null,null),Rt=Ct.exports,Et={components:{ShoppingListHeader:st,ShoppingListBody:Lt,ListMenu:Rt},name:"ShoppingList",data:function(){return{closingTime:!1}},methods:{},computed:{lists:function(){return this.$store.state.lists},isOpen:function(){return this.$store.getters.getOpenStatusById(this.key)},menuIsOpen:function(){return this.$store.getters.getOpenMenuStatusById(this.key)},key:function(){return this.$vnode.key}}},zt=Et,Tt=(n("583b"),Object(d["a"])(zt,H,J,!1,null,"cc699d5e",null)),Bt=Tt.exports,At={components:{ShoppingList:Bt},name:"AppBody",data:function(){return{}},methods:{compare:function(t,e){var n=t.created_on,i=e.created_on,s=0;return n>i?s=-1:n<i&&(s=1),s}},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=E,e.next=3,t.$auth.getTokenSilently();case 3:e.t1=e.sent,e.t0.getLists.call(e.t0,e.t1).then((function(e){if(e){var n=e;t.$store.commit("setLists",n),t.$store.commit("setLoading",!1)}})).catch((function(e){throw t.$store.commit("setLoading",!1),e}));case 5:case"end":return e.stop()}}),e)})))()},computed:{lists:function(){var t=this.$store.state.lists;return t?t.sort(this.compare):""}}},Mt=At,Pt=Object(d["a"])(Mt,W,q,!1,null,"56d5e90d",null),Nt=Pt.exports,Ut={name:"Main",components:{AppHeader:D,AppBody:Nt},methods:{}},Ft=Ut,Dt=Object(d["a"])(Ft,y,j,!1,null,"24d9bcd9",null),Wt=Dt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$auth.user.nickname))]),n("h2",[t._v(t._s(t.$auth.user.email))]),n("img",{staticClass:"rounded-circle img-fluid profile-picture",attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})])},Ht=[],Jt={},Gt=Object(d["a"])(Jt,qt,Ht,!1,null,null,null),Kt=Gt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" SETTINGS ")])},Qt=[],Vt={},Yt=Object(d["a"])(Vt,Xt,Qt,!1,null,null,null),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" ABOUT PAGE "),n("button",{on:{click:t.back}},[t._v("BACK")])])},ee=[],ne={name:"About",methods:{back:function(){this.$router.push("/")}}},ie=ne,se=Object(d["a"])(ie,te,ee,!1,null,null,null),re=se.exports,ae=(n("caad"),n("2532"),n("841c"),n("15fd")),ce=n("9767"),oe=function(){return window.history.replaceState({},document.title,window.location.pathname)},ue=function(){return i},le=function(t){var e=t.onRedirectCallback,n=void 0===e?oe:e,r=t.redirectUri,a=void 0===r?window.location.origin:r,c=Object(ae["a"])(t,["onRedirectCallback","redirectUri"]);return i||(i=new s["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.popupOpen=!0,n.prev=1,n.next=4,e.auth0Client.loginWithPopup(t);case 4:return n.next=6,e.auth0Client.getUser();case 6:return e.user=n.sent,n.next=9,e.auth0Client.isAuthenticated();case 9:e.isAuthenticated=n.sent,e.error=null,n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),console.error(n.t0),e.error=n.t0;case 17:return n.prev=17,e.popupOpen=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))()},handleRedirectCallback:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,t.error=null,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error=e.t0;case 14:return e.prev=14,t.loading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(ce["a"])({domain:c.domain,client_id:c.clientId,audience:c.audience,redirect_uri:a});case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=11;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:i=e.sent,s=i.appState,t.error=null,n(s);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),t.error=e.t0;case 16:return e.prev=16,e.next=19,t.auth0Client.isAuthenticated();case 19:return t.isAuthenticated=e.sent,e.next=22,t.auth0Client.getUser();case 22:return t.user=e.sent,t.loading=!1,e.finish(16);case 25:case"end":return e.stop()}}),e,null,[[3,13,16,25]])})))()}}),i)},de={install:function(t,e){t.prototype.$auth=le(e)}},fe=function(t,e,n){var i=ue(),s=function(){if(i.isAuthenticated)return n();i.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!i.loading)return s();i.$watch("loading",(function(t){if(!1===t)return s()}))};s["a"].use(v["a"]);var pe=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:Wt,beforeEnter:fe},{path:"/profile",name:"profile",component:Kt,beforeEnter:fe},{path:"/settings",name:"settings",component:Zt,beforeEnter:fe},{path:"/about",name:"about",component:re}]}),me=pe,he=n("8160"),ge=(n("7db0"),n("c975"),n("a434"),n("5530")),be=n("2f62");s["a"].use(be["a"]);var ve=new be["a"].Store({state:{lists:[],items:[],openListIndex:0,openMenuId:null,itemsLoading:!1,editedListId:null,listInsertLoading:!1},mutations:{setLoading:function(t,e){t.itemsLoading=e},setItems:function(t,e){t.items=e},insertItem:function(t,e){t.items.push(e)},deleteItem:function(t,e){var n=t.items.indexOf(e);t.items.splice(n,1)},setLists:function(t,e){t.lists=e},insertList:function(t,e){t.lists.push(e)},updateList:function(t,e){var n=t.lists.indexOf(e[0]),i=Object(ge["a"])({},e[1]);t.lists.splice(n,1,i)},deleteList:function(t,e){var n=t.lists.indexOf(e);t.lists.splice(n,1)},setOpen:function(t,e){var n=t.lists.indexOf(t.lists.find((function(t){return t.id===e})));t.openListIndex=n},setOpenListMenu:function(t,e){t.openMenuId=e},setEditedListId:function(t,e){t.editedListId=e}},getters:{getListById:function(t){return function(e){return t.lists.find((function(t){return t.id===e}))}},getItemById:function(t){return function(e){return t.items.find((function(t){return t.id===e}))}},getOpenStatusById:function(t){return function(e){return t.openListIndex===t.lists.indexOf(t.lists.find((function(t){return t.id===e})))}},getOpenMenuStatusById:function(t){return function(e){return t.openMenuId===e}}}});s["a"].use(de,{domain:he["c"],clientId:he["b"],audience:he["a"],onRedirectCallback:function(t){me.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),s["a"].use(me),s["a"].config.productionTip=!1,new s["a"]({router:me,store:ve,render:function(t){return t(b)}}).$mount("#app")},"583b":function(t,e,n){"use strict";var i=n("aded"),s=n.n(i);s.a},"59e5":function(t,e,n){},"65ad":function(t,e,n){"use strict";var i=n("59e5"),s=n.n(i);s.a},"724d":function(t,e,n){},8160:function(t){t.exports=JSON.parse('{"c":"fo-sho.eu.auth0.com","b":"OJ7B0KzGXdMtfk5q9bSgaLosFLFfNa4q","a":"https://fo-sho.eu.auth0.com/api/v2/"}')},"85ec":function(t,e,n){},8987:function(t,e,n){},"8ea5":function(t,e,n){"use strict";var i=n("35d9"),s=n.n(i);s.a},"934d":function(t,e,n){"use strict";var i=n("b581"),s=n.n(i);s.a},a483:function(t,e,n){},a931:function(t,e,n){},aded:function(t,e,n){},b581:function(t,e,n){},c174:function(t,e,n){"use strict";var i=n("8987"),s=n.n(i);s.a},fc51:function(t,e,n){"use strict";var i=n("a931"),s=n.n(i);s.a}});
//# sourceMappingURL=app.a26dc7bc.js.map