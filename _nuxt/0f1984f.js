(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5,6,8],{517:function(t,e,r){"use strict";r.r(e);r(8),r(17),r(82);var n={components:{},data:function(){return{map:null,baseLayers:[{layer:"terrain-light_3857"},{layer:"overlay_bright_3857"}]}},created:function(){var t=this,ol=this.$ol,e=new ol.WMTSCapabilities;fetch("https://s2maps.eu/WMTSCapabilities.xml").then((function(t){return t.text()})).then((function(text){var r=e.read(text),n=[];t.baseLayers.forEach((function(t){var e=ol.optionsFromCapabilities(r,{layer:t.layer,matrixSet:"EPSG:3857"});n.push(new ol.TileLayer({opacity:1,source:new ol.WMTS(e)}))})),t.map=new ol.Map({layers:n,target:"mapContainer",view:new ol.View({center:[0,0],zoom:0})})}))}},o=r(134),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("div",{staticStyle:{height:"400px",width:"100%"},attrs:{id:"mapContainer"}})])}),[],!1,null,null,null);e.default=component.exports},522:function(t,e,r){"use strict";r.r(e);var n={name:"CoverageDialog",components:{CoverageMap:r(517).default},props:{record:{type:Object,default:function(){return{}}},variable:{type:Object,default:function(){return{}}},disable:{type:Boolean,default:function(){return!1}}},data:function(){return{dialog:!1,showActivatorTooltip:!1}}},o=r(134),l=r(176),c=r.n(l),d=r(269),v=r(514),h=r(513),f=r(602),m=r(528),x=r(603),_=r(495),y=r(242),w=r(243),C=r(169),k=r(245),V=r(97),S=r(605),T=r(510),A=r(555),O=r(606),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{scrollable:"",width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[r("v-btn",t._g(t._b({attrs:{icon:"",color:t.record.name?"applications":"primary",disabled:t.disable},on:{mouseover:function(e){t.showActivatorTooltip=!0},mouseleave:function(e){t.showActivatorTooltip=!1}}},"v-btn",o,!1),n),[r("v-icon",[t._v(t._s(t.record.name?"mdi-map-marker":"mdi-earth"))])],1)]}}],null,!0),model:{value:t.showActivatorTooltip,callback:function(e){t.showActivatorTooltip=e},expression:"showActivatorTooltip"}},[t._v(" "),r("span",[t._v("Coverage")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h6"},[r("v-icon",{attrs:{color:"applications",left:""}},[t._v("\n        "+t._s(t.record.name?"mdi-map-marker":"mdi-earth")+"\n      ")]),t._v(" "),r("span",[t._v(t._s(t.record.name||t.variable.name)+" Coverage")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"px-0 black--text"},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"5"}},[r("v-list",{attrs:{dense:"",subheader:""}},[r("v-subheader",{staticClass:"px-0"},[t._v("\n                Records\n              ")]),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{staticClass:"px-0"},[r("v-list-item-content",[r("v-list-item-title",[t._v("VOD_Africa_SMOS IC products CATDS")])],1),t._v(" "),r("v-list-item-action",{staticClass:"flex-row"},[r("v-btn",{attrs:{icon:"",color:"primary"}},[r("v-icon",[t._v("mdi-map-marker")])],1),t._v(" "),r("v-btn",{attrs:{icon:"",color:"primary"}},[r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",md:"7"}},[t.dialog?r("CoverageMap"):t._e()],1)],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{CoverageMap:r(517).default}),c()(component,{VBtn:d.a,VCard:v.a,VCardActions:h.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VContainer:m.a,VDialog:x.a,VDivider:_.a,VIcon:y.a,VList:w.a,VListItem:C.a,VListItemAction:k.a,VListItemContent:V.a,VListItemTitle:V.b,VRow:S.a,VSpacer:T.a,VSubheader:A.a,VTooltip:O.a})},525:function(t,e,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("8afd902c",content,!0,{sourceMap:!1})},548:function(t,e,r){"use strict";r(525)},549:function(t,e,r){var n=r(26)(!1);n.push([t.i,"[data-v-2600a237] table{font-size:14px;font-weight:700}[data-v-2600a237] table td:not(:first-child):not(:nth-child(2)):not(:last-child){padding:0!important}[data-v-2600a237] table td:first-child,[data-v-2600a237] table td:last-child,[data-v-2600a237] table td:nth-child(2),[data-v-2600a237] table th:first-child,[data-v-2600a237] table th:last-child,[data-v-2600a237] table th:nth-child(2){position:-webkit-sticky;position:sticky;background:#fff}[data-v-2600a237] table td:first-child,[data-v-2600a237] table td:last-child,[data-v-2600a237] table td:nth-child(2){z-index:3!important}[data-v-2600a237] table th:first-child,[data-v-2600a237] table th:last-child,[data-v-2600a237] table th:nth-child(2){z-index:4!important}[data-v-2600a237] table td:first-child,[data-v-2600a237] table th:first-child{left:0;width:70px;min-width:70px;max-width:70px}[data-v-2600a237] table td:nth-child(2),[data-v-2600a237] table th:nth-child(2){left:70px;width:136px;min-width:136px;max-width:136px;border-right:thin solid rgba(0,0,0,.12)}[data-v-2600a237] table td:last-child,[data-v-2600a237] table th:last-child{right:0;width:100px;min-width:100px;max-width:100px;border-left:thin solid rgba(0,0,0,.12)}@media (max-width:800px){[data-v-2600a237] table td:first-child,[data-v-2600a237] table th:first-child{width:34px;min-width:34px;max-width:34px;padding:0!important}[data-v-2600a237] table td:nth-child(2),[data-v-2600a237] table th:nth-child(2){left:34px;width:90px;min-width:90px;max-width:90px;padding:0 2px!important}[data-v-2600a237] table td:last-child,[data-v-2600a237] table th:last-child{width:40px;min-width:40px;max-width:40px;overflow:hidden;word-wrap:break-word;padding:0 2px!important;text-align:right!important}}[data-v-2600a237] .v-data-table__expanded__content{box-shadow:none!important}.subCell[data-v-2600a237]{border-bottom:thin solid rgba(0,0,0,.12);overflow:hidden;line-height:normal;word-wrap:break-word}[data-v-2600a237] table>tbody>tr:hover:not(.v-data-table__empty-wrapper){background:#eee!important}.noAvailableProduct[data-v-2600a237]{font-size:10px;margin:4px;padding:3px;background:#b67e34;border-radius:5px;color:#fff;width:50px;text-align:center}[data-v-2600a237] table td{padding:0 10px!important}[data-v-2600a237] .hoverCell{background-color:#eee!important}[data-v-2600a237] .v-progress-linear,[data-v-2600a237] th span{pointer-events:none}",""]),t.exports=n},551:function(t,e,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("950095bc",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r.r(e);r(82),r(8),r(17);var n={name:"MetricsTable",components:{Coverage:r(522).default},props:{filter:{type:String,default:function(){return""}},headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}}},data:function(){return{expanded:[],records:[{name:"Bathymetry_Arctic_Cryosat",years:[2014]},{name:"Satellite SAR altimeter product_Sea Floor Mapping_Oceania_Cryosat",years:[2012,2013]}]}},computed:{transformedHeaders:function(){var t=this.headers.map((function(t){return{text:t,value:t}}));return t.unshift({text:"Name",value:"name"}),t.push({text:"Coverage",value:"coverage"}),t}},mounted:function(){this.$nextTick((function(){document.querySelector(".v-data-table__wrapper").scrollLeft=1e4,document.querySelector("table").addEventListener("mouseover",(function(t){var e=t.target,r=e.parentNode.children,n=Array.prototype.indexOf.call(r,e);document.querySelectorAll(".hoverCell").forEach((function(t){t.classList.remove("hoverCell")})),0!==n&&1!==n&&n!==r.length-1&&document.querySelectorAll("td:nth-child(".concat(n+1,")")).forEach((function(t){t.classList.add("hoverCell")}))}))}))}},o=(r(548),r(134)),l=r(176),c=r.n(l),d=r(269),v=r(608),h=r(242),f=r(246),m=r(606),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-data-table",{attrs:{headers:t.transformedHeaders,items:t.items,"items-per-page":-1,search:t.filter,"disable-sort":"",height:"60vh","fixed-header":"","hide-default-footer":"","show-expand":"",expanded:t.expanded,"mobile-breakpoint":0},on:{"update:expanded":function(e){t.expanded=e}},scopedSlots:t._u([{key:"header.name",fn:function(e){var header=e.header;return[t._v("\n    "+t._s(header.text)+"\n    "),t._v(" "),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({style:"position: absolute; left: "+(t.$vuetify.breakpoint.xsOnly?-34:-60)+"px; top: 5px",attrs:{icon:""},on:{click:function(e){t.expanded=t.expanded.length===t.items.length?[]:t.items}}},n),[r("v-icon",{attrs:{small:!!t.$vuetify.breakpoint.xsOnly}},[t._v("\n            "+t._s(t.expanded.length===t.items.length?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n          ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v(t._s(t.expanded.length===t.items.length?"Close all":"Expand all"))])])]}},{key:"item.data-table-expand",fn:function(e){var n=e.item,o=e.isExpanded,l=e.expand;return[n.numberOfRecords&&!o?r("v-btn",{attrs:{icon:""},on:{click:function(t){return l(!0)}}},[r("v-icon",[t._v("mdi-chevron-down")])],1):n.numberOfRecords&&o?r("v-btn",{attrs:{icon:""},on:{click:function(t){return l(!1)}}},[r("v-icon",[t._v("mdi-chevron-up")])],1):r("div",{staticClass:"noAvailableProduct"},[t._v("\n      No products available\n    ")])]}},{key:"expanded-item",fn:function(){return[r("td",{staticClass:"pa-0",staticStyle:{"z-index":"0 !important"},attrs:{colspan:t.transformedHeaders.length+1}},[r("table",{staticStyle:{width:"100%","border-spacing":"0"}},[r("tbody",t._l(t.records,(function(e){return r("tr",{key:e.name,staticStyle:{"line-height":"3"}},[r("td",{staticClass:"px-4 text-start subCell"},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("v-btn",t._g({attrs:{icon:"",small:"",color:"applications"}},n),[r("v-icon",[t._v("\n                      mdi-open-in-new\n                    ")])],1)]}}],null,!0)},[t._v(" "),r("span",[t._v("Go to "+t._s(e.name)+" record")])])],1),t._v(" "),r("td",{staticClass:"px-4 py-2 subCell"},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[r("small",t._g({staticStyle:{cursor:"pointer"}},o),[t._v(t._s(e.name))])]}}],null,!0)},[t._v(" "),r("span",[t._v("Go to "+t._s(e.name)+" record")])])],1),t._v(" "),t._l(t.headers,(function(n,o){return r("td",{key:n,staticClass:"subCell"},[e.years.includes(n)?r("v-progress-linear",{key:n,style:"border-radius: "+(e.years.includes(t.headers[o-1])?0:5)+"px "+(e.years.includes(t.headers[o+1])?0:5)+"px "+(e.years.includes(t.headers[o+1])?0:5)+"px "+(e.years.includes(t.headers[o-1])?0:5)+"px",attrs:{color:"applications",height:"15",value:"100"}}):r("span",{staticStyle:{visibility:"hidden"}},[t._v("no data")])],1)})),t._v(" "),r("td",{staticClass:"px-4 subCell"},[r("Coverage",{attrs:{record:e}})],1)],2)})),0)])])]},proxy:!0},t._l(t.headers,(function(e,n){return{key:"item."+e,fn:function(o){var l=o.item;return[l.years.includes(e)?r("v-progress-linear",{key:e,style:"border-radius: "+(l.years.includes(t.headers[n-1])?0:5)+"px "+(l.years.includes(t.headers[n+1])?0:5)+"px "+(l.years.includes(t.headers[n+1])?0:5)+"px "+(l.years.includes(t.headers[n-1])?0:5)+"px;",attrs:{color:"secondary",height:"15",value:"100"}}):t._e()]}}})),{key:"item.name",fn:function(e){var n=e.item;return[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("small",t._g({staticStyle:{cursor:"pointer"}},o),[t._v(t._s(n.name))])]}}],null,!0)},[t._v(" "),r("span",[t._v("Go to "+t._s(n.name)+" variable")])])]}},{key:"item.coverage",fn:function(t){var e=t.item;return[r("Coverage",{attrs:{variable:e,disable:!e.numberOfRecords}})]}}],null,!0)})}),[],!1,null,"2600a237",null);e.default=component.exports;c()(component,{Coverage:r(522).default}),c()(component,{VBtn:d.a,VDataTable:v.a,VIcon:h.a,VProgressLinear:f.a,VTooltip:m.a})},564:function(t,e,r){"use strict";r(551)},565:function(t,e,r){var n=r(26)(!1);n.push([t.i,".v-tabs[data-v-099f17fa]  .v-tab{min-width:0;text-transform:unset;padding:0 10px;font-size:80%}.v-tabs[data-v-099f17fa]  .v-tabs-slider-wrapper{transition:none}.v-tabs[data-v-099f17fa]  .v-tabs-bar--is-mobile>.v-slide-group__next,.v-tabs[data-v-099f17fa]  .v-tabs-bar--is-mobile>.v-slide-group__prev{display:none!important}",""]),t.exports=n},610:function(t,e,r){"use strict";r.r(e);var n=r(48),o=(r(338),r(20),r(8),r(17),r(259),r(51),r(21),r(154),r(563)),l=r(600);o.a.register(l.a);var c={name:"Metrics",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.$get("/themes");case 3:return n=e.sent,e.abrupt("return",{themes:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return this.recordsChart=null,this.variablePie=null,{dialog:!1,filter:"",selectedTab:0,metrics:null}},head:{title:"Metrics"},computed:{nonEmptyVariables:function(){return this.metrics.variables.filter((function(t){return t.numberOfRecords>0})).sort((function(a,b){return b.numberOfRecords-a.numberOfRecords}))}},watch:{dialog:function(t){t||(this.recordsChart&&this.recordsChart.destroy(),this.variablePie&&this.variablePie.destroy())}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/metrics");case 2:t.metrics=e.sent;case 3:case"end":return e.stop()}}),e)})))()},methods:{fetchVariables:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/variables/metrics");case 2:r=e.sent,n={},r.variables.forEach((function(t){t.years.forEach((function(t){n[t]?n[t]+=1:n[t]=1}))})),t.recordsChart=new o.a(document.getElementById("recordsChart"),{type:"bar",data:{labels:t.metrics.years,datasets:[{label:"Number of records",data:Object.values(n),backgroundColor:[t.$vuetify.theme.themes.light.applications],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}}),l={},t.nonEmptyVariables.forEach((function(t){l[t.name]=t.numberOfRecords})),c=(c=Object.values(l)).sort((function(a,b){return a-b})),t.variablePie=new o.a(document.getElementById("variablePie"),{plugins:[t.hoverLabel()],type:"doughnut",data:{labels:Object.keys(l),datasets:[{data:c,backgroundColor:"white",hoverBackgroundColor:[t.$vuetify.theme.themes.light.applications],hoverBorderWidth:0,innerText:c[0],radius:110,cutout:180},{data:c,backgroundColor:[t.$vuetify.theme.themes.light.applications],hoverBackgroundColor:[t.$vuetify.theme.themes.light.applications],hoverBorderWidth:0,innerText:c[0],radius:150,cutout:65}]},options:{responsive:!0,events:[],plugins:{legend:{display:!1},tooltip:{enabled:!1}}}});case 11:case"end":return e.stop()}}),e)})))()},hoverHandler:function(t){var e=this.variablePie.getElementsAtEventForMode(t,"nearest",{intersect:!0},!0);e.length>0&&e[0].datasetIndex>0&&(this.variablePie.setActiveElements([{datasetIndex:0,index:e[0].index}]),this.variablePie.update())},hoverLabel:function(){var t=null,e=null,r=null;return{id:"hoverLabel",afterDraw:function(n){var o=n.ctx,l=n.chartArea,c=l.top,d=l.width,v=l.height;o.save(),n._active.length>0&&(t=n.config.data.labels[n._active[0].index],e=n.config.data.datasets[n._active[0].datasetIndex].data[n._active[0].index],r=n.config.data.datasets[n._active[0].datasetIndex].hoverBackgroundColor[n._active[0].index]),o.font="bolder 10px Arial",o.fillStyle=r,o.textAlign="center",o.fillText(t||"",d/2,15),o.font="bolder 10px Arial",o.fillStyle="black",o.textAlign="center",o.fillText(e?"".concat(e," records"):"",d/2,v/2+c),o.restore()}}},filterItems:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(0!==t){r.next=5;break}return r.next=3,e.$axios.$get("/metrics");case 3:return e.metrics=r.sent,r.abrupt("return");case 5:return r.next=7,e.$axios.$get("/metrics/atmosphere/metrics");case 7:e.metrics=r.sent;case 8:case"end":return r.stop()}}),r)})))()}}},d=(r(564),r(134)),v=r(176),h=r.n(v),f=r(269),m=r(514),x=r(513),_=r(602),y=r(528),w=r(603),C=r(495),k=r(242),V=r(243),S=r(169),T=r(246),A=r(605),O=r(510),$=r(607),E=r(609),R=r(497),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"px-0 white"},[r("v-col",{attrs:{cols:"12",sm:"8",lg:"9"}},[r("v-tabs",{on:{change:t.filterItems},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[r("v-tab",[t._v("\n          All\n        ")]),t._v(" "),t._l(t.themes,(function(e){return r("v-tab",{key:e.id},[r("div",[t._v("\n            "+t._s(e.name)+"\n          ")])])}))],2)],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"d-flex pa-2",attrs:{cols:"12",sm:"4",lg:"3"}},[r("v-text-field",{attrs:{"hide-details":"",solo:"","single-line":"",outlined:"",dense:"",placeholder:"Filter by keywords...","prepend-inner-icon":"mdi-magnify"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t._v(" "),r("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[t.metrics?r("MetricsTable",{attrs:{filter:t.filter,headers:t.metrics.years,items:t.metrics.variables}}):r("v-progress-linear",{attrs:{indeterminate:""}})],1),t._v(" "),t.metrics?r("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[r("v-dialog",{attrs:{scrollable:"",width:"1000"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"align-self-center",attrs:{color:"applications",dark:"",block:t.$vuetify.breakpoint.xsOnly},on:{click:t.fetchVariables}},"v-btn",o,!1),n),[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-poll\n            ")]),t._v("\n            Statistics\n          ")],1)]}}],null,!1,987104028),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h6"},[r("v-icon",{attrs:{color:"applications",left:""}},[t._v("\n              mdi-poll\n            ")]),t._v(" "),r("span",[t._v("All stats")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"py-4 black--text"},[r("v-container",[r("div",{staticClass:"d-flex mx-6"},[r("span",[t._v("Number of projects: "+t._s(t.metrics.summary.totalProjects))]),t._v(" "),r("v-spacer"),t._v(" "),r("span",[t._v("Number of records: "+t._s(t.metrics.summary.records))])],1),t._v(" "),r("div",{staticClass:"ma-6",staticStyle:{"text-align":"center"}},[t._v("\n                Temporal coverage\n              ")]),t._v(" "),r("canvas",{attrs:{id:"recordsChart"}})]),t._v(" "),r("v-divider"),t._v(" "),r("v-container",[r("div",{staticClass:"ma-6",staticStyle:{"text-align":"center"}},[t._v("\n                Variable distribution\n              ")]),t._v(" "),r("v-container",[r("v-row",{staticStyle:{height:"300px"}},[r("v-col",[t._v("\n                    Variable list\n                    "),r("v-list",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"300px"}},t._l(t.nonEmptyVariables,(function(e){return r("v-list-item",{key:e.id},[t._v("\n                        "+t._s(e.name)+": "+t._s(e.numberOfRecords)+"\n                      ")])})),1)],1),t._v(" "),r("v-col",[r("canvas",{attrs:{id:"variablePie"},on:{mousemove:t.hoverHandler}})])],1)],1)],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              Close\n            ")])],1)],1)],1)],1):t._e()],1)],1)}),[],!1,null,"099f17fa",null);e.default=component.exports;h()(component,{MetricsTable:r(558).default}),h()(component,{VBtn:f.a,VCard:m.a,VCardActions:x.a,VCardText:x.b,VCardTitle:x.c,VCol:_.a,VContainer:y.a,VDialog:w.a,VDivider:C.a,VIcon:k.a,VList:V.a,VListItem:S.a,VProgressLinear:T.a,VRow:A.a,VSpacer:O.a,VTab:$.a,VTabs:E.a,VTextField:R.a})}}]);