---
path: "/tips/post-84"
date: "2019-11-01"
title: "Creating resizable elements with some basic CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587072643/tips/84-1_yp47xx.png'
description: 'Using CSS to create resizable elements'
number: 84
status: true
---

`youtube: https://www.youtube.com/embed/ZxE3ZPId0hQ`

Creating resizable HTML elements is super easy! CSS has a 'resize' property that you can use to allow an element to be resizable.

Looking at the code snippet, we have two 'divs' with some content inside. They both share the 'resizable' class and then one has a 'horizontal' class and the other has 'vertical'. We use this different classes to achieve different types of resizing.

 ```html
<div class="resizable horizontal">
    <h1>Resize me horizontally!</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
    </p>
</div>

<div class="resizable vertical">
    <h1>Resize me vertically!</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
    </p>
</div>
 ```

On the CSS, we first have some basic styling on the 'resizable' class. Then, on the 'horizontal' class, we have 'resize: horizontal' to make the element only resize horizontally and, on the 'vertical' class, we have 'resize: vertical' to only allow vertical resizing.

 ```css
.resizable{
    overflow:auto;
    width:325px;
    margin:0 50px;
    padding: 30px;
    color:#fff;
    background: linear-gradient(125deg, #4A00E0, #8E2DE2);
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.horizontal{
    resize: horizontal;
}

.vertical{
    resize: vertical;
}

.resizable h1{
    font-size: 27px;
    letter-spacing: .02em;
}

.resizable p{
    font-weight: 300;
    line-height: 28px;
}
 ```

This 'resize' property also has other values that can be used. There's a 'both' value that will allow the element to be able to resize horizontally and vertically.
These three values 'horizontal, vertical, both' are the most used ones in most cases.
