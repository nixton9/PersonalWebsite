---
path: "/tips/post-144"
date: "2020-02-19"
title: "Creating Soft UI (neomorphism) elements in CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588058089/tips/144-1_ri3zar.png'
description: 'How to create Soft UI - or Neomorphism - elements in CSS'
number: 144
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588058085/tips/144-2_g31t1z.png "CSS Soft UI")

Hey guys, what's up? 😁✌  
For today's tip i want to show you the basics on how to create Soft UI elements with some CSS.

Soft UI - or Neomorphism - is a design trend that has been gaining a lot of popularity for the past months and a lot of people believe that is going to be the biggest trend for UI design in 2020.


 ```html
 
<div class="container">
        
    <div class="box soft">
        <span>&#9658;</span>
    </div>

    <div class="box soft">
        <span>&#9724;</span>
    </div>

</div>



<div class="container">

    <div class="progress soft">
        <span></span>
    </div>

</div>

 ```

One of the main key points on this trend is the fact that elements (like cards and buttons) pretend to be raised from the background. They even seem to have the same 'material' as the background.

To achieve this we have to set the background color of these elements to have the same color as our background. Then, we just apply two opposite shadows on the elements, one dark and one light.

```css

.container{
    display:flex;
    align-items:center;
    justify-content: center;
    padding: 0 50px;
}

.box {
    margin:0 30px;
    width: 90px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.soft {
    border-radius: 10px;
    box-shadow: 5px 5px 11px rgba(0,0,0,.15), -5px -5px 11px rgba(255,255,255,.85);
}

.box span {
    font-size: 35px;
    color: #31EDDE;
}

.progress {
    width: 245px;
    height: 20px;
    position: relative;
}

.progress span {
    position: absolute;
    left: 0;
    top: 0;
    width: 65%;
    height: 100%;
    background-color: #31EDDE;
    border-radius: 10px;
    border: 3px solid #E3EAF0;
    box-sizing: border-box;
}

```

Now on our CSS. First, we make sure we don't set any background color on our elements, so it inherits the one from the body. Then, using our 'soft' class we set some border-radius (this help give the elements a more natural look) and finally we apply our shadows.

Using 'box-shadow' we can multiple shadows by using a comma ( , ), so we'll apply two shadows. On the first shadow we'll use a black color with .15 opacity. On the second shadow we set the opposite for the first two values, and then we use a white color with .85 opacity.

And that's it, we now have some cool Soft UI elements ! See you soon guys 😎🔥
