---
path: "/tips/post-158"
date: "2020-03-23"
title: "How to limit the number of lines in a text with CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1588229923/tips/158-1_ixicri.png'
description: 'Using the line-clamp property in CSS'
number: 158
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1588229923/tips/158-2_hi1rv4.png "Limit lines in text with CSS")

Hey guys, hope you're having a good start to the week 😀🔥

So recently a friend of mine showed me this cool CSS property that i had never used: 'line-clamp'. Basically, if used this correctly, we can control the number of lines of text we want to display on an element.

 ```html
 
<div class="container">

    <div class="box">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>

    <div class="box line-clamp">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>

</div>

 ```

Look at the example to see what I'm talking about. On the left we have a div with some text where we see all of the test. On the right, the same thing but we apply the 'line-clamp' property, and three more properties, to limit the text to only show 3 lines.

 ```css
 
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.box {
    background-color: #F5F5F5;
    width: 300px;
    padding: 25px;
    margin: 50px;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    color: #212121;
    font-size: 15px;
    line-height: 35px;
}

.line-clamp p{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

 ```

To achieve this, we give a 'line-clamp' class name to the 'p' element on the right side. Then, we apply some CSS using this class, as you can see on the CSS code. Using '-webkit-line-clamp: 3' we set this text to only show 3 lines. Obviously, we can change this number to any other number we would like. Besides numbers, we can also use 'none'.

Even though pretty simple, this is a property that can sure come as handy. Unfortunately, not all browsers support it yet.  
Hope you liked this tip and have a great Monday! 🤓♥️


