---
path: "/tips/post-47"
date: "2019-08-28"
title: "What are lifecycle methods in reactJS with some examples"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586880904/tips/47-1_amtfp8.png'
description: 'Lifecycle methods in React. What are they and a brief look at two examples.'
number: 47
status: true
---

React components have lifecycle methods. Basically they are methods that will be automatically executed in certain periods of the component life span. 'Render()' is a lifecycle method for example.
So what's the advantage of these methods and why should we use them? Because they easily give you a way to execute some instructions on a specific moment. For example, we may want do something as soon as our component is 'ready'. Or we may want to do something else everytime the component is updating.

There are many lifecycle methods but in this tip i want to talk about two - 'componentDidMount' and 'componentDidUpdate' - some of the most used lifecycle methods. In later tips I'll discuss some more methods.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586880903/tips/47-2_qnkszo.png "React lifecycle methods")

'componentDidMount' is a method that will be executed as soon as the components mounts, or when the component is 'ready'. This is usually where API calls are made and here, not like the 'render' method, you can use setState to update the state of your component.

'componentDidUpdate' is executed when the component has finished updating and here you can use two arguments - prevProps and prevState - that will let you access the props and state that the component had before updating. This is extremely useful because, just like in the code snippet, you can compare your previous props or state with the current ones, see if something has changed and do something based on that. 