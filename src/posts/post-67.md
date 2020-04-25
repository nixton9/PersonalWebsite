---
path: "/tips/post-67"
date: "2019-10-02"
title: "Understanding closures in JavaScript and why they matter"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586974713/tips/67-1_twm5zu.png'
description: 'Closures in Javascript'
number: 67
status: true
---

Closures are one of those key points that we always hear something when talking about JavaScript. It's a subject that is important to, at least, understand the concept and have a basic knowledge of how they work. They are also something that comes up a lot during interviews for JavaScript developers.

First, let's talk about bindings inside functions. Every binding we create inside a function is only accessible inside that function. After the function is executed that binding will be destroyed and we won't have anymore access to it. This is just the way that JavaScript works because of the function scope. This is the main purpose of closures - they are a function inside another function that allows us to access a variable we had define inside of the parent function.

 ```javascript
function simpleClosureExample(){
    var randomString = 'WebDev Tips!'
    var printString = function(){
        console.log(randomString)
    }
    return printString
}

var message = simpleClosureExample()
message() // -> WebDev Tips!



function storeUserName(){
    var userName = 'User'
    return {
        getUserName: function(){
            console.log(userName)
        },
        setUserName: function(name){
            userName = name
        }
    }
}

var manageUserName = storeUserName()

manageUserName.getUserName() // -> User
manageUserName.setUserName('John Doe')
manageUserName.getUserName() // -> John Doe
 ```

In the code snippet I show two examples of closures. Let's look at the first one, it's pretty simple: we have a variable called 'randomString'. Next to it, we create and return a function where we'll use that variable. We can then have a binding, wherever we want, to use this function and thus access the variable created inside the function.

In the second example, we create another binding called 'userName'. We will then return a object with two functions that will be able to access the 'userName' variable. The first one will log the value of this variable and the second one will allow us to update its value.
Then we just need to create a binding for the 'storeUsername' function and with this binding call the returned functions.