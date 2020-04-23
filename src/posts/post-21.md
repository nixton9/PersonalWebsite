---
path: "/tips/post-21"
date: "2019-07-25"
title: "What are IIFE's in JS and how can we create one"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586692360/tips/21-1_qopwyh.jpg'
description: 'Understanding what is an IIFE - Immediately Invoked Function Expression - in Javascript and how to create one'
number: 21
status: true
---

IIFE - Immediately Invoked Function Expression - is, as the name says, a function that will be invoked immediately, duh.
When working with regular functions, you first have to define them in your code and then you usually will call the function somewhere, wether it is immediately after you define it or somewhere else inside some logical conditions in your code for example. With IIFFE's, you define your function and call it in the same place, not having to call it later in your code, and they will be executed immediately.

 ```javascript
(function(){
    //YOUR INSTRUCTIONS
})()



(function(val1, val2){
    console.log(val1 + val2)
})(5,10)
 ```

Using them is extremely simple and it's really similar to how you create a normal function.
You just need to declare a function without a name, define your arguments if you need them, write your instructions inside the brackets and then wrap this all with parenthesis. Then just open and close another set of parenthesis - if you have arguments in your function you pass them here, otherwise you just leave this empty. Just look at the example to easily see how this is done.  
Hope this will be handy to you! 🤓👊
