---
path: '/tips/post-269'
date: '2021-03-03'
title: 'How to debug elements that close when you right click'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1614787462/tips/269-1_lmrwqo.png'
description: 'Debugging stubborn elements like Tooltips and drop-downs'
number: 269
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1614787653/tips/269-2_ort6d0.gif 'Debugging')

What's up guys? Hiw are you doing? 🤗✌️

Tell me, have you ever had this problem where you're 'Inspecting Element' and you want to select an element like a drop-down item or a tooltip that just closes or disappeared when you try to inspect it? Check this post's video if you don't know what I'm talking about.

This happens to me in a lot of scenarios and it just triggers me so much! Gladly I found this awesome tip on Twitter the other day, that helps solving this exact issue.

Basically you just need to use a debugger inside a setTimeout. So we can create a setTimeout to fire the 'debugger' in 3000ms (3 seconds) and now we can reload the page and we have three seconds to click on the element that opens the element that we want to inspect.

```javascript
setTimeout(() => {
  debugger
}, 3000)
```

Once we click on it we just need to wait for the debugger to run, the page will freeze and we can easily click anywhere we want with the DevTools and go on with our debugging!

Have you ever tried this tip? Or do you know any other method to overcome this problem? Let us know in the comments 👇😁
