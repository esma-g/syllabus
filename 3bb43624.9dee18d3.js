(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),p=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,O=s["".concat(a,".").concat(m)]||s[m]||u[m]||o;return n?c.a.createElement(O,l(l({ref:t},b),{},{components:n})):c.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var b=2;b<o;b++)a[b]=n[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),c=n(6),o=(n(0),n(218)),a={id:"lesson-template",title:"[Class Name]",sidebar_label:"Lesson"},l={unversionedId:"contributing/example/lesson-template",id:"contributing/example/lesson-template",isDocsHomePage:!1,title:"[Class Name]",description:"Learning Objectives",source:"@site/docs\\contributing\\example\\lesson-template.md",permalink:"/contributing/example/lesson-template",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/contributing/example/lesson-template.md",sidebar_label:"Lesson",sidebar:"Contributing",previous:{title:"Technical Details",permalink:"/contributing/technical"},next:{title:"Homework",permalink:"/contributing/example/homework-template"}},i=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Contents",id:"contents",children:[]},{value:"Topic 1",id:"topic-1",children:[]},{value:"Topic 2",id:"topic-2",children:[]},{value:"Topic",id:"topic",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(o.b)("p",null,"By the end of this lesson a student will be able to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do X"),Object(o.b)("li",{parentName:"ul"},"Describe Y"),Object(o.b)("li",{parentName:"ul"},"List Z")),Object(o.b)("h2",{id:"contents"},"Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Topic 1",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Topic 1.1"))),Object(o.b)("li",{parentName:"ul"},"Topic 2"),Object(o.b)("li",{parentName:"ul"},"Topic 3"),Object(o.b)("li",{parentName:"ul"},"Topic 4")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"topic-1"},"Topic 1"),Object(o.b)("p",null,"High level explanation of Topic 1 - rely on the exercises"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Exercise 1"),": Always have exercises")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Exercise 2"),": Always have exercises")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Harder Exercise 3"),": Always have exercises")),Object(o.b)("h2",{id:"topic-2"},"Topic 2"),Object(o.b)("p",null,"High level explanation of Topic 2 - rely on the exercises"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Exercise 1"),": Always have exercises")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Exercise 2"),": Always have exercises")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Harder Exercise 3"),": Always have exercises")),Object(o.b)("h2",{id:"topic"},"Topic"),Object(o.b)("p",null,"High level explanation of Topic 3 - rely on the exercises"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Exercise 1"),": Always have exercises")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Exercise 2"),": Always have exercises")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Harder Exercise 3"),": Always have exercises")))}p.isMDXComponent=!0}}]);