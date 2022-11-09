(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{624:function(t,e,o){var content=o(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("b7fa5fcc",content,!0,{sourceMap:!1})},627:function(t,e,o){"use strict";o.r(e);o(23),o(18),o(28),o(29);var n=o(6);o(22),o(11),o(19),o(113),o(189);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{features:{type:Array,default:null},highlight:{type:Object,default:null},enableDraw:{type:Boolean,default:!1}},data:function(){return{map:null,draw:null,baseLayers:[{layer:"terrain-light"},{layer:"overlay_bright"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25],loading:!0,clearButton:null}},watch:{features:{deep:!0,handler:function(t){if(this.vectorSource){var e={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t?t.filter((function(t){return!!t.geometry})):[]},o=(new this.$ol.GeoJSON).readFeatures(e,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"});this.vectorSource.clear(),this.vectorSource.addFeatures(o)}}},highlight:function(t){var e=this;if(this.vectorSource.getFeatures().forEach((function(t){return t.setStyle(e.defaultStyle)})),this.map&&t&&t.geometry){var o=this.vectorSource.getFeatureById(t.id);o.setStyle(this.highlightStyle),console.log(o.getGeometry().getExtent()),this.map.getView().fit(o.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}else this.map.getView().fit([-180,-90,180,90],{padding:this.defaultPadding,duration:500})}},mounted:function(){this.createMap()},methods:{createMap:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.1)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var o=e.read(text),n=[];t.baseLayers.forEach((function(e){var r=ol.optionsFromCapabilities(o,{layer:e.layer,matrixSet:"WGS84"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(c(c({},r),{},{wrapX:!0,attributions:o.Contents.Layer.find((function(t){return t.Identifier===e.layer})).Abstract+(t.baseLayers.indexOf(e)<t.baseLayers.length-1?",":"")}))}))}));var r={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t.features?t.features.filter((function(t){return!!t.geometry})):[]};t.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:4326"})}),t.vectorSource.on("clear",(function(){t.map.removeControl(t.clearButton)}));var l=new ol.VectorLayer({source:t.vectorSource,style:t.defaultStyle});n.push(l),t.clearButton=new ol.ClearMap,t.map=new ol.Map({layers:n,target:t.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:2,multiWorld:!0,projection:"EPSG:4326"})}),t.features&&t.map.getView().fit(t.vectorSource.getExtent(),{padding:t.defaultPadding}),t.map.on("loadstart",(function(){t.loading=!1})),t.enableDraw&&(t.draw=new ol.Draw({source:t.vectorSource,type:"Circle",geometryFunction:ol.createBox()}),t.map.addInteraction(t.draw),t.draw.on("drawstart",(function(){t.vectorSource.clear()})),t.draw.on("drawend",(function(e){t.$emit("drawEnd",e.feature.getGeometry()),t.map.addControl(t.clearButton)})))}))},clearFeatures:function(){this.vectorSource.clear()}}},h=(o(630),o(160)),f=o(220),d=o.n(f),v=o(298),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("client-only",[o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"d-flex align-center justify-center",staticStyle:{position:"absolute",width:"100%",height:"100%"}},[t.loading?o("v-progress-circular",{attrs:{color:"primary",size:70,indeterminate:""}}):t._e()],1),t._v(" "),o("div",{ref:"mapContainer",style:"height: "+(t.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VProgressCircular:v.a})},630:function(t,e,o){"use strict";o(624)},631:function(t,e,o){var n=o(35)(!1);n.push([t.i,".clear-btn{top:15px;right:.5em}.clear-btn button{width:auto!important;padding:0 .5em!important}",""]),t.exports=n},670:function(t,e,o){"use strict";var n=o(6),r=(o(57),o(11),o(23),o(18),o(22),o(28),o(19),o(29),o(657)),c=o(223),l=o(634),h=o(658),f=o(30),d=o(2);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(f.a)(r.a,Object(c.b)(["top","right","bottom","left","absolute"]),l.a,h.a);e.a=w.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=(!1!==this.attach?a.offsetLeft:a.left)||0,o=Math.max(a.width,t.width),n=0;if(n+=e,(this.left||this.$vuetify.rtl&&!this.right)&&(n-=o-a.width),this.offsetX){var r=isNaN(Number(this.maxWidth))?a.width:Math.min(a.width,Number(this.maxWidth));n+=this.left?-r:a.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=0;return this.top&&(e+=a.height-t.height),!1!==this.attach?e+=a.offsetTop:e+=a.top+this.pageYOffset,this.offsetY&&(e+=this.top?-a.height:a.height),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),e},hasActivator:function(){return!!(this.$slots.activator||this.$scopedSlots.activator||this.activator||this.inputActivator)},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!=typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(d.h)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(d.h)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var o=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&o>0?Math.max(t-o,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),o=this.absoluteYOffset+e,n=this.dimensions.activator,r=this.dimensions.content.height,c=o<t+r;return c&&this.offsetOverflow&&n.top>r?t=this.pageYOffset+(n.top-r):c&&!this.allowOverflow?t=o-r-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}else this.activatorFixed=!1},deactivate:function(){},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this),o=e.click;return o&&(e.click=function(e){t.openOnClick&&o&&o(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY}),e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var rect=t.getBoundingClientRect();return{top:Math.round(rect.top),left:Math.round(rect.left),bottom:Math.round(rect.bottom),right:Math.round(rect.right),width:Math.round(rect.width),height:Math.round(rect.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var rect=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var style=window.getComputedStyle(t);rect.left=parseInt(style.marginLeft),rect.top=parseInt(style.marginTop)}return rect},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var o=e.$refs.content;o&&"none"===o.style.display?(o.style.display="inline-block",t(),o.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!=typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:m({},this.dimensions.activator),content:m({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var o=this.getActivator();if(!o)return;e.activator=this.measure(o),e.activator.offsetLeft=o.offsetLeft,!1!==this.attach?e.activator.offsetTop=o.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var o=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+o.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+o.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})},714:function(t,e,o){"use strict";o.r(e);var n={name:"CoverageDialog",components:{CoverageMap:o(627).default},props:{products:{type:Array,default:null},variable:{type:Object,default:null},disable:{type:Boolean,default:function(){return!1}}},data:function(){return{dialog:!1,showActivatorTooltip:!1,currentHighlight:null}},watch:{dialog:function(t){t&&this.variable&&!this.products&&this.$emit("loadProducts")}}},r=o(160),c=o(220),l=o.n(c),h=o(333),f=o(623),d=o(622),v=o(830),m=o(654),w=o(671),y=o(602),O=o(299),_=o(300),S=o(205),x=o(302),j=o(127),P=o(831),C=o(619),k=o(757),T=o(705),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{scrollable:"",width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[o("v-btn",t._g(t._b({attrs:{icon:"",color:t.variable?"primary":"applications",disabled:t.disable},on:{mouseover:function(e){t.showActivatorTooltip=!0},mouseleave:function(e){t.showActivatorTooltip=!1}}},"v-btn",r,!1),n),[o("v-icon",[t._v(t._s(t.variable?"mdi-earth":"mdi-map-marker"))])],1)]}}],null,!0),model:{value:t.showActivatorTooltip,callback:function(e){t.showActivatorTooltip=e},expression:"showActivatorTooltip"}},[t._v(" "),o("span",[t._v("Coverage")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),t.products?o("v-card",[o("v-card-title",{staticClass:"text-h6"},[o("v-icon",{attrs:{color:"applications",left:""}},[t._v("\n        "+t._s(1===t.products.length?"mdi-map-marker":"mdi-earth")+"\n      ")]),t._v(" "),o("span",[t._v(t._s(1===t.products.length?t.products[0].properties.title:t.variable&&t.variable.name)+" Coverage")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",{staticClass:"px-0 black--text pb-0 pb-md-3"},[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"5"}},[t.variable?o("v-list",{attrs:{dense:"",subheader:""}},[o("v-subheader",{staticClass:"px-0"},[t._v("\n                Products\n              ")]),t._v(" "),o("v-divider"),t._v(" "),t._l(t.products,(function(e){return o("v-list-item",{key:e.id,staticClass:"px-0",staticStyle:{cursor:"pointer"},on:{mouseover:function(o){t.currentHighlight=e},mouseleave:function(e){t.currentHighlight=null}}},[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.properties.title))])],1),t._v(" "),o("v-list-item-action",{staticClass:"flex-row"},[t.variable?o("v-btn",{attrs:{icon:"",color:"primary",disabled:!e.geometry}},[o("v-icon",[t._v("mdi-map-marker")])],1):t._e(),t._v(" "),o("v-btn",{attrs:{icon:"",color:"primary",to:"/products/"+t.$extractSlug(e),target:"_blank"}},[o("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)}))],2):t.products[0]?[o("div",[o("strong",[t._v("Name")])]),t._v(" "),o("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties.title)+"\n              ")]),t._v(" "),o("div",[o("strong",[t._v("Region")])]),t._v(" "),o("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties["osc:region"])+"\n              ")]),t._v(" "),o("div",[o("strong",[t._v("Satellite missions")])]),t._v(" "),o("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties["osc:missions"].join(", "))+"\n              ")]),t._v(" "),o("div",[o("strong",[t._v("BBOX")])]),t._v(" "),o("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].bbox)+"\n              ")])]:t._e()],2),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"7"}},[o("client-only",[t.products?o("CoverageMap",{ref:"map",attrs:{features:t.products,highlight:t.currentHighlight}}):t._e()],1)],1)],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{CoverageMap:o(627).default}),l()(component,{VBtn:h.a,VCard:f.a,VCardActions:d.a,VCardText:d.c,VCardTitle:d.d,VCol:v.a,VContainer:m.a,VDialog:w.a,VDivider:y.a,VIcon:O.a,VList:_.a,VListItem:S.a,VListItemAction:x.a,VListItemContent:j.a,VListItemTitle:j.b,VRow:P.a,VSpacer:C.a,VSubheader:k.a,VTooltip:T.a})},757:function(t,e,o){"use strict";o(23),o(18),o(22),o(11),o(28),o(19),o(29);var n=o(6),r=(o(758),o(69)),c=o(30);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(r.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:h({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},758:function(t,e,o){var content=o(759);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(36).default)("5b815f9c",content,!0,{sourceMap:!1})},759:function(t,e,o){var n=o(35),r=o(46),c=o(47),l=n(!1),h=r(c);l.push([t.i,'@font-face{font-family:"NotesESABold";src:url('+h+') format("truetype")}.v-application .display-1,.v-application .display-2,.v-application .display-3,.v-application .h1,.v-application .h2,.v-application .h3,.v-application .h4,.v-application .headline,.v-application .text-h1,.v-application .text-h2,.v-application .text-h3,.v-application .text-h4,.v-application h1,.v-application h2,.v-application h3,.v-application h4,.v-btn__content,.v-card__title,.v-chip,.v-tab,.v-toolbar__title{font-family:"NotesESABold",sans-serif}.theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}',""]),t.exports=l}}]);