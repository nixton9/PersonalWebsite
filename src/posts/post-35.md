---
path: "/tips/post-35"
date: "2019-08-10"
title: "Improving CSS performance with these simple tips"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586810212/tips/35-1_tx2lqh.png'
description: 'Some simple tips to help you improve CSS performance'
number: 35
status: true
---

For this post I thought of showing you some simple tips that can improve a website performance - especially in terms of CSS. Here we go:


![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586810289/tips/35CSS_puz1db.png "CSS tips")


Minifying CSS: the most obvious one! Minifying your code will produce a lighter CSS file thus helping improve the overall loading speed of your website. To do this easily, you can use online minifying tools where you just paste your code and it gives us the same code but minified.

Avoid importing other CSS files: instead of using '@import' in your CSS to import other stylesheets, just add other 'link' tags referencing your files. Performance wise this is a better choice.

Use progressive rendering: this is a famous technique where you'll load your files only when the user needs them instead of loading a single big file that will decrease your page loading speed.

Avoid huge complex selectors: CSS reads selectors from right to left. So, if you have an enormous selector like 'body .container ul li a' it will look for an 'a' inside an 'li' inside an 'ul' inside a '.container' inside the 'body'. If you can just use 'li a' as a selector you will avoid this huge look up.

Hope this helps you step up your CSS game! In the future I will post some more basic CSS performance tips 👍