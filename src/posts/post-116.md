---
path: "/tips/post-116"
date: "2019-12-30"
title: "How to create function required parameters in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587499984/tips/116-1_foipyc.png'
description: 'Creating required parameters for functions in JS'
number: 116
status: true
---

Hello guys! 😁
Today we'll be seeing a method to create required parameters for functions in JavaScript.

This is a clever hack that will basically throw an error when a specific parameter is not passed to a function. Obviously there are better ways to do this, but this is a simple method that will work well for most situations. Let's see how to do it.

 ```javascript
 
const requiredParam = () => { throw new Error('This parameter is required!') }

const sumNumbers = (val1 = requiredParam(), val2 = requiredParam()) => {
    return val1 + val2
}

sumNumbers(2,4) // -> All good, will return 6

sumNumbers(2, undefined) // -> Uncaught Error: This parameter is required!

sumNumbers(2) // -> Uncaught Error: This parameter is required!

sumNumbers(2, null) // -> All good, will return 2

 ```

Look at the example
We create a function called 'requiredParam' that will just return an error with the text 'This parameter is required!' . -
Then, we just create whatever functions we want and, on the parameters that we want to be required, we just need to write 'param = requiredParam( )'. And it's done. When we call the function, if we pass a value to this parameter then all will be good. If we don't any value for the parameter, it's default value will be our 'requiredParam' function so it will thrown an error!

See the examples where I'm calling the same function with different values to see what happens in different cases.  
Let me know your feedback and your doubts! Have a nice one 😎🔥