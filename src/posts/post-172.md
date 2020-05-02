---
path: "/tips/post-172"
date: "2020-04-24"
title: "How to use the 'includes' method in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588413253/tips/172-1_utwg3s.png'
description: 'Using the inlucdes method on arrays in Javascript'
number: 172
status: true
---

Hope you are having a great Friday guys! 😁  
For today's tip we'll take a look at one very handy array method in JavaScript - includes.

So what does 'includes' do? It helps up check if an array includes a specific item. The name says it all 😅

```javascript

const fruitsArray = ['apple', 'pineapple', 'peach', 'banana', 'strawberry']

// Old way of checking if an array had a specific item
console.log(fruitsArray.indexOf('banana') !== -1) // -> true


// Using the 'includes' method
console.log(fruitsArray.includes('strawberry')) // -> true

console.log(fruitsArray.includes('peac')) // -> false

```

If you look at the code snippet you'll see how we used to do this: we used 'indexOf' on the array by passing that specific item. This returns the index of that item inside the array. If the item does not exist in that array then it would return -1. We would use this to check if the item was there on the array or not.

Now, using the 'includes' things get way more readable and straightforward! We just need to do 'array.includes(item)'. And this will return true or false. It's super handy!

Note that, it just returns true if we pass exactly the item and not only part of it (as you can see on the snippet).

Hope you guys have a great weekend, see you soon 😁🤞
