---
path: "/tips/post-43"
date: "2019-08-21"
title: "Getting a cleaner code with object destructuring"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586813336/tips/43-1_jvidof.png'
description: 'Using object destructuring in Javascript to have a cleaner code'
number: 43
status: true
---

With ES6 we got a whole lot of a new features to use in JavaScript. One of those features was destructuring. Destructuring allows us to declare variables by extracting their values from objects or arrays.

 ```javascript
var person = {
    name: 'John',
    age: 25,
    address: {
        street: '4244 Tree Top Lane',
        city: 'Wayne',
        state: 'Pennsylvania',
        country: 'USA'
    }
}

let {name, age} = person
console.log(name) //John
console.log(age) //25

let {street, city, state, country} = person.address
console.log(street) //4244 Tree Top Lane
console.log(city) //Wayne
console.log(state) //Pennsylvania
console.log(country) // USA
 ```

So what's the point of this? Imagine you are dealing with a object that has some properties in it. Everytime you have to access a specific property you need to specify 'yourObject.someProperty'. This is not a big deal but if you have to access that property several times it gets a bit tedious.

With destructuring you store that property value inside a variable and then you just use the var everytime you need it.
To do this you just have to follow this syntax:
'var { someProperty } = yourObject'
You can also do this to extract values from objects inside objects. Look at the example to better understand how this works!  
Have you ever used destructuring before ?