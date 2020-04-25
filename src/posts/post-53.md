---
path: "/tips/post-53"
date: "2019-09-07"
title: "Getting to know some more lifecycle methods in reactJS"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586883449/tips/53-1_qdjl64.png'
description: 'Finding some react lifecycle methods in Reactjs'
number: 53
status: true
---

So in my tip #47 I talked about what are lifecycle methods in reactJS, why they are so important and showed two of the most used methods - componentDidMount and componentDidUpdate.

On today's post I want to talk to you about two other of the most useful lifecycle methods in reactJS: componentWillUnmount and shouldComponentUpdate.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586883449/tips/53-2_gnkaky.png "React lifecycle methods")

componentWillUnmount is a method that will be called when - I'm sure you guessed it - the component is unmounting. This method is useful for doing any necessary cleanups. We should use this to remove any timers that we may have created earlier (like in the code snippet), cancel subscriptions, cancel some network requests done in other methods or to remove event listeners.

shouldComponentUpdate is super convenient to avoid any unnecessary re-renders on our components - something that happens quite often. In this lifecycle method we have access to 'nextProps' and 'nextState' meaning that we can use this to know if these properties will change when it re-renders and thus we'll be able to create some conditions and only re-render the component if we find it useful - see this in action in the code snippet.
If you simply want your component to NEVER re-render you just have to place 'return false' inside the shouldComponentUpdate method.