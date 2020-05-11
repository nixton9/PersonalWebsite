---
path: "/tips/post-58"
date: "2019-09-16"
title: "Getting to know JavaScript classes"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586886055/tips/58-1_xqwmz7.png'
description: 'Understanding classes in Javascript'
number: 58
status: true
---

Hi guys, how was your weekend?
To start this week, I thought of bringing another super important feature brought to us by ES6: classes!
This addition basically brought us a new syntax to use some of the functionality we already had in JavaScript: using constructor functions and using the Prototype features ( see tip [#54](/tips/post-54) ). This new syntax was a way of getting JS to have a more natural way of dealing with OOP - Object Oriented Programming.

To create a class, we just need to use the keyword 'class' followed by the name we want for this class (usually with the first letter in uppercase). We then can have our constructor inside, with some arguments, where we'll set some of the properties for our class when it is initialized.
Inside the class when can define other properties and methods (functions) and add all the functionality we want.

 ```javascript
class User{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    userType = 'regular'

    getUserName(){
        return this.firstName + ' ' + this.lastName
    }

    getUserType(){
        return this.userType
    }

    setUserType(newType){
        this.userType = newType
    }
}

var jason = new User('Jason', 'Watkins')

console.log(jason.getUserName()) // -> Jason Watkins

console.log(jason.getUserType()) // -> regular

jason.setUserType('admin')

console.log(jason.getUserType()) // -> admin
 ```

Everytime we want to create a new instance of this class we just need to use the following syntax: " var someVar = new 'className' " and we'll get a new instance of our class. We can then use it's methods and properties for whatever logic we might need by using object notation: " someVar.classMethod()"

This is just the basics and I plan to do another tip on classes where we'll dive a bit deeper and look at things like 'static methods', 'getters and setters' and ' class inheritance'.