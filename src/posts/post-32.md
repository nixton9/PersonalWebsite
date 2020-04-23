---
path: "/tips/post-32"
date: "2019-08-07"
title: "Using the browser's Local Storage to save data across sessions"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586803509/tips/32-1_qet4ti.png'
description: 'Understanding what is the Local Storage on the browser and how we can use it to store data'
number: 32
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586803510/tips/32-2_kuhlpv.png "Local Storage")

There are numerous ways to save data in a web application in a way that when the user closes the browser and opens it again, the same data is still there. We can save this data to a database, use cookies, use local storage, etc.
Here I'll show you how to use Local Storage - a component from the Web API that allows you to save data on the browser using a 'key: value' format.

 ```javascript
var user = {
    name: 'John Doe',
    age: 30,
    userType: 1,
    language: 'eng'
}

//SAVE THE ITEM IN LOCAL STORAGE
localStorage.setItem('userInfo', JSON.stringify(user))

//GET THE ITEM FROM LOCAL STORAGE
var userInfo = JSON.parse(localStorage.getItem('userInfo'))
 ```
Look at the example to see how this is done: we create an object 'user' with some properties and then we use 'localStorage.setItem('name of our object, ourObject )'. Then to retrieve this data we just need to use 'localStorage.getItem('name of our object')'.
Since Local Storage only accepts strings we'll need to wrap our object with 'JSON.stringify()' to convert our object to string. When retrieving the data we need the opposite to access our object - JSON.parse().

This is a pretty simple way to store some data across sessions, helping you create more functional web apps!