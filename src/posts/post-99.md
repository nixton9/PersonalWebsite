---
path: "/tips/post-99"
date: "2019-11-27"
title: "Creating animations in React using React Spring"
languages: ['React', 'React Spring']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587243371/tips/99-1_gppiwo.png'
description: 'How to create animations in React with React Spring'
number: 99
status: true
---

`youtube: https://www.youtube.com/embed/X0btVC2PEvk`

What's up guys?
Today we'll be talking a bit about React Spring - an awesome library to help you create 'spring-physics based' animations in reactJS. If you go to their website and see some of their demos you'll be amazed by what you can create with this library!

In this example I'll just show you how to do a basic opacity animation with a toggle button to control said opacity. This is a base that you can then use to create more complex animations.

To get started we need to first install the library with npm. After this, we head on to our component and import 'useSpring' and 'animated' from react-spring. We then create a state for the toggle using 'useState'. We'll also create the props for our animated element in a const 'elementProps'. These props will use 'useSpring' and it's here that will place the properties for our animation. In this case we want 'opacity' to be 1 or 0 based on the current state of our toggle.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587243371/tips/99-3_ypvvat.png "React Spring")

Now we just need to create our element using the 'animated' from react-spring. We pass to this element our 'elementProps' with the style attribute. With just this our element will be automatically animated when the opacity changes. To control this opacity change we create a toggle button that onChange will change our state.

And this is how you can easily create a simple animation with the React Spring library. If you like it I suggest you go to their website to learn more about this awesome library and how you can create complex animations without much difficulty.