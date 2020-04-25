---
path: "/tips/post-104"
date: "2019-12-06"
title: "Understanding what is hoisting in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587328348/tips/104-1_dwjjgm.png'
description: 'How does hoisting works in Javascript'
number: 104
status: true
---

Hoisting is one of those terms that gets tossed a lot when talking about JavaScript. It's also a concept that every JavaScript developer should have at least some sort of notion about. So what is it?

Hoisting is a behaviour that the language has that basically means that variables and functions declarations are moved to the top of their scope before the code is executed.
So, when you write 'var name = "something"' in the middle of your script, the declaration of the var 'name' will be moved to the top.

But there's an important thing you should now. Only the declaration is moved to the top and not the assignment. The declaration is 'var name'. And the assignment is '= "something'. Look at the examples to see how this works.

 ```javascript
 
// Regular example
var name1 = 'webDev Tips';

console.log(name1); // -> webDev Tips



// Example with hoisting
name2 = 'webDev Tips';

console.log(name2); // -> webDev Tips

var name2;



// Example with initialization at the bottom
console.log(name3) // -> undefined

var name3 = 'webDev Tips';



// Example with 'let'
name4 = 'webDev Tips';

console.log(name4); // -> Uncaught ReferenceError

let name4;



// Example with 'const'
console.log(name5); // -> Uncaught ReferenceError

const name5 = 'webDev Tips';

 ```
We have three examples. The first one is how we usually write something. We declare and assign a var and if we use a console log we'll be able to see it's value. On the second example we mix up stuff a bit. We have the assignment first, then the console log and then the declaration. Still, everything works smoothly because hoisting brings that declaration to the top. On the third example the console log is above everything else. We get 'undefined' because the var has been declared due to hoisting, but we have no value.

Now, if we're using 'let' and 'const' things will act differently. Only 'var' will be hoisted. So, as you can see in the second snippet of examples, these won't work. Using 'let' and 'const', in both examples we leave the declaration at the end of the code and neither of them works. We don't event get 'undefined', we simply get a ReferenceError because 'name4' and 'name5' don't exist when they are called on those console logs.