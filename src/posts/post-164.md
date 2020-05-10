---
path: "/tips/post-164"
date: "2020-04-06"
title: "Understanding the tabindex attribute in HTML"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362341/tips/164-1_md0zof.png'
description: 'What is the tabindex attribute for in HTML'
number: 164
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1589127918/tips/164-2_ebvmao.gif "HTML tabindex")


How are you guys? Have you been working from home? 🤔  
Today we'll be taking a look at the 'tabindex' HTML attribute. But before jumping to explain the attribute, a piece of context.

Basically, some elements like inputs, buttons, textareas, selects, etc, are by default selectable when we use the 'tab' key on a webpage. So, when we press tab we will navigate through all these elements thus making the page more accessible for keyboard use.

By default, the order of this tab navigation will be the same order of the elements on the HTML document. So if we have an input and then a button, when you press tab once you'll select the input first and if you press tab once again, you'll select the button.


 ```html

<div class="container">
            
    <input type="text" placeholder="Write your name" tabindex="3"/>

    <button tabindex="2">Submit</button>

    <input type="email" placeholder="Write you email" tabindex="4"/>

    <button class="pink" tabindex="1">Send</button>

</div>

 ```

This is where the 'tabindex' attribute comes to play. We can use this attribute to set the 'tab order' of our elements.

Take a look at the example. I added a strong shadow on the element that is on 'focus' so we can easily understand what element is selected. On the HTML i used different values on the 'tabindex' of each element and it changed the order in which these elements are selected when pressing tab.

We can also use 'tabindex= -1' to make that element non selectable and 'tabindex= 0' to keep the default order!

```css

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
}

input {
    width: 250px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: #EEEEEE;
    text-indent: 17px;
    font-size: 12px;
    margin: 30px 0;
}

button {
    color: #fff;
    background-color: #007EFF;
    width: 150px;
    height: 50px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    margin: 30px 0;
}

button.pink {
    background-color: #F91890;
}

input:focus, button:focus {
    outline: none;
    transition: all .3s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

 ```

Hope you liked this tip and let me know if you have any doubts 😁
