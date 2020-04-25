---
path: "/tips/post-19"
date: "2019-07-23"
title: "Styling the browser scrollbar to be fully customized"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586629450/tips/19-1_t72kny.jpg'
description: 'Using CSS to customize the browser scrollbar'
number: 19
status: true
---

`youtube: https://www.youtube.com/embed/Db9nvLKyzFs`

In the last tip I showed you how you can easily change the text color and background when selecting it. To keep this vibe of being able to completely style your website to match you color pallete, I created this tip to show you how to customize the browser scrollbar.
Doing this is extremely easy but it's only compatible with webkit based browsers. Just look at the third slide to see the little CSS needed to achieve this.

 ```html
<div class="parent">
            
    <div class="text">
        <h2>Some random text</h2>
        <p>
            Lorem ipsum ...
        </p>
    </div>

    <div class="text">
        <h2>Some random text</h2>
        <p>
            Lorem ipsum ...
        </p>
    </div>

    <div class="text">
        <h2>Some random text</h2>
        <p>
            Lorem ipsum ...
        </p>
    </div>

    <div class="text">
        <h2>Some random text</h2>
        <p>
            Lorem ipsum ...
        </p>
    </div>

    <div class="text">
        <h2>Some random text</h2>
        <p>
            Lorem ipsum ...
        </p>
    </div>

</div>
 ```

We need to use 'body::-webkit-scrollbar' to style the overall scrollbar. 'body::-webkit-scrollbar-track' is used to style the track behind the scrollbar and finally 'body::-webkit-scrollbar-thumb' is where we style the scrollbar itself - the bar that goes up and down.

 ```css
.parent{
    width:85%;
    margin:0 auto;
}

.text{
    margin-top:100px;
}

body::-webkit-scrollbar {
    width: 1em;
}
 
body::-webkit-scrollbar-track {
    background: #f7f7f7;
}
 
body::-webkit-scrollbar-thumb {
  background-color: #8225E2;
  border-radius: 10px;
}

 ```  
  Hope you liked it guys! 😄👊 