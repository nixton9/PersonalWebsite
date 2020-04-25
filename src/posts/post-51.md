---
path: "/tips/post-51"
date: "2019-09-04"
title: "How to create editable HTML elements "
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586883086/tips/51-1_mu2ivj.png'
description: 'Making an HTML element editable'
number: 51
status: true
---

`youtube: https://www.youtube.com/embed/m3SgAEYrhHc`

Did you know that HTML5 allows us to create elements with editable content that the user can then edit on its own? Well, that's possible and it's super easy!

 ```html
<div class="wrapper">

    <h1>List Items with editable content</h1>
    <ul>
        <li>This a regular list item</li>
        <li>This a regular list item</li>
        <li contenteditable="true">This an editable list item</li>
        <li contenteditable="true">This an editable list item</li>
    </ul>


    <p contenteditable="true">This a P</p>
    <h2 contenteditable="true">This a P</h2>
    <div contenteditable="true">This a P</div>
    <span contenteditable="true">This a P</span>

</div>
 ```
With HTML we can use the attribute 'contenteditable', set it to 'true' and the elements with this attribute become editable.
In this example we have an 'ul' with some 'li' inside it. Two of those 'li' have 'contenteditable="true"' and as you can see in the video, the user can then write whatever he wants on these elements.

 ```css
h1{
    margin-bottom: 40px;
    color:#8125E2;
}

ul{
    list-style-type: none;
    padding:0;
}

li{
    margin-top: 25px;
    color: #424242;
    font-size: 1.2em;
    text-align: center;
}

li, li:hover{
    outline: none;
    box-shadow: none;
    border:none;
}
 ```

Even though I'm using this on an 'li' you can also use this on other elements such as 'div', 'h1', 'span', etc.