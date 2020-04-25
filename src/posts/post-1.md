---
path: "/tips/post-1"
date: "2019-07-03"
title: "How to center absolutely positioned element inside its parent"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586554163/tips/1_ddwaqq.jpg'
description: 'Centering absolutely positioned elements inside their parents with HTML and CSS'
number: 1
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586554360/tips/2_ntf6j7.jpg "Centered element")

Centering horizontally and vertically an element with absolute positioning is one of those things that seems simple but sometimes gets tricky. Besides that, it's something that we need to do very often for most of the layouts we implement.

 ```html
 <div class="parent">

     <div class="box centered">I'm completely centered!</div>
     
 </div>
 ```

Here I show you two methods to achieve this. The first one is for cases where your element has a fixed width and the second one is for cases where you don't specify the width of your element.
To really understand the CSS that is doing the 'magic here' take a look at the 'centered' class in both methods


 ```css
.parent{
    width:100vw;
    height:100vh;
    position: relative;
}

.centered{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
}

.box{
    width: 250px;
    background-color: blue;
    color: #fff;
    padding: 20px 0;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background: linear-gradient(-30deg, #4A00E0, #8E2DE2);
}
 ```

First Method:
We use 'left:0', 'right:0' and 'margin:auto' to achieve the horizontal centering.
Then, in order to achieve the vertical centering, we use 'top: 50%' making the element stay almost centered - this will only center the element according to its top boundary. To make it completely centered we need to use 'transform: translateY(-50%)' to bring the element up by half of it's height.  

Second Method:
In this method we do the same thing to achieve vertical centering. To achieve the horizontal centering, since we don't have a fixed width, we basically have to do the same thing we did to get the vertical one but with a different axis. We only specify 'left: 50%' and add another property to our transform: 'translateX(-50%)'. -
That's it! 😁😁