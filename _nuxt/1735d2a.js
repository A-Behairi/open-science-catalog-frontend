(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{549:function(e,t,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("d3ce948e",content,!0,{sourceMap:!1})},551:function(e,t,r){var content=r(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("7e234354",content,!0,{sourceMap:!1})},556:function(e,t,r){"use strict";r(549)},557:function(e,t,r){var n=r(35)(!1);n.push([e.i,".customOutline[data-v-19ad9204]  fieldset{border:none!important}",""]),e.exports=n},559:function(e,t,r){"use strict";r.r(t);r(25),r(21),r(30),r(31);var n=r(28),l=r(194),o=r(7),c=(r(139),r(50),r(116),r(46),r(246),r(16),r(24),r(290),r(56),r(23),r(107),r(247),r(93),r(118),r(142));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"SearchCombobox",props:{embeddedMode:{type:Boolean,default:!1},currentPage:{type:Number,default:1},sortBy:{type:String,default:"title"},sortOrder:{type:String,default:"Ascending"},preSelectedItems:{type:Array,default:function(){return[]}},itemType:{type:String,default:"product"}},data:function(){return{filterModel:null,filterItems:[],mainInputValue:null,inputComplete:!1,searchText:null,loading:!1,variables:[]}},computed:f(f({},Object(c.c)("staticCatalog",["themes"])),{},{availableItems:function(){return[{field_name:"theme",filter:"exact",available_values:this.themes?this.themes.map((function(e){return e.name})):[]},{field_name:"variable",filter:"exact",available_values:this.variables},{field_name:"project",filter:"like"},{field_name:"product",filter:"like"},{field_name:"type",filter:"exact",available_values:["project","product"]}]},currentlyFreeText:function(){return this.filterItems&&this.filterItems.find((function(i){return!i.value&&i.operator}))},isNumberField:function(){var e=this.filterItems.find((function(e){return null===e.value}));return void 0!==this.availableItems.find((function(t){return t.field_name===e.key})).digits},filterFields:function(){var e,t=this,r=this.availableItems.filter((function(e){return e.filter&&(!t.filterItems.find((function(i){return i.key===e.field_name}))||"range"===e.filter&&t.filterItems.filter((function(i){return i.key===e.field_name})).length<2)})),n=this.filterItems.find((function(e){return null===e.value}));if(n||this.currentlyFreeText){var o=n&&this.availableItems.find((function(e){return e.field_name===n.key}));if(n.operator)e=[];else if("boolean"===o.filter)e=[{filter_value:!0,field_name:"true",original_field_name:n.key},{filter_value:!1,field_name:"false",original_field_name:n.key}];else if("exact"===o.filter)o.available_values?Array.isArray(o.available_values)&&(e=o.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:o.field_name}})).sort((function(a,b){return a.field_name<b.field_name?-1:1}))):e=[{filter_value:null,field_name:"is exactly",operator:"=",original_field_name:n.key}];else if("like"===o.filter)e=o.available_values?o.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:o.field_name}})):[{filter_value:null,field_name:"includes",operator:"includes",original_field_name:n.key}];else if("range"===o.filter){var c=this.filterItems.find((function(i){return i.key===n.key&&!!i.operator}));e=[].concat(Object(l.a)(c&&"≤"===c.operator?[]:[{filter_value:null,field_name:"≤ lower than or equal}",operator:"≤",original_field_name:n.key}]),Object(l.a)(c&&"≥"===c.operator?[]:[{filter_value:null,field_name:"≥ higher than or equal",operator:"≥",original_field_name:n.key}]))}else e=r}else e=r;return e}}),created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preSelectedItems.length>0&&(e.filterItems=e.preSelectedItems),t.next=3,e.retreiveMetrics();case 3:e.themes.forEach((function(t){t.variables.forEach((function(t){e.variables.push(t.name)}))}));case 4:case"end":return t.stop()}}),t)})))()},mounted:function(){this.$refs.headless.focus(),this.embeddedMode||this.$refs.headless.activateMenu()},methods:f(f(f({},Object(c.b)("dynamicCatalog",["fetchCustomQuery"])),Object(c.b)("staticCatalog",["retreiveMetrics"])),{},{select:function(e){var t=this;e&&(this.currentlyFreeText?this.filterItems=this.filterItems.map((function(i){return!i.value&&i.operator&&(i.value=e),i})):e.operator?this.filterItems=this.filterItems.map((function(i){return i.value||(i.operator=e.operator),i})):e.filter_value?this.filterItems=this.filterItems.map((function(i){return i.value||(i.value=e.filter_value),i})):this.filterItems.push({key:e.field_name,value:null}),this.inputComplete=!1,setTimeout((function(){t.inputComplete=!0}),300),this.$nextTick((function(){t.$refs.headless.focus(),t.currentlyFreeText||t.$refs.headless.activateMenu()})))},remove:function(e){this.filterItems.splice(this.filterItems.indexOf(e),1)},onEnter:function(){this.inputComplete&&this.filterItems.every((function(i){return!!i.value}))&&this.submit()},onDelete:function(){this.filterItems.length<1||this.searchText||this.preSelectedItems.map((function(i){return i.key})).includes(this.filterItems[this.filterItems.length-1].key)||(this.filterItems.pop(),this.filterModel=null)},submit:function(){this.filterProducts()},filterProducts:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.loading=!0,r.prev=1,n=t.filterItems.reduce((function(e,t){return"type"===t.key?"".concat(e,"&type=").concat("project"===t.value?"datasetcollection":"dataset"):"".concat(e,"&q=").concat(t.value)}),""),l="/collections/metadata:main/items?sortby=".concat("Descending"===t.sortOrder?"-".concat(t.sortBy):"".concat(t.sortBy),"&offset=").concat(10*(t.currentPage-1)).concat(n),r.next=6,t.fetchCustomQuery(l);case 6:o=r.sent,t.$emit("searchQuery",{items:o.features,numberOfPages:Math.round(o.numberMatched/10)}),e||t.$refs.headless.blur(),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),console.error(r.t0);case 14:t.loading=!1;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()}})},v=(r(556),r(149)),h=r(193),_=r.n(h),y=r(572),x=r(295),k=r(587),j=r(617),O=r(273),D=r(184),C=r(117),w=r(589),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex align-center"},[r("div",{staticClass:"\n        d-flex\n        lightgrey\n        align-center",staticStyle:{width:"100%",position:"relative"}},[r("div",{staticStyle:{position:"absolute",width:"100%"}},[r("v-text-field",{staticStyle:{"pointer-events":"none"},attrs:{label:(e.embeddedMode?"Filter":"Search")+" items",outlined:e.embeddedMode,dense:e.embeddedMode,"hide-details":e.embeddedMode,value:e.mainInputValue,height:"42"}})],1),e._v(" "),e._l(e.filterItems,(function(t,n){return r("v-chip",{key:n,class:e.embeddedMode?"mx-1":"mr-1",attrs:{small:"",close:!!t.value&&!e.preSelectedItems.map((function(i){return i.key})).includes(t.key)},on:{"click:close":function(r){return e.remove(t)}}},[r("span",{staticClass:"text-capitalize"},[e._v("\n        "+e._s(t.key)+"\n      ")]),e._v(" "),t.value||t.operator?r("span",{staticClass:"px-1"},[e._v("\n        "+e._s(t.operator||":"))]):e._e(),e._v(" "),r("strong",[e._v(e._s(t.value?" "+t.value:""))])])})),e._v(" "),e.currentlyFreeText?r("v-combobox",{ref:"headless",staticClass:"headless-input",class:e.embeddedMode?"customOutline":"",attrs:{placeholder:"...",label:" ",items:[],chips:"","search-input":e.searchText,outlined:e.embeddedMode,dense:e.embeddedMode,"hide-details":e.embeddedMode,type:e.isNumberField?"number":"text"},on:{"update:searchInput":function(t){e.searchText=t},"update:search-input":function(t){e.searchText=t},change:e.select,focus:function(t){e.mainInputValue=" "},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}},scopedSlots:e._u([{key:"no-data",fn:function(){return[r("v-list-item",{on:{click:function(t){return e.select(e.searchText)}}},[r("v-list-item-content",[r("v-list-item-title",[e._v("\n              "+e._s(e.searchText)+"\n            ")])],1)],1)]},proxy:!0}],null,!1,3084499102)}):r("v-autocomplete",{ref:"headless",staticClass:"headless-input",class:e.embeddedMode?"customOutline":"",attrs:{items:e.filterFields,chips:"","item-text":"field_name","return-object":"",label:" ",outlined:e.embeddedMode,dense:e.embeddedMode,"hide-details":e.embeddedMode},on:{input:e.select,focus:function(t){e.mainInputValue=" "},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.onDelete.apply(null,arguments)}]},scopedSlots:e._u([{key:"item",fn:function(data){return[r("span",{class:data.item.operator?"":"text-capitalize"},[e._v("\n          "+e._s(data.item.field_name)+"\n        ")])]}}]),model:{value:e.filterModel,callback:function(t){e.filterModel=t},expression:"filterModel"}})],2),e._v(" "),r("v-btn",{staticClass:"ml-3",attrs:{color:"primary",disabled:e.filterItems.length<1||!!e.filterItems.find((function(e){return null===e.value})),loading:e.loading},on:{click:e.submit}},[r("v-icon",[e._v("\n      mdi-magnify\n    ")])],1)],1)}),[],!1,null,"19ad9204",null);t.default=component.exports;_()(component,{VAutocomplete:y.a,VBtn:x.a,VChip:k.a,VCombobox:j.a,VIcon:O.a,VListItem:D.a,VListItemContent:C.a,VListItemTitle:C.b,VTextField:w.a})},560:function(e,t,r){"use strict";r.r(t);var n=r(194),l=(r(56),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:String,default:null},product:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"ESA EO Catalogue",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project,href:"/projects/".concat(this.slugify(this.project)),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]),Object(n.a)(this.product?[{text:this.product,href:"/products/".concat(this.slugify(this.product)),type:"product"}]:[]))}}}),o=(r(565),r(149)),c=r(193),d=r.n(c),f=r(607),m=r(569),v=r(587),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:e.navigationBreadcrumb},scopedSlots:e._u([{key:"item",fn:function(t){var n=t.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===e.navigationBreadcrumb[e.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:e.$typeColor(n.type),dark:"",small:"",label:""}},[e._v("\n        "+e._s(n.type)+"\n      ")]):e._e(),e._v(" "),r("span",{staticClass:"text-capitalize"},[e._v(e._s(n.text))])],1)]}}])})}),[],!1,null,"bb6a8866",null);t.default=component.exports;d()(component,{VBreadcrumbs:f.a,VBreadcrumbsItem:m.a,VChip:v.a})},561:function(e,t,r){"use strict";r.r(t);var n={props:{items:{type:Array,default:function(){return[]}}},methods:{getType:function(e){var t,r;return null!==(t=e.properties)&&void 0!==t&&t["osc:type"]?e.properties["osc:type"].toLowerCase():null!==(r=e.properties)&&void 0!==r&&r.type?"dataset"===e.properties.type?"product":"project":"variable"}}},l=r(149),o=r(193),c=r.n(o),d=r(550),f=r(546),m=r(587),v=r(702),h=r(273),_=r(703),y=r(542),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"pa-8"},e._l(e.items,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{to:"/"+e.getType(t)+"s/"+("variable"===e.getType(t)?e.slugify(t.name):t.id),outlined:""}},[r("v-card-title",[r("v-chip",{staticClass:"text-uppercase",attrs:{small:"",label:"",color:e.$typeColor(e.getType(t)),dark:""}},[e._v("\n          "+e._s(e.getType(t))+"\n        ")]),e._v(" "),r("v-spacer"),e._v(" "),"project"===e.getType(t)?r("div",[r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar-today\n          ")]),e._v(" "),r("small",[e._v(e._s(t.properties.start_datetime))]),e._v("\n          -\n          "),r("v-icon",{attrs:{small:""}},[e._v("\n            mdi-calendar\n          ")]),e._v(" "),r("small",[e._v(e._s(t.properties.end_datetime))])],1):e._e()],1),e._v(" "),r("v-card-title",{staticClass:"text-subtitle-2 text-uppercase"},[e._v("\n        "+e._s("variable"===e.getType(t)?t.name:t.properties.title)+"\n      ")]),e._v(" "),"project"===e.getType(t)?r("v-card-subtitle",e._l(t.properties["osc:consortium"],(function(t){return r("span",{key:t},[e._v("\n          "+e._s(t)+"\n        ")])})),0):e._e(),e._v(" "),r("v-card-text",["variable"===e.getType(t)?r("span",[e._v("\n          "+e._s(t.productsNumber)+" Products\n        ")]):r("span",[e._v("\n          "+e._s(t.properties.description.substring(0,100)+"...")+"\n        ")]),e._v(" "),"product"===e.getType(t)&&"osc:themes"in t.properties?r("div",{staticClass:"mt-2"},[e._v("\n          - "+e._s(t.properties["osc:themes"].join(", "))+"\n        ")]):e._e()])],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VChip:m.a,VCol:v.a,VIcon:h.a,VRow:_.a,VSpacer:y.a})},565:function(e,t,r){"use strict";r(551)},566:function(e,t,r){var n=r(35)(!1);n.push([e.i,".navigationBreadcrumb[data-v-bb6a8866]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-bb6a8866]{font-size:17px!important}",""]),e.exports=n},651:function(e,t,r){var content=r(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("e60b798e",content,!0,{sourceMap:!1})},693:function(e,t,r){"use strict";r(651)},694:function(e,t,r){var n=r(35)(!1);n.push([e.i,".themeTitle[data-v-b7f86d4e]{background:#003247;color:#fff;padding:1px 10px;position:relative;text-transform:uppercase!important;font-weight:700!important;font-size:30px;width:auto!important}.themeDescription[data-v-b7f86d4e]{position:relative;background:rgba(0,49,72,.733);padding:10px;color:#fff;overflow-y:auto}.themeDescription a[data-v-b7f86d4e]{color:#fff}",""]),e.exports=n},714:function(e,t,r){"use strict";r.r(t);r(21),r(30),r(31);var n=r(7),l=r(28),o=(r(139),r(16),r(23),r(46),r(75),r(79),r(116),r(41),r(94),r(290),r(24),r(25),r(93),r(118),r(142)),c=r(560),d=r(561);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={name:"ThemeSingle",components:{BreadCrumbNav:c.default,ItemGrid:d.default},asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,d,f,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n=e.$axios,o=e.route,t.next=3,r.dispatch("staticCatalog/retreiveTheme",o.params.theme);case 3:return c=t.sent,t.next=6,r.dispatch("staticCatalog/retreiveMetrics");case 6:return d=[],r.state.staticCatalog.themes.forEach((function(element){element.name===c.id&&element.variables.forEach((function(e){d.push(e)}))})),f=[],t.next=11,Promise.all(c.links.map(function(){var e=Object(l.a)(regeneratorRuntime.mark((function e(link){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("item"!==link.rel){e.next=5;break}return e.next=3,n.$get(link.href);case 3:t=e.sent,f.push(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:return m=d,v=f,t.abrupt("return",{theme:c,projectDetails:v,projectDetailsRaw:f,variablesDetails:m,variablesDetailsRaw:d});case 14:case"end":return t.stop()}}),t)})))()},data:function(){return{theme:null,tab:0,projectDetails:null,projectDetailsRaw:[],projectsSearch:"",projectDetailsItems:[{text:"Name",value:"title"},{text:"Consortium",value:"osc:consortium"},{text:"Start Date",value:"start_datetime"},{text:"End date",value:"end_datetime"}],projectsDetailsFilter:"title",projectsDetailsOrder:"Ascending",variablesDetails:null,variablesDetailsRaw:[],variablesSearch:"",variablesDetailsOrder:"Ascending",showDescription:!1}},head:function(){return{title:this.$route.params.theme.replace(/(^\w{1})|(\s+\w{1})/g,(function(e){return e.toUpperCase()}))}},computed:m({},Object(o.c)("staticCatalog",["themes"])),created:function(){this.orderData("projects",this.projectsDetailsFilter,this.projectsDetailsOrder,this.projectsSearch,!0),this.orderData("variables","name",this.variablesDetailsOrder,this.variablesSearch)},methods:m(m({},Object(o.b)("staticCatalog",["retreiveMetrics","retreiveTheme"])),{},{orderData:function(source,e,t,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;function l(a,b){if(n){if(a.properties[e]<b.properties[e])return"Ascending"===t?-1:1;if(a.properties[e]>b.properties[e])return"Ascending"===t?1:-1}else{if(a[e]<b[e])return"Ascending"===t?-1:1;if(a[e]>b[e])return"Ascending"===t?1:-1}return 0}if("variables"===source){var o=this.variablesDetailsRaw.sort(l);this.variablesDetails=r?this.filterByValue(o,r):o}else{var c=this.projectDetailsRaw.sort(l);this.projectDetails=r?this.filterByValue(c,r,"properties"):c}},filterByValue:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.filter((function(e){return Object.keys(r?e[r]:e).some((function(n){return"string"==typeof(r?e[r][n]:e[n])?(r?e[r][n]:e[n]).toLowerCase().includes(t.toLowerCase()):null}))}))},handleSearchEmit:function(e){this.projectDetails=e.items}})},h=v,_=(r(693),r(149)),y=r(193),x=r.n(y),k=r(295),j=r(702),O=r(576),D=r(273),C=r(703),w=r(291),I=r(554),S=r(542),V=r(686),T=r(717),M=r(699),P=r(638),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.theme?r("div",[r("bread-crumb-nav",{attrs:{theme:e.theme.id}}),e._v(" "),r("div",{ref:"themeBanner",style:"backgroundImage: url('"+e.$staticCatalog.defaults.baseURL+"/themes/"+e.theme.assets.image.href+"');\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: center center;"},[r("v-container",{class:e.$vuetify.breakpoint.mdAndUp?"px-15":""},[r("v-row",[r("v-col",{staticClass:"d-flex align-center",class:e.$vuetify.breakpoint.smAndDown?"justify-center":"",attrs:{cols:"12",md:"6"}},[r("span",{staticClass:"themeTitle"},[e._v("\n            "+e._s(e.theme.id)+"\n          ")])]),e._v(" "),r("v-col",{staticClass:"d-flex flex-column justify-center",attrs:{cols:"12",md:"6"}},[r("div",{staticClass:"themeDescription"},[e.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:e.showDescription,expression:"showDescription"}]},[e._v(e._s(e.theme.description))])]),e._v(" "),r("v-btn",{attrs:{text:"","x-small":"",dark:"",block:""},on:{click:function(t){e.showDescription=!e.showDescription}}},[r("v-icon",{attrs:{left:""}},[e._v("\n                  "+e._s(e.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n                ")]),e._v("\n                Description\n              ")],1)]:r("small",[e._v(e._s(e.theme.description))])],2),e._v(" "),r("v-btn",{staticClass:"mt-3",attrs:{color:"rgba(0, 49, 72, 0.733)",dark:"",href:e.theme.links[1].href,target:"_blank"}},[r("v-icon",{attrs:{left:""}},[e._v("\n              mdi-link\n            ")]),e._v("\n            EO4SOCIETY\n          ")],1)],1)],1)],1)],1),e._v(" "),r("v-tabs",{attrs:{"background-color":"#003247",dark:"",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab",[e._v("\n      Projects\n    ")]),e._v(" "),r("v-tab",[e._v("\n      Variables\n    ")])],1),e._v(" "),r("v-container",{class:e.$vuetify.breakpoint.lgAndUp?"px-15":"pa-0"},[r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",[r("search-combobox",{staticClass:"ma-8 mb-0",attrs:{"embedded-mode":"","item-type":"project","pre-selected-items":[{key:"theme",value:e.theme.id},{key:"type",value:"Project"}]},on:{searchQuery:e.handleSearchEmit}}),e._v(" "),r("v-row",{staticClass:"px-8 pt-8 d-flex align-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n              Projects\n            ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"mr-4":"mb-4",staticStyle:{"max-width":"150px"},attrs:{dense:"","hide-details":"",items:e.projectDetailsItems,label:"Order by",outlined:""},on:{change:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsDetailsFilter,callback:function(t){e.projectsDetailsFilter=t},expression:"projectsDetailsFilter"}}),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"":"mb-4",staticStyle:{"max-width":"150px"},attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order direction",outlined:""},on:{change:function(t){e.orderData("projects",e.projectsDetailsFilter.toLowerCase(),e.projectsDetailsOrder,e.projectsSearch,!0)}},model:{value:e.projectsDetailsOrder,callback:function(t){e.projectsDetailsOrder=t},expression:"projectsDetailsOrder"}})],1)],1),e._v(" "),r("item-grid",{attrs:{items:e.projectDetails}})],1),e._v(" "),r("v-tab-item",[r("search-combobox",{staticClass:"ma-8 mb-0",attrs:{"embedded-mode":"","item-type":"project","pre-selected-items":[{key:"theme",value:e.theme.id},{key:"type",value:"Variable"}]},on:{searchQuery:e.handleSearchEmit}}),e._v(" "),r("v-row",{staticClass:"px-8 pt-8 d-flex align-center"},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("span",{staticClass:"text-h2"},[e._v("\n              Variables\n            ")])]),e._v(" "),r("v-col",{class:e.$vuetify.breakpoint.lgAndUp?"d-flex":"",attrs:{cols:"12",md:"8"}},[r("v-spacer"),e._v(" "),r("v-select",{class:e.$vuetify.breakpoint.lgAndUp?"":"mb-4",staticStyle:{"max-width":"150px"},attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order direction",outlined:""},on:{change:function(t){return e.orderData("variables","name",e.variablesDetailsOrder,e.variablesSearch)}},model:{value:e.variablesDetailsOrder,callback:function(t){e.variablesDetailsOrder=t},expression:"variablesDetailsOrder"}})],1)],1),e._v(" "),r("item-grid",{attrs:{items:e.variablesDetails}})],1)],1)],1)],1):e._e()}),[],!1,null,"b7f86d4e",null);t.default=component.exports;x()(component,{BreadCrumbNav:r(560).default,SearchCombobox:r(559).default,ItemGrid:r(561).default}),x()(component,{VBtn:k.a,VCol:j.a,VContainer:O.a,VIcon:D.a,VRow:C.a,VScaleTransition:w.d,VSelect:I.a,VSpacer:S.a,VTab:V.a,VTabItem:T.a,VTabs:M.a,VTabsItems:P.a})}}]);