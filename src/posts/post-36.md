---
path: "/tips/post-36"
date: "2019-08-11"
title: "Using 'EM' units to easily create responsive text"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586555665/tips/1_okhogn.jpg'
description: 'Creating responsive text with EM units in CSS'
number: 36
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588701774/tips/36-2_vvx31x.gif "Font-size EM")

Em units are a really powerful feature to help you create fully responsive layouts. An EM unit is equal to the default elements font size. So, if a 'p' element has a default font size of 16 px and you define a CSS rule for 'font-size:1.2em' , that element's font size will be equal to: 16x1.2.

 ```html
 <div class="text">
    <h1>Look how the text resizes!</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
    </p>
    
</div>
 ```

What you can do, as you'll see in this snippet, is to define a global font-size in you body - in this example it's '62.5%'. Then you'll set font sizes on all your elements using EM's.
This way, you can create a break point where you'll change the font-size of the body and change the font size of all the elements on your page using only one CSS rule! Look at the example to see this in action 🔥


 ```css
body{
    font-size:62.5%;
}

.text{
    width:500px;
    margin:0 auto;
    
}

.text h1{
    color:#31EDDE;
    font-size: 3.5em;

}
.text p{
    color: #616161;
    font-size: 1.8em;
    font-weight: 100;
    line-height: 1.8em;
}


@media only screen and (max-width:1450px){
    body{
        font-size:55%;
    }
}
 ```
This is awesome to easily scale up or down all the text on your website and create a responsive layout!