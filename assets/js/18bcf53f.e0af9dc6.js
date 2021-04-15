(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{269:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||r;return a?i.a.createElement(u,s(s({ref:t},c),{},{components:a})):i.a.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(8),r=(a(0),a(269)),o={id:"mentors",title:"Mentors Guide",sidebar_label:"Mentors Guide"},s={unversionedId:"workshops/deployment/mentors",id:"workshops/deployment/mentors",isDocsHomePage:!1,title:"Mentors Guide",description:"A work-in-progress of content development around the topic of how trainees deploy their homework projects and portfolio projects.",source:"@site/docs/workshops/deployment/mentors-guide.md",slug:"/workshops/deployment/mentors",permalink:"/workshops/deployment/mentors",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/workshops/deployment/mentors-guide.md",version:"current",sidebar_label:"Mentors Guide",sidebar:"Deployment",previous:{title:"Website Naming Conventions",permalink:"/workshops/deployment/site-naming-conventions"},next:{title:"Setting up automatic site deployment using Netlify and GitHub",permalink:"/workshops/deployment/workshop/instructions"}},l=[{value:"Envisaged deliverables:",id:"envisaged-deliverables",children:[]},{value:"Guidelines for workshop content:",id:"guidelines-for-workshop-content",children:[]},{value:"Simple all-trainee Gallery",id:"simple-all-trainee-gallery",children:[]}],c={toc:l};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A work-in-progress of content development around the topic of how trainees deploy their homework projects and portfolio projects."),Object(r.b)("h3",{id:"envisaged-deliverables"},"Envisaged deliverables:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Short (20 min) workshops to drop into relevant modules"),Object(r.b)("li",{parentName:"ol"},"Supporting reference material for trainees (e.g. cheatsheet) and teachers (lesson plan)"),Object(r.b)("li",{parentName:"ol"},"(optional) extra tooling (trainee project gallery / HW lookup)")),Object(r.b)("h1",{id:"todo"},"TODO:"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write a workshop for netlify deploy via github (requiring no knowledge of command-line or npm)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write supporting reference material for trainees to access in future, including the trainee's HW submission duties regarding deployments (as stand-alone page so that teachers can simply and reliably link to it when assigning HW)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Consider how to test for understanding during the workshop",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write a 5-minute kahoot for the first (or certainly second workshop) to check for understanding"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write a group work exercise for the workshop"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test all instructions with fresh accounts"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Test the workshop plan against another human"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Write separate instructions for Create Netlify Account (+ github) so that we can...",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Assign the Create Netlify Account (+ github) as HW now (time-saver)"))),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Discuss practice projects with Lucy and Sophie"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Generate three little test projects the trainees can fork and deploy (and perhaps modify) (landing page, CV & portfolio)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Add mentor notes for "why not GH pages" - a link to wiki discussion page is fine?'),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Write a trivial initial gallery tool (serves as test suite) during practice"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deliver workshop over two weeks (20mins, 20 mins):",Object(r.b)("ul",{parentName:"li",className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Week 1: the survival course"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Week 2: refinements (e.g. temp vs final builds, DNS, branches)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Coord with React & JS3 module teachers so they know the approach taken so far")))),Object(r.b)("p",null,"Later"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bonus: Try to get budget (a sponsor) to have us buy a domain for each trainee for 1 or 2 years (caution: what happens when they can't afford it - all their links break. there's also the ownership hand-over, if CYF buy them initially)"),Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Bonus: get some cheapo custom domain(s) for the groups final projects (e.g. cyf-projects.io)")),Object(r.b)("h1",{id:"meta"},"Meta"),Object(r.b)("h2",{id:"guidelines-for-workshop-content"},"Guidelines for workshop content:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"K.I.S.S."),Object(r.b)("li",{parentName:"ul"},"Give them a recipe for what to do and have them practice it"),Object(r.b)("li",{parentName:"ul"},"LATER weeks can see discussion of finer points (advantages, bigger picture, alternatives exist, etc)"),Object(r.b)("li",{parentName:"ul"},"If possible, have a gallery in place, the trainees will detect when they have named incorrectly")),Object(r.b)("h2",{id:"simple-all-trainee-gallery"},"Simple all-trainee Gallery"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"(list of trainees, list of projects, generates expected links to each project)"),Object(r.b)("li",{parentName:"ul"},"Allows trainees to quickly test if their site naming is correct (and demonstrates to them WHY it matters with 40 trainees)"),Object(r.b)("li",{parentName:"ul"},"get grads involved")))}p.isMDXComponent=!0}}]);