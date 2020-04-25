---
path: "/tips/post-13"
date: "2019-07-16"
title: "Using your if's in a shorter, simpler and cooler way"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586601827/tips/13-1_uxcfkv.jpg'
description: 'Creating shorter, simpler and cooler if statements in Javascript'
number: 13
status: true
---


So, for today, i decided to show you a little simple tip on how to write some of your if statements in a shorter way. This can help you clean up your code a little bit, making it easier for the eye.

Basically you just have to follow this structure - (some condition) && (some instructions) - for example:  someVar > someOtherVar && console.log('yeah') This will log 'yeah' if someVar is bigger than someOtherVar.

 ```javascript
var someString = 'Just some random truthy value'

if(someString){
    console.log('hmmm...')
}

someString && console.log('shit works!')
 ```

In this example we just create two if statements, one with the traditional method and the other with this one, to check if 'someString' is truthy. As we can see, both cases are logged on the console.  
Have a nice one! 😁👌