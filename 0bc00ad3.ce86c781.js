(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{218:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(h,i(i({ref:t},c),{},{components:n})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(218)),l={id:"overview",title:"Overview",sidebar_label:"Overview"},i={unversionedId:"contributing/overview",id:"contributing/overview",isDocsHomePage:!1,title:"Overview",description:"Preamble",source:"@site/docs\\contributing\\overview.md",permalink:"/contributing/overview",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/contributing/overview.md",sidebar_label:"Overview",sidebar:"Contributing",next:{title:"Technical Details",permalink:"/contributing/technical"}},s=[{value:"Preamble",id:"preamble",children:[{value:"Syllabus Aims",id:"syllabus-aims",children:[]},{value:"Target Students",id:"target-students",children:[]},{value:"Organisational Documents",id:"organisational-documents",children:[]}]},{value:"How We Organise",id:"how-we-organise",children:[{value:"Planning Boards",id:"planning-boards",children:[]},{value:"Github",id:"github",children:[]},{value:"Slack",id:"slack",children:[]}]},{value:"Lesson Template",id:"lesson-template",children:[{value:"Lesson",id:"lesson",children:[]},{value:"Homework",id:"homework",children:[]},{value:"Instructor Notes",id:"instructor-notes",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"preamble"},"Preamble"),Object(a.b)("h3",{id:"syllabus-aims"},"Syllabus Aims"),Object(a.b)("p",null,"This syllabus has the following aims"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"To direct teachers across our network to our content"),Object(a.b)("li",{parentName:"ul"},"To share content developed by volunteers between our cities (slides, videos, exercises etc)"),Object(a.b)("li",{parentName:"ul"},"To ease the load of planning lessons for our teachers"),Object(a.b)("li",{parentName:"ul"},"To be a repository of exercises for our students"),Object(a.b)("li",{parentName:"ul"},"To be a resource for our students to refer to")),Object(a.b)("h3",{id:"target-students"},"Target Students"),Object(a.b)("p",null,"The vast majority of our students fit this profile:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Non-native English speaking"),Object(a.b)("li",{parentName:"ul"},"Limited to zero prior experience in programming"),Object(a.b)("li",{parentName:"ul"},"Many do not have higher education certificates (Bachelors or higher)"),Object(a.b)("li",{parentName:"ul"},"Some have not worked in a professional setting before")),Object(a.b)("p",null,"This means that in general our students"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Respond better to exercises than written material"),Object(a.b)("li",{parentName:"ul"},"Will quickly become overwhelmed with long, meandering lectures"),Object(a.b)("li",{parentName:"ul"},"May have a lower resilience to failure and errors")),Object(a.b)("p",null,"You should keep these qualities in mind whenever we develop content for our students."),Object(a.b)("h3",{id:"organisational-documents"},"Organisational Documents"),Object(a.b)("p",null,"This website contains everything that we teach our students. For organisational documents you can reference the Docs website."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.codeyourfuture.io"}),"https://docs.codeyourfuture.io")),Object(a.b)("h2",{id:"how-we-organise"},"How We Organise"),Object(a.b)("h3",{id:"planning-boards"},"Planning Boards"),Object(a.b)("p",null,"We currently have two planning boards to coordinate tasks on the Syllabus"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Syllabus Planning - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/syllabus/projects/1"}),"here"))),Object(a.b)("p",null,"These tasks are to do with one of our modules. These modules are living documents that changes and react to development over time. This board includes all associated homework and challenges to do with our courses."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Workshop Development - ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/CodeYourFuture/syllabus/projects/2"}),"here"))),Object(a.b)("p",null,"These tasks are one workshops that provide non-essential skills or experiences to our students. For example, modules in Mobile Application Development or Machine Learning. Once run, these modules are kept as a library for future students and volunteers to refer back to."),Object(a.b)("h3",{id:"github"},"Github"),Object(a.b)("p",null,"To contribute to the Code Your Future syllabus, fork and open a pull request to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/CodeYourFuture/syllabus"}),"this repository"),"."),Object(a.b)("p",null,"Significant contributions are accepted strictly through approved pull requests, even for administrators of the repo."),Object(a.b)("h3",{id:"slack"},"Slack"),Object(a.b)("p",null,"Syllabus wide discussion happens in ",Object(a.b)("inlineCode",{parentName:"p"},"cyf-syllabus")),Object(a.b)("p",null,"Module or workshop specific discussion happens in ",Object(a.b)("inlineCode",{parentName:"p"},"cyf-module-"),". For example, the React module discussion can be found in ",Object(a.b)("inlineCode",{parentName:"p"},"cyf-module-react"),"."),Object(a.b)("h2",{id:"lesson-template"},"Lesson Template"),Object(a.b)("p",null,"You can find an example of the a lesson plan ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"./example/lesson-template"}),"here")),Object(a.b)("h3",{id:"lesson"},"Lesson"),Object(a.b)("p",null,"A lesson must have"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Learning Objectives"),Object(a.b)("li",{parentName:"ul"},"Contents of the lesson"),Object(a.b)("li",{parentName:"ul"},"Several topics that are covered in the lesson",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Each topic must have appropriate exercises"))),Object(a.b)("li",{parentName:"ul"},"A link to the homework")),Object(a.b)("p",null,"Focus on exercises in the class rather than presentations or long explanations"),Object(a.b)("h3",{id:"homework"},"Homework"),Object(a.b)("p",null,"Homework should contain"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Resources to help the student study the material in the lesson"),Object(a.b)("li",{parentName:"ul"},"A set of homework that the student must complete before the next lesson"),Object(a.b)("li",{parentName:"ul"},"Any tasks the student should complete before the next lesson")),Object(a.b)("p",null,"The homework should be relevant, get harder gradually with an (optional) stretch goal for more advanced students."),Object(a.b)("h3",{id:"instructor-notes"},"Instructor Notes"),Object(a.b)("p",null,"Instructor Notes should contain"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Links to presentations made by other schools"),Object(a.b)("li",{parentName:"ul"},"Links to any videos of previous classes"),Object(a.b)("li",{parentName:"ul"},"Explanations of how the lesson should be taught"),Object(a.b)("li",{parentName:"ul"},"Any other useful information about the lesson content")),Object(a.b)("p",null,"These notes are (along with Slack) one of the key ways that we should share knowledge and learnings between schools."))}u.isMDXComponent=!0}}]);