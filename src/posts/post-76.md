---
path: "/tips/post-76"
date: "2019-10-18"
title: "Getting to know recursion in JavaScript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587031185/tips/76-1_xhiiil.png'
description: 'Understanding recursion in Javascript'
number: 76
status: true
---

How's your Friday going guys?
Today we'll talk a bit about recursion in JavaScript. This is something that every frontend developer should know at least a bit about, and is something that is very often brought up during interviews. So what is recursion? -
Recursion is basically when a function calls itself. That simple. Knowing how to use it can help solve complex problem or even basic problems but with a cleaner approach. There are many use cases when recursion can be used , here I decided to create two really simple examples just to show you how this works.

 ```javascript
const simpleRecursionExample = (numberToStop, val=0) => {
    if(val === numberToStop){
        return val
    }
    val++
    console.log(val)
    simpleRecursionExample(numberToStop, val)
}

simpleRecursionExample(5) // -> 1 2 3 4 5


const reverseString = (string, currIndex=0, reversed=[]) => {
    if(currIndex<string.length){
        reversed.unshift(string[currIndex])
        reverseString(string, currIndex+1, reversed)
    }
    return reversed
}

var rev = reverseString('webDevTips')
console.log(rev) // -> (10) ["s", "p", "i", "T", "v", "e", "D", "b", "e", "w"]
 ```

In the first example we basically have a function that will incremente a given value until it reaches the same value as the number passed as argument. If the value is equal to the 'numberToStop' we will return that value, otherwise we will increment that value and call the function itself. This will create a loop, calling the same function over and over again until it reaches the desired number.

The second example has a function that will reverse any given string using recursion as well. We basically have a 'currIndex' that will keep track on what character we are at, we check if this 'currIndex' is smaller than the string length, and if it is we take the current character of the string and put it in the beginning of the 'reversed' array. We then call the function all over again but we increment the value of 'currIndex' so we go to the next character on the next function execution. We keep on doing this until we have finished looping through the whole string. When this happens we will return the reversed array.