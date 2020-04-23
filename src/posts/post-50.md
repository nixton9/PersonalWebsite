---
path: "/tips/post-50"
date: "2019-09-02"
title: "What is type coercion in JS and why you should know how it works"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1586882916/tips/50-1_dgw6xt.png'
description: 'Understanding type coercion in Javascript'
number: 50
status: true
---

If you know a bit about JavaScript, type coercion is one of those subjects that you probably already heard something about. It is one of the many underlying things that the language does for us but it's always important, for anyone who wants to be a JS dev, to know what this concept is all about.
Here I'll try to do a simple explanation.

Basically 'type coercion' is the process of converting values of one type to another type.
JavaScript is a weakly-typed programming language, meaning that we can do operations with values of any types - numbers, strings, booleans, null, etc - and we'll get some result instead of an error, which is the normal behaviour in a lot of other programming languages.

 ```javascript
console.log(false == 0)  // RESULTS TO 'true'

console.log(true + false)  // RESULTS TO '1'

console.log("val" + 10 + 5)  // RESULTS TO 'val105'

console.log(10 + 5 + "val")  // RESULTS TO '15val'

console.log("8" + 1)  // RESULTS TO '81'

console.log("10" - 2)  // RESULTS TO '8'

console.log(6 * null)  // RESULTS TO '0'

console.log("ten" + 5)  // RESULTS TO 'NaN'
 ```

So, if we do something like " 10 + '5' ", a string and a number, JavaScript will transform one of these values into the same type as the other so it can perform the operation. Look at the code snippet to check some examples of this process in action. This is what we call 'implicit coercion' since JavaScript will do this without it being explicitly asked for.

There are lot of rules that will define how these transformations are made.
Since this is just a really brief explanation of this complex process I recommend you to, if you feel like it, do some further reading on this whole matter and also check some of the rules that I've talked above.