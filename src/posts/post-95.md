---
path: "/tips/post-95"
date: "2019-11-20"
title: "Understanding the main types of 'pposition' in CSS"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587242549/tips/95-1_qfaxi1.png'
description: 'How does position work in CSS'
number: 95
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587242549/tips/95-2_sl2bsa.png "CSS position")

The 'position' property plays a big role in CSS. It defines how a element should be positioned according to the layout of the page.

Take a look at the example and the code. In all examples we have a wrapper that will act as our 'window' and the pink div where we'll mess with the position property. Let's see one by one.

 ```html
 
<div class="wrapper">
    <div class="box static"><h1>Static Positioning</h1></div>
</div>

<div class="wrapper">
    <div class="box relative"><h1>Relative Positioning</h1></div>
</div>

<div class="wrapper">
    <div class="box absolute"><h1>Absolute Positioning</h1></div>
</div>

<div class="wrapper">
    <div class="box fixed"><h1>Fixed Positioning</h1></div>
</div>

 ```

On the first one we have position 'static', the default value for this property. This means that the element will positioned where it should be according to the flow of the page and it won't allow you to change it's placement with the 'top, bottom, left, right' properties.

Next we have position 'relative'. This is pretty similar to 'static'. The element will still be positioned where it should regarding the natural flow of the page and it's contents. But with this type of position you can change the placement of the element with the 'top, bottom, left, right' properties.

 ```css
 
.wrapper{
    width:400px;
    height: 600px;
    margin: 0 35px;
    padding: 10px;
    border-radius: 4px;
    background-color: #FAFAFA;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.box{
    width:300px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(120deg, #F100AE, #FF2A78);
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.static {
    position: static;
}
.relative {
    position: relative;
    top:10px;
    left:15px;
}
.absolute {
    position: absolute;
    top:50px;
}
.fixed {
    position: fixed;
    top:20px;
    right:30px;
}

 ```

 With position 'absolute' things start changing. This will remove the element from it's regular place within the page flow and it will place it accordingly to the first parent element that has position 'relative'. If none of the element's parents have position 'relative', it will be placed accordingly to the page's body. We can also use the 'top, bottom, left, right' properties to then place this element. On the example the element has no parents with relative positioning so it will be placed at 50px from the top of the page.

Finally we have 'fixed' positioning. This is similar to 'absolute' but the element will always be placed accordingly to the page and not any of it's parents. With this position the element will always stay fixed on the page, without any consideration for other elements, and even when you scroll it will stay in the same place on the window. You can use the 'top, bottom, left, right' properties to place the element.