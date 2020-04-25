---
path: "/tips/post-18"
date: "2019-07-21"
title: "Changing the background and the color of the text when selecting it"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586629142/tips/18-1_zxpaoy.jpg'
description: 'Setting the color and background of text when selected with HTML and CSS'
number: 18
status: true
---

`youtube: https://www.youtube.com/embed/H3FF6HCDrLU`

Nowadays it's pretty common to go a website , try to select some text on it, and notice how the background color of the selected text matches the website color palette.  
This is quite easy to do and you only need some CSS for it. Check the last image to see how this is done!

 ```html
<div class="text">
    <h2>Select some text to see the color!</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
        culpa qui officia deserunt mollit anim id est laborum.
    </p>
</div>
 ```

We just need to use the '::selection' selector. Any CSS properties inside this selector will be applied to any element that it's being selected.

 ```css
.text{
    width:60%;
    margin:0 auto;
}

.text h2{
    color: #45FCE4;
}

.text p{
    color: #424242;
    line-height: 29px;
}

::selection {  
    background: #8125E2;
    color:#fff;
}

::-moz-selection { 
    background: #8125E2;
    color:#fff;
}

::-webkit-selection { 
    background: #8125E2;
    color:#fff; 
}

 ```  
It's that easy! Pretty cool, right ?