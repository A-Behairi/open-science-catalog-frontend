(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{715:function(t,e,n){var content=n(756);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("7a83a804",content,!1,{sourceMap:!1})},755:function(t,e,n){"use strict";n(715)},756:function(t,e,n){var o=n(44)(!1);o.push([t.i,"[data-v-101592a8] .v-speed-dial__list{align-items:flex-end}.editButton[data-v-101592a8]{position:relative;float:right;right:10px;bottom:35px;transition:.5s}",""]),t.exports=o},760:function(t,e,n){"use strict";n.r(e);var o=n(23),r=(n(127),n(61),n(29),n(291),{props:{itemId:{type:String,default:null}},data:function(){return{fab:!1,deleteDialog:!1,loading:!1,currentPath:null}},watch:{fab:function(t){t&&(this.currentPath=window.location.pathname)}},methods:{deleteItem:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$metadataBackend.$delete("/item-requests/".concat(t.slugify(Object.keys(t.$route.params)[0]),"s/").concat(t.itemId||t.slugify(Object.values(t.$route.params)[0]),".json"),{});case 3:t.loading=!1,t.deleteDialog=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),l=(n(755),n(169)),c=n(232),d=n.n(c),f=n(355),v=n(681),m=n(680),_=n(723),h=n(325),k=n(677),x=n(857),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editButton"},[n("v-speed-dial",{style:"bottom: "+(t.$vuetify.application.footer+16)+"px",attrs:{fixed:"",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"info",dark:"",rounded:"","x-large":""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?n("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]):n("v-icon",{attrs:{left:""}},[t._v(" mdi-pencil ")]),t._v("\n        Suggest changes\n      ")],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),n("v-btn",{attrs:{dark:"",rounded:"",color:"black",href:""+t.$config.githubDataRoot+t.currentPath+".json",target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-github ")]),t._v("\n      View file on GitHub\n    ")],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[n("v-card",{staticClass:"pa-3"},[n("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v("\n        Are you sure you want to request this item to be deleted?\n      ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue",dark:""},on:{click:function(e){t.deleteDialog=!1}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-cancel ")]),t._v("\n          Cancel\n        ")],1),t._v(" "),n("v-btn",{attrs:{color:"red",dark:"",loading:t.loading},on:{click:t.deleteItem}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-delete ")]),t._v("\n          Request deletion\n        ")],1)],1)],1)],1)],1)}),[],!1,null,"101592a8",null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:v.a,VCardActions:m.a,VCardTitle:m.d,VDialog:_.a,VIcon:h.a,VSpacer:k.a,VSpeedDial:x.a})}}]);