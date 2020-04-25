---
path: "/tips/post-48"
date: "2019-08-30"
title: "The difference between 'let' and 'var' in JavaScript "
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586881147/tips/48-1_j0iqo2.png'
description: 'Understanding the difference between "let" and "var" in Javascript'
number: 48
status: true
---

Since ES6 came out that we now have more than one way to declare our variables - we had the addition of the 'let' keyword. So why should we use this instead of 'var'?

First of all, know that they are pretty similar in the way they behave, almost the same. The main difference is the scope of each one. Everytime we declare a variable using 'var' this will be global, meaning that even if we declare it inside a block like an 'if' or an 'for' we can still access it elsewhere. It will also be added to the window object.
'Let' is block scoped, meaning that we can only access it inside the block where it was declared and it's never added to the window object.

 ```javascript

for(var i=0; i<5; i++){
    console.log(i)
}
console.log('Final Result of i: '+i)



for(let j=0; j<5; j++){
    console.log(j)
}
console.log('Final Result of j: '+j)

 ```

In the example we create two for loops - one using 'var' for our counter and the other using 'let'. Easily we can see that when using 'var' we can still see the value of our counter outside of the for loop. When using 'let', if we try to access the counter value outside of the for loop we'll get an error since that variable will only be accessible inside the loop.  
How about you? Have you ever used 'let' before or do you prefer always using 'var'? 🤔
