---
path: '/tips/post-280'
date: '2021-04-12'
title: 'Why you should use React DevTools'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1618239749/tips/280-1_vmhpog.png'
description: 'Using React DevTools'
number: 280
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1618239964/tips/280-2_bh6ji9.gif 'React Devtools')

What's up guys, how are you? 😀✌

Today we'll be taking a look at React DevTools and why you should use them if you work with React!

React DevTools can be installed as a standalone app or as an extension on Chrome & Firefox. They are super handy and have a lot of features that the the regular browser DevTools simply don't have.

So on this simple example we just have three major components: a Parent Component and two Child Components. The Parent Component is passing some props to both Child Components. After installing the React DevTools, you'll have a 'Components' tab and a 'Profiler' tab on the browser DevTools.

On the 'Components' tab we are seeing our React Component tree. You can hover each Component on the tree and it will be highlighted on your app. Clicking on each Component on this tree will show you the current state and props of this Component. You can change these values to whatever you want, and your app will reflect these changes.

A super handy feature that React DevTools is the Component highlighting when rendering. This is can be of use when you want to find out why some Components are re-rendering so much. Just go to the 'Profiler' tab, click on the Settings icon, click on the 'General tab' and select 'Highlight updated when components render'. Now, you. can use your app and every time a Component is re-rendering, it will have a green border.

On this example, you can see that after turning on this option, every time I write something on the input, all the Components have the green border. This means that all Components are re-rendering when the input is changed.

This is just some of the basic features that React DevTools give you. I'll make another tip showing some more advanced features on this awesome tool.

How about you? Do you usually use React DevTools when working with React? 🤔🤔
