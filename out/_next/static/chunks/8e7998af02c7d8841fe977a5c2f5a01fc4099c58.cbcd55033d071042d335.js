(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"+Rjy":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("wx14"),a=n("rePB"),o=n("Ff2n"),i=n("nOHt"),c=n("q1tI"),s=n.n(c),u=n("cWnB"),l=s.a.createElement;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={variant:"outline-danger",block:!0},p=function(e){var t=d(d({},v),e),n=t.href,a=t.label,c=Object(o.a)(t,["href","label"]),s=Object(i.useRouter)();return l(u.a,Object(r.a)({},c,{onClick:function(){s.push(n)}}),a||"Regresar")}},"6I9Z":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),c=a.a.createElement,s=function(e){var t=e.basePath,n=void 0===t?"/":t,r=e.baseTitle,a=void 0===r?"Dashboard":r,o=e.items,s=void 0===o?[]:o;return c("div",{className:"text-center text-md-right"},c("li",{className:"d-inline breadcrumb-item"},c(i.a,{href:n},c("a",{className:"font-weight-bold"},a))),s.map((function(e,t){return e.active?c("li",{key:t,className:"d-inline breadcrumb-item active"},c("a",{className:"font-weight-bold cpointer"},e.title)):c("li",{key:t,className:"d-inline breadcrumb-item cpointer"},c(i.a,{href:e.href},c("a",{className:"font-weight-bold cpointer"},e.title)))})))},u=a.a.createElement;t.a=function(e){var t=e.title,n=void 0===t?"":t,r=e.basePath,a=void 0===r?"/":r,o=e.baseTitle,i=void 0===o?"Dashboard":o,c=e.items,l=void 0===c?[]:c;return u("div",{className:"row justify-content-between my-5 mx-md-4"},u("div",{className:"col-md-3 align-self-center"},u("h3",{className:"text-center text-md-left"},n)),u("div",{className:" col-md-9 align-self-center"},u(s,{items:l,basePath:a,baseTitle:i})))}},Ff2n:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("zLVn");function a(e,t){if(null==e)return{};var n,a,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,s,"next",e)}function s(e){r(i,a,o,c,s,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},V7qE:function(e,t,n){"use strict";var r=n("YFqc"),a=n.n(r),o=n("q1tI"),i=n.n(o).a.createElement;t.a=function(e){var t=e.persona,n=e.label;return i("li",null,i("strong",null,void 0===n?"Persona: ":n),t&&i(a.a,{href:"/personas/detail?id=".concat(null===t||void 0===t?void 0:t.id)},i("a",null,null===t||void 0===t?void 0:t.str)),!t&&"NO REGISTRA")}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),c=n("elyg"),s=n("nOHt"),u=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function v(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],u=a[1],p=(0,s.useRouter)(),b=p&&p.pathname||"/",m=i.default.useMemo((function(){var t=(0,c.resolveHref)(b,e.href);return{href:t,as:e.as?(0,c.resolveHref)(b,e.as):t}}),[b,e.href,e.as]),h=m.href,y=m.as;i.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,c.isLocalURL)(h)&&!f[h+"%"+y])return d(o,(function(){v(p,h,y)}))}),[t,o,h,y,p]);var w=e.children,O=e.replace,g=e.shallow,j=e.scroll;"string"===typeof w&&(w=i.default.createElement("a",null,w));var E=i.Children.only(w),P={ref:function(e){e&&u(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,h,y,O,g,j)}};return t&&(P.onMouseEnter=function(e){(0,c.isLocalURL)(h)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),v(p,h,y,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(P.href=(0,c.addBasePath)(y)),i.default.cloneElement(E,P)};t.default=p},cWnB:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=n("q1tI"),s=n.n(c),u=n("vUet");var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function f(e){return!e||"#"===e.trim()}var d=s.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,i=e.disabled,c=e.onKeyDown,u=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=u.href,n=u.onClick;(i||f(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return f(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),i&&(u.tabIndex=-1,u["aria-disabled"]=!0),s.a.createElement(o,Object(r.a)({ref:t},u,{onClick:d,onKeyDown:l((function(e){" "===e.key&&(e.preventDefault(),d(e))}),c)}))}));d.displayName="SafeAnchor";var v=d,p=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.size,l=e.active,f=e.className,d=e.block,p=e.type,b=e.as,m=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(u.a)(n,"btn"),y=i()(f,h,l&&"active",h+"-"+o,d&&h+"-block",c&&h+"-"+c);if(m.href)return s.a.createElement(v,Object(r.a)({},m,{as:b,ref:t,className:i()(y,m.disabled&&"disabled")}));t&&(m.ref=t),p?m.type=p:b||(m.type="button");var w=b||"button";return s.a.createElement(w,Object(r.a)({},m,{className:y}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=p},o0o1:function(e,t,n){e.exports=n("ls82")},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}}}]);