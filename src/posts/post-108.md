---
path: "/tips/post-108"
date: "2019-12-13"
title: "Using the useRef hook in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587329633/tips/108-1_h2wupp.png'
description: 'How does the useRef hook work in React'
number: 108
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588789721/tips/108-2_rihdfe.gif "React useRef")

Hey guys! Today we'll be looking at another reactJS tip: using the useRef hook! On my tips [#93](/tips/post-93) and [#57](/tips/post-57) I've already discussed what are Hooks and showed you some of them, so if you don't know what these are I suggest you take a look at these tips first 🤓

This useRef hook is used to create a ref. A ref is a reference that we can stick on an element thus making it easier for us to control that element, get some value from it, etc. For today's tip we'll use a ref on an input and then we'll programmatically set focus on that input, by only using this ref. Let's see how to do this!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587329633/tips/108-3_com0do.png "React useRef")

We start by creating a const 'inputEl' that will use 'useRef' with an initial value of null. Then, on our input, we just need to put 'ref={inputEl}' and we'll automatically have a reference for this input. -
Next, we'll create a function - 'focusInput' - and create a button that will execute this function on click. On this function we just need to declare 'inputEl.current.focus()' to set focus on our input. Using 'inputEl.current' we have direct access to the element itself and we can do a lot of stuff with it.

For example, if we wanted to get the value from this input using the ref, we would just need to do: 'const value = input.current.value'. Super simple, right?  
Hope this made sense to you and let me know your thoughts! Have a great Friday 😁🔥