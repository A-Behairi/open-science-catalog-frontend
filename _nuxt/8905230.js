(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{197:function(t,e,r){"use strict";r(29),r(26),r(60);var n={methods:{withBase:function(path){return"".concat("/open-science-catalog-frontend/").concat(path.replace("/",""))}}};r(1).a.mixin(n),e.a=n},243:function(t,e,r){var content=r(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("dc093880",content,!0,{sourceMap:!1})},245:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("56b15182",content,!0,{sourceMap:!1})},268:function(t,e,r){"use strict";r(13),r(9),r(12),r(5),r(15),r(10),r(16);var n=r(2),o=r(94);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"DefaultLayout",data:function(){return{drawer:!1,search:"",title:"Open science catalog"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["appVersion"]))},v=l,d=(r(316),r(97)),f=r(133),m=r.n(f),_=r(419),h=r(427),y=r(420),w=r(269),x=r(421),O=r(422),V=r(190),k=r(191),j=r(193),C=r(129),E=r(192),P=r(69),S=r(110),A=r(423),L=r(426),N=r(424),D=r(425),I=r(265),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{color:"background",dark:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"pt-0"},[r("div",{staticClass:"d-flex align-center",staticStyle:{height:"64px"},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"ma-1",attrs:{icon:"",large:""}},[r("v-icon",[t._v("\n            mdi-chevron-left\n          ")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{attrs:{to:"/",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-home")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n            Home\n          ")])],1)],1),t._v(" "),r("v-list-group",{attrs:{"prepend-icon":"mdi-plus-circle-outline","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",[t._v("\n              Contribute\n            ")])],1)]},proxy:!0}])},[t._v(" "),r("v-list-item",{staticClass:"pl-10 primary",attrs:{to:"/new-record",router:"",exact:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-clipboard-text")])],1),t._v(" "),r("v-list-item-title",[t._v("\n            New record\n          ")])],1),t._v(" "),r("v-list-item",{staticClass:"pl-10 primary",attrs:{to:"/new-project",router:"",exact:""}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-wallet")])],1),t._v(" "),r("v-list-item-title",[t._v("\n            New project\n          ")])],1)],1),t._v(" "),r("v-list-item",{attrs:{to:"/metrics",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-poll")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n            Metrics\n          ")])],1)],1),t._v(" "),r("v-list-item",{attrs:{to:"/search",router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n            Search\n          ")])],1)],1),t._v(" "),r("v-list-item",{attrs:{href:"https://opensciencedata.esa.int/api/docs/",target:"_blank"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-file-document")])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("\n            API Documentation\n          ")])],1)],1)],1)],1),t._v(" "),r("v-app-bar",{attrs:{color:"primary",dark:"",fixed:"",app:""}},[t.drawer?t._e():r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-text-field",{staticClass:"mr-4",staticStyle:{width:"250px !important","flex-grow":"0"},attrs:{"hide-details":"",solo:"","single-line":"","background-color":"secondary",label:"Search...","prepend-inner-icon":"mdi-magnify"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("img",{attrs:{src:t.withBase("/img/ESA_Logo.svg")}})],1),t._v(" "),r("v-main",{staticClass:"grey lighten-3"},[r("Nuxt")],1),t._v(" "),r("v-footer",{attrs:{color:"primary",dark:"",fixed:"",app:""}},[r("small",{staticClass:"justify-right"},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" by ")]),t._v(" "),r("a",{staticClass:"white--text",attrs:{href:"https://www.esa.int/",target:"_blank"}},[t._v("ESA")])]),t._v(" "),r("v-spacer"),t._v(" "),r("small",{staticClass:"justify-right"},[r("a",{staticClass:"white--text",attrs:{href:"https://github.com/EOEPCA/open-science-catalog-frontend",target:"_blank"}},[t._v("open-science-catalog")]),t._v(" "),r("span",[t._v(" v"+t._s(t.$store.getters.appVersion.split(".")[0]+"."+t.$store.getters.appVersion.split(".")[1])+" by")]),t._v(" "),r("a",{staticClass:"white--text mx-1",attrs:{href:"https://eox.at",target:"_blank"}},[r("img",{staticClass:"my-0",attrs:{src:t.withBase("/img/EOX_Logo_weiss.svg"),height:"11px"}})])])],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VApp:_.a,VAppBar:h.a,VAppBarNavIcon:y.a,VBtn:w.a,VDivider:x.a,VFooter:O.a,VIcon:V.a,VList:k.a,VListGroup:j.a,VListItem:C.a,VListItemAction:E.a,VListItemContent:P.a,VListItemIcon:S.a,VListItemTitle:P.b,VMain:A.a,VNavigationDrawer:L.a,VSpacer:N.a,VTextField:D.a,VToolbarTitle:I.a})},275:function(t,e,r){r(276),t.exports=r(277)},306:function(t,e,r){"use strict";r(243)},307:function(t,e,r){var n=r(17)(!1);n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=n},312:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("5a6f58c2",content,!0,{sourceMap:!1})},313:function(t,e,r){var n=r(17),o=r(314),c=r(315),l=n(!1);l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);var v=o(c);l.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+v+') format("truetype")}.h1,.h2,.h3,.h4,.headline,.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-btn__content,.v-card__title,.v-tab,.v-toolbar__title,h1,h2,h3,h4{font-family:"NotesESABold",sans-serif!important}',""]),t.exports=l},315:function(t,e,r){t.exports=r.p+"fonts/notesesabol-webfont.c23d22c.ttf"},316:function(t,e,r){"use strict";r(245)},317:function(t,e,r){var n=r(17)(!1);n.push([t.i,".v-list-item--active{color:#fff!important}",""]),t.exports=n},390:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"getters",(function(){return o}));var n=function(){return{packageVersion:"0.2.2"}},o={appVersion:function(t){return t.packageVersion}}},83:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(306),r(97)),c=r(133),l=r.n(c),v=r(419),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;l()(component,{VApp:v.a})}},[[275,10,2,11]]]);