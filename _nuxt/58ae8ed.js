(window.webpackJsonp=window.webpackJsonp||[]).push([[28,11],{583:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("b7fa5fcc",content,!0,{sourceMap:!1})},586:function(t,e,n){"use strict";n.r(e);n(27),n(22),n(31),n(32);var r=n(7);n(14),n(24),n(127),n(215),n(26);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{highlight:function(t){var e=this;if(this.vectorSource.getFeatures().forEach((function(t){return t.setStyle(e.defaultStyle)})),this.map&&t&&t.geometry){var n=this.vectorSource.getFeatureById(t.id);n.setStyle(this.highlightStyle),console.log(n.getGeometry().getExtent()),this.map.getView().fit(n.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var n=e.read(text),r=[];t.baseLayers.forEach((function(e){var o=ol.optionsFromCapabilities(n,{layer:e.layer,matrixSet:"WGS84"});r.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(l(l({},o),{},{wrapX:!0,attributions:n.Contents.Layer.find((function(t){return t.Identifier===e.layer})).Abstract+(t.baseLayers.indexOf(e)<t.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t.features?t.features.filter((function(t){return!!t.geometry})):[]};t.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),t.vectorSource.on("clear",(function(){t.map.removeControl(t.clearButton)}));var c=new ol.VectorLayer({source:t.vectorSource,style:t.defaultStyle});r.push(c),t.clearButton=new ol.ClearMap,t.map=new ol.Map({layers:r,target:t.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),t.features&&t.map.getView().fit(t.vectorSource.getExtent(),{padding:t.defaultPadding}),t.map.on("loadstart",(function(){t.loading=!1})),t.enableDraw&&(t.draw=new ol.Draw({source:t.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),t.map.addInteraction(t.draw),t.draw.on("drawstart",(function(){t.vectorSource.clear()})),t.draw.on("drawend",(function(e){t.$emit("drawEnd",e.feature.getGeometry()),t.map.addControl(t.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},f=(n(587),n(162)),d=n(214),h=n.n(d),m=n(297),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[t.loading?n("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):t._e()],1),t._v(" "),n("div",{ref:"mapContainer",style:"height: "+(t.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);e.default=component.exports;h()(component,{VProgressCircular:m.a})},587:function(t,e,n){"use strict";n(583)},588:function(t,e,n){var r=n(37)(!1);r.push([t.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),t.exports=r},592:function(t,e,n){var content=n(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("a5df5f0a",content,!0,{sourceMap:!1})},597:function(t,e,n){var content=n(626);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("f691be40",content,!0,{sourceMap:!1})},604:function(t,e,n){"use strict";n(592)},605:function(t,e,n){var r=n(37)(!1);r.push([t.i,".customOutline[data-v-2b5a5bab]  fieldset{border:none!important}",""]),t.exports=r},616:function(t,e,n){"use strict";n.r(e);n(27),n(22),n(31),n(32);var r=n(30),o=n(216),l=n(7),c=(n(152),n(58),n(127),n(50),n(215),n(14),n(26),n(323),n(64),n(24),n(118),n(274),n(90),n(117),n(163),n(321),n(412),n(157));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"SearchCombobox",props:{embeddedMode:{type:Boolean,default:!1},currentPage:{type:Number,default:1},sortBy:{type:String,default:"title"},sortOrder:{type:String,default:"Ascending"},preSelectedItems:{type:Array,default:function(){return[]}},itemType:{type:String,default:"product"},paginationLoop:{type:Boolean,default:!1},sortOnCreated:{type:Boolean,default:!1}},data:function(){return{filterModel:null,filterItems:[],mainInputValue:null,inputComplete:!1,searchText:null,loading:!1,variables:[],inProgressItem:null,textInputModel:null,showMap:!1,mapFeatures:{geometry:{type:"Polygon",bbox:[0,0,0,0],coordinates:[[[-180,-90],[180,-90],[180,90],[-180,90],[-180,-90]]]},type:"Feature"},bbox:null}},computed:d(d({},Object(c.d)("staticCatalog",["missions","themes"])),{},{availableItems:function(){return[{field_name:"theme",filter:"exact",available_values:this.themes?this.themes.map((function(t){return t.name})):[]},{field_name:"variable",filter:"exact",available_values:this.variables},{field_name:"project",filter:"like"},{field_name:"product",filter:"like"},{field_name:"mission",filter:"exact",available_values:this.missions?this.missions.map((function(t){return t.name})):[]},{field_name:"type",filter:"exact",available_values:["project","product"]},{field_name:"bbox",filter:"bbox"}]},currentlyFreeText:function(){return this.filterItems&&this.filterItems.find((function(i){return!i.value&&i.operator}))},isNumberField:function(){var t=this.filterItems.find((function(t){return null===t.value}));return void 0!==this.availableItems.find((function(e){return e.field_name===t.key})).digits},filterFields:function(){var t,e=this,n=this.availableItems.filter((function(t){return t.filter&&(!e.filterItems.find((function(i){return i.key===t.field_name}))||"range"===t.filter&&e.filterItems.filter((function(i){return i.key===t.field_name})).length<2)}));if(this.inProgressItem=this.filterItems.find((function(t){return null===t.value})),this.inProgressItem||this.currentlyFreeText){var r=this.inProgressItem&&this.availableItems.find((function(t){return t.field_name===e.inProgressItem.key}));if(this.inProgressItem.operator)t=[];else if("boolean"===r.filter)t=[{filter_value:!0,field_name:"true",original_field_name:this.inProgressItem.key},{filter_value:!1,field_name:"false",original_field_name:this.inProgressItem.key}];else if("exact"===r.filter)r.available_values?Array.isArray(r.available_values)&&(t=r.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:r.field_name}})).filter((function(t){var n=e.filterItems?e.filterItems.filter((function(i){return i.value})):[];return"variable"!==t.original_field_name||function(r,o){var l=n.find((function(t){return t.key===r}));if(l){var c="".concat(r,"s"),f=e[c].find((function(t){return t.name===l.value}));if(f)return f[o].find((function(e){return e.name===t.field_name}))}return!0}("theme","variables")})).sort((function(a,b){return a.field_name<b.field_name?-1:1}))):t=[{filter_value:null,field_name:"is exactly",operator:"=",original_field_name:this.inProgressItem.key}];else if("like"===r.filter)t=r.available_values?r.available_values.map((function(i){return{filter_value:i,field_name:i,original_field_name:r.field_name}})):[{filter_value:null,field_name:"includes",operator:"includes",original_field_name:this.inProgressItem.key}];else if("range"===r.filter){var l=this.filterItems.find((function(i){return i.key===e.inProgressItem.key&&!!i.operator}));t=[].concat(Object(o.a)(l&&"≤"===l.operator?[]:[{filter_value:null,field_name:"≤ lower than or equal}",operator:"≤",original_field_name:this.inProgressItem.key}]),Object(o.a)(l&&"≥"===l.operator?[]:[{filter_value:null,field_name:"≥ higher than or equal",operator:"≥",original_field_name:this.inProgressItem.key}]))}else t=n}else t=n;return t}}),watch:{filterItems:function(t){!t.find((function(i){return"bbox"===i.key}))&&this.bbox&&this.$refs.map.clearFeatures()},showMap:function(t){t||this.bbox||this.onDelete()}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preSelectedItems.length>0&&(t.filterItems=t.preSelectedItems),e.next=3,t.retreiveMetrics();case 3:t.themes.forEach((function(e){e.variables.forEach((function(e){t.variables.push(e.name)}))})),t.sortOnCreated&&t.filterProducts();case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){this.embeddedMode||this.$refs.headless.focus()},methods:d(d(d({},Object(c.b)("dynamicCatalog",["fetchCustomQuery"])),Object(c.b)("staticCatalog",["retreiveMetrics"])),{},{select:function(t){var e=this;t&&("bbox"===t.filter&&(this.showMap=!0),this.currentlyFreeText?this.filterItems=this.filterItems.map((function(i){return!i.value&&i.operator&&(i.value=t),i})):t.operator?this.filterItems=this.filterItems.map((function(i){return i.value||(i.operator=t.operator),i})):t.filter_value?(this.filterItems=this.filterItems.map((function(i){return i.value||(i.value=t.filter_value),i})),this.filterModel=null):this.filterItems.push({key:t.field_name,value:null}),this.inputComplete=!1,setTimeout((function(){e.inputComplete=!0}),300),this.$nextTick((function(){e.$refs.headless.focus(),e.currentlyFreeText||e.$refs.headless.activateMenu()}))),this.textInputModel=null},remove:function(t){"bbox"===t.key&&(this.bbox=null),this.filterItems.splice(this.filterItems.indexOf(t),1),this.filterModel=null,this.onEnter()},onEnter:function(){var t=this;!this.inProgressItem&&this.textInputModel&&(this.filterItems.push({key:"record",operator:"includes",value:this.textInputModel}),this.inputComplete=!1,setTimeout((function(){t.inputComplete=!0}),300)),this.inputComplete&&this.filterItems.every((function(i){return!!i.value}))&&this.submit(),this.textInputModel=null},onDelete:function(){this.filterItems.length<1||this.searchText||this.preSelectedItems.map((function(i){return i.key})).includes(this.filterItems[this.filterItems.length-1].key)||("bbox"===this.filterItems[this.filterItems.length-1].key&&(this.bbox=null),null===this.textInputModel?(this.filterItems.pop(),this.filterModel=null):""===this.textInputModel&&(this.textInputModel=null))},submit:function(){this.filterProducts()},filterProducts:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var l,c,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.prev=1,l="",c=e.filterItems.reduce((function(t,e){var n=["theme","variable"];return n.includes(e.key)&&(l+="".concat(l.length>0?" AND ":"","keywords ILIKE '%").concat(e.key,":").concat(e.value,"%'")),"type"===e.key?"".concat(t,"&type=").concat("project"===e.value.toLowerCase()?"datasetcollection":"dataset"):n.includes(e.key)?"":"bbox"!==e.key?"".concat(t,"&q=").concat(e.value):""}),""),f="/collections/metadata:main/items?limit=12&sortby=".concat("Descending"===e.sortOrder?"-".concat(e.sortBy):"".concat(e.sortBy),"&offset=").concat(12*(e.currentPage-1)).concat(c).concat(l?"&filter=".concat(l):"").concat(e.bbox?"&bbox=".concat(e.bbox.join(",")):""),n.next=7,e.fetchCustomQuery(f).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,f,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.paginationLoop){t.next=11;break}r=n.numberMatched/n.numberReturned,f=e.currentPage,d=1;case 4:if(!(d<r)){t.next=11;break}return f++,t.next=8,e.fetchCustomQuery("/collections/metadata:main/items?limit=12&sortby=".concat("Descending"===e.sortOrder?"-".concat(e.sortBy):"".concat(e.sortBy),"&offset=").concat(12*(f-1)).concat(c).concat(l?"&filter=".concat(l):"").concat(e.bbox?"&bbox=".concat(e.bbox.join(",")):"")).then((function(t){n.features=[].concat(Object(o.a)(n.features),Object(o.a)(t.features))})).catch((function(t){return console.error(t)}));case 8:d++,t.next=4;break;case 11:e.$emit("searchQuery",{items:n.features,numberOfPages:Math.round(n.numberMatched/12),numberOfItems:n.numberMatched});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.error(t)}));case 7:0===e.filterItems.length&&e.$emit("clearEvent"),t||e.$refs.headless.blur(),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:e.loading=!1;case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()},handleDraw:function(t){this.bbox=t.getExtent(),this.mapFeatures.geometry.bbox=this.bbox;var e=this.filterItems.findIndex((function(i){return"bbox"===i.key}));e>-1&&this.filterItems.splice(e,1),this.filterItems.push({key:"bbox",value:this.bbox.map((function(t){return t.toFixed(3)})).join(",")})}})},m=h,v=(n(604),n(162)),y=n(214),_=n.n(y),x=n(637),w=n(332),O=n(635),I=n(681),k=n(760),S=n(298),j=n(201),C=n(128),P=n(632),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-center"},[n("div",{staticClass:"\n        d-flex\n        lightgrey\n        align-center",staticStyle:{width:"100%",position:"relative"}},[n("div",{staticStyle:{position:"absolute",width:"100%"}},[n("v-text-field",{staticStyle:{"pointer-events":"none"},attrs:{label:(t.embeddedMode?"Filter":"Search")+" items",outlined:"",dense:"","hide-details":"",value:t.mainInputValue,height:"42"}})],1),t._v(" "),t._l(t.filterItems,(function(e,r){return n("v-chip",{key:r,staticClass:"ml-1",class:t.embeddedMode?"mx-1":"mr-1",attrs:{small:"",close:!!e.value&&!t.preSelectedItems.map((function(i){return i.key})).includes(e.key)},on:{"click:close":function(n){return t.remove(e)}}},[n("span",{staticClass:"text-capitalize"},[t._v("\n        "+t._s(e.key)+"\n      ")]),t._v(" "),e.value||e.operator?n("span",{staticClass:"px-1"},[t._v("\n        "+t._s(e.operator||":"))]):t._e(),t._v(" "),n("strong",[t._v(t._s(e.value?" "+e.value:""))])])})),t._v(" "),t.currentlyFreeText?n("v-combobox",{ref:"headless",staticClass:"headless-input customOutline",staticStyle:{width:"0"},attrs:{placeholder:"...",label:" ",items:[],chips:"","search-input":t.searchText,outlined:"",dense:"",autofocus:"","hide-details":"",type:t.isNumberField?"number":"text"},on:{"update:searchInput":function(e){t.searchText=e},"update:search-input":function(e){t.searchText=e},change:t.select,focus:function(e){t.mainInputValue=" "},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.onDelete.apply(null,arguments)}},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",{on:{click:function(e){return t.select(t.searchText)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(t.searchText)+"\n            ")])],1)],1)]},proxy:!0}],null,!1,3084499102)}):n("v-autocomplete",{ref:"headless",staticClass:"headless-input customOutline",staticStyle:{width:"0"},attrs:{items:t.filterFields,chips:"","item-text":"field_name","return-object":"",label:" ",outlined:"",dense:"","hide-details":"","search-input":t.textInputModel},on:{"update:searchInput":function(e){t.textInputModel=e},"update:search-input":function(e){t.textInputModel=e},input:t.select,focus:function(e){t.mainInputValue=" "},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.onDelete.apply(null,arguments)}]},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("v-list-item-title",[t._v("\n            Search for in all records (freetext)\n          ")])],1)]},proxy:!0},{key:"item",fn:function(data){return[n("span",{class:data.item.operator?"":"text-capitalize"},[t._v("\n          "+t._s(data.item.field_name)+"\n        ")])]}}]),model:{value:t.filterModel,callback:function(e){t.filterModel=e},expression:"filterModel"}})],2),t._v(" "),n("v-btn",{staticClass:"ml-3",attrs:{color:"primary",disabled:t.filterItems.length<1||!!t.filterItems.find((function(t){return null===t.value})),loading:t.loading},on:{click:t.submit}},[n("v-icon",[t._v("\n      mdi-magnify\n    ")])],1),t._v(" "),n("v-dialog",{attrs:{width:"1000"},model:{value:t.showMap,callback:function(e){t.showMap=e},expression:"showMap"}},[n("div",{staticClass:"white"},[n("client-only",[n("CoverageMap",{ref:"map",attrs:{"enable-draw":""},on:{drawEnd:function(e){t.handleDraw(e),t.showMap=!1}}})],1)],1)])],1)}),[],!1,null,"2b5a5bab",null);e.default=component.exports;_()(component,{CoverageMap:n(586).default}),_()(component,{VAutocomplete:x.a,VBtn:w.a,VChip:O.a,VCombobox:I.a,VDialog:k.a,VIcon:S.a,VListItem:j.a,VListItemContent:C.a,VListItemTitle:C.c,VTextField:P.a})},618:function(t,e,n){"use strict";n.r(e);n(26),n(14);var r={props:{items:{type:Array,default:function(){return[]}},showEmptyItems:{type:Boolean,default:function(){return!1}}},computed:{nonEmptyItems:function(){var t=this;return this.items.filter((function(e){if(!t.showEmptyItems){if("variable"===t.getType(e))return e.summary.numberOfProducts>0;if("project"===t.getType(e))return e.links.filter((function(link){return"item"===link.rel})).length>0}return e}))}},methods:{getType:function(t){var e,n;return null!==(e=t.properties)&&void 0!==e&&e["osc:type"]?t.properties["osc:type"].toLowerCase():null!==(n=t.properties)&&void 0!==n&&n.type?"dataset"===t.properties.type?"product":"project":"variable"}}},o=(n(625),n(162)),l=n(214),c=n.n(l),f=n(584),d=n(581),h=n(635),m=n(763),v=n(298),y=n(764),_=n(577),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",t._l(t.nonEmptyItems,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[n("v-card",{attrs:{to:"/"+t.getType(e)+"s/"+("variable"===t.getType(e)?t.slugify(e.name):t.$extractSlug(e)),outlined:""}},[n("v-card-title",[n("v-chip",{staticClass:"text-uppercase",attrs:{small:"",label:"",color:t.$typeColor(t.getType(e)),dark:""}},[t._v("\n          "+t._s(t.getType(e))+"\n        ")]),t._v(" "),n("v-spacer"),t._v(" "),"project"===t.getType(e)?[n("div",{staticClass:"projectDate"},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-calendar-today\n            ")]),t._v(" "),n("small",[t._v(t._s(e.properties.start_datetime))]),t._v("\n            -\n          ")],1),t._v(" "),n("div",{staticClass:"projectDate"},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-calendar\n            ")]),t._v(" "),n("small",[t._v(t._s(e.properties.end_datetime))])],1)]:t._e()],2),t._v(" "),n("v-card-title",{staticClass:"text-subtitle-2 text-uppercase"},[t._v("\n        "+t._s("variable"===t.getType(e)?e.name:e.properties.title)+"\n      ")]),t._v(" "),"project"===t.getType(e)?n("v-card-subtitle",t._l(e.properties["osc:consortium"],(function(e){return n("span",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e(),t._v(" "),n("v-card-text",["project"===t.getType(e)||"product"===t.getType(e)?n("p",[t._v("\n          "+t._s(e.properties.description?e.properties.description.substring(0,100)+"...":"No description")+"\n        ")]):t._e(),t._v(" "),"variable"===t.getType(e)||"project"===t.getType(e)?n("p",["variable"===t.getType(e)?[t._v("\n            "+t._s(e.summary.numberOfProducts)+" Product"+t._s(1===e.summary.numberOfProducts?"":"s")+"\n          ")]:[t._v("\n            "+t._s(e.links.filter((function(link){return"item"===link.rel})).length)+" Products\n          ")]],2):t._e(),t._v(" "),"product"===t.getType(e)&&"osc:themes"in e.properties?n("div",{staticClass:"mt-2"},[t._v("\n          - "+t._s(e.properties["osc:themes"].join(", "))+"\n        ")]):t._e()])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:f.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d,VChip:h.a,VCol:m.a,VIcon:v.a,VRow:y.a,VSpacer:_.a})},623:function(t,e,n){var content=n(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("0b9a0e92",content,!0,{sourceMap:!1})},624:function(t,e,n){var r=n(37),o=n(44),l=n(47),c=r(!1),f=o(l);c.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+f+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}',""]),t.exports=c},625:function(t,e,n){"use strict";n(597)},626:function(t,e,n){var r=n(37)(!1);r.push([t.i,".projectDate{white-space:nowrap}",""]),t.exports=r},674:function(t,e,n){"use strict";var r=n(7),o=(n(58),n(623),n(622)),l=n(70),c=n(634),f=n(330),d=n(636),h=n(4),m=n(28),v=n(29);e.a=Object(v.a)(l.a,c.a,f.a,d.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),r=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=r+e.width/2-content.width/2:(this.left||this.right)&&(o=r+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,r=0;return this.top||this.bottom?r=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(r=n+e.height/2-content.height/2),this.nudgeTop&&(r-=parseInt(this.nudgeTop)),this.nudgeBottom&&(r+=parseInt(this.nudgeBottom)),!1===this.attach&&(r+=this.pageYOffset),"".concat(this.calcYOverflow(r),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h.h)(this.maxWidth),minWidth:Object(h.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h.u)(this,"activator",!0)&&Object(m.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=o.a.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===h.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(r.a)(t,this.contentClass,!0),Object(r.a)(t,"menuable__content__active",this.isActive),Object(r.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},705:function(t,e,n){var content=n(747);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("dc77919c",content,!0,{sourceMap:!1})},746:function(t,e,n){"use strict";n(705)},747:function(t,e,n){var r=n(37),o=n(44),l=n(47),c=r(!1),f=o(l);c.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+f+') format("truetype")}.v-application .display-1[data-v-3d541ff6],.v-application .display-2[data-v-3d541ff6],.v-application .display-3[data-v-3d541ff6],.v-application .h1[data-v-3d541ff6],.v-application .h2[data-v-3d541ff6],.v-application .h3[data-v-3d541ff6],.v-application .h4[data-v-3d541ff6],.v-application .headline[data-v-3d541ff6],.v-application .text-h1[data-v-3d541ff6],.v-application .text-h2[data-v-3d541ff6],.v-application .text-h3[data-v-3d541ff6],.v-application .text-h4[data-v-3d541ff6],.v-application h1[data-v-3d541ff6],.v-application h2[data-v-3d541ff6],.v-application h3[data-v-3d541ff6],.v-application h4[data-v-3d541ff6],.v-btn__content[data-v-3d541ff6],.v-card__title[data-v-3d541ff6],.v-chip[data-v-3d541ff6],.v-tab[data-v-3d541ff6],.v-toolbar__title[data-v-3d541ff6]{font-family:"NotesESABold",sans-serif}[data-v-3d541ff6] .v-select__slot .v-input__append-inner{display:none}.headless-input[data-v-3d541ff6]  .v-input__control>.v-input__slot:before{border:none}.headless-input label[data-v-3d541ff6]{display:none}[data-v-3d541ff6] .v-select__selections input,[data-v-3d541ff6] .v-text-field__slot input{margin-top:5px}',""]),t.exports=c},772:function(t,e,n){"use strict";n.r(e);n(27),n(22),n(26),n(31),n(24),n(32);var r=n(30),o=n(7),l=(n(152),n(14),n(91),n(92),n(127),n(157)),c=n(618),f=n(616);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"Search",components:{ItemGrid:c.default,SearchCombobox:f.default},data:function(){return{items:[],page:1,numberOfPages:1,numberOfItems:0,productsFilterOptions:[{text:"Name",value:"title"},{text:"Description",value:"description"}],productsFilterSortBy:"title",productsFilterOrder:"Ascending"}},head:{title:"Search"},computed:h({},Object(l.d)(["showEmptyItems"])),mounted:function(){this.filterProducts(!0)},methods:h(h(h({},Object(l.c)(["TOGGLE_EMPTY_ITEMS"])),Object(l.b)("staticCatalog",["retreiveProjects"])),{},{handleSearchEmit:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(t.items.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("project"!==n.id.substring(0,7)){t.next=3;break}return t.next=3,e.retreiveProjects(e.$extractSlug(n)).then((function(t){n.links=t.links})).catch((function(t){return console.log(t)}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:e.items=t.items,e.numberOfPages=t.numberOfPages,e.numberOfItems=t.numberOfItems;case 5:case"end":return n.stop()}}),n)})))()},filterProducts:function(t){var e=this;this.$nextTick((function(){e.$refs.searchBox.filterProducts(t)}))}})},v=m,y=(n(746),n(162)),_=n(214),x=n.n(_),w=n(332),O=n(763),I=n(621),k=n(298),S=n(765),j=n(764),C=n(600),P=n(577),M=n(674),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{class:t.$vuetify.breakpoint.lgAndUp?"px-15 pt-8":"pa-4"},[n("v-row",{staticClass:"py-5"},[n("v-col",[n("h1",{class:t.$vuetify.breakpoint.mdAndUp?"text-h2 mt-0":"text-h4 mt-5"},[t._v("\n        Search\n      ")])])],1),t._v(" "),n("search-combobox",{ref:"searchBox",staticClass:"my-4",attrs:{"current-page":t.page,"sort-by":t.productsFilterSortBy,"sort-order":t.productsFilterOrder},on:{searchQuery:t.handleSearchEmit}}),t._v(" "),n("v-row",[n("v-col",{staticClass:"d-flex"},[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-4",attrs:{icon:""},on:{click:t.TOGGLE_EMPTY_ITEMS}},"v-btn",o,!1),r),[n("v-icon",[t._v("\n              "+t._s(t.showEmptyItems?"mdi-archive-check-outline":"mdi-archive-cancel-outline")+"\n            ")])],1)]}}])},[t._v(" "),n("span",[t._v("\n          "+t._s(t.showEmptyItems?"Hide empty items":"Show empty items")+"\n        ")])]),t._v(" "),n("v-select",{staticClass:"mr-2",style:"max-width:"+(t.$vuetify.breakpoint.lgAndUp?150:120)+"px",attrs:{dense:"","hide-details":"",items:t.productsFilterOptions,label:"Sort by",outlined:""},on:{change:t.filterProducts},model:{value:t.productsFilterSortBy,callback:function(e){t.productsFilterSortBy=e},expression:"productsFilterSortBy"}}),t._v(" "),n("v-select",{style:"max-width:"+(t.$vuetify.breakpoint.lgAndUp?150:120)+"px",attrs:{dense:"","hide-details":"",items:["Ascending","Descending"],label:"Order",outlined:""},on:{change:t.filterProducts},model:{value:t.productsFilterOrder,callback:function(e){t.productsFilterOrder=e},expression:"productsFilterOrder"}})],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"d-flex justify-end"},[n("small",[t._v(t._s(t.numberOfItems)+" items found")])])],1),t._v(" "),n("item-grid",{attrs:{items:t.items,"show-empty-items":t.showEmptyItems}}),t._v(" "),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-pagination",{attrs:{length:t.numberOfPages},on:{input:t.filterProducts,next:t.filterProducts,previous:t.filterProducts},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)}),[],!1,null,"3d541ff6",null);e.default=component.exports;x()(component,{SearchCombobox:n(616).default,ItemGrid:n(618).default}),x()(component,{VBtn:w.a,VCol:O.a,VContainer:I.a,VIcon:k.a,VPagination:S.a,VRow:j.a,VSelect:C.a,VSpacer:P.a,VTooltip:M.a})}}]);