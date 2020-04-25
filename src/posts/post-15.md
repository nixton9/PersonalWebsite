---
path: "/tips/post-15"
date: "2019-07-18"
title: "Easily removing duplicates from an array in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586628406/tips/15-1_bpsikh.jpg'
description: 'Removing duplicated items from an array in Javascript with ease'
number: 15
status: true
---

Dealing with arrays is one of those things that all Javascript devs always have to do. A lot! Fortunately, ES6 brought us some cool new array functions to help us with our everyday tasks, providing more simple and elegant solutions.

As mentioned in one of my previous tips, array.filter() allow us to filter an array based on the condition that we'll pass here as the argument and this is super handy for a lot of cases. That's what we'll use today.

 ```javascript
var arr = [1, 1, 5, 9, 1, 15, 9, 9, 14, 20, 15]
console.log(arr)

var arrWithoutDuplicates = arr.filter((item, index) => index === arr.indexOf(item))
console.log(arrWithoutDuplicates)
 ```

Look at the example to see how we can use the .filter() function on an array to remove all the duplicated elements inside it.  
What do you think of these ES6 array functions ? Do you use them in projects or do you prefer doing it the 'old way'? 🤔