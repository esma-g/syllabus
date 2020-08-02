(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(218)),o={id:"lesson",title:"JavaScript Core I - 3",sidebar_label:"Lesson"},c={unversionedId:"js-core-1/week-3/lesson",id:"js-core-1/week-3/lesson",isDocsHomePage:!1,title:"JavaScript Core I - 3",description:"Contents",source:"@site/docs\\js-core-1\\week-3\\lesson.md",permalink:"/js-core-1/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-1/week-3/lesson.md",sidebar_label:"Lesson",sidebar:"JavaScriptCore1",previous:{title:"Instructor Notes",permalink:"/js-core-1/week-2/instructors"},next:{title:"Homework",permalink:"/js-core-1/week-3/homework"}},l=[{value:"Contents",id:"contents",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Array properties",id:"array-properties",children:[]},{value:"Manipulating arrays",id:"manipulating-arrays",children:[{value:"Exercise (5 minutes)",id:"exercise-5-minutes",children:[]},{value:"Exercise - extra credit (10 minutes)",id:"exercise---extra-credit-10-minutes",children:[]}]},{value:"Array methods",id:"array-methods",children:[{value:"<code>.concat()</code>",id:"concat",children:[]},{value:"<code>.slice()</code>",id:"slice",children:[]},{value:"<code>.includes()</code>",id:"includes",children:[]},{value:"<code>.join()</code>",id:"join",children:[]},{value:"Exercise (10 minutes)",id:"exercise-10-minutes",children:[]}]},{value:"Array map",id:"array-map",children:[{value:"<code>.map()</code>",id:"map",children:[]},{value:"Callback functions",id:"callback-functions",children:[]},{value:"Exercise (10 minutes)",id:"exercise-10-minutes-1",children:[]},{value:"Exercise - extra credit",id:"exercise---extra-credit",children:[]}]},{value:"Array forEach",id:"array-foreach",children:[{value:"Side effects",id:"side-effects",children:[]},{value:"<code>.forEach()</code>",id:"foreach",children:[]},{value:"Exercise (5 minutes)",id:"exercise-5-minutes-1",children:[]}]},{value:"Array filter",id:"array-filter",children:[{value:"<code>.filter()</code>",id:"filter",children:[]},{value:"Exercise (10 mins)",id:"exercise-10-mins",children:[]}]},{value:"Array find",id:"array-find",children:[{value:"<code>.find()</code>",id:"find",children:[]},{value:"Exercise (10 mins)",id:"exercise-10-mins-1",children:[]},{value:"Chaining",id:"chaining",children:[]},{value:"Exercise (15 minutes)",id:"exercise-15-minutes",children:[]}]},{value:"Homework",id:"homework",children:[]},{value:"JavaScript 1 Quiz",id:"javascript-1-quiz",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"contents"},"Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#array-properties"}),"Array properties")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#manipulating-arrays"}),"Manipulating arrays")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#array-methods"}),"Array methods")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#array-map"}),"Array map")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#array-foreach"}),"Array forEach")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#array-find"}),"Array filter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#array-find"}),"Array find"))),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("p",null,"By the end of this class, you should be able to answer these questions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Describe what an array method is and use them to manipulate an array"),Object(i.b)("li",{parentName:"ul"},"Write code that chains array methods together"),Object(i.b)("li",{parentName:"ul"},"Define what a callback is"),Object(i.b)("li",{parentName:"ul"},"Write code that uses a callback to run code"),Object(i.b)("li",{parentName:"ul"},"Define what an anonymous function is"),Object(i.b)("li",{parentName:"ul"},"Write code that uses an anonymous function as a callback")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"array-properties"},"Array properties"),Object(i.b)("p",null,"Arrays, like strings, have a ",Object(i.b)("inlineCode",{parentName:"p"},"length")," property."),Object(i.b)("p",null,"You can check this by starting a node console in your terminal."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ node\n> let arr = [1, 2, 3];\nundefined\n> arr\n[1, 2, 3]\n> arr.length\n3\n")),Object(i.b)("h2",{id:"manipulating-arrays"},"Manipulating arrays"),Object(i.b)("p",null,"You can ",Object(i.b)("strong",{parentName:"p"},"get")," a single value out of an array using ",Object(i.b)("strong",{parentName:"p"},"bracket notation"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ node\n> let ingredients = ["Flour", "Water", "Salt"];\nundefined\n> ingredients[0]\nFlour\n> ingredients[1]\nWater\n> ingredients.length\n3\n')),Object(i.b)("p",null,"Did you notice how we use ",Object(i.b)("inlineCode",{parentName:"p"},"[0]")," to get the first value? In programming we count starting at zero."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The number inside of the brackets is called an ",Object(i.b)("strong",{parentName:"p"},"index"),". Index just means the position of the item within the array.")),Object(i.b)("p",null,"You can also ",Object(i.b)("strong",{parentName:"p"},"set")," a value using bracket notation and an assignment operator (",Object(i.b)("inlineCode",{parentName:"p"},"="),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const scores = [80, 41, 47];\n\nscores[2] = 29; // Change the last score\nscores[3] = 51; // Add a new score\n")),Object(i.b)("h3",{id:"exercise-5-minutes"},"Exercise (5 minutes)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an array with the names of the people on your table"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"console.log")," out the names and how many people are at the table"),Object(i.b)("li",{parentName:"ul"},"Put someone from another table at the beginning of the array"),Object(i.b)("li",{parentName:"ul"},"Add someone else to the end of the list")),Object(i.b)("p",null,"##\xa0Working with arrays\nWhen working with lists it is often useful to manipulate, enhance, or search the information in that list."),Object(i.b)("p",null,"Some examples of things you might want to do with a list of data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only use the first 10 items in a list"),Object(i.b)("li",{parentName:"ul"},"Get people from a list whose name starts with a ",Object(i.b)("inlineCode",{parentName:"li"},"M")),Object(i.b)("li",{parentName:"ul"},"Find the first person in a list to be over 100 years old"),Object(i.b)("li",{parentName:"ul"},"Arrange people in a list alphabetically"),Object(i.b)("li",{parentName:"ul"},"Get the last 10 items in an array"),Object(i.b)("li",{parentName:"ul"},"Add all the numbers up in a list"),Object(i.b)("li",{parentName:"ul"},"Get all the cats in an array of animals"),Object(i.b)("li",{parentName:"ul"},"From a list of numbers, add a ",Object(i.b)("inlineCode",{parentName:"li"},"\xa3")," sign prefix"),Object(i.b)("li",{parentName:"ul"},"Combine a list of romance films and thrillers")),Object(i.b)("h3",{id:"exercise---extra-credit-10-minutes"},"Exercise - extra credit (10 minutes)"),Object(i.b)("p",null,"Working as a group - use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods"}),"MDN documentation on arrays")," to see if you can find what methods might be useful to achieving the above examples."),Object(i.b)("h2",{id:"array-methods"},"Array methods"),Object(i.b)("p",null,"Do you remember how strings have special functions called methods? Don't worry if not! Here's an example to jog your memory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ node\n> let name = "Daniel";\nundefined\n> name.toLowerCase()\ndaniel\n')),Object(i.b)("p",null,"Arrays also have several methods that you can use."),Object(i.b)("p",null,"###\xa0",Object(i.b)("inlineCode",{parentName:"p"},".sort()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"An array method that sorts the values in an array into ascending alphabetical or numerical order.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const unorderedLetters = [\"z\", \"v\", \"b\", \"f\", \"g\"];\nconst orderedLetters = unorderedLetters.sort();\n\nconst unorderedNumbers = [8, 5, 1, 4, 2];\nconst orderedNumbers = unorderedNumbers.sort();\n\nconsole.log(orderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]\nconsole.log(unorderedLetters); // logs [ 'b', 'f', 'g', 'v', 'z' ]\n\nconsole.log(orderedNumbers); // logs [ 1, 2, 4, 5, 8 ]\nconsole.log(unorderedNumbers); // logs [ 1, 2, 4, 5, 8 ]\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When you call this array method it uses the array on the left side of the dot as an input, and it sorts that array also returning it. Note how both ordered and unordered arrays are sorted now!")),Object(i.b)("h3",{id:"concat"},Object(i.b)("inlineCode",{parentName:"h3"},".concat()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Adds (or concatenates) another value or array to the array.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"$ node\n> let arr = [1, 2, 3];\nundefined\n> arr.concat(4)\n[1, 2, 3, 4]\n> arr\n[1, 2, 3]\n")),Object(i.b)("p",null,"Did you notice how calling the concat method did not change ",Object(i.b)("inlineCode",{parentName:"p"},"arr"),"? This is because ",Object(i.b)("inlineCode",{parentName:"p"},"concat"),", like most array methods, returns a ",Object(i.b)("em",{parentName:"p"},"new")," array, it does not alter the one you called the method on."),Object(i.b)("p",null,"If you want to use the array returned by calling ",Object(i.b)("inlineCode",{parentName:"p"},".concat()")," you should store it in a new variable."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const arr = [1, 2, 3];\nconst newArr = arr.concat(4);\n\nconsole.log(newArr); // logs [1, 2, 3, 4]\n")),Object(i.b)("h3",{id:"slice"},Object(i.b)("inlineCode",{parentName:"h3"},".slice()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Returns a slice of the array.")),Object(i.b)("p",null,"You can tell ",Object(i.b)("inlineCode",{parentName:"p"},".slice()")," where you want the slice to begin and end by passing it two parameters."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ node\n> let arr = [0, 1, 2, 3, 4]\nundefined\n> arr.slice(0, 2)\n[0, 1]\n> ["a", "b", "c", "d"].slice(1, 2)\n[\'b\']\n')),Object(i.b)("h3",{id:"includes"},Object(i.b)("inlineCode",{parentName:"h3"},".includes()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Returns true if a value is in the array.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const mentors = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];\n\nfunction isAMentor(name) {\n  return mentors.includes(name);\n}\n\nconsole.log("Is Rukmuni a mentor?");\nconsole.log(isAMentor("Rukmini")); // logs false\n')),Object(i.b)("h3",{id:"join"},Object(i.b)("inlineCode",{parentName:"h3"},".join()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Returns all the array values joined together in a string. By default, this method takes no parameters and then the elements are divided with a comma ",Object(i.b)("inlineCode",{parentName:"em"},","),". If you provide it with a string parameter though, then it becomes the divider of the elements, like the example below:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'$ node\n> ["H", "e", "l", "l", "o"].join();\n\'H,e,l,l,o\'\n> ["H", "e", "l", "l", "o"].join("--");\n\'H--e--l--l--o\'\n')),Object(i.b)("p",null,"There is a string method ",Object(i.b)("inlineCode",{parentName:"p"},".split()"),". In an interactive console try using the string ",Object(i.b)("inlineCode",{parentName:"p"},".split()")," method and the array ",Object(i.b)("inlineCode",{parentName:"p"},".join()"),". How could they work together?"),Object(i.b)("h3",{id:"exercise-10-minutes"},"Exercise (10 minutes)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the array of the people from your table"),Object(i.b)("li",{parentName:"ul"},"Combine it with another array filled with the names from another table"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"console.log")," the names in alphabetical order"),Object(i.b)("li",{parentName:"ul"},"Create a new value with the 2nd, 3rd and 4th people in it"),Object(i.b)("li",{parentName:"ul"},"Create a function that takes a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," and an array of names and returns a string. If the name is not in an array, it should return ",Object(i.b)("inlineCode",{parentName:"li"},"<name> is not sitting at the table with <people in the array>"),". If the name is in the array, it should return ",Object(i.b)("inlineCode",{parentName:"li"},"<name> is sitting at the table with <people in the array>"),".")),Object(i.b)("h2",{id:"array-map"},"Array map"),Object(i.b)("p",null,"Imagine you have an array of names..."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'const mentors = ["Daniel ", "irina ", " Gordon", "ashleigh "];\n')),Object(i.b)("p",null,"You notice that the names are not formatted consistently. To fix the array you decide you need to trim whitespace and convert to lowercase. How do you do that for every value in the array?"),Object(i.b)("p",null,"We can write a function that changes one name:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function tidy(name) {\n  return name.trim().toLowerCase();\n}\n")),Object(i.b)("p",null,"All you need to run every name in the array through this function and update the array values. Thankfully there is an array method that does just this!"),Object(i.b)("h3",{id:"map"},Object(i.b)("inlineCode",{parentName:"h3"},".map()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Runs every item in the array through a function and returns a new array with the values returned by the function"),"."),Object(i.b)("p",null,"Have a look at this other example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function double(number) {\n  return number * 2;\n}\n\nconst numbers = [1, 2, 3];\nconst numbersDoubled = numbers.map(double);\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"map()")," method runs the function we provided (",Object(i.b)("inlineCode",{parentName:"p"},"double"),") on each item in the array and uses the return values to create a new array. In the example ",Object(i.b)("inlineCode",{parentName:"p"},"numbersDoubled")," is a new array containing ",Object(i.b)("inlineCode",{parentName:"p"},"[2, 4, 6]"),"."),Object(i.b)("h3",{id:"callback-functions"},"Callback functions"),Object(i.b)("p",null,"A function that we provide to a method is commonly called a ",Object(i.b)("em",{parentName:"p"},"callback")," function. The term highlights that although we ",Object(i.b)("em",{parentName:"p"},"provide")," the ",Object(i.b)("inlineCode",{parentName:"p"},"double")," function, the ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," method ",Object(i.b)("em",{parentName:"p"},"calls")," it. (Notice how we never write ",Object(i.b)("inlineCode",{parentName:"p"},"double()")," to call the function)."),Object(i.b)("p",null,"We'll see callback functions used a lot more in the coming weeks."),Object(i.b)("p",null,"Often, when a function is only needed for a map operation, developers will declare the callback function inside of the method call. Let's try copying and pasting the function declaration inside of the ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," method call."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const numbers = [1, 2, 3];\nconst numbersDoubled = numbers.map(function double(number) {\n  return number * 2;\n});\n")),Object(i.b)("p",null,"We can make this shorter by removing the function name to declare an ",Object(i.b)("em",{parentName:"p"},"anonymous function"),". We can do this because we are not using the function anywhere else in the code, so we do not need the function name to reference it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const numbers = [1, 2, 3];\nconst numbersDoubled = numbers.map(function (number) {\n  return number * 2;\n});\n")),Object(i.b)("p",null,"We can make this code even shorter still. In the latest versions of JavaScript a way of declaring functions was introduced called ",Object(i.b)("em",{parentName:"p"},"arrow functions"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const numbers = [1, 2, 3];\nconst numbersDoubled = numbers.map((number) => {\n  return number * 2;\n});\n")),Object(i.b)("p",null,"The arrow function syntax lets you declare a function without the ",Object(i.b)("inlineCode",{parentName:"p"},"function")," keyword. (There are some other subtle differences between arrow functions and regular functions that you will learn about at a much later stage)."),Object(i.b)("p",null,"There is one last thing you can do to make your code shorter. If you remove the braces (",Object(i.b)("inlineCode",{parentName:"p"},"{}"),") from an arrow function, the body of the function will be returned without needing to write the ",Object(i.b)("inlineCode",{parentName:"p"},"return")," keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const numbers = [1, 2, 3];\nconst numbersDoubled = numbers.map((number) => number * 2);\n")),Object(i.b)("p",null,"In the example above, the expression ",Object(i.b)("inlineCode",{parentName:"p"},"number * 2")," is automatically returned because it comes directly after the ",Object(i.b)("inlineCode",{parentName:"p"},"=>")," arrow (instead of coming after curly braces). This is called an ",Object(i.b)("inlineCode",{parentName:"p"},"implicit return"),"."),Object(i.b)("h3",{id:"exercise-10-minutes-1"},"Exercise (10 minutes)"),Object(i.b)("p",null,"I have a function defined below as:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function abracaFunction(yourFunc) {\n  console.log(\n    "I am abracaFunction! Watch as I mutate an array of strings to your heart\'s content!"\n  );\n  const abracaArray = [\n    "James",\n    "Elamin",\n    "Ismael",\n    "Sanyia",\n    "Chris",\n    "Antigoni",\n  ];\n\n  const abracaOutput = yourFunc(abracaArray);\n\n  return abracaOutput;\n}\n')),Object(i.b)("p",null,"This function does not need to be modified. Can you pass in a ",Object(i.b)("em",{parentName:"p"},"callback function")," which will mutate ",Object(i.b)("inlineCode",{parentName:"p"},"abracaArray")," such that it:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Upper cases all letters in the array")),Object(i.b)("h3",{id:"exercise---extra-credit"},"Exercise - extra credit"),Object(i.b)("p",null,"Modify your callback function from the previous exercise so that it also:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sorts ",Object(i.b)("inlineCode",{parentName:"li"},"abracaArray")," in alphabetical order")),Object(i.b)("h2",{id:"array-foreach"},"Array forEach"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".forEach()")," method is similar to ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," except it does not return a new array. Therefore ",Object(i.b)("inlineCode",{parentName:"p"},".forEach()")," is only useful if you want to perform ",Object(i.b)("em",{parentName:"p"},"side effects"),"."),Object(i.b)("h3",{id:"side-effects"},"Side effects"),Object(i.b)("p",null,"Generally, functions should take an input and return an output (based on that input), and not do anything else."),Object(i.b)("p",null,"When functions meet this criteria they can be called ",Object(i.b)("em",{parentName:"p"},"pure functions"),"."),Object(i.b)("p",null,"A pure function does not:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"access any data unless it was passed in as a parameter"),Object(i.b)("li",{parentName:"ul"},"change data declared outside the function"),Object(i.b)("li",{parentName:"ul"},"interacts with anything outside of the function (e.g. logs a message to the console, shows a message on a website, saves data to disk)")),Object(i.b)("p",null,"These are all example of ",Object(i.b)("em",{parentName:"p"},"side effects"),". Of course, from time to time, we will need to perform side effects, but we should try to avoid side effects inside of functions and only have them when absolutely necessary."),Object(i.b)("h3",{id:"foreach"},Object(i.b)("inlineCode",{parentName:"h3"},".forEach()")),Object(i.b)("p",null,"Say we want to log to the console a list of names."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const names = ["Daniel", "mozafar", "irina"];\n')),Object(i.b)("p",null,"We can use ",Object(i.b)("inlineCode",{parentName:"p"},".forEach()")," to go through the array, item by item, and call a function we provide."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'names.forEach(function (name, index) {\n  console.log(index + ": " + name);\n});\n')),Object(i.b)("p",null,"###\xa0Exercise (10 minutes)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a function that takes a ",Object(i.b)("inlineCode",{parentName:"li"},"birthYear"),", and returns the age of someone"),Object(i.b)("li",{parentName:"ul"},"You are given an array with year that 7 people were born, ",Object(i.b)("inlineCode",{parentName:"li"},"[1964, 2008, 1999, 2005, 1978, 1985, 1919]"),". Take this array and create another array containing their ages."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"console.log")," the birth years array")),Object(i.b)("h3",{id:"exercise-5-minutes-1"},"Exercise (5 minutes)"),Object(i.b)("p",null,"You can drive in the UK at the age of 17."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Write another function that takes a birth year and returns a string ",Object(i.b)("inlineCode",{parentName:"li"},"Born in {year} can drive")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Born in {year} can drive in {x} years")),Object(i.b)("li",{parentName:"ul"},"Use the array of birth years, ",Object(i.b)("inlineCode",{parentName:"li"},"[ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ]"),", to get an array of strings saying if these people can drive"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"console.log")," the answers")),Object(i.b)("h2",{id:"array-filter"},"Array filter"),Object(i.b)("p",null,"Imagine you have an array of students' test scores:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const testScores = [90, 50, 100, 66, 25, 80, 81];\n")),Object(i.b)("p",null,"You want to show only the test scores that are higher than 80. How do you do that for every value in the array?"),Object(i.b)("p",null,"We can write a function that checks if one score is greater than 80:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function isHighScore(score) {\n  return score > 80;\n}\n")),Object(i.b)("p",null,"To find out which scores were greater than 80, you'd have to run this function against every score in the array, and push the 80+ scores into a new array. Thankfully there is an array method that does just this!"),Object(i.b)("h3",{id:"filter"},Object(i.b)("inlineCode",{parentName:"h3"},".filter()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Runs every item in the array through a condition that we set, and returns a new array with the values that match the condition"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const highTestScores = testScores.filter(isHighScore);\n\nconsole.log(highTestScores); // logs [90, 100, 81]\n")),Object(i.b)("h3",{id:"exercise-10-mins"},"Exercise (10 mins)"),Object(i.b)("p",null,"Create a function which:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Takes an array of ",Object(i.b)("inlineCode",{parentName:"li"},"birthYears")),Object(i.b)("li",{parentName:"ul"},"Uses ",Object(i.b)("inlineCode",{parentName:"li"},"console.log")," to print the message ",Object(i.b)("inlineCode",{parentName:"li"},"These are the birth years of people who can drive: <filtered birth years>")),Object(i.b)("li",{parentName:"ul"},"Returns an array of people who can drive (remember, you can drive if you are 17 years or older)")),Object(i.b)("h2",{id:"array-find"},"Array find"),Object(i.b)("p",null,"Imagine you have an array of names:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];\n')),Object(i.b)("p",null,"How would you find the first name that's longer than 6 characters?"),Object(i.b)("p",null,"You can write a predicate function that checks if a string is longer than 6 characters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function isLongName(name) {\n  return name.length > 6;\n}\n")),Object(i.b)("p",null,"To find the first item that satisfies the predicate you would have to go through each array item, and pass it into ",Object(i.b)("inlineCode",{parentName:"p"},"isLongName"),". Once it returns true, we can stop going through the array and grab the item that passed the predicate's test. Sounds complicated! Thankfully there is an array method that does just this!"),Object(i.b)("h3",{id:"find"},Object(i.b)("inlineCode",{parentName:"h3"},".find()")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Searches through the array and returns the value of the first item that satisfies a predicate function.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const longName = names.find(isLongName);\n\nconsole.log(longName); // logs Mozafar\n")),Object(i.b)("h3",{id:"exercise-10-mins-1"},"Exercise (10 mins)"),Object(i.b)("p",null,"Create a function which:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Takes an array of names"),Object(i.b)("li",{parentName:"ul"},"Looks to see if your name is in the array"),Object(i.b)("li",{parentName:"ul"},"If it is, return ",Object(i.b)("inlineCode",{parentName:"li"},"Found me!"),"; if not, return ",Object(i.b)("inlineCode",{parentName:"li"},"Haven't found me :("))),Object(i.b)("h3",{id:"chaining"},"Chaining"),Object(i.b)("p",null,"Notice how we were able to write one method after another e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"names.map(formatName).forEach(log)"),"? This is called ",Object(i.b)("em",{parentName:"p"},"method chaining"),"."),Object(i.b)("p",null,"You can call ",Object(i.b)("inlineCode",{parentName:"p"},".forEach()")," after ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," because ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," returns a new array."),Object(i.b)("p",null,"Consider this code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function formatName(name) {\n  return name.split("")[0].toUpperCase() + name.slice(1);\n}\n\nfunction log(name, index) {\n  console.log(index + ": " + name);\n}\n\nconst namesFormatted = names.map(formatName);\nnamesFormatted.forEach(log);\n')),Object(i.b)("p",null,"It can be written more simply (without assigning the array returned from ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," to a variable):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"names.map(formatName).forEach(log);\n")),Object(i.b)("p",null,"Be careful though! You can not call ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," after ",Object(i.b)("inlineCode",{parentName:"p"},".forEach"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"names.forEach(log).map(formatName); // ERROR\n")),Object(i.b)("p",null,"This code does not work because ",Object(i.b)("inlineCode",{parentName:"p"},"forEach()")," does not return a new array (it returns ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"). The code is therefore attempting to call ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," on ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," does not have a ",Object(i.b)("inlineCode",{parentName:"p"},".map()")," method."),Object(i.b)("h3",{id:"exercise-15-minutes"},"Exercise (15 minutes)"),Object(i.b)("p",null,'Create a function which accepts an array of "messy" strings. Example:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'[\n  100,\n  "iSMael",\n  55,\n  45,\n  "sANyiA",\n  66,\n  "JaMEs",\n  "eLAmIn",\n  23,\n  "IsMael",\n  67,\n  19,\n  "ElaMIN",\n];\n')),Object(i.b)("p",null,"This function should:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Remove all non-string entries"),Object(i.b)("li",{parentName:"ul"},"Change the strings to upper case, and add an exclamation mark to the end")),Object(i.b)("p",null,"If you're using the above example, you should expect to return an array with 2x ",Object(i.b)("inlineCode",{parentName:"p"},"ELAMIN!"),", 1x ",Object(i.b)("inlineCode",{parentName:"p"},"SANYIA!"),", 2x ",Object(i.b)("inlineCode",{parentName:"p"},"ISMAEL!")," and 1x ",Object(i.b)("inlineCode",{parentName:"p"},"JAMES!"),"."),Object(i.b)("h2",{id:"homework"},"Homework"),Object(i.b)("p",null,"Click ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here")," to view the homework for this lesson."),Object(i.b)("h2",{id:"javascript-1-quiz"},"JavaScript 1 Quiz"),Object(i.b)("p",null,"An optional quiz can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.google.com/forms/d/1-jVH3eTZy6Cig8iEZqDTdLaFgJCgVKv8q5HIF5yDUQ0/edit"}),"here")," which can be used to test students understanding. This can be done in class or set as homework."))}s.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},b),{},{components:n})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);