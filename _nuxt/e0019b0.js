(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7,11,35],{580:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(583),o=r(4),c=Object(o.j)("v-card__actions"),l=Object(o.j)("v-card__subtitle"),d=Object(o.j)("v-card__text"),v=Object(o.j)("v-card__title");n.a},583:function(t,e,r){"use strict";r(27),r(22),r(26),r(15),r(31),r(24),r(32);var n=r(7),o=(r(55),r(329),r(330),r(590),r(328)),c=r(595),l=r(154),d=r(29);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},590:function(t,e,r){var content=r(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("03030716",content,!0,{sourceMap:!1})},591:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},593:function(t,e,r){var content=r(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("7e234354",content,!0,{sourceMap:!1})},594:function(t,e,r){var content=r(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("5163d850",content,!0,{sourceMap:!1})},597:function(t,e,r){var content=r(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("6422aec0",content,!0,{sourceMap:!1})},600:function(t,e,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("edc7f98e",content,!0,{sourceMap:!1})},601:function(t,e,r){var n=r(36)(!1);n.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=n},605:function(t,e,r){"use strict";r(593)},606:function(t,e,r){var n=r(36)(!1);n.push([t.i,".navigationBreadcrumb[data-v-bb6a8866]{background:hsla(0,0%,100%,.667);padding:10px}.navigationBreadcrumb li[data-v-bb6a8866]{font-size:17px!important}",""]),t.exports=n},607:function(t,e,r){var content=r(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("727afb02",content,!0,{sourceMap:!1})},608:function(t,e,r){var n=r(36)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},609:function(t,e,r){"use strict";r(27),r(22),r(26),r(15),r(31),r(24),r(32);var n=r(7),o=r(154),c=r(29);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}})},610:function(t,e,r){"use strict";r(594)},611:function(t,e,r){var n=r(36)(!1);n.push([t.i,"[data-v-6c8114b8] .v-speed-dial__list{align-items:flex-end}",""]),t.exports=n},612:function(t,e,r){var content=r(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("5c8364e6",content,!0,{sourceMap:!1})},613:function(t,e,r){var n=r(36)(!1);n.push([t.i,".v-speed-dial{position:relative;z-index:1}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top{top:16px}.v-speed-dial--bottom{bottom:16px}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0;padding:0 16px}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;padding:16px 0;position:absolute}.v-speed-dial__list .v-btn{margin:6px}.v-speed-dial:not(.v-speed-dial--is-active) .v-speed-dial__list{pointer-events:none}",""]),t.exports=n},615:function(t,e,r){"use strict";r.r(e);var n={name:"Item",props:{title:{type:String,default:""},subtitle:{type:String,default:""},chips:{type:Object,default:function(){return{}}},description:{type:String,default:""},details:{type:Object,default:function(){return{}}},nav:{type:Object,default:function(){return{}}}},data:function(){return{showDescription:!1}}},o=(r(623),r(160)),c=r(212),l=r.n(c),d=r(342),v=r(631),h=r(763),f=r(616),m=r(301),_=r(764),x=r(324),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("client-only",[r("bread-crumb-nav",{attrs:{theme:t.nav.theme,project:t.nav.project,variable:t.nav.variable,product:t.nav.product}})],1),t._v(" "),r("div",{staticClass:"itemHeaderContainer"},[r("v-container",{class:t.$vuetify.breakpoint.lgAndUp?"px-15":"pa-2"},[r("v-row",[r("v-col",[r("h1",{staticClass:"primary--text",class:(t.$vuetify.breakpoint.mdAndUp,"mt-5"),staticStyle:{"font-size":"3em"}},[t._v("\n            "+t._s(t.title)+"\n          ")]),t._v(" "),t.subtitle?r("h4",{staticClass:"mt-2"},[t._v("\n            "+t._s(t.subtitle)+"\n          ")]):t._e()])],1),t._v(" "),t.chips.themes?r("v-row",[r("v-col",[t._l(t.chips.themes,(function(e){return r("v-chip",{key:e,staticClass:"mr-1 text-uppercase",attrs:{color:"grey",dark:"",label:"",to:"/themes/"+t.slugify(e)}},[t._v("\n            "+t._s(e)+"\n          ")])})),t._v(" "),t.chips.status?r("v-chip",{attrs:{color:"green",dark:"",label:""}},[t._v("\n            "+t._s(t.chips.status)+"\n          ")]):t._e(),t._v(" "),t.chips.variable?r("v-chip",{staticClass:"text-uppercase",attrs:{color:"green",dark:"",label:"",to:"/variables/"+t.slugify(t.chips.variable)}},[t._v("\n            "+t._s(t.chips.variable)+"\n          ")]):t._e()],2)],1):t._e(),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[t.$vuetify.breakpoint.smAndDown?[r("v-scale-transition",[r("small",{directives:[{name:"show",rawName:"v-show",value:t.showDescription,expression:"showDescription"}],domProps:{innerHTML:t._s(t.description)}})]),t._v(" "),r("v-btn",{attrs:{text:"","x-small":"",block:""},on:{click:function(e){t.showDescription=!t.showDescription}}},[r("v-icon",{attrs:{left:""}},[t._v("\n                "+t._s(t.showDescription?"mdi-arrow-collapse-vertical":"mdi-arrow-expand-vertical")+"\n              ")]),t._v("\n              Description\n            ")],1)]:[r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n                mdi-text-long\n              ")]),t._v("\n              Description\n            ")],1),t._v(" "),r("p",[r("small",{domProps:{innerHTML:t._s(t.description)}})])]],2),t._v(" "),r("v-col",{attrs:{cols:"12",md:"4"}},[r("h6",{staticClass:"text-h6 mb-2 d-flex align-center"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-information-outline\n            ")]),t._v("\n            Details\n          ")],1),t._v(" "),t.details.start_datetime?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar-today\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Start Date")]),t._v(" "+t._s(t.details.start_datetime)+"\n          ")],1):t._e(),t._v(" "),t.details.end_datetime?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("End Date")]),t._v(" "+t._s(t.details.end_datetime)+"\n          ")],1):t._e(),t._v(" "),t.details.datetime?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar-check\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Release Date")]),t._v(" "+t._s(t.details.datetime&&t.details.datetime.slice(0,-10))+"\n          ")],1):t._e(),t._v(" "),t.details.consortium?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-account-multiple\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Consortium")]),t._v(" "+t._s(t.details.consortium.join(", "))+"\n          ")],1):t._e(),t._v(" "),t.details["osc:project"]?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-calendar-text\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Project")]),t._v(" "+t._s(t.details["osc:project"])+"\n          ")],1):t._e(),t._v(" "),t.details["osc:missions"]?r("div",{staticClass:"mb-2"},[r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-satellite\n            ")]),t._v(" "),r("strong",{staticClass:"text-uppercase mr-2"},[t._v("Satellite missions")]),t._v(" "+t._s(t.details["osc:missions"].join(", "))+"\n          ")],1):t._e(),t._v(" "),t._l(t.details.links.filter((function(t){return"via"===t.rel})).sort((function(a,b){return a.title<b.title||!b.title?-1:1})),(function(link,e){return r("v-btn",{key:e,class:t.$vuetify.breakpoint.xsOnly?"mb-2":"mr-3",attrs:{color:"primary",outlined:"Access"!==link.title,block:t.$vuetify.breakpoint.xsOnly,href:link.href,target:"_blank"}},["Access"===link.title?r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-location-enter\n            ")]):"Documentation"===link.title?r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-file-document-outline\n            ")]):r("v-icon",{attrs:{left:""}},[t._v("\n              mdi-web\n            ")]),t._v("\n            "+t._s(link.title||"Website")+"\n          ")],1)}))],2)],1)],1)],1),t._v(" "),t._t("default"),t._v(" "),r("edit-button")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BreadCrumbNav:r(618).default,EditButton:r(619).default}),l()(component,{VBtn:d.a,VChip:v.a,VCol:h.a,VContainer:f.a,VIcon:m.a,VRow:_.a,VScaleTransition:x.d})},616:function(t,e,r){"use strict";r(26),r(15),r(27),r(152),r(62),r(412),r(596),r(136),r(161);var n=r(2);var o,c=r(187);e.a=(o="container",n.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},618:function(t,e,r){"use strict";r.r(e);var n=r(213),o=(r(62),{props:{theme:{type:String,default:null},variable:{type:String,default:null},project:{type:String,default:null},product:{type:String,default:null}},computed:{navigationBreadcrumb:function(){return[{text:"ESA EO Catalogue",href:"/"}].concat(Object(n.a)(this.theme?[{text:this.theme,href:"/themes/".concat(this.slugify(this.theme)),type:"theme"}]:[]),Object(n.a)(this.project?[{text:this.project,href:"/projects/".concat(this.slugify(this.project)),type:"project"}]:[]),Object(n.a)(this.variable?[{text:this.variable,href:"/variables/".concat(this.slugify(this.variable)),type:"variable"}]:[]),Object(n.a)(this.product?[{text:this.product,href:"/products/".concat(this.slugify(this.product)),type:"product"}]:[]))}}}),c=(r(605),r(160)),l=r(212),d=r.n(l),v=r(668),h=r(609),f=r(631),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-breadcrumbs",{staticClass:"navigationBreadcrumb",attrs:{items:t.navigationBreadcrumb},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-breadcrumbs-item",{attrs:{to:n.href,nuxt:"",disabled:n.disabled}},[n===t.navigationBreadcrumb[t.navigationBreadcrumb.length-1]?r("v-chip",{staticClass:"mr-2 text-uppercase",attrs:{color:t.$typeColor(n.type),dark:"",small:"",label:""}},[t._v("\n        "+t._s(n.type)+"\n      ")]):t._e(),t._v(" "),r("span",{staticClass:"text-capitalize"},[t._v(t._s(n.text))])],1)]}}])})}),[],!1,null,"bb6a8866",null);e.default=component.exports;d()(component,{VBreadcrumbs:v.a,VBreadcrumbsItem:h.a,VChip:f.a})},619:function(t,e,r){"use strict";r.r(e);var n=r(30),o=(r(151),r(62),r(27),r(326),{data:function(){return{fab:!1,deleteDialog:!1,loading:!1}},methods:{deleteItem:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$delete("https://open-science-catalog-backend.develop.eoepca.org/items/".concat(t.slugify(Object.keys(t.$route.params)[0]),"s/").concat(t.slugify(Object.values(t.$route.params)[0]),".json"),{});case 3:t.loading=!1,t.deleteDialog=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),c=(r(610),r(160)),l=r(212),d=r.n(l),v=r(342),h=r(583),f=r(580),m=r(760),_=r(301),x=r(576),y=r(669),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-speed-dial",{style:"bottom: "+(t.$vuetify.application.footer+16)+"px",attrs:{fixed:"",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"info",dark:"",rounded:"","x-large":""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-close\n        ")]):r("v-icon",{attrs:{left:""}},[t._v("\n          mdi-pencil\n        ")]),t._v("\n        Suggest changes\n      ")],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t._v(" "),r("v-btn",{staticStyle:{cursor:"pointer"},attrs:{dark:"",rounded:"",color:"green",to:"/edit-item?"+Object.keys(t.$route.params)[0]+"="+Object.values(t.$route.params)[0]}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-pencil\n      ")]),t._v("\n      Edit metadata\n    ")],1),t._v(" "),r("v-btn",{staticStyle:{cursor:"pointer"},attrs:{dark:"",rounded:"",color:"red"},on:{click:function(e){t.$auth.loggedin?t.deleteDialog=!0:t.$router.push("/edit-item?"+Object.keys(t.$route.params)[0]+"="+Object.values(t.$route.params)[0])}}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-delete\n      ")]),t._v("\n      Request deletion\n    ")],1),t._v(" "),r("v-btn",{attrs:{dark:"",rounded:"",color:"black",href:"https://github.com/EOEPCA/open-science-catalog-metadata/tree/main/data/"+Object.keys(t.$route.params)[0]+"s/"+Object.values(t.$route.params)[0]+".json",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("\n        mdi-github\n      ")]),t._v("\n      View file on GitHub\n    ")],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[r("v-card",{staticClass:"pa-3"},[r("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v("\n        Are you sure you want to request this item to be deleted?\n      ")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue",dark:""},on:{click:function(e){t.deleteDialog=!1}}},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-cancel\n          ")]),t._v("\n          Cancel\n        ")],1),t._v(" "),r("v-btn",{attrs:{color:"red",dark:"",loading:t.loading},on:{click:t.deleteItem}},[r("v-icon",{attrs:{left:""}},[t._v("\n            mdi-delete\n          ")]),t._v("\n          Request deletion\n        ")],1)],1)],1)],1)],1)}),[],!1,null,"6c8114b8",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VCardTitle:f.d,VDialog:m.a,VIcon:_.a,VSpacer:x.a,VSpeedDial:y.a})},623:function(t,e,r){"use strict";r(597)},624:function(t,e,r){var n=r(36)(!1);n.push([t.i,".itemHeaderContainer{border-bottom:.25em solid #335e6f;padding-bottom:40px}",""]),t.exports=n},631:function(t,e,r){"use strict";r(27),r(22),r(31),r(24),r(32);var n=r(39),o=r(7),c=(r(15),r(26),r(600),r(29)),l=r(324),d=r(186),v=r(69),h=r(216),f=r(67),m=r(116),_=r(154),x=r(217),y=r(28);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,x.a,_.a,f.a,Object(h.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return k(k(k(k({"v-chip":!0},_.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(_.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(n.a)(e,2),o=r[0],c=r[1];t.$attrs.hasOwnProperty(o)&&Object(y.a)(o,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),n=r.tag,data=r.data;data.attrs=k(k({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var o=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(o,data),e)}})},668:function(t,e,r){"use strict";r(27),r(22),r(26),r(15),r(31),r(24),r(32);var n=r(7),o=(r(161),r(607),r(609)),c=r(4),l=Object(c.j)("v-breadcrumbs__divider","li"),d=r(67),v=r(29);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(v.a)(d.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(l,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(o.a,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},669:function(t,e,r){"use strict";var n=r(7),o=(r(98),r(214),r(124),r(52),r(612),r(116)),c=r(215),l=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r(331),v=r(29);e.a=Object(v.a)(c.a,o.a,l).extend({name:"v-speed-dial",directives:{ClickOutside:d.a},props:{direction:{type:String,default:"top",validator:function(t){return["top","right","bottom","left"].includes(t)}},openOnHover:Boolean,transition:{type:String,default:"scale-transition"}},computed:{classes:function(){var t;return t={"v-speed-dial":!0,"v-speed-dial--top":this.top,"v-speed-dial--right":this.right,"v-speed-dial--bottom":this.bottom,"v-speed-dial--left":this.left,"v-speed-dial--absolute":this.absolute,"v-speed-dial--fixed":this.fixed},Object(n.a)(t,"v-speed-dial--direction-".concat(this.direction),!0),Object(n.a)(t,"v-speed-dial--is-active",this.isActive),t}},render:function(t){var e=this,r=[],data={class:this.classes,directives:[{name:"click-outside",value:function(){return e.isActive=!1}}],on:{click:function(){return e.isActive=!e.isActive}}};if(this.openOnHover&&(data.on.mouseenter=function(){return e.isActive=!0},data.on.mouseleave=function(){return e.isActive=!1}),this.isActive){var n=0;r=(this.$slots.default||[]).map((function(b,i){return!b.tag||void 0===b.componentOptions||"v-btn"!==b.componentOptions.Ctor.options.name&&"v-tooltip"!==b.componentOptions.Ctor.options.name?(b.key=i,b):(n++,t("div",{style:{transitionDelay:.05*n+"s"},key:i},[b]))}))}var o=t("transition-group",{class:"v-speed-dial__list",props:{name:this.transition,mode:this.mode,origin:this.origin,tag:"div"}},r);return t("div",data,[this.$slots.activator,o])}})}}]);