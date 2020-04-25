---
path: "/tips/post-14"
date: "2019-07-17"
title: "Creating a cool UI card with Flexbox "
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586628141/tips/14-1_vtdihc.jpg'
description: 'Using Flexbox to create a cool looking UI card'
number: 14
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586628169/tips/14-2_s5wdzo.jpg "Card with flexbox")

Implementing complex layouts with HTML and CSS is always one of the biggest challenges that we web developers face each day. With the evolution of these languages we get new features that help us tackle these challenges and one of those recent features is Flexbox. Mastering it is definitely a big plus for any web dev and here I'll try to show you how to implement a very basic but common design with it.

 ```html
<div class="parent flex-center">

    <div class="box flex-card">
        <div class="image"><img src="./user.jpg"/></div>
        <div class="text"><h2>Jennie Carlberg</h2></div>
        <div class="call"><img src="./phone.svg" /></div>
    </div>

</div>
 ```

We just need a div element with three div's inside it - one for the image, one for the name and the other for the phone icon. -
Then, in CSS we just need three lines of code - look at the 'flex-card' class - to get the layout correctly! We set 'display: flex' to use Flexbox on this element, 'align-items: center' to get all content vertically centered and finally 'justify-content: space-between'. This last property will ensure that our elements will all be placed with the same spacing in between without any extra space on the sides.
All the other CSS is just for styling purposes to get things a little bit prettier.


 ```css
.flex-center{
    display:flex;
    align-items: center;
    justify-content: center;
}


.flex-card{
    display:flex;
    align-items: center;
    justify-content: space-between;
}

.box{
    width:350px;
    padding: 10px 40px 10px 10px;
    background-color:#F5F5F5;
    border-radius: 50px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.text h2{
    color: #212121;
    font-size: 1.3em;
    letter-spacing: .01em;
}

.image img{
    width:70px;
    height:auto;
    border-radius: 50px;
}

.call img{
    width:27px;
    fill: red;
}

 ```  
See? Easily we create a cool UI card with things neatly aligned!
Hope you liked it! 😁👌