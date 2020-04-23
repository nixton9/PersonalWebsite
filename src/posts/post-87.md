---
path: "/tips/post-87"
date: "2019-11-06"
title: "Using React Context to avoid props drilling"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587073461/tips/87-1_l9t7pz.png'
description: 'What is React Context and why you should use it'
number: 87
status: true
---

`youtube: https://www.youtube.com/embed/9LBmzvQMpZU`

React Context is an awesome feature that allows you to have access to props on a deep nested component without having to pass those props to every component down the tree.

So what exactly does this mean? Look at the first code example. We have a simple app with three components. There's a state on the App component that stores a 'name' property. If we want to use this property in the User component we have to pass it first to the Main component and then pass it to User. This is normal in React and it's called 'prop drilling'.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587073562/tips/87-3_ujru2b.png "React Context")

The problem with this approach is that when you have the need to pass a property to a deeply nested component in a complex component tree you have to pass props through a lot of components, which can be tedious to say the least. React Context solved this problem!


![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587073563/tips/87-4_g3q6o9.png "React Context")

Looking at the second code example, we have the same app but slightly different. We first create a Context with 'createContext' and assign it to a const. Then we create a Provider component where our state will be. This will return a wrapper for any components where we'll pass our 'name' property and a function to change its value.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587073563/tips/87-5_bua4v2.png "React Context")

Now we don't have to pass any more props! When we need access that data from upper components, we just need to call a Consumer for our Context. Inside it we'll have a function that will give us an object with all the data we passed to the Context and we can use how we want.

This is an really awesome feature for React that has more value when used in slightly complex apps with a high number of components. Hope you give it a try! 