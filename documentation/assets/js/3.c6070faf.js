(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{531:function(t,e,n){"use strict";var s=n(2),a=n(42).some,i=n(69),r=n(18),o=i("some"),c=r("some");s({target:"Array",proto:!0,forced:!o||!c},{some:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},532:function(t,e,n){},533:function(t,e,n){},534:function(t,e,n){"use strict";var s=n(137),a=n(11),i=n(14),r=n(19),o=n(138),c=n(139);s("match",1,(function(t,e,n){return[function(e){var n=r(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,n):new RegExp(e)[t](String(n))},function(t){var s=n(e,t,this);if(s.done)return s.value;var r=a(t),u=String(this);if(!r.global)return c(r,u);var l=r.unicode;r.lastIndex=0;for(var f,h=[],v=0;null!==(f=c(r,u));){var g=String(f[0]);h[v]=g,""===g&&(r.lastIndex=o(u,i(r.lastIndex),l)),v++}return 0===v?null:h}]}))},535:function(t,e,n){"use strict";var s=n(2),a=n(359).trim;s({target:"String",proto:!0,forced:n(538)("trim")},{trim:function(){return a(this)}})},537:function(t,e,n){var s=n(10),a=n(5),i=n(134),r=n(358),o=n(12).f,c=n(68).f,u=n(135),l=n(136),f=n(355),h=n(28),v=n(3),g=n(67).set,d=n(539),p=n(4)("match"),m=a.RegExp,b=m.prototype,k=/a/g,w=/a/g,C=new m(k)!==k,x=f.UNSUPPORTED_Y;if(s&&i("RegExp",!C||x||v((function(){return w[p]=!1,m(k)!=k||m(w)==w||"/a/i"!=m(k,"i")})))){for(var _=function(t,e){var n,s=this instanceof _,a=u(t),i=void 0===e;if(!s&&a&&t.constructor===_&&i)return t;C?a&&!i&&(t=t.source):t instanceof _&&(i&&(e=l.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=r(C?new m(t,e):m(t,e),s?this:b,_);return x&&n&&g(o,{sticky:n}),o},y=function(t){t in _||o(_,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},S=c(m),I=0;S.length>I;)y(S[I++]);b.constructor=_,_.prototype=b,h(a,"RegExp",_)}d("RegExp")},538:function(t,e,n){var s=n(3),a=n(360);t.exports=function(t){return s((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},539:function(t,e,n){"use strict";var s=n(44),a=n(12),i=n(4),r=n(10),o=i("species");t.exports=function(t){var e=s(t),n=a.f;r&&e&&!e[o]&&n(e,o,{configurable:!0,get:function(){return this}})}},540:function(t,e,n){"use strict";var s=n(532);n.n(s).a},541:function(t,e,n){"use strict";var s=n(533);n.n(s).a},557:function(t,e,n){"use strict";n(27),n(354),n(66),n(41),n(356),n(534),n(535),n(132),n(65),n(531),n(537),n(43),n(361),n(131),n(133);var s=n(357),a=n.n(s),i=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=a()(e,"title","");return a()(e,"frontmatter.tags")&&(s+=" ".concat(e.frontmatter.tags.join(" "))),n&&(s+=" ".concat(n)),r(t,s)},r=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},s=new RegExp("[^\0-]"),a=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(s.test(t))return a.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var i=t.endsWith(" ");return new RegExp(a.map((function(t,e){return a.length!==e+1||i?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,s=this.$localePath,a=[],r=0;r<e.length&&!(a.length>=n);r++){var o=e[r];if(this.getPageLocalePath(o)===s&&this.isSearchable(o))if(i(t,o))a.push(o);else if(o.headers)for(var c=0;c<o.headers.length&&!(a.length>=n);c++){var u=o.headers[c];u.title&&i(t,o,u.title)&&a.push(Object.assign({},o,{path:o.path+"#"+u.slug,header:u}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},c=(n(540),n(1)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,s){return n("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=u.exports},561:function(t,e,n){"use strict";n.r(e);var s={components:{SearchBox:n(557).a}},a=(n(541),n(1)),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-nav",{staticClass:"main-nav flex-row align-items-md-center",attrs:{type:"",effect:"light",expand:""},scopedSlots:t._u([{key:"content-header",fn:function(e){var s=e.closeMenu;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-6 collapse-brand"},[n("a",{attrs:{href:"/"}})]),t._v(" "),n("div",{staticClass:"col-6 collapse-close"},[n("close-button",{on:{click:s}})],1)])}}])},[n("a",{staticClass:"navbar-brand mr-0 mr-md-2",attrs:{slot:"brand",href:"/","aria-label":"Bootstrap"},slot:"brand"},[t._v("\n        Vue Black Dashboard\n    ")]),t._v(" "),t._v(" "),n("div",{staticClass:"d-none d-sm-block ml-auto"},[n("ul",{staticClass:"navbar-nav ct-navbar-nav flex-row align-items-center"})]),t._v(" "),n("div",{staticClass:"navbar-nav-scroll ml-md-auto "},[n("ul",{staticClass:"navbar-nav bd-navbar-nav flex-row"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.facebook.com/creativetim",target:"_blank"}},[n("i",{staticClass:"fab fa-facebook-square"})])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://twitter.com/creativetim",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.instagram.com/creativetimofficial",target:"_blank"}},[n("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.instagram.com/creativetimofficial",target:"_blank"}},[n("i",{staticClass:"fab fa-dribbble"})])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link nav-link-icon",attrs:{href:"https://www.github.com/creativetimofficial",target:"_blank"}},[n("i",{staticClass:"fab fa-github"})])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://demos.creative-tim.com/vue-black-dashboard"}},[n("i",{staticClass:"tim-icons icon-tv-2"}),t._v(" Live Preview")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/creativetimofficial/vue-black-dashboard",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"tim-icons icon-shape-star"}),t._v(" Help with a star")])])])]),t._v(" "),!1!==t.$site.themeConfig.search?n("SearchBox"):t._e()],1)}),[],!1,null,null,null);e.default=i.exports}}]);