---
path: "/tips/post-74"
date: "2019-10-14"
title: "Understanding the CSS Box Model"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586976322/tips/74-1_rciwhy.png'
description: 'What does the Css box model represent'
number: 74
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586976323/tips/74-2_lvlzs1.png "CSS box model")

Hey guys, today I want to talk a little bit about the CSS Box Model. This is basically a concept that will define how a element will look and behave on a webpage.

You can view the actual Box Model of an element by using the inspector of your browser. By doing so you will see the same :box' we can see on the example. So what does this 'box' actually tells us? It tells us the size, the padding, the border and the margin of our element.

 ```html
 
     <div class="box"></div>

 ```

In this example I'm creating a div element with 250px of width and height, a padding of 20px, a 5px border and a 25px margin.
By looking at our Box Model of this element, we can see the size of the content of the element in the blue rectangle, the padding on the green rectangle, the border on the yellow rectangle and finally the margin of the element on the orange rectangle.

 ```css
.box{
    width:250px;
    height:250px;
    padding:20px;
    border: 5px solid black;
    margin: 25px;
}
 ```

This is super handy tool to sometimes debug why a specific element has a different size than what it should have, why an element is not centered when it should be, plus a lot of other cases. So, if you haven't by now, try to get familiar with it, it's super easy!