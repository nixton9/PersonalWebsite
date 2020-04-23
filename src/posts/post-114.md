---
path: "/tips/post-114"
date: "2019-12-23"
title: "Understanding pointer events in CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587499472/tips/114-1_ofs1jh.png'
description: 'How does pointer events work in CSS'
number: 114
status: true
---

`youtube: https://www.youtube.com/embed/jgha0Idy2Jk`

Hey guys! Today we'll be looking at the CSS 'pointer-events' property and its usage. Basically this property will define how a specific element should react to mouse events.

This property can have different values, but most of them are related to SVG elements so here we'll only discuss the values 'auto', 'none' and 'inherit'.

 ```html
<div class="grid-container">
                
    <div class="grid-item">
        <h4>Regular Button</h4>
        <button>Click me</button>
    </div>

    <div class="grid-item">
        <h4>Button with no Pointer Events</h4>
        <button class="no-pointer-events">Click me</button>
    </div>

</div>


<div class="grid-container">
    
    <div class="grid-item">
        <h4>Element overlap</h4>
        <div class="text">Lorem ipsum ...</div>
        <div class="overlaying-box"></div>
    </div>

    <div class="grid-item">
        <h4>Element overlap with no Pointer Events</h4>
        <div class="text">Lorem ipsum ...</div>
        <div class="overlaying-box no-pointer-events"></div>
    </div>

</div>
 ```

Using 'pointer-events: auto' on an element will be the same as not setting any value at all, the element will just register all mouse events on it as it happens by default. With 'inherit' the element will have the same 'pointer-events' as its parent element. Finally, with 'none' things will behave differently. Look at the video example to understand how this works.

If we apply 'pointer-events: none' on a button, nothing will happen when you click that button. The element simply won't register any click on it.
If we have one element on top of another element, by default, all clicks will be registered on the element that's on top. But if that element has 'pointer-events: none' then all clicks will just pass through that element and will be registered on the element that's below.

 ```css
.grid-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    width: 90%;
    margin: 0 auto;
}

.grid-item{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 300px;
    position: relative;
}

.no-pointer-events{
    pointer-events: none;
}

.text{
    background: #F5F5F5;
    padding: 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #424242;
}

.overlaying-box{
    position: absolute;
    bottom: 30px;
    left: 0;
    background: #F91890;
    width: 400px;
    height: 140px;
    opacity: .7;
}

::selection{
    background-color: #007EFF;
    color:#fff;
}

h4{
    margin: 0;
    color: #007EFF;
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 20px;
}
 ```

And this is exactly what we see on the example: if we have 'pointer-events: none' on the element that's on top, we are able to click through the element and select the text of the element that sits below.