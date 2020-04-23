---
path: "/tips/post-122"
date: "2020-01-10"
title: "How to make long words break in specific places with HTML"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587590515/tips/122-1_bdiefk.png'
description: 'Breaking long words where you want with some HTML'
number: 122
status: true
---

`youtube: https://www.youtube.com/embed/xKzGG9cEd84`

Hello guys! 🤓  
Today we'll be looking at a really cool HTML only solution for us to control exactly where a word should break. 

Sometimes, on different screens, text will break on different points that we don't want and that can negatively impact the design on the readability of some words. Using the 'wbr' tag (Word Break Opportunity) we are able to control on a word should break when the width is not enough to fit it completely.

 ```html

<p>
    In ReactJS, a class component has some lifecycle methods such as: 
    <strong>component<wbr>Did<wbr>Mount</strong>,
    <strong>should<wbr>Component<wbr>Update</strong>,
    <strong>component<wbr>Did<wbr>Update</strong>, and so on...
</p>

 ```

This is awesome because it's really super simple to use. Just take a look at the example. We basically just need to put a '<wbr>' wherever we want the word to break.


After doing this, we can start resizing our window to see the text getting resized while those long words only break on the spots were we included the tag.  
Hope you found this small tip useful. Have a great Friday! 😁🔥🎉