---
path: "/tips/post-127"
date: "2020-01-18"
title: "How to implement Routing on your app with React Router"
languages: ['React', 'React Router ']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587591779/tips/127-1_rmaqw7.png'
description: 'Using React Router to create navigation on your app'
number: 127
status: true
---

`youtube: https://www.youtube.com/embed/ZDPqhiOGdnU`

Heey, how is your weekend going? 😁  
Today we'll talk a bit about React Router, the easiest way to implement routing on your React apps!

By default, react apps are single page applications. This means that you won't have that normal routing with URL that we are used to see in traditional websites. So, to achieve this we'll have to use the React Router library to be able to create 'fake pages', each one with their own URL. This way, when the user navigates back and forth or types a specific URL he will see the correspondent page!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587591923/tips/127-3_zmxx7t.png "React Router")

So let's start! We need to first install the React Router library by doing 'npm install react-router-dom'. Then, we go to our main component - in this example is 'App' - and we import BrowserRouter, Switch, Router and Link from 'react-router-dom'.

Now we first need to wrap our entire application with the 'Router' component. Then, we can write all of our navigation for the pages. On every link we want to a different page we use the 'Link' component and give it a 'to' prop where we set the page to where that link should redirect.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587591924/tips/127-4_ylnsyz.png "React Router")

So, basically we'll have a Link that will redirect you to a specific path, and then we'll have a Route with the same path that will show us a specific component on that URL. And that's it! We have routing and URL based navigation on our Single Page Application 🤘🔥