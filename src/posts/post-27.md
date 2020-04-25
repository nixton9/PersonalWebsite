---
path: "/tips/post-27"
date: "2019-08-01"
title: "How to add a little bit of style to your console logs "
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586717871/tips/27-1_wxwwve.png'
description: 'Styling your console logs in Javascript'
number: 27
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586717948/tips/27-2_esbqao.png "Stylish console logs")

Did you know you can apply some basic styling to your console logs ? You can change text color, background color, font size and some other basic properties. There is more than one method to achieve this, but in this tip we'll cover how to this using good ol' CSS.

You basically just need two pass two arguments to the console log function - the first will be string we want to log (put '%c' in the beginning of the string) and the second will be the CSS we want to apply. -
Alternatively, you can also style different parts of the same string by doing as the third console log in the example.

 ```javascript
console.log('-')

console.log("%cThis is a collorful console log", "color: #45FCE4")

console.log("%cThis is a console log with some background", "background-color: #8125E2; color:#FFF")

console.log("%cThis log will different %c Than this one", "color:#8125E2", "color:#45FCE4;font-size:24px")
 ```

Hope this helps you step up your console log game 😎🔥 Have a nice one guys 😁