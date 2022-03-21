(window.webpackJsonp=window.webpackJsonp||[]).push([[17,7,9],{567:function(t,e,r){"use strict";r.r(e);r(26),r(23),r(28),r(29);var n=r(5);r(100),r(14),r(22),r(253),r(25);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{features:{type:Array,default:null},highlight:{type:Object,default:null}},data:function(){return{map:null,baseLayers:[{layer:"terrain-light_3857"},{layer:"overlay_bright_3857"}],vectorSource:null,defaultStyle:null,highlightStyle:null,defaultPadding:[50,25,50,25]}},watch:{highlight:function(t){var e=this;if(this.map&&t&&t.geometry){this.vectorSource.getFeatures().forEach((function(t){return t.setStyle(e.defaultStyle)}));var r=this.vectorSource.getFeatureById(t.id);r.setStyle(this.highlightStyle),this.map.getView().fit(r.getGeometry().getExtent(),{padding:this.defaultPadding,duration:500})}}},mounted:function(){this.createMap()},methods:{createMap:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;this.defaultStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(0, 50, 71, 0.5)",width:3}),fill:new ol.Fill({color:"rgba(0, 50, 71, 0.2)"})}),this.highlightStyle=new ol.Style({stroke:new ol.Stroke({color:"rgba(20, 100, 91, 1)",width:3}),fill:new ol.Fill({color:"rgba(0, 200, 71, 0.4)"})}),fetch("https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var r=e.read(text),n=[];t.baseLayers.forEach((function(e){var o=ol.optionsFromCapabilities(r,{layer:e.layer,matrixSet:"EPSG:3857"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(c(c({},o),{},{wrapX:!0,attributions:r.Contents.Layer.find((function(t){return t.Identifier===e.layer})).Abstract+(t.baseLayers.indexOf(e)<t.baseLayers.length-1?",":"")}))}))}));var o={type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:4326"}},features:t.features.filter((function(t){return!!t.geometry}))};t.vectorSource=new ol.VectorSource({features:(new ol.GeoJSON).readFeatures(o,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"})});var l=new ol.VectorLayer({source:t.vectorSource,style:t.defaultStyle});n.push(l),t.map=new ol.Map({layers:n,target:t.$refs.mapContainer,view:new ol.View({center:[0,0],zoom:0,multiWorld:!0,projection:"EPSG:3857"})}),t.map.getView().fit(t.vectorSource.getExtent(),{padding:t.defaultPadding})}))}}},v=r(155),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("no-ssr",[r("div",{ref:"mapContainer",style:"height: "+(t.$vuetify.breakpoint.smOnly?"200px":"400px")+"; width: 100%;"})])}),[],!1,null,null,null);e.default=component.exports},571:function(t,e,r){var content=r(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("f5c4da9a",content,!0,{sourceMap:!1})},573:function(t,e,r){"use strict";r.r(e);var n=r(156),o=(r(51),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:String,default:null},product:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"ESA EO Catalogue",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project,href:"/projects/".concat(this.slugify(this.project)),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]),Object(n.a)(this.product?[{text:this.product,href:"/products/".concat(this.slugify(this.product)),type:"product"}]:[]))}},methods:{getColor:function(t){switch(t){case"theme":return"grey";case"project":return"primary";case"variable":return"green"}}}}),c=(r(583),r(155)),l=r(201),v=r.n(l),d=r(643),h=r(587),m=r(588),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:t.navigationBreadcrumb},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===t.navigationBreadcrumb[t.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:t.getColor(n.type),dark:"",small:"",label:""}},[t._v("\n        "+t._s(n.type)+"\n      ")]):t._e(),t._v(" "),r("span",{staticClass:"text-capitalize"},[t._v(t._s(n.text))])],1)]}}])})}),[],!1,null,"a0b262a4",null);e.default=component.exports;v()(component,{VBreadcrumbs:d.a,VBreadcrumbsItem:h.a,VChip:m.a})},574:function(t,e,r){var content=r(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("edc7f98e",content,!0,{sourceMap:!1})},575:function(t,e,r){var n=r(30)(!1);n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=n},583:function(t,e,r){"use strict";r(571)},584:function(t,e,r){var n=r(30)(!1);n.push([t.i,".navigationBreadcrumb[data-v-a0b262a4]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-a0b262a4]{font-size:17px!important}",""]),t.exports=n},585:function(t,e,r){var content=r(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("727afb02",content,!0,{sourceMap:!1})},586:function(t,e,r){var n=r(30)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},587:function(t,e,r){"use strict";r(26),r(23),r(25),r(14),r(28),r(22),r(29);var n=r(5),o=r(145),c=r(19);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,v(v({},data),{},{attrs:v(v({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})},588:function(t,e,r){"use strict";r(26),r(23),r(28),r(22),r(29);var n=r(38),o=r(5),c=(r(14),r(25),r(574),r(19)),l=r(180),v=r(142),d=r(43),h=r(202),m=r(36),f=r(108),y=r(145),x=r(204),_=r(21);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(d.a,x.a,y.a,m.a,Object(h.a)("chipGroup"),Object(f.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return w(w(w(w({"v-chip":!0},y.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(y.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(n.a)(e,2),o=r[0],c=r[1];t.$attrs.hasOwnProperty(o)&&Object(_.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(v.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(v.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=w(w({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})},590:function(t,e,r){"use strict";r(25),r(14),r(26),r(143),r(51),r(382),r(569),r(126),r(157);var n=r(2);var o,c=r(144);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},643:function(t,e,r){"use strict";r(26),r(23),r(25),r(14),r(28),r(22),r(29);var n=r(5),o=(r(157),r(585),r(587)),c=r(1),l=Object(c.j)("v-breadcrumbs__divider","li"),v=r(36),d=r(19);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(v.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(l,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(o.a,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},700:function(t,e,r){"use strict";r.r(e);r(26),r(25),r(14),r(28),r(22),r(29);var n=r(5),o=r(53);r(179),r(42),r(102),r(23),r(109);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ProductSingle",components:{CoverageMap:r(567).default},data:function(){return{product:null,productsDialog:!1,showDescription:!1}},head:function(){return{title:this.$route.params.product.replace(/(^\w{1})|(\s+\w{1})/g,(function(t){return t.toUpperCase()}))}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$staticCatalog.$get("products/".concat(t.$route.params.product)).then((function(e){t.product=l(l({},e),{},{properties:l(l({},e.properties),{},{description:"product-84"===e.id?'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus. Euismod nisi porta lorem mollis aliquam ut porttitor. Pharetra vel turpis nunc eget lorem dolor. Facilisis mauris sit amet massa vitae tortor condimentum lacinia.<br /><br />\n            <img style="max-width: 100%" src="https://dummyimage.com/480x120/ddd/aaa" /><br /><br />\n            Feugiat nisl pretium fusce id velit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eget mauris pharetra et ultrices neque ornare aenean. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt augue interdum velit euismod in pellentesque.<br /><br />\n            <a href="#">Laoreet non curabitur gravida arcu ac</a>. Eget nunc scelerisque viverra mauris in. Purus in massa tempor nec feugiat nisl.<br /><br />\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus. Euismod nisi porta lorem mollis aliquam ut porttitor. Pharetra vel turpis nunc eget lorem dolor. Facilisis mauris sit amet massa vitae tortor condimentum lacinia.<br /><br />\n            <img style="max-width: 50%" src="https://dummyimage.com/300x300/aaa/fff" /><img style="max-width: 50%" src="https://dummyimage.com/300x300/ddd/aaa" /><br /><br />\n            Feugiat nisl pretium fusce id velit. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Eget mauris pharetra et ultrices neque ornare aenean. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Tincidunt augue interdum velit euismod in pellentesque.<br /><br />\n            <a href="#">Laoreet non curabitur gravida arcu ac</a>. Eget nunc scelerisque viverra mauris in. Purus in massa tempor nec feugiat nisl.<br /><br />':e.properties.description})})}));case 2:case"end":return e.stop()}}),e)})))()}},d=r(155),h=r(201),m=r.n(h),f=r(301),y=r(588),x=r(692),_=r(590),O=r(282),w=r(693),j=r(180),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.product?r("div",[r("bread-crumb-nav",{attrs:{theme:t.product["osc:theme"],product:t.product.id}}),t._v(" "),r("v-container",{staticClass:"white px-15"},[r("v-row",[r("v-col",[r("h1",{class:t.$vuetify.breakpoint.mdAndUp?"text-h4 mt-5":"text-h6 mt-5"},[t._v("\n          "+t._s(t.product.properties.title)+"\n        ")])])],1),t._v(" "),r("v-row",[r("v-col",[t._l(t.product.properties["osc:themes"],(function(e){return r("v-chip",{key:e,staticClass:"mr-1 text-uppercase",attrs:{color:"grey",small:"",dark:"",label:"",to:"/themes/"+t.slugify(e)}},[t._v("\n          "+t._s(e)+"\n        ")])})),t._v(" "),r("v-chip",{staticClass:"text-uppercase",attrs:{color:"green",small:"",dark:"",label:"",to:"/variables/"+t.slugify(t.product.properties["osc:variable"])}},[t._v("\n          "+t._s(t.product.properties["osc:variable"])+"\n        ")])],2)],1),t._v(" "),r("hr",{staticClass:"my-7"}),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[t.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:t.showDescription,expression:"showDescription"}],domProps:{innerHTML:t._s(t.product.properties.description)}})]),t._v(" "),r("v-btn",{attrs:{text:"","x-small":"",block:""},on:{click:function(e){t.showDescription=!t.showDescription}}},[r("v-icon",{attrs:{left:""}},[t._v("\n              "+t._s(t.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n            ")]),t._v("\n            Description\n          ")],1)]:[r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-text-long\n            ")]),t._v("\n            Description\n          ")],1),t._v(" "),r("p",[r("small",{domProps:{innerHTML:t._s(t.product.properties.description)}})])]],2),t._v(" "),r("v-col",{attrs:{cols:"12",md:"6"}},[r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-information-outline\n          ")]),t._v("\n          Details\n        ")],1),t._v(" "),r("div",{staticClass:"d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-calendar-today\n          ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Start Date")]),t._v(" "+t._s(t.product.properties.start_datetime)+"\n        ")],1),t._v(" "),r("div",{staticClass:"d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-calendar\n          ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("End Date")]),t._v(" "+t._s(t.product.properties.end_datetime)+"\n        ")],1),t._v(" "),t.product.properties.datetime?r("div",{staticClass:"d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-calendar-check\n          ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Release Date")]),t._v(" "+t._s(t.product.properties.datetime&&t.product.properties.datetime.slice(0,-10))+"\n        ")],1):t._e(),t._v(" "),r("div",{staticClass:"d-flex align-center mt-5"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-calendar-text\n          ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Project")]),t._v(" "+t._s(t.product.properties["osc:project"])+"\n        ")],1),t._v(" "),r("div",{staticClass:"d-flex align-center mb-5"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-satellite\n          ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Satellite missions")]),t._v(" "+t._s(t.product.properties["osc:missions"].join(", "))+"\n        ")],1),t._v(" "),t._l(t.product.links.filter((function(t){return"via"===t.rel})).sort((function(a,b){return a.title<b.title||!b.title?-1:1})),(function(link,e){return r("v-btn",{key:e,class:t.$vuetify.breakpoint.xsOnly?"mb-2":"mr-3",attrs:{color:"primary",outlined:"Access"!==link.title,block:t.$vuetify.breakpoint.xsOnly,href:link.href,target:"_blank"}},["Access"===link.title?r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-location-enter\n          ")]):"Documentation"===link.title?r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-file-document-outline\n          ")]):r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-web\n          ")]),t._v("\n          "+t._s(link.title||"Website")+"\n        ")],1)})),t._v(" "),r("hr",{staticClass:"my-7"}),t._v(" "),r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-image-size-select-large\n          ")]),t._v("\n          Product Extent\n        ")],1),t._v(" "),r("no-ssr",[r("CoverageMap",{ref:"map",attrs:{features:[t.product]}})],1)],2)],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;m()(component,{BreadCrumbNav:r(573).default,CoverageMap:r(567).default}),m()(component,{VBtn:f.a,VChip:y.a,VCol:x.a,VContainer:_.a,VIcon:O.a,VRow:w.a,VScaleTransition:j.d})}}]);