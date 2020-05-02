---
path: "/tips/post-174"
date: "2020-04-30"
title: "Using CSS Auto Prefixers to avoid writing prefixes for every property"
languages: ['CSS', 'VSCode']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588413994/tips/174-1_jld5qm.png'
description: 'How to use Auto Prefixers for CSS properties'
number: 174
status: true
---

`youtube: https://www.youtube.com/embed/ZXTTbsxCfHw`

Yoo, what's up guys? 😎🤞  
For today's tip we'll talk about browser prefixes in CSS - also known as vendor prefixes - and how to automatically add them without explicitly writing the code for it.

These prefixes are pretty common, I'm sure you've seen them or used them, and basically they are used to ensure browser support on some properties.

We usually use them on some properties like 'transform', 'animation', flex box, and they look something like - '-webkit-transform: ...'.
The problem is that on medium to big sized projects it can become a pain in the ass to write all this stuff, so here are two solutions to automate this:

The first is a VSCode extension called 'Autoprefixer'. Check the video to see how to use it. You just write your CSS normally, then press Command + Shift + P (on Mac) or Ctrl + Shift + P (on Windows), and then click on 'Autoprefixer: run'. And this will add all the necessary prefixes!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588413994/tips/174-3_j60tfd.png "CSS Auto prefixer")

The second is an online tool that you can visit on 'autoprefixer.github.io' - check the third slide. You can just copy your CSS, paste it here, and this will return your CSS with the necessary prefixes. You can then just copy it and paste it on your file!

Hope you guys are having a great week, take care! 😁🙏