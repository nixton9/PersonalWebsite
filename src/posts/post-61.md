---
path: "/tips/post-61"
date: "2019-09-21"
title: "What are template literals in JS and they are so awesome"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586886600/tips/61-1_zjfovm.png'
description: 'Using template literals in Javascript'
number: 61
status: true
---

Template literals are awesome! Since they came out with ES6 that we no longer need have to add strings and vars to be able to return the result of a JavaScript expression inside a string. And this is just one of the cases where template literals are extremely handy. Overall, they help us produce a cleaner, and more readable code.

So how do they work? Consider this: - you have a variable 'userName' where you store the name of a user and you want to create a string where you greet the user by saying "Hello 'user'". Typically, you would create a string and add the var 'userName' to it, like: " var greeting = 'Hello ' + userName ".
With template literals you just do this: ' var greeting = `Hello ${userName}`.

 ```javascript
var name = 'WebDev Tips'

var regularString = 'My name is ' + name
console.log(regularString) 
// -> My name is WebDev Tips

var awesomeString = `My name is ${name}`
console.log(awesomeString) 
// -> My name is WebDev Tips

var stringWithOperation = `3 times 5 = ${3*5}`
console.log(stringWithOperation) 
// -> 3 times 5 = 15

const fn = () => 'return from a function'
var stringWithFunction = `Template Literal even allows us to have a ${fn()}`
console.log(stringWithFunction) 
// -> Template Literal even allows us to have a return from a function
 ```

Notice that we are not using single quotes ( ' ) or double quotes ( " ) to start and end the string. Instead we have to use backticks ( ` ) to do this. This is the only way to use template literals.

See the code snippet to find more examples on different things we can do with this so you can start using them right now!