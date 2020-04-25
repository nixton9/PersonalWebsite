---
path: "/tips/post-54"
date: "2019-09-09"
title: "What is the Prototype in JS and why it's such an important feature"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586883987/tips/54-1_ai4yjn.png'
description: 'Understanding what exactly is the Prototype in Javascript and what is its importance'
number: 54
status: true
---

Even if you're a total beginner in JavaScript, there's a really high chance that you've already heard something about prototypes or at least seen them somewhere in your projects. Prototypes are basically one the features that allows JS to achieve the object oriented concepts. Everytime we create function or an object, for example, a prototype will be added automatically to this function/object - an object with some default methods that also allows us to later add other properties or methods that will be shared by all its instances.

 ```javascript
function User(name, age, country, languages){
    this.name = name
    this.age = age
    this.country = country
    this.languages = languages
}

User.prototype.introduceUser = function(){
    console.log(`This is ${this.name}, he's ${this.age} and he's from ${this.country}`)
}

User.prototype.listLanguages = function(){
    for(let lang of this.languages){
        console.log(`${this.name} knows ${lang}`)
    }
}

var userRandy = new User('Randy Roberts', 23, 'USA', ['JS', 'PHP', 'HTML', 'CSS'])

var userEric = new User('Eric Webber', 34, 'Jamaica', ['HTML', 'CSS', 'MONGODB', 'RUBY'])

userRandy.introduceUser()

userRandy.listLanguages()

userEric.introduceUser()

userEric.listLanguages()
 ```

Look at the example. We have a constructor function - User - that allows us to create new 'users' by using 'new User'. This constructor already has some default properties for all its instances - name, age, country and languages. -
We're then creating two methods - introduceUser and listLanguages - and adding them to the prototype of User. This way, all of our 'users' can have access to these methods.

If we wanted to have a special method for only a user we could just do something like: ' userRandy.sayHi = function(){ console.log('Hi!') } ' and this would be accessible only by the user 'Randy'. Not like when working with the prototype.

Hope you've liked this brief introduction to Prototypes in JavaScript and I encourage you to go on and do some further reading on this topic.