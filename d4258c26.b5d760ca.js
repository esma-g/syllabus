(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return r})),t.d(n,"default",(function(){return b}));var a=t(2),o=t(6),i=(t(0),t(218)),s={id:"lesson",title:"JavaScript Core III - 3",sidebar_label:"Lesson"},l={unversionedId:"js-core-3/week-3/lesson",id:"js-core-3/week-3/lesson",isDocsHomePage:!1,title:"JavaScript Core III - 3",description:"Learning Objectives",source:"@site/docs\\js-core-3\\week-3\\lesson.md",permalink:"/js-core-3/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/js-core-3/week-3/lesson.md",sidebar_label:"Lesson",sidebar:"JavaScriptCore3",previous:{title:"Instructor Notes",permalink:"/js-core-3/week-2/instructors"},next:{title:"Homework",permalink:"/js-core-3/week-3/homework"}},r=[{value:"Learning Objectives",id:"learning-objectives",children:[]},{value:"Agenda",id:"agenda",children:[]},{value:"The Problem",id:"the-problem",children:[]},{value:"The Solution",id:"the-solution",children:[]},{value:"What is Scope?",id:"what-is-scope",children:[{value:"Global scope",id:"global-scope",children:[]},{value:"Local Variables",id:"local-variables",children:[]},{value:"Nesting",id:"nesting",children:[]},{value:"Block scope",id:"block-scope",children:[]},{value:"Exercise",id:"exercise",children:[]}]},{value:"2. Classes",id:"2-classes",children:[{value:"Exercises",id:"exercises",children:[]}]},{value:"4. <code>this</code> keyword",id:"4-this-keyword",children:[{value:"<code>this</code> in a constructor",id:"this-in-a-constructor",children:[]},{value:"<code>this</code> in a method",id:"this-in-a-method",children:[]},{value:"<code>this</code> in a function",id:"this-in-a-function",children:[]},{value:"methods called as functions",id:"methods-called-as-functions",children:[]},{value:"arrow functions to the rescue",id:"arrow-functions-to-the-rescue",children:[]},{value:"Exercises",id:"exercises-1",children:[]}]},{value:"4. Project Work",id:"4-project-work",children:[{value:"Explanation",id:"explanation",children:[]}]},{value:"Homework",id:"homework",children:[]}],c={rightToc:r};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"learning-objectives"},"Learning Objectives"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The learner should understand the concept of variable scope and be able to define them in global, local, block and class scope"),Object(i.b)("li",{parentName:"ul"},"The learner should understand the concept of a JavaScript ES6 class and describe examples of when they are useful"),Object(i.b)("li",{parentName:"ul"},"The learner should be able to create a JavaScript ES6 class that represents a simple object"),Object(i.b)("li",{parentName:"ul"},"The learner should be able to use ",Object(i.b)("inlineCode",{parentName:"li"},"this")," keyword to define variables specific to a class instance")),Object(i.b)("h2",{id:"agenda"},"Agenda"),Object(i.b)("p",null,"The purpose of this class is to introduce to the student:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The scoping of variables, specifically in reference to:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Global"),Object(i.b)("li",{parentName:"ul"},"Local"),Object(i.b)("li",{parentName:"ul"},"Block"))),Object(i.b)("li",{parentName:"ol"},"Classes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"this")),Object(i.b)("li",{parentName:"ol"},"Project Work")),Object(i.b)("h1",{id:"1-variable-scope"},"1. Variable Scope"),Object(i.b)("h2",{id:"the-problem"},"The Problem"),Object(i.b)("p",null,"Variables are amazing! Variables let us store data and reuse it many times rather than writing the same data over and over again, also if the variables are well named then it makes it much easier to think about what our code is doing."),Object(i.b)("p",null,"As we know, after we declare or define a new variable we can refer to it later in our code using the variable name."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let name = "mo";\nlet age = 42;\nlet favouriteFoods = ["pizza", "apples", "tofu"];\n\n// lots of code here\n\n// later\nconsole.log("my name is " + name);\n')),Object(i.b)("p",null,"Now, imagine what would happen when our code gets really long. Every time we want to define a new variable we have to check that it hasn't already been used for something else. If that variable is already being used and we redefine it, bad things can happen. We could overwrite something important."),Object(i.b)("p",null,"Imagine a banking app being built by two developers. Developer 1 uses the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"money")," to store the total amount of cash a single customer has in the bank, Developer 2 uses the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"money")," to store the total amount of cash that ALL customers have in the bank added together, the total money in the bank's vaults. This could be really good news for a customer who accidentally receives the entire bank's money in their account, but really BAD news for us as the owners of a bank."),Object(i.b)("h2",{id:"the-solution"},"The Solution"),Object(i.b)("p",null,"One solution might be that every time we want to create a new variable, we call around all of the other developers on the project and ask them if it's safe to use the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"money"),". We can quickly see a problem with this, some codebases are millions of lines long! No single person knows what is contained in every file. It would be impossible to know what variables are safe to use and which are not."),Object(i.b)("p",null,"Instead, we need to find a way to make variables ",Object(i.b)("strong",{parentName:"p"},"safer"),". We need a way to use the best variable name to describe our data, without worrying that we will be causing problems in a different part of the codebase."),Object(i.b)("p",null,"We call this ",Object(i.b)("inlineCode",{parentName:"p"},"scope"),"."),Object(i.b)("h2",{id:"what-is-scope"},"What is Scope?"),Object(i.b)("p",null,"Think about the way that laws are set in different countries. Most laws are set by the government of that country and are ",Object(i.b)("inlineCode",{parentName:"p"},"local")," to that country. However, some laws are international, laws like 'no slavery' apply across all countries, these are ",Object(i.b)("inlineCode",{parentName:"p"},"global")," laws."),Object(i.b)("p",null,"In some countries, different regions inside the country can set their own laws too. In America you must be 21 to drink (national law), but in the state of Massachusetts all bars must be closed by 2AM (state law). These are two levels of local laws."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i0.wp.com/blog.codeanalogies.com/wp-content/uploads/2017/11/474b7-1ywpubaj-_gmws4jedvbufa.png?w=730&ssl=1",alt:"Types of laws"}))),Object(i.b)("p",null,"In Massachusetts, a citizen must follow all 3: International Law, National Law and State Law."),Object(i.b)("p",null,"But a pirate \ud83c\udff4\u200d\u2620\ufe0f in the middle of the ocean only needs to follow International Law (and perhaps the law of the Ship)."),Object(i.b)("p",null,"In the same way we think about which laws apply to which ",Object(i.b)("strong",{parentName:"p"},"parts of a country")," we must also think about which variables apply to which ",Object(i.b)("strong",{parentName:"p"},"parts of your code"),". Variables, like laws, only apply to a certain area."),Object(i.b)("p",null,"When we try to access a variable that does not exist or has gone out of scope, JavaScript will throw a ",Object(i.b)("inlineCode",{parentName:"p"},"ReferenceError")," telling us that a variable is not defined."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let globalLaw = "no slavery";\n// only 1 law applies here\n\nfunction usa() {\n  let nationalLaw = "drinking age is 21";\n  // 2 laws apply here\n\n  function massachusetts() {\n    let stateLaw = "bars closed at 2am";\n    // all 3 laws apply here\n  }\n}\n\nconsole.log(stateLaw); // Error: \'stateLaw\' is not defined\n')),Object(i.b)("p",null,"In the example above, the State Law only applies to Massachusetts. When we try to ",Object(i.b)("inlineCode",{parentName:"p"},"console.log")," the ",Object(i.b)("inlineCode",{parentName:"p"},"stateLaw")," variable at the end, it is not defined. This part of your code does not even know this variable exists!"),Object(i.b)("h3",{id:"global-scope"},"Global scope"),Object(i.b)("p",null,"Variables declared outside of any function or code block are available throughout an application. They are referred to as global variables and exist in global scope."),Object(i.b)("p",null,"We can see in the previous example that ",Object(i.b)("inlineCode",{parentName:"p"},"globalLaw")," is a global variable."),Object(i.b)("p",null,"Because global variables are visible by throughout the application, data stored in them can be read and updated by any part of your code. At first this might seem convenient, but in practice this is likely to cause problems in longer term as your code base grows."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It may not be obvious where in your code global variables are used, which can make refactoring hard"),Object(i.b)("li",{parentName:"ul"},"Other part of your code may accidentally overwrite values in global variables and lead to bugs.")),Object(i.b)("p",null,"Because of above ",Object(i.b)("strong",{parentName:"p"},"it is good engineering practice to only use global variables when absolutely necessary"),"."),Object(i.b)("p",null,"Note that you can also declare a global variable by assigning to a variable without declaring it with a ",Object(i.b)("inlineCode",{parentName:"p"},"var"),", ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const")," keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function accidentallyGlobal() {\n  oops = "I am global";\n}\n\naccidentallyGlobal();\n\nconsole.log(oops);\n')),Object(i.b)("p",null,"Be sure to keep an eye out for above problem and avoid it."),Object(i.b)("h3",{id:"local-variables"},"Local Variables"),Object(i.b)("p",null,"Let's rewind and look at this in detail. We know that variables are declared using the ",Object(i.b)("inlineCode",{parentName:"p"},"var"),", ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const")," keyword."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let greeting = "Hi ";\n')),Object(i.b)("p",null,"If we define a variable inside a function, it becomes ",Object(i.b)("strong",{parentName:"p"},"local")," to that function. If we want to use a fancy word, we can also say it becomes ",Object(i.b)("strong",{parentName:"p"},"scoped")," to that function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetUser(name) {\n  let greeting = "Hi "; // This variable only exists here\n  console.log(greeting + name);\n}\n\ngreetUser("Naima");\nconsole.log(greeting); // It doesn\'t exist here\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"console.log(greeting)"),' on the last line throws an error, it tells us that "greeting is not not defined". Why is this? Because the variable ',Object(i.b)("inlineCode",{parentName:"p"},"greeting")," was defined in the ",Object(i.b)("inlineCode",{parentName:"p"},"greetUser")," function, it ",Object(i.b)("strong",{parentName:"p"},"does not exist")," outside the function."),Object(i.b)("p",null,"This lets us do new things with variables. You cannot usually create two variables with the same name. For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetUser(name) {\n  let greeting = "Hi";\n  let greeting = "Shalom";\n  // Error: \'greeting\' has already been declared\n}\n')),Object(i.b)("p",null,"But in the same way countries have own laws, functions have own ",Object(i.b)("inlineCode",{parentName:"p"},"scopes"),"! And so it becomes possible to use the same variable name for different situations."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function greetOnce(name) {\n  let greeting = "Hi ";\n  console.log(greeting + name);\n}\n\nfunction greetAgain(name) {\n  let greeting = "Shalom ";\n  console.log(greeting + name);\n}\n')),Object(i.b)("p",null,"We have used the variable name ",Object(i.b)("inlineCode",{parentName:"p"},"greeting")," twice but it's very important to remember that ",Object(i.b)("strong",{parentName:"p"},"these are not the same variable"),"! The two variables called 'greeting' do not even know each other exist."),Object(i.b)("h3",{id:"nesting"},"Nesting"),Object(i.b)("p",null,"It is important to note that scope is nested. That means when you have one function inside another function, you can access variables defined in outer function from the inner function. However you cannot access variables defined in inner function from outer function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function grandfather() {\n  let name = "Hammad";\n  // likes is not accessible here\n  function parent() {\n    // name is accessible here\n    // likes is not accessible here\n    function child() {\n      // Innermost level of the scope chain\n      // name is also accessible here\n      let likes = "Coding";\n    }\n\n    child();\n  }\n\n  parent();\n}\n\ngrandfather();\n')),Object(i.b)("h3",{id:"block-scope"},"Block scope"),Object(i.b)("h4",{id:"code-block"},"Code block"),Object(i.b)("p",null,"A block is piece of code inside by curly brackets, for example following ",Object(i.b)("inlineCode",{parentName:"p"},"if")," statements and ",Object(i.b)("inlineCode",{parentName:"p"},"for")," or ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loops."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (age > 18) {\n  // code block\n}\n")),Object(i.b)("h4",{id:"var-vs-let-and-const"},"var vs let and const"),Object(i.b)("p",null,"In addition to previous scope rules, JavaScript uses different scope methods for variables depending how they are defined."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Variables declared using ",Object(i.b)("inlineCode",{parentName:"li"},"var")," keyword use function scope. That means variables defined using ",Object(i.b)("inlineCode",{parentName:"li"},"var")," exist within function they are defined in."),Object(i.b)("li",{parentName:"ul"},"Variables declared using ",Object(i.b)("inlineCode",{parentName:"li"},"let")," or ",Object(i.b)("inlineCode",{parentName:"li"},"const")," keyword use block scope. Variables defined using ",Object(i.b)("inlineCode",{parentName:"li"},"let")," or ",Object(i.b)("inlineCode",{parentName:"li"},"const")," keywords exist within the block they are defined in.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function getBook() {\n  if (true) {\n    var bookOne = "JavaScript: The Good Parts";\n    let bookTwo = "Eloquent JavaScript";\n    const bookThree = "The JS Way";\n  }\n\n  console.log(bookOne); // JavaScript: The Good Parts\n  console.log(bookTwo); // ReferenceError: bookTwo is not defined\n  console.log(bookThree); // ReferenceError: bookThree is not defined\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Any time you define a variable inside a block, that variable cannot escape that block.")," We say the variable is ",Object(i.b)("inlineCode",{parentName:"p"},"scoped")," to that block."),Object(i.b)("p",null,"Scope allows us to control where our variables can be accessed from. We want to ensure that variables are available where they are needed and ideally as little as possible elsewhere to prevent naming collisions or accidental updates. As a result using ",Object(i.b)("inlineCode",{parentName:"p"},"let")," or ",Object(i.b)("inlineCode",{parentName:"p"},"const")," is preferrable to using ",Object(i.b)("inlineCode",{parentName:"p"},"var")," since they has stricter scope definition."),Object(i.b)("h3",{id:"exercise"},"Exercise"),Object(i.b)("p",null,"In small groups answer the following the questions. Try to solve each exercise before running code to verify answer. Try to explain your answer using what you learned above about scope. Think about the order JavaScript will execute each piece of code and what the values will be at each stage."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// 1.\nfunction one() {\n  var a = 10;\n}\none();\nconsole.log(a); // what is the value of a\n\n// 2.\nfunction two() {\n  let b = 10;\n  let b = 20;\n}\ntwo();\nconsole.log(b); // what is the value of b and why\n\n// 3.\nlet c;\nfunction three() {\n  c = 25;\n}\nthree();\nconsole.log(c); // what is the value of c and why\n\n// 4.\nfunction four() {\n  d = 25;\n}\nfour();\nconsole.log(d); // what is the value of d and why\n\n// 5.\nlet e;\nfunction five() {\n  const greeting = "Hello";\n\n  function greet() {\n    let name = "Eddie";\n    e = `${greeting} ${name}`;\n  }\n  greet();\n}\nfive();\nconsole.log(e); // what is the value of e and why\n\n// 6.\nfunction six() {\n  if (true) {\n    let f = 50;\n  }\n  console.log(f); // what is the value of f and why\n}\n\nsix();\n')),Object(i.b)("h2",{id:"2-classes"},"2. Classes"),Object(i.b)("p",null,"Variables can be used to hold information about the state your code is in, e.g. how many times someone has clicked on a button:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let timesClicked = 0;\n\nlet whenButtonClicked = () => {\n  timesClicked++;\n  console.log(`Button has been clicked ${timesClicked} times`);\n};\n\ndocument\n  .querySelector("#myButton")\n  .addEventListener("click", whenButtonClicked);\n')),Object(i.b)("p",null,"However, you may end up being in a situation where you'll have to keep track of the click state of multiple buttons, or even a dynamic number of buttons:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'let timesClicked1 = 0;\nlet timesClicked2 = 0;\n\nlet whenButtonClicked1 = () => {\n  timesClicked1++;\n  console.log(`Button has been clicked ${timesClicked1} times`);\n};\n\nlet whenButtonClicked2 = () => {\n  timesClicked2++;\n  console.log(`Button has been clicked ${timesClicked2} times`);\n};\n\ndocument\n  .querySelector("#myButton1")\n  .addEventListener("click", whenButtonClicked1);\ndocument\n  .querySelector("#myButton2")\n  .addEventListener("click", whenButtonClicked2);\n')),Object(i.b)("p",null,"We can reduce this code duplication by using a JavaScript ",Object(i.b)("inlineCode",{parentName:"p"},"class")," (not the same as a class in CSS). Classes are templates which are used to create objects containing methods and properties of the class. For example here the class ",Object(i.b)("inlineCode",{parentName:"p"},"Counter")," ties together the state, ",Object(i.b)("inlineCode",{parentName:"p"},"timesClicked"),", and the functions that reference it like ",Object(i.b)("inlineCode",{parentName:"p"},"whenButtonClicked"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'class Counter {\n  constructor() {\n    this.timesClicked = 0;\n  }\n\n  whenClicked() {\n    this.timesClicked++;\n    console.log(`Button has been clicked ${this.timesClicked} times`);\n  }\n}\n\nlet counter1 = new Counter();\nlet counter2 = new Counter();\n\ndocument\n  .querySelector("#myButton1")\n  .addEventListener("click", () => counter1.whenClicked());\ndocument\n  .querySelector("#myButton2")\n  .addEventListener("click", () => counter2.whenClicked());\n')),Object(i.b)("p",null,"We can create instances of a class using the ",Object(i.b)("inlineCode",{parentName:"p"},"new")," operator, followed by the class name. When a class instance is created, its ",Object(i.b)("inlineCode",{parentName:"p"},"constructor")," function is called automatically. We can pass the constructor arguments to use during initialisation."),Object(i.b)("p",null,"For example, here is a ",Object(i.b)("inlineCode",{parentName:"p"},"CounterFromN")," class that starts counting from a number that's passed in:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class CounterFromN {\n  constructor(n) {\n    this.timesClicked = n;\n  }\n\n  whenClicked() {\n    this.timesClicked++;\n    console.log(`Button has been clicked ${this.timesClicked} times`);\n  }\n}\n\nlet counterFromTen = new CounterFromN(10);\n\ncounterFromTen.whenClicked();\n// Button has been clicked 11 times\n")),Object(i.b)("p",null,"As shown above, a class' functions can be called by referring to the name of the object's function followed by brackets. If the function expects any arguments then these can be passed into it inside the brackets as per normal. Functions defined within classes are also be known as ",Object(i.b)("strong",{parentName:"p"},"methods"),"."),Object(i.b)("p",null,"Variables specific to a particular instance of a class are defined and referenced using the ",Object(i.b)("inlineCode",{parentName:"p"},"this")," keyword (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"this.timesClicked"),") within that instance. ",Object(i.b)("inlineCode",{parentName:"p"},"this")," refers to the object which is created by the class when it instantiated."),Object(i.b)("h3",{id:"exercises"},"Exercises"),Object(i.b)("p",null,"Try these exercises in your breakout groups."),Object(i.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(i.b)("p",null,"Implement the ",Object(i.b)("inlineCode",{parentName:"p"},"add")," and ",Object(i.b)("inlineCode",{parentName:"p"},"getTotal")," methods of the ",Object(i.b)("inlineCode",{parentName:"p"},"RunningTotal")," class below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class RunningTotal {\n  constructor() {\n    this.currentTotal = 0;\n  }\n\n  add(n) {\n    // Implement this method\n  }\n  getTotal() {\n    // Implement this method\n  }\n}\n\nconst runningTotal = new RunningTotal();\n\nrunningTotal.add(3);\nrunningTotal.add(7);\nrunningTotal.add(7);\nrunningTotal.getTotal();\n// 17\n")),Object(i.b)("h4",{id:"exercise-2"},"Exercise 2"),Object(i.b)("p",null,"Implement the ",Object(i.b)("inlineCode",{parentName:"p"},"constructor")," method of the ",Object(i.b)("inlineCode",{parentName:"p"},"StopWatch")," class below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class StopWatch {\n  constructor() {\n    this.secondsElapsed = 0;\n\n    //Finish implementing the rest of the constructor so that secondsElapsed is updated\n  }\n\n  getTime() {\n    return `Seconds elapsed: ${this.secondsElapsed}`;\n  }\n}\n\nconst stopWatch = new StopWatch();\n\n// Wait a few seconds...\n\nstopWatch.getTime();\n// 'Seconds elapsed: 3'\n\n// Wait a few more seconds...\n\nstopWatch.getTime();\n// 'Seconds elapsed: 7'\n")),Object(i.b)("h4",{id:"exercise-3"},"Exercise 3"),Object(i.b)("p",null,"Implement the ",Object(i.b)("inlineCode",{parentName:"p"},"constructor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"store")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"lookup")," methods of the ",Object(i.b)("inlineCode",{parentName:"p"},"AddressBook")," class below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'class AddressBook {\n  // Implement the constructor method\n  // Implement the store method\n  // Implement the lookup method\n}\n\nconst myAddresBook = new AddressBook();\n\nmyAddressBook.store("bart", "bart@simpsons.com");\nmyAddressBook.store("maggie", "maggie@simpsons.com");\n\nmyAddressBook.lookup("bart");\n// \'bart@simpsons.com\'\n\nmyAddressBook.lookup("homer");\n// \'address not found\'\n')),Object(i.b)("p",null,"Notice that when you come to using a class instance, you are only interacting with it through its methods, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"store")," and ",Object(i.b)("inlineCode",{parentName:"p"},"lookup")," for ",Object(i.b)("inlineCode",{parentName:"p"},"AddressBook"),". Similar to functions, classes provide a way of creating abstractions over lower-level implementations, which can help us better organise and maintain our code."),Object(i.b)("h2",{id:"4-this-keyword"},"4. ",Object(i.b)("inlineCode",{parentName:"h2"},"this")," keyword"),Object(i.b)("p",null,"One aspect of JavaScript that often leads to confusion is the keyword ",Object(i.b)("inlineCode",{parentName:"p"},"this"),". Its value depends on where it is used and how that function is called."),Object(i.b)("h3",{id:"this-in-a-constructor"},Object(i.b)("inlineCode",{parentName:"h3"},"this")," in a constructor"),Object(i.b)("p",null,"We saw previously that a ",Object(i.b)("inlineCode",{parentName:"p"},"constructor")," in a ",Object(i.b)("inlineCode",{parentName:"p"},"class")," is a special method which is used to instantiate on a new object. When used inside a ",Object(i.b)("inlineCode",{parentName:"p"},"constructor"),", ",Object(i.b)("inlineCode",{parentName:"p"},"this")," refers to the new object being created."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Person {\n  constructor() {\n    console.log(this);\n    this.name = "Mike";\n  }\n}\n\nconst person = new Person();\n')),Object(i.b)("h3",{id:"this-in-a-method"},Object(i.b)("inlineCode",{parentName:"h3"},"this")," in a method"),Object(i.b)("p",null,"A method is a function that belongs to an object. That object can be either be created as an object literal or using a class."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Person {\n  constructor() {\n    this.name = "Mike";\n  }\n\n  sayHi() {\n    console.log(`Hi, ${this.name}`);\n  }\n}\n\nconst person = new Person();\nperson.sayHi();\n')),Object(i.b)("p",null,"In both above example ",Object(i.b)("inlineCode",{parentName:"p"},"sayHi")," is a method which belong to ",Object(i.b)("inlineCode",{parentName:"p"},"person"),"."),Object(i.b)("p",null,"When a method is called, the value of ",Object(i.b)("inlineCode",{parentName:"p"},"this")," inside of that method will be the object that the method belongs to. In the example above that will be ",Object(i.b)("inlineCode",{parentName:"p"},"person"),"."),Object(i.b)("h3",{id:"this-in-a-function"},Object(i.b)("inlineCode",{parentName:"h3"},"this")," in a function"),Object(i.b)("p",null,"The value of ",Object(i.b)("inlineCode",{parentName:"p"},"this")," in a standalone function if it's executed in the browser will be the ",Object(i.b)("inlineCode",{parentName:"p"},"window")," object. If it is executed in Node it will be the ",Object(i.b)("inlineCode",{parentName:"p"},"global")," object."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function sayHey() {\n  console.log(this);\n}\n\nsayHey();\n")),Object(i.b)("h3",{id:"methods-called-as-functions"},"methods called as functions"),Object(i.b)("p",null,"We can take a method and assign it to a variable. Essentially that turns it from being a method into a standalone function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class Person {\n  constructor() {\n    this.name = \"Mike\";\n  }\n\n  sayHi() {\n    console.log(`Hi, ${this.name}`);\n  }\n}\n\nconst person = new Person();\nconst sayHi = person.sayHi;\n\nsayHi(); // TypeError: Cannot read property 'name' of undefined\n")),Object(i.b)("p",null,"In above example, we are executing ",Object(i.b)("inlineCode",{parentName:"p"},"sayHi")," as a function, not method. As a result we no longer have access to the object the method belongs to. That results in the value of ",Object(i.b)("inlineCode",{parentName:"p"},"this")," being lost and instead of being ",Object(i.b)("inlineCode",{parentName:"p"},"person")," it is now ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,"That can be a problem. Fortunately we can fix it"),Object(i.b)("h3",{id:"arrow-functions-to-the-rescue"},"arrow functions to the rescue"),Object(i.b)("p",null,"Latest versions of JavaScript allow us to declare methods in classes using arrow functions. When an arrow function is used, the value of ",Object(i.b)("inlineCode",{parentName:"p"},"this")," inside it is bound to the object it belongs to. That allows us to call methods as functions without losing the value of ",Object(i.b)("inlineCode",{parentName:"p"},"this")," inside it."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Person {\n  constructor() {\n    this.name = "Mike";\n  }\n\n  sayHi = () => {\n    console.log(`Hi, ${this.name}`);\n  };\n}\n\nconst person = new Person();\nconst sayHi = person.sayHi;\n\nsayHi(); // Hi, Mike\n')),Object(i.b)("p",null,"This behaviour will become important in the near future, when we will need to start passing methods to be called other parts of our code."),Object(i.b)("h3",{id:"exercises-1"},"Exercises"),Object(i.b)("p",null,"In break out groups solve the following exercises. Only run code to verify answers. Try to understand what each line of code is doing and the effect it has."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Exercise 1\nclass Car {\n  goFaster() {\n    this.speed = 100; // what is the value of this code below is run\n  }\n}\n\nconst ferrari = new Car();\nferrari.goFaster();\n\n// Exercise 2\nclass Car {\n  goFaster() {\n    this.speed = 100; // what is the value of this code below is run\n  }\n}\n\nconst honda = new Car();\nconst quicker = honda.goFaster;\n\nquicker();\n\n// Exercise 3\n\n// How can we fix the bug above? Why do have a problem and how does your solution fix it?\n")),Object(i.b)("h2",{id:"4-project-work"},"4. Project Work"),Object(i.b)("h3",{id:"explanation"},"Explanation"),Object(i.b)("p",null,"For the rest of the day we'll be working together on our group projects"),Object(i.b)("p",null,"You can find the project ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/js-core-3/tv-show-dom-project/readme"}),"here")),Object(i.b)("p",null,"Students should group into teams based on the Level that they are working on currently."),Object(i.b)("h2",{id:"homework"},"Homework"),Object(i.b)("p",null,"Click ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./homework"}),"here")," to view the homework for this lesson."))}b.isMDXComponent=!0},218:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),b=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=b(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return t?o.a.createElement(h,l(l({ref:n},c),{},{components:t})):o.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);