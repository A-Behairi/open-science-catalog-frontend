(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{758:function(t,e,r){var content=r(779);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("f691be40",content,!1,{sourceMap:!1})},778:function(t,e,r){"use strict";r(758)},779:function(t,e,r){var n=r(44)(!1);n.push([t.i,".projectDate{white-space:nowrap}",""]),t.exports=n},802:function(t,e,r){"use strict";r.r(e);r(28),r(11);var n={props:{items:{type:Array,default:function(){return[]}},showEmptyItems:{type:Boolean,default:function(){return!1}}},computed:{nonEmptyItems:function(){var t=this;return this.items.filter((function(e){if(!t.showEmptyItems){if("variable"===t.getType(e))return e.summary.numberOfProducts>0;if("project"===t.getType(e))return e.links.filter((function(link){return"item"===link.rel})).length>0}return e}))}},methods:{getType:function(t){return t["osc:type"].toLowerCase()}}},l=(r(778),r(169)),o=r(232),c=r.n(o),d=r(681),m=r(680),_=r(721),v=r(821),f=r(325),y=r(822),h=r(677),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",t._l(t.nonEmptyItems,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{attrs:{to:"/"+t.getType(e)+"s/"+e.id+"/collection",outlined:""}},[r("v-card-title",[r("v-chip",{staticClass:"text-uppercase",attrs:{small:"",label:"",color:t.$typeColor(t.getType(e)),dark:""}},[t._v("\n          "+t._s(t.getType(e))+"\n        ")]),t._v(" "),r("v-spacer"),t._v(" "),"project"===t.getType(e)?[r("div",{staticClass:"projectDate"},[r("v-icon",{attrs:{small:""}},[t._v(" mdi-calendar-today ")]),t._v(" "),r("small",[t._v(t._s(e.start_datetime.split(" ")[0]))]),t._v("\n            -\n          ")],1),t._v(" "),r("div",{staticClass:"projectDate"},[r("v-icon",{attrs:{small:""}},[t._v(" mdi-calendar ")]),t._v(" "),r("small",[t._v(t._s(e.end_datetime.split(" ")[0]))])],1)]:t._e()],2),t._v(" "),r("v-card-title",{staticClass:"text-subtitle-2 text-uppercase"},[t._v("\n        "+t._s("variable"===t.getType(e)?e.name:e.title)+"\n      ")]),t._v(" "),"project"===t.getType(e)?r("v-card-subtitle",t._l(e["osc:consortium"],(function(e){return r("span",{key:e},[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e(),t._v(" "),r("v-card-text",["project"===t.getType(e)||"product"===t.getType(e)?r("p",[t._v("\n          "+t._s(e.description?e.description.substring(0,100)+"...":"No description")+"\n        ")]):t._e(),t._v(" "),"variable"===t.getType(e)||"project"===t.getType(e)?r("p",["variable"===t.getType(e)?[t._v("\n            "+t._s(e.summary.numberOfProducts)+" Product"+t._s(1===e.summary.numberOfProducts?"":"s")+"\n          ")]:[t._v("\n            "+t._s(e.links.filter((function(link){return"item"===link.rel})).length)+"\n            Product"+t._s(1===e.links.filter((function(link){return"item"===link.rel})).length?"":"s")+"\n          ")],t._v("\n          "+t._s(t.$route.params.theme?"(in current theme)":"")+"\n        ")],2):t._e(),t._v(" "),"product"===t.getType(e)&&e.keywords.find((function(t){return t.includes("theme:")}))?r("div",{staticClass:"mt-2"},t._l(e.keywords.filter((function(t){return t.includes("theme:")})),(function(e){return r("v-chip",{key:e,staticClass:"mr-2 mb-2 text-uppercase",attrs:{"x-small":"",color:"grey",dark:"",label:"",to:"/themes/"+t.slugify(e.replace("theme:",""))}},[t._v("\n            "+t._s(e.replace("theme:",""))+"\n          ")])})),1):t._e()])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VChip:_.a,VCol:v.a,VIcon:f.a,VRow:y.a,VSpacer:h.a})}}]);