---
path: "/tips/post-68"
date: "2019-10-04"
title: "What is a High-Order Component in reactJS and how to create one"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586974879/tips/68-1_zdjxbg.png'
description: 'Understanding what are High-order Components in React and creating one'
number: 68
status: true
---

High-Order Components are often referenced when talking about react. At first glance, especially for beginners, they can seem a bit "scary" but once you understand what they actually do, they become really simple. Basically they are a function that receives a component as a argument and will return another component. Let's see a practical example to better understand how they can be valuable.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586974880/tips/68-2_oi8oz2.png "React High Order component")

In the first code snippet we can see three components that form a simple app. We have a component that has messages, a component that has posts and the 'App' component that displays the two previous components and passes the desired data to them. This is all pretty standard and works but we have two components that are doing super similar things: see if it has data, show a loading while it has no data and then display the data. Let's create a really simple High-Order Component to do the thing that this components share: the loading.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586974880/tips/68-3_jscfes.png "React High Order component")

Look now at the second code snippet to see how we can create this function: it will receive a Component, that will receive some props with data. In the return statement we'll see if we have data. If we do have it, we'll show our component with that data, otherwise we'll show a loading.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586974880/tips/68-4_yka8sz.png "React High Order component")

Now, on the third code snippet, we just need to refactor our 'Posts' and 'Messages' components and remove the loading functionality from them. Then on the 'App' component we just use our new High-Order Component and pass to it our components.

And it's all! We just created a really simple High-Order Component to avoid having the same functionality on two separate components. Know that this is a really simple example of the value a High-Order Component can provide on a reactJS app, with you can do much much more with them.