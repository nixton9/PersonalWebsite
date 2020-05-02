---
path: "/tips/post-169"
date: "2020-04-17"
title: "Using the typeof operator in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588412280/tips/169-1_nl82on.png'
description: 'How does the typeof operator work in Javascript'
number: 169
status: true
---

It's Fridayy 🔥🔥  
Ready for a JavaScript tip?

Today we'll talk about the 'typeof' operator in JavaScript. Basically this operator lets us check what type a variable has. This can be super helpful in some scenarios, let's check it.

```javascript

const num = 24;

const string = 'webDevTips';

const func = () => true;

var undef;

const obj = {
    name: 'John Doe',
    age: 44
};

console.log(typeof num) // -> number

console.log(typeof string) // -> string

console.log(typeof func) // -> function

console.log(typeof undef) // -> undefined

console.log(typeof obj) // -> object

```

On the first code snippet we have some variables with different types - string, number, function, undefined and object. To check wich type they have we just need to do 'typeof ourVar'. This will return the correct type this variable has.

```javascript

// Using this in conditions
// If this 'func' is actually a function, we will run it

if (typeof func === 'function') {
    func();
}

```

On the second snippet we see how we can implement this in a real world scenario. We have the 'func' variable that we expect to be a function. Still, before we run it we might want to check it it's actually a function so we create an if statement where we use 'typeof' to make sure that we are dealing with a function. If that's the case, we'll execute it.

Hope you have a great weekend guys, take care! 😎✌