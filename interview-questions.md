# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: this in JavaScript is used when dealing with object. You would you 'this' to call on or reference the object inside of the object. For example, if i had an object called farmAnimals that held data of the animals in the farm and the number of each type of animal and i wanted to create a method called totalAnimals that would give me this total number of all of the animals in the farm you need to add the values of each key. To do this, you need to call on each of the keys within the object by using 'this' to refer to the object and then the key name. 

            ex. let farmAnimals = {
              chickens : 8
              pigs : 4
              cows : 10
              goats: 2
              totalAnimals: function (){
                return this.chickens + this.pigs + this.cows + this.goats
                }

  Researched answer: 'this' in javascript is used to refer to an object. However, which object the 'this' in refering to is based on how it is used. when used in an event, 'this' refers to the HTML element that the event is acting on. An example would be if you created a method to give an output at the click of a button, you would need to pass the method through the button tag. 'this' with dot notation would be used to refer to the button tage that the event is going to act on. When used on an object, 'this' refers to the object. For example if you where to add a method within on object that added the values of every key in the object together 'this' would be used to refer to the object and with dot notation and the key name to refer to the value that the method is adding. 



2. What is React? Why would you use it?

  Your answer: React is what developers use to create user interactive web pages. React uses components that hold data in a coding language called JSX. The components come together to build the webpages. 

  Researched answer: React is a Javascript Library, created by Facebook in 2011, used to create user wed applications. React  React is component based. Components are reusable code that act like javascript functions and return HTML that is displayed on the user interface. 


3. Which lifecycle method is required in a React class component?

  Your answer: The lifecycle method of a React class component is the constructor method and render method

  Researched answer: The lifecycle method that is required in a react class component is the render method that occurs in two of the three lifecycle stages of a class component, the mounting stage and the updating stage. the render method is the only method required as it holds the data that will be displayed in the user interface. This data is held in fragment tags. 



4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: JSX is a coding language that is a hybrid of javascript and HTML syntax. One syntax differnce in JSX from html is that tags have to be held on within fragment tags. 

  Researched answer: JSX is a JavaScript extension that allow you to write HTML and Javascript together. One difference in the syntax is that within JSX you have to hold elements within fragment tags, called a parent element. In HTML you can list as many elements as you would like without holding them in a fragment tag. 



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager that contains sharable code. The file that are modified in react when yarn is run is App.js. 

  Researched answer: Yarn is a package manager that allows you to share code with others. It allows you to troubleshoot more easily as you are able to use solution found by other developers. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function is a function without a name.

  Researched answer: An anonymous function is a function that does not have a name instead it take on the keyword function. anonymous functions do not have to be held in a seperate file which helps simplify the code.


## Looking Ahead: Terms for Next Week

1. Conditional rendering:

2. Object-oriented programming:

3. Ruby:

4. Ruby blocks:

5. Ruby hashes:
