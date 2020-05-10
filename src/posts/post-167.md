---
path: "/tips/post-167"
date: "2020-04-13"
title: "Getting the current scroll position with a custom Hook in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588363030/tips/167-1_feogoi.png'
description: 'How to use custom Hooks in React'
number: 167
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1589127998/tips/167-2_dakdzf.gif "React custom hook")

Hey guys, how are you? 😁

Have you ever used custom hooks in React?
So, on previous tips, I showed you what React hooks are and some of the hooks that we can use. The cook thing is that we can also create our own custom hooks!

And why would we want to do this? Imagine you have a piece of functionality that you are using on different components across your React application. You can create a custom hook, put that functionality there and then just re-use that hook wherever you need it!

To exemplify this, I'm creating a custom hook that will return the current scroll position on the browser window.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588363030/tips/167-3_rqyumo.png "React custom hook")

To start we create a file for this hook. All React hooks start with 'use...' so we should follow this practice and name our hook by following this - useCurrentScrollPosition.
In here, we'll import the 'useState' and 'useEffect' hooks (check previous tips to see what these hooks are for).

Then, we'll basically just create an event listener that will be triggered on 'scroll' and will store the current scroll position. Finally, we need to return this value from this hook.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588363030/tips/167-4_opzgfz.png "React custom hook")

Now we just need to go to whatever component where we want to use this hook, import it and call it. And it's done! We have created our own custom Hook 😁

How about you? Do you use custom Hooks on your React projects? 🤔🤘