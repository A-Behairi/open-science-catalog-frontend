(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{608:function(t,r,e){"use strict";e(25),e(13),e(26),e(152),e(65),e(415),e(599),e(137),e(163);var n=e(2);var o,c=e(188);r.a=(o="container",n.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var e=r.props,data=r.data,n=r.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var e,n=r.props,data=r.data,o=r.children,d=data.attrs;return d&&(data.attrs={},e=Object.keys(d).filter((function(t){if("slot"===t)return!1;var r=d[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),o)}})},733:function(t,r,e){var content=e(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(38).default)("55941e05",content,!0,{sourceMap:!1})},765:function(t,r,e){"use strict";e(733)},766:function(t,r,e){var n=e(37)(!1);n.push([t.i,"[data-v-25725e9c] h3,[data-v-25725e9c] h4{padding-top:60px;margin-top:-60px}[data-v-25725e9c] ol,[data-v-25725e9c] ul{padding-bottom:16px}[data-v-25725e9c] thead{background:#d3d3d3}[data-v-25725e9c] td,[data-v-25725e9c] th{padding:10px}",""]),t.exports=n},788:function(t,r,e){"use strict";e.r(r);var n=e(30),o=(e(153),{data:function(){return{parsedNotice:null}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.$get(t.withBase("/privacy-notice.md"));case 2:e=r.sent,t.parsedNotice=t.$markdown(e);case 4:case"end":return r.stop()}}),r)})))()}}),c=(e(765),e(162)),d=e(214),l=e.n(d),f=e(780),v=e(608),m=e(781),component=Object(c.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-container",{class:t.$vuetify.breakpoint.lgAndUp?"px-15 pt-8":"pa-4"},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("p",{domProps:{innerHTML:t._s(t.parsedNotice)}})])],1)],1)}),[],!1,null,"25725e9c",null);r.default=component.exports;l()(component,{VCol:f.a,VContainer:v.a,VRow:m.a})}}]);