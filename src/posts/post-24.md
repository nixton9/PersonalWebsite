---
path: "/tips/post-24"
date: "2019-07-29"
title: "Some simple but useful array operations in JavaScript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586693118/tips/24-1_ysahqa.png'
description: 'Using some neat and useful array operations in Javascript'
number: 24
status: true
---

For today's tip i thought i could show you four array methods that are really common to use in our day to day job - map, splice, slice and reduce. Look at the second picture on this post to see how they are being used and look at the third to see what exactly is the result. I'll try to briefly explain each one:

 ```javascript
 var arr = [2,5,23,56,34,65,6,99,102,32,44]
var arr2 = [1,2,3,4]

var arrMap = arr.map(el => el*2)
console.log(arrMap)

arr.splice(2,1)
console.log(arr)

var arrSlice = arr.slice(5, 10)
console.log(arrSlice)

var arrReduce = arr2.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(arrReduce)
 ```

The map function will loop through all elements of the and will apply the function you pass to all this elements - here I'm multiplying all ements by 2.

The splice function will remove an x number of elements from the array and it needs two arguments - the first is the index of where we want to start removing elements and the second is how many elements we want to remove.

The slice one is similar to the previous one but it's a bit different. It creates and returns a new array with the elements you removed from the original array.

Finally, the reduce function will apply your function and will return a single value based on your function. In this case we will add the value of all elements in the array and return the final value of this sum.  
Hope this was valuable to you!