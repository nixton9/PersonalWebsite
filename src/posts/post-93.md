---
path: "/tips/post-93"
date: "2019-10-16"
title: "Using the useEffect hook in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587146652/tips/93-1_kv9tdv.png'
description: 'How to use the useEffect hook in React'
number: 93
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588788709/tips/93-2_tkeo2g.gif "React useEffect hook")

React Hooks are awesome! I already talked briefly about them and explained the 'useState' one on my tip 57. They allow you to use some functionalities on Functional Components that otherwise would only be possible to use on a Class Component.

So today we'll be looking at the useEffect hook. What this Hook does is similar to what the 'componentDidMount' and 'shouldComponentUpdate' lifecycle methods do. Since lifecycle methods can only be used in Class Components, this Hook allows you to do something alike on a Functional Component.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587146673/tips/93-3_x9ecwc.png "React useEffect hook")

Look at the code example. We have a simple React app that stores a 'val' using state. We then have a button that when clicked will increment our 'val'. Everytime we click that button we will be updating state and that will make our component re-render.
We'll be using 'useEffect' to create a browser alert to display the current 'val' when the component re-renders. -
The 'useEffect' hook expects two parameters. The first one is a function to be executed. The second one is an array where you pass the dependencies for this Hook. What this means is that if you pass a variable inside this array and this variable changes, then the useEffect will run. In this example I passed in 'val'. So, everytime we click the button, 'val' will change it's value thus triggering the useEffect to run again.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587146674/tips/93-4_w0opnh.png "React useEffect hook")

Finally, on the last slide there's an example of a useEffect with the dependencies array empty. This will make the useEffect hook to run only once, when the component mounts. Using 'useEffect' this way is the same as using the 'componentDidMount'' on a Class Component.