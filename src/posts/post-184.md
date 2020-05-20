---
path: "/tips/post-184"
date: "2020-05-20"
title: "Using impplicit return on your JS functions"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589989327/tips/184-1_wesuv3.png'
description: 'How to use implicit return on Javascript functions'
number: 184
status: true
---

How is it going guys? 🤗  
Today we will check how we can use implicit return on our JavaScript functions, helping us achieve cleaner code 

Look at the first code snippet. Here we see three basic examples of functions: one that returns a single value, one that returns an object and one that maps through an array and returns each item on that array multiplied by 2.

```javascript

// 'Traditional' return

const returnValue = () => {
    return 'value';
}

const returnObject = () => {
    return {
        name: 'John',
        lastName: 'Doe'
    };
}

const returnInMap = (arr) => {
    return arr.map(item => {
        return item*2;
    });
}

console.log(returnValue());
// -> value

console.log(returnObject());
// -> {name: "John", lastName: "Doe"}

console.log(returnInMap([1,2,3,4]));
// -> [2, 4, 6, 8]

```

What do these functions have in common? They all basically only return something and do nothing else. It's the only thing they do. This means thay we can use implicit return on these examples!

Check the second code snippet and you'll find the same examples but using implicit return. Basically we just need to remove the curly brackets! On the first example, we can do it as a one liner so we just point our arrow function to the value we want to return. Same with the 'implicitReturnInMap'. Notice that here we even use implicit return twice: on the function itself and on the function inside the map method.

```javascript

// Implicit return

const implicitReturnValue = () => 'value';

const implicitReturnObject = () => ({
    name: 'John',
    lastName: 'Doe'
});

const implicitReturnInMap = (arr) => arr.map(item => item*2);

console.log(implicitReturnValue());
// -> value

console.log(implicitReturnObject());
// -> {name: "John", lastName: "Doe"}

console.log(implicitReturnInMap([1,2,3,4]));
// -> [2, 4, 6, 8]

```

On cases where we can't use a one liner, we just need to use parenthesis and we'll automatically return what's inside them! We can see this on the second example where we return an object - we use the parenthesis and inside we just put the object we want to return.

Hope you found this useful and give it a try if you haven't tried it 😁