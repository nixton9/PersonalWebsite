---
path: "/tips/post-190"
date: "2020-06-05"
title: "Using the Object.entries() method in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1591374484/tips/190-1_gdqntw.png'
description: 'How to use Object.entries() and Object.fromEntries() in Javascript'
number: 190
status: true
---


Using the Object.entries() and Object.fromEntries() methods on JavaScript

Object.entries and Object.fromEntries are two methods that are super handy when dealing with objects and arrays in JavaScript.

```javascript

// Object.entries()

var data = {
    val1: 2,
    val2: 10,
    val3: 42
}

console.log(Object.entries(data))
// -> [['val1', 2], ['val2', 10], ['val3', 42]]

Object.entries(data).map(([key, val]) => console.log(`${key} - ${val}`))
// -> val1 - 2
// -> val2 - 10
// -> val3 - 42

```

The first one allows us to take an object and transform it in an array where each element will be another array with a property and value from the object. Is especially useful when we want to map through all the values and properties of an object at once! Just look at the first code snippet to see this.

```javascript

// Object.fromEntries()

var data = [['val1', 2], ['val2', 10], ['val3', 42]]

console.log(Object.fromEntries(data))
// -> { val1: 2, val2: 10, val3: 42 }

```

The second method does basically the opposite: we pass to it an array where each element will be an array with two elements - the first will turned into a property and the second a value - and it returns an object with it!
Check the second code snippet to see this is action.

This can be quite simple but also super helpful in some situations.  
Hope you have a great weekend guys, take care! 🤗✌