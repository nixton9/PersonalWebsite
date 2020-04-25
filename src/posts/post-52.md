---
path: "/tips/post-52"
date: "2019-09-06"
title: "Creating engraved text with CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586883296/tips/52-1_xkxdpp.png'
description: 'How to create a engraving effect on text with CSS'
number: 52
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586883297/tips/52-2_a8zdy5.png "Engraved text with CSS")

CSS allows us to create a lot of cool text effects without really much effort. In this snippet I'll show you how to easily get an engraved effect on an heading element.

 ```html
 
     <h1>CSS engraved text</h1>

 ```

First just create an element where you'll want to apply the effect - in my case I used an 'h1'.
Then, in CSS we just need to give it background color and set the color to 'transparent' - this background color will determine the actual color of our text.
Finally we need to apply 'background-clip: text' and some 'text-shadow' to get the desired effect. If you want, you can mess around with the shadow values to see how that affects the final result.


 ```css
h1{
    font-weight: 800;
    font-size: 50px;
    text-transform: uppercase;
    letter-spacing: .08em;
    background-color: #8225E2;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;
}
 ```

And that's it, all done!