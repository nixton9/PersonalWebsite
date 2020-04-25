---
path: "/tips/post-11"
date: "2019-07-13"
title: "How to remove falsey values from an array"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586601133/tips/11-1_xr4ck7.jpg'
description: 'Removing falseys values from an array in Javascript'
number: 2
status: true
---

When dealing with arrays in Javascript, it's not uncommon to have to remove some falsey values - 0, null, NaN, ' ', undefined, false - from them. One of the most practical ways is to user .filter() and pass a function that will remove whatever type of these falsey values you need to get rid of.

 ```javascript
var arr = [1, 2, 10, 0, false, undefined, null, '', 'back-end', 'front-end', 'fullstack']

var filteredArr = arr.filter(Boolean)

console.log(arr)

console.log(filteredArr)
 ```

But, actually, the easiest way to get this done is simply by using .filter(Boolean) and all your falsey values will be removed just like in the example. This works because 'Boolean' is an object wrapper to whom who we are passing each element of the array. It will return 'true' if it's a truthy value and 'false' if it's a falsy one thus passing this boolean to the filter method.
Hope it's handy for you! 👌
