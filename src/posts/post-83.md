---
path: "/tips/post-83"
date: "2019-10-30"
title: "What is React Memo and why you should start using it"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587072382/tips/83-1_buzeni.png'
description: 'Using React Memo to avoid unnecessary re-renders'
number: 83
status: true
---

What's up guys?
Today we'll have a nice simple reactJS tip on React Memo. This is something awesome that helps you reduce the number of unnecessary re-renders and was released with react v16.6. Let's see what's it for and how it works with a simple example.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587072382/tips/83-2_iw4ync.png "React Memo")

Look at the first code example. We have a really simple app with three components: App, Navbar and ShowCounter. The App component has a state property that stores a counter. We then have a button where we can click to increment this counter. We also pass the value of this counter to ShowCounter so we can display this value. All really simple, right?

This 'mini app' works without problems but there's something that is not very good: everytime you click on the button and update the value, all components will re-render - we can easily see this happening with the console logs I placed on each component. Since that state property is updating it makes sense that the App component and the ShowCounter component re-render because they will use this value. -
But, the Navbar component does not need to update. It doesn't care about that state property so it will just hurt the performance if that component keeps re-rendering for no reason since nothing is changing.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587072382/tips/83-3_calthr.png "React Memo")

That's where React Memo comes to save us! We just need to wrap our Navbar component in a React.memo (see the second code snippet) and this component will stop re-rendering. Only if the component had some prop that changed it would re-render, but since it doesn't has any it won't re-render at all .

Using this in some cases across big apps may really help you get a better overall performance on the app. Usually, when working on these apps we have a lot of components that keep re-rendering for no reason so this may be a big improvement.