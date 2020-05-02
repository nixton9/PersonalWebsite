---
path: "/tips/post-171"
date: "2020-04-22"
title: "Using Fragments in React to wrap elements"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588412802/tips/171-1_s4mv8g.png'
description: 'How to avoid using divs to wrap adjacent elements in React'
number: 171
status: true
---

Heyy, how are you guys? 🤓  
Have you ever used Fragments in React? 🤔 They are super simple, but pretty handy.

Basically when you're writing jsx you can't return separated elements without being wrapped in a parent element. So, imagine you have a component that returns this:   '`<h1>Title 1<h1> <h2>Title 2<h2>`'  
This will return an error - parse error: adjacent JSX elements must be wrapped in an enclosing tag.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588412803/tips/171-2_zzclfb.png "React Fragments")

The easiest and most common way to solve this is just to put a div around these two headings and that will fix it. But, in some cases, you simply can't do this or you just don't want to do this because it will add unnecessary HTML on your code. And that's why we use Fragments!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588412802/tips/171-3_kytha8.png "React Fragments")

Look at the second code example. We just need to wrap everything in a empty tag: <> </>
This is what a Fragment is and it's made to fix this!

Alternatively, and specially in older versions of React, you can use:  
`<React.Fragment></React.Fragment>`   
This will do exactly the same thing.

The best part using Fragments is that nothing of this will show up on your final code, only your elements  
Hope you guys have a nice one, take care! 😁