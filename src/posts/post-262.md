---
path: '/tips/post-262'
date: '2021-02-08'
title: 'Easiest way to generate a random number in JS'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1612792514/tips/262-1_bgjot5.png'
description: 'Generating a random number with Javascript'
number: 262
status: true
---

Generating a random number in JS #️⃣1️⃣

What's up guys? Today I want to share with you a really simple function to generate a random number between a given 'min' and 'max'.

This is super simple but can be really handy in a lot of situations. We just need to use the 'Math' object to make use of the 'floor' and 'random' functions to get this.

```javascript
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Generating a random number between 1 and 100
const randomNum = getRandomNumber(1, 100)
console.log(randomNum)
// -> 80

// Picking a random item from an array
const arr = ['banana', 'strawberry', 'apple', 'peach', 'pear', 'cherry']
const randomItem = arr[getRandomNumber(0, arr.length - 1)]
console.log(randomItem)
// -> peach
```

Also, check in the snippet how we can easily use this for other things such as picking a random element from an array. We just need to pass '0' as 'min' and 'array.length - 1' as 'max' and we're done!

Amd that's it! Hope you found this tip handy! 🤓🙏
