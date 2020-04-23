---
path: "/tips/post-6"
date: "2019-07-08"
title: "Creating a duotone image background with CSS blend modes"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586556787/tips/6-1_ytyawg.jpg'
description: 'Using CSS blend modes to create duotone effect on a image background'
number: 6
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586556844/tips/6-2_gpbpaq.jpg "Duotone effect")

CSS has a 'mix-blend-mode' property that will basically define how overlapping elements will blend with each other. With imagination, this allow us to do a ton of cool effects on pictures.
In this post I'll show you how to do a duotone effect as you can see on the 2nd picture, using the pseudo-elements '::after' and '::before'. -
Just look at the 'banner' class to see the basic css to create a full width 'div' with some background image and with relative positioning - we need this because of the pseudo-element that we'll use.


 ```html
<div class="parent flex-center">

    <div class="flex-center banner duotone"></div>

</div>
 ```

Then, using the 'duotone' class we define our common properties for the element's '::after' and '::before'. We set content to nothing and make sure they have the same size as our element and are placed correctly above it.  
To end this, we just need to set different background colors on each pseudo-element and set 'mix-blend-mode: multiply' on the '::before' and 'mix-blend-mode: lighten' on the '::after'.

 ```css
.flex-center{
    display:flex;
    align-items: center;
    justify-content: center;
}

.banner{
    width: 100%;
    height:500px;
    background: url('./city.jpg') center center no-repeat;
    background-size: 100%;
    position: relative;
}

.banner h1{
    color:#fff;
    z-index: 1;
    font-size: 3.5em;
    width: 72%;
}

.duotone::before, .duotone::after{
    content: '';
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left: 0;
}

.duotone::before{
    background-color: #FF6EB6;
    mix-blend-mode: multiply;
}

.duotone::after{
    background-color: #007EFF;
    mix-blend-mode: lighten;
}

 ```

 You can try this with different background colors and with different mix-blend-modes to see the amount of different effects you can create! 👍😎  
Hope you liked it guys, have a nice one
😁