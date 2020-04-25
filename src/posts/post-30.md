---
path: "/tips/post-30"
date: "2019-08-05"
title: "What is state in reactJS and how to use it"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586718671/tips/30-1_ktcqop.png'
description: 'Understanding state in React and why its important'
number: 30
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586718709/tips/30-2_kmydrd.png "React state")

State in reactJS can be described in numerous ways. In a simple way, state is an object where we store the properties that control the behaviour of our component. These properties will be observed and as soon as one of them changes, our component will automatically render. This is awesome to create all kinds of features and effects.

State usually must be used within class components - in some later tips I'll explain the difference between a class component and a functional component. To initiate state you can use a constructor and place it inside it - look at the example. Then we can use 'this.state.property' to get the value of any property of state you want!


![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586718845/tips/30-3_ccvdnt.png "React state usage")

This is just a small sample of what state is and what it can do. I plan to extend this topic in further tips 👍