---
path: "/tips/post-73"
date: "2019-10-12"
title: "Getting familiar with the spread operator in JavaScript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586976140/tips/73-1_apmp95.png'
description: 'Understanding the spread operator in Javascript'
number: 73
status: true
---

How's your Saturday going guys?
Today we'll look into the spread operator (also called the '...' operator) in JavaScript, a handy feature that came with ES6 that helps easing your development. -
So what is the spread operator? Basically the spread operator has more than one functionality. It can help you copy an array or copy an object by expanding them. It can also expand an array as arguments when passing it to a function.

 ```javascript
const frontendLangs = ['JS', 'HTML', 'CSS']
const backendLangs = ['JAVA', 'PHP', 'PYTHON']
let langs = [...frontendLangs, ...frontendLangs]
console.log(langs) 
// -> ["JS", "HTML", "CSS", "JS", "HTML", "CSS"]



let userInfo = { name: 'Dylan Fields', age: 26, country: 'USA'}
let userContact = { phone: '(997)-664-2410', email: 'd.fields@gmail.com'}
let user = { type: 1, ...userInfo, ...userContact}
console.log(user) 
// -> {type: 1, name: "Dylan Fields", age: 26, country: "USA", phone: "(997)-664-2410", email: "d.fields@gmail.com"}



const someFunction = (...args) => {
    console.log(args)
    // Do stuff here
}

someFunction(userInfo, frontendLangs, 4)
// -> [{…}, Array(3), 4]
 ```

In the first example of the code snippet, we're using the spread operator to create an array made up of two other arrays. You just need to declare 'var newArray = [...oldArray1, ...oldArray2]' -
In the second example, we're doing something similar to create a new object using two other objects and a static property. To do this, like with the arrays, we just need to declare: 'var newObj = {...oldObj1, ...oldObj2}'

Finally, on the third example we use the spread operator to expand whatever arguments we pass that function. We could pass how many arguments we wanted and we would automatically have access to it by using the '...arg'. -
This feature is definitely awesome and can really help you, so if you didn't used it yet I suggest you give it a try!