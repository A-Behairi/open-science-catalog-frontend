(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{540:function(t,e,n){"use strict";var r=n(321);e.a=r.a},561:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return v}));var r=n(563),o=n(4),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");r.a},563:function(t,e,n){"use strict";n(25),n(21),n(24),n(16),n(30),n(23),n(31);var r=n(7),o=(n(50),n(309),n(310),n(567),n(308)),c=n(569),l=n(143),d=n(27);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},567:function(t,e,n){var content=n(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("03030716",content,!0,{sourceMap:!1})},568:function(t,e,n){var r=n(35)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},573:function(t,e,n){var content=n(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("0de92506",content,!0,{sourceMap:!1})},574:function(t,e,n){var r=n(35)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},576:function(t,e,n){"use strict";n.r(e);n(25),n(21),n(30),n(31);var r=n(7);n(118),n(16),n(23),n(255),n(24);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{features:{type:Array,default:null},highlight:{type:Object,default:null}},data:function(){return{map:null,baseLayers:[{layer:"terrain-light_3857"},{layer:"overlay_bright_3857"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25]}},watch:{highlight:function(t){var e=this;if(this.map&&t&&t.geometry){this.vectorSource.getFeatures().forEach((function(t){return t.setStyle(e.defaultStyle)}));var n=this.vectorSource.getFeatureById(t.id);n.setStyle(this.highlightStyle),this.map.getView().fit(n.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}}},mounted:function(){this.createMap()},methods:{createMap:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.2)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var n=e.read(text),r=[];t.baseLayers.forEach((function(e){var o=ol.optionsFromCapabilities(n,{layer:e.layer,matrixSet:"EPSG:3857"});r.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(c(c({},o),{},{wrapX:!0,attributions:n.Contents.Layer.find((function(t){return t.Identifier===e.layer})).Abstract+(t.baseLayers.indexOf(e)<t.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t.features.filter((function(t){return!!t.geometry}))};t.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})});var l=new ol.VectorLayer({source:t.vectorSource,style:t.defaultStyle});r.push(l),t.map=new ol.Map({layers:r,target:t.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:0,multiWorld:!0,projection:"EPSG:3857"})}),t.map.getView().fit(t.vectorSource.getExtent(),{padding:t.defaultPadding})}))}}},d=n(150),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("no-ssr",[n("div",{ref:"mapContainer",style:"height: "+(t.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,n){"use strict";var r=n(198),o=n(7),c=(n(50),n(126),n(108),n(93),n(119),n(16),n(255),n(25),n(21),n(24),n(30),n(23),n(31),n(573),n(738)),l=n(570),d=n(307),v=n(587),h=n(311),f=n(601),m=n(588),x=n(304),_=n(27),y=n(26),w=n(4);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(_.a)(d.a,v.a,h.a,f.a,m.a,l.a);e.a=j.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:k({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=k(k({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},617:function(t,e,n){"use strict";n.r(e);var r={name:"CoverageDialog",components:{CoverageMap:n(576).default},props:{products:{type:Array,default:null},variable:{type:Object,default:null},disable:{type:Boolean,default:function(){return!1}}},data:function(){return{dialog:!1,showActivatorTooltip:!1,currentHighlight:null}},watch:{dialog:function(t){t&&this.variable&&!this.products&&this.$emit("loadProducts")}}},o=n(150),c=n(197),l=n.n(c),d=n(321),v=n(563),h=n(561),f=n(740),m=n(585),x=n(613),_=n(542),y=n(283),w=n(284),O=n(186),k=n(286),j=n(117),C=n(741),S=n(557),P=n(653),A=n(658),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"",width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[n("v-btn",t._g(t._b({attrs:{icon:"",color:t.variable?"primary":"applications",disabled:t.disable},on:{mouseover:function(e){t.showActivatorTooltip=!0},mouseleave:function(e){t.showActivatorTooltip=!1}}},"v-btn",o,!1),r),[n("v-icon",[t._v(t._s(t.variable?"mdi-earth":"mdi-map-marker"))])],1)]}}],null,!0),model:{value:t.showActivatorTooltip,callback:function(e){t.showActivatorTooltip=e},expression:"showActivatorTooltip"}},[t._v(" "),n("span",[t._v("Coverage")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),t.products?n("v-card",[n("v-card-title",{staticClass:"text-h6"},[n("v-icon",{attrs:{color:"applications",left:""}},[t._v("\n        "+t._s(1===t.products.length?"mdi-map-marker":"mdi-earth")+"\n      ")]),t._v(" "),n("span",[t._v(t._s(1===t.products.length?t.products[0].properties.title:t.variable&&t.variable.name)+" Coverage")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"px-0 black--text pb-0 pb-md-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"5"}},[t.variable?n("v-list",{attrs:{dense:"",subheader:""}},[n("v-subheader",{staticClass:"px-0"},[t._v("\n                Products\n              ")]),t._v(" "),n("v-divider"),t._v(" "),t._l(t.products,(function(e){return n("v-list-item",{key:e.id,staticClass:"px-0",staticStyle:{cursor:"pointer"},on:{mouseover:function(n){t.currentHighlight=e}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.properties.title))])],1),t._v(" "),n("v-list-item-action",{staticClass:"flex-row"},[t.variable?n("v-btn",{attrs:{icon:"",color:"primary",disabled:!e.geometry}},[n("v-icon",[t._v("mdi-map-marker")])],1):t._e(),t._v(" "),n("v-btn",{attrs:{icon:"",color:"primary",to:"/products/"+e.id,target:"_blank"}},[n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)}))],2):t.products[0]?[n("div",[n("strong",[t._v("Name")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties.title)+"\n              ")]),t._v(" "),n("div",[n("strong",[t._v("Region")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties["osc:region"])+"\n              ")]),t._v(" "),n("div",[n("strong",[t._v("Satellite missions")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].properties["osc:missions"].join(", "))+"\n              ")]),t._v(" "),n("div",[n("strong",[t._v("BBOX")])]),t._v(" "),n("div",{staticClass:"mb-2"},[t._v("\n                "+t._s(t.products[0].bbox)+"\n              ")])]:t._e()],2),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"7"}},[n("no-ssr",[t.products?n("CoverageMap",{ref:"map",attrs:{features:t.products,highlight:t.currentHighlight}}):t._e()],1)],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{CoverageMap:n(576).default}),l()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VContainer:m.a,VDialog:x.a,VDivider:_.a,VIcon:y.a,VList:w.a,VListItem:O.a,VListItemAction:k.a,VListItemContent:j.a,VListItemTitle:j.c,VRow:C.a,VSpacer:S.a,VSubheader:P.a,VTooltip:A.a})},647:function(t,e,n){var content=n(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("10ea2f73",content,!0,{sourceMap:!1})},659:function(t,e,n){"use strict";n(647)},660:function(t,e,n){var r=n(35)(!1);r.push([t.i,"[data-v-77e2c932] table{font-size:14px;font-weight:700}[data-v-77e2c932] table td:not(:first-child):not(:nth-child(2)):not(:last-child),[data-v-77e2c932] table th:not(:first-child):not(:nth-child(2)):not(:last-child){padding:0!important}[data-v-77e2c932] table td:first-child,[data-v-77e2c932] table td:last-child,[data-v-77e2c932] table td:nth-child(2),[data-v-77e2c932] table th:first-child,[data-v-77e2c932] table th:last-child,[data-v-77e2c932] table th:nth-child(2){position:-webkit-sticky;position:sticky;background:#fff}[data-v-77e2c932] table td:first-child,[data-v-77e2c932] table td:last-child,[data-v-77e2c932] table td:nth-child(2){z-index:3!important}[data-v-77e2c932] table th:first-child,[data-v-77e2c932] table th:last-child,[data-v-77e2c932] table th:nth-child(2){z-index:4!important}[data-v-77e2c932] table td:first-child,[data-v-77e2c932] table th:first-child{left:0;width:70px;min-width:70px;max-width:70px}[data-v-77e2c932] table td:nth-child(2),[data-v-77e2c932] table th:nth-child(2){left:70px;width:136px;min-width:136px;max-width:136px;border-right:thin solid rgba(0,0,0,.12)}[data-v-77e2c932] table td:last-child,[data-v-77e2c932] table th:last-child{right:0;width:100px;min-width:100px;max-width:100px;border-left:thin solid rgba(0,0,0,.12)}@media (max-width:800px){[data-v-77e2c932] table td:first-child,[data-v-77e2c932] table th:first-child{width:34px;min-width:34px;max-width:34px;padding:0!important}[data-v-77e2c932] table td:nth-child(2),[data-v-77e2c932] table th:nth-child(2){left:34px;width:90px;min-width:90px;max-width:90px;padding:0 2px!important}[data-v-77e2c932] table td:last-child,[data-v-77e2c932] table th:last-child{width:40px;min-width:40px;max-width:40px;overflow:hidden;word-wrap:break-word;padding:0 2px!important;text-align:right!important}}[data-v-77e2c932] .v-data-table__expanded__content{box-shadow:none!important}.subCell[data-v-77e2c932]{border-bottom:thin solid rgba(0,0,0,.12);overflow:hidden;line-height:normal;word-wrap:break-word}[data-v-77e2c932] table>tbody>tr:hover:not(.v-data-table__empty-wrapper){background:#eee!important}.noAvailableProduct[data-v-77e2c932]{font-size:10px;margin:4px;padding:3px;background:#b67e34;border-radius:5px;color:#fff;width:50px;text-align:center}[data-v-77e2c932] table td{padding:0 10px!important}[data-v-77e2c932] .hoverCell{background-color:#eee!important}[data-v-77e2c932] .v-progress-linear,[data-v-77e2c932] th span{pointer-events:none}[data-v-77e2c932] td:not(:first-child):not(:nth-child(2)):not(:last-child),[data-v-77e2c932] th:not(:first-child):not(:nth-child(2)):not(:last-child){width:var(--table-cell);min-width:var(--table-cell);max-width:var(--table-cell)}.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(odd){z-index:3;text-align:center}.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(2n){z-index:2}.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(2n)>span{visibility:hidden}@media (max-width:900px){.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(n){z-index:2}.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(n)>span{visibility:hidden}.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(6n){z-index:3;text-align:center}.hide-even[data-v-77e2c932]  th:not(:first-child):not(:nth-child(2)):not(:last-child):nth-child(6n)>span{visibility:visible}}",""]),t.exports=r},689:function(t,e,n){"use strict";n.r(e);n(25),n(21),n(24),n(30),n(31);var r=n(28),o=n(7),c=(n(139),n(50),n(118),n(16),n(23),n(47),n(76),n(79),n(142));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"MetricsTable",components:{Coverage:n(617).default},props:{filter:{type:String,default:function(){return""}},headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},tableZoom:{type:Number,default:100}},data:function(){return{isMounted:!1,expanded:[],variablesList:{},products:{}}},computed:d(d({},Object(c.d)("staticCatalog",["variables"])),{},{transformedHeaders:function(){var t=this.headers.map((function(t){return{text:t,value:t}}));return t.unshift({text:"Name",value:"name"}),t.push({text:"Coverage",value:"coverage"}),t},cssProps:function(){if(this.isMounted){var t=this.tableZoom*(this.$vuetify.breakpoint.smOnly?1.6:1.8)*this.$refs.table.$el.clientWidth/100;return{"--table-cell":"".concat(t,"px")}}}}),watch:{tableZoom:function(){this.$nextTick((function(){document.querySelector(".v-data-table__wrapper").scrollLeft=1e4}))}},mounted:function(){this.isMounted=!0,this.$nextTick((function(){document.querySelector(".v-data-table__wrapper").scrollLeft=1e4,document.querySelector("table").addEventListener("mouseover",(function(t){var e=t.target,n=e.parentNode.children,r=Array.prototype.indexOf.call(n,e);document.querySelectorAll(".hoverCell").forEach((function(t){t.classList.remove("hoverCell")})),0!==r&&1!==r&&r!==n.length-1&&document.querySelectorAll("td:nth-child(".concat(r+1,")")).forEach((function(t){t.classList.add("hoverCell")}))}))}))},methods:d(d({},Object(c.b)("staticCatalog",["retreiveVariable"])),{},{expandVariable:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var o,c,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=e.slugify(t.name),e.products[o]){n.next=10;break}return n.next=4,e.retreiveVariable(o);case 4:return c=n.sent,e.$set(e.variablesList,o,e.variable),l=[],n.next=9,Promise.all(c.links.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(link){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("item"!==link.rel){t.next=5;break}return t.next=3,e.$axios.$get(link.href);case 3:n=t.sent,l.push(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 9:e.$set(e.products,o,l);case 10:case"end":return n.stop()}}),n)})))()},getProducts:function(t){var e=[];return this.products[this.slugify(t)]&&(e=this.products[this.slugify(t)]),e}})},h=v,f=(n(659),n(150)),m=n(197),x=n.n(m),_=n(321),y=n(734),w=n(283),O=n(600),k=n(658),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{ref:"table",class:t.tableZoom<3?"hide-even ":"",style:t.cssProps,attrs:{headers:t.transformedHeaders,items:t.items,"items-per-page":-1,"item-key":"name",search:t.filter,"disable-sort":"",height:t.$vuetify.breakpoint.mdAndUp?"60vh":"65vh","fixed-header":"","hide-default-footer":"","show-expand":"",expanded:t.expanded,"mobile-breakpoint":0},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"header.name",fn:function(e){var header=e.header;return[t._v("\n    "+t._s(header.text)+"\n    "),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({style:"position: absolute; left: "+(t.$vuetify.breakpoint.xsOnly?-34:-60)+"px; top: 5px",attrs:{icon:""},on:{click:function(e){t.expanded=t.expanded.length===t.items.length?[]:t.items}}},r),[n("v-icon",{attrs:{small:!!t.$vuetify.breakpoint.xsOnly}},[t._v("\n            "+t._s(t.expanded.length===t.items.length?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n          ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(t.expanded.length===t.items.length?"Close all":"Expand all"))])])]}},{key:"item.data-table-expand",fn:function(e){var r=e.item,o=e.isExpanded,c=e.expand;return[r.summary.numberOfProducts&&!o?n("v-btn",{attrs:{icon:""},on:{click:function(){c(!0),t.expandVariable(r)}}},[n("v-icon",[t._v("mdi-chevron-down")])],1):r.summary.numberOfProducts&&o?n("v-btn",{attrs:{icon:""},on:{click:function(){c(!1),t.expandVariable(r)}}},[n("v-icon",[t._v("mdi-chevron-up")])],1):n("div",{staticClass:"noAvailableProduct"},[t._v("\n      No products available\n    ")])]}},{key:"expanded-item",fn:function(e){var r=e.item;return[t.getProducts(r.name).length>0?n("td",{staticClass:"pa-0",staticStyle:{"z-index":"0 !important"},attrs:{colspan:t.transformedHeaders.length+1}},[n("table",{staticStyle:{width:"100%","border-spacing":"0"}},[n("tbody",t._l(t.getProducts(r.name),(function(e){return n("tr",{key:e.id,staticStyle:{"line-height":"3"}},[n("td",{staticClass:"px-4 text-start subCell"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("v-btn",t._g({attrs:{icon:"",small:"",color:"applications",to:"/products/"+e.id,target:"_blank"}},o),[n("v-icon",[t._v("\n                      mdi-open-in-new\n                    ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v("Go to "+t._s(e.properties.title)+" product")])])],1),t._v(" "),n("td",{staticClass:"px-4 py-2 subCell"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on;return[n("nuxt-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/products/"+e.id}},[n("small",t._g({staticStyle:{cursor:"pointer"}},o),[t._v(t._s(e.properties.title))])])]}}],null,!0)},[t._v(" "),n("span",[t._v("Go to "+t._s(e.properties.title)+" product")])])],1),t._v(" "),t._l(t.headers,(function(r){return n("td",{key:r,staticClass:"subCell"},[e.properties.start_datetime.slice(0,4)<=r&&e.properties.end_datetime.slice(0,4)>=r?n("v-progress-linear",{key:r,style:"border-radius: "+(e.properties.start_datetime.slice(0,4)==r?5:0)+"px "+(e.properties.end_datetime.slice(0,4)==r?5:0)+"px "+(e.properties.end_datetime.slice(0,4)==r?5:0)+"px "+(e.properties.start_datetime.slice(0,4)==r?5:0)+"px",attrs:{color:"applications",height:"15",value:"100"}}):n("span",{staticStyle:{visibility:"hidden"}},[t._v("no data")])],1)})),t._v(" "),n("td",{staticClass:"px-4 subCell"},[n("Coverage",{attrs:{products:[e]}})],1)],2)})),0)])]):t._e()]}},t._l(t.headers,(function(e,r){return{key:"item."+e,fn:function(o){var c=o.item;return[c.summary.years.includes(e)?n("v-progress-linear",{key:e,style:"border-radius: "+(c.summary.years.includes(t.headers[r-1])?0:5)+"px "+(c.summary.years.includes(t.headers[r+1])?0:5)+"px "+(c.summary.years.includes(t.headers[r+1])?0:5)+"px "+(c.summary.years.includes(t.headers[r-1])?0:5)+"px;",attrs:{color:"secondary",height:"15",value:"100"}}):t._e()]}}})),{key:"item.name",fn:function(e){var r=e.item;return[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("nuxt-link",t._g({staticStyle:{cursor:"pointer","font-size":"12px","text-decoration":"none"},attrs:{to:"variables/"+t.slugify(r.name)}},o),[t._v("\n          "+t._s(r.name)+"\n        ")])]}}],null,!0)},[t._v(" "),n("span",[t._v("Go to "+t._s(r.name)+" variable")])])]}},{key:"item.coverage",fn:function(e){var r=e.item;return[n("Coverage",{attrs:{variable:r,products:t.products[t.slugify(r.name)],disable:!r.summary.numberOfProducts},on:{loadProducts:function(e){return t.expandVariable(r)}}})]}}],null,!0)})}),[],!1,null,"77e2c932",null);e.default=component.exports;x()(component,{Coverage:n(617).default}),x()(component,{VBtn:_.a,VDataTable:y.a,VIcon:w.a,VProgressLinear:O.a,VTooltip:k.a})}}]);