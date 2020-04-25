---
path: "/tips/post-37"
date: "2019-08-13"
title: "The difference between Class Components and Functional Components in ReactJS"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586811105/tips/37-1_sfn0nj.png'
description: 'Understanding the difference between Class Components and Functional Components in React'
number: 37
status: true
---

In this tip we'll see two different methods to create a component when using react: Class Components and Functional Components. Look at the snippets to see how to declare each one of them.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586811105/tips/37-2_wbejbl.png "Class component")

Main differences between them:
For starters, the syntax is a bit different for both of them. A functional component is a plain JavaScript function that will accept props as an argument and will return a react element. A class component is usually bigger, we need to extend React.Component and we need at least a 'render' method where we will return a react element.
In a class component we can use state (see the previous tip about reactJS state) while in functional component we can't use it - that's why they are also called stateless components.
In a class component we can also use lifecycle methods - componentDidMount, componentDidUpdate, componentWillUnmount, etc - and in a functional component we can't also use this. Lifecycle methods will be discussed and explained in future tips.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586811105/tips/37-3_vle919.png "Functional component")

So far we've only seen advantages on using class components so why should we use functional components at all?
In terms of performance, the React experts say that functional components are way better and we should use them everytime we can. They also are easier to read and require less code so for simpler components they should be the way to go!

Lastly, even though I said we can't use state or lifecycle methods on functional components, the truth is that since ReactJs 16.8 came out we now have something called Hooks. These allow us to use those features inside our functional components in a different way so keep that in mind!

Hope you've liked this basic explanation of the difference between these two methods to create react components