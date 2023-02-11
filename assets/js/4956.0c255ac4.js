"use strict";(self.webpackChunkcodeyourfuture_syllabus=self.webpackChunkcodeyourfuture_syllabus||[]).push([[4956],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return v}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),v=a,m=d["".concat(o,".").concat(v)]||d[v]||f[v]||u;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,l=new Array(u);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<u;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3901:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(93743),u="tableOfContentsInline_prmo";function l(e){var n=e.toc,t=e.minHeadingLevel,l=e.maxHeadingLevel;return r.createElement("div",{className:u},r.createElement(a.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},93743:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(87462),a=t(63366),u=t(67294),l=t(86668),i=["parentIndex"];function o(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,u=(0,a.Z)(e,i);t>=0?n[t].children.push(u):r.push(u)})),r}function c(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function f(e,n){var t,r,a=n.anchorTopOffset,u=e.find((function(e){return s(e).top>=a}));return u?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(u))?u:null!=(r=e[e.indexOf(u)-1])?r:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,u.useRef)(0),n=(0,l.L)().navbar.hideOnScroll;return(0,u.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function v(e){var n=(0,u.useRef)(void 0),t=d();(0,u.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,u=e.minHeadingLevel,l=e.maxHeadingLevel;function i(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:u,maxHeadingLevel:l}),o=f(i,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),function(){document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function m(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?u.createElement("ul",{className:a?void 0:t},n.map((function(e){return u.createElement("li",{key:e.id},u.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),u.createElement(m,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var p=u.memo(m),b=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,f=void 0===s?"table-of-contents__link":s,d=e.linkActiveClassName,m=void 0===d?void 0:d,g=e.minHeadingLevel,h=e.maxHeadingLevel,y=(0,a.Z)(e,b),E=(0,l.L)(),L=null!=g?g:E.tableOfContents.minHeadingLevel,O=null!=h?h:E.tableOfContents.maxHeadingLevel,N=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,u.useMemo)((function(){return c({toc:o(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:L,maxHeadingLevel:O});return v((0,u.useMemo)((function(){if(f&&m)return{linkClassName:f,linkActiveClassName:m,minHeadingLevel:L,maxHeadingLevel:O}}),[f,m,L,O])),u.createElement(p,(0,r.Z)({toc:N,className:i,linkClassName:f},y))}},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(86010),u="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,l),hidden:t},n)}},74866:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(87462),a=t(67294),u=t(86010),l=t(12466),i=t(16550),o=t(91980),c=t(67392),s=t(50012);function f(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function d(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:f(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function v(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,u=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(u.location.search);n.set(l,e),u.replace(Object.assign({},u.location,{search:n.toString()}))}}),[l,u])]}function p(e){var n,t,r,u,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,c=e.groupId,f=d(e),p=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:f})})),b=p[0],g=p[1],h=m({queryString:o,groupId:c}),y=h[0],E=h[1],L=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(n),r=t[0],u=t[1],[r,(0,a.useCallback)((function(e){n&&u.set(e)}),[n,u])]),O=L[0],N=L[1],w=function(){var e=null!=y?y:O;return v({value:e,tabValues:f})?e:null}();return(0,a.useEffect)((function(){w&&g(w)}),[w]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!v({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),E(e),N(e)}),[E,N,f]),tabValues:f}}var b=t(72389),g="tabList__CuJ",h="tabItem_LNqP";function y(e){var n=e.className,t=e.block,i=e.selectedValue,o=e.selectValue,c=e.tabValues,s=[],f=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==i&&(f(n),o(r))},v=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var u,l=s.indexOf(e.currentTarget)-1;t=null!=(u=s[l])?u:s[s.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":t},n)},c.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:function(e){return s.push(e)},onKeyDown:v,onClick:d},l,{className:(0,u.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===n})}),null!=t?t:n)})))}function E(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(n){var u=t.find((function(e){return e.props.value===r}));return u?(0,a.cloneElement)(u,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function L(e){var n=p(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",g)},a.createElement(y,(0,r.Z)({},e,n)),a.createElement(E,(0,r.Z)({},e,n)))}function O(e){var n=(0,b.Z)();return a.createElement(L,(0,r.Z)({key:String(n)},e))}}}]);