---
path: "/tips/post-26"
date: "2019-07-31"
title: "The almighty 'margin: 0 auto' hack"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586717506/tips/26-1_rc6zik.png'
description: 'Using the almighty "margin: 0 auto" hack to center almost everything horizontally'
number: 26
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586717657/tips/26-final_hfbwsp.png "Centered content")

Today I'm posting probably the simplest tip I have ever posted here but this is without doubt, of all my tips, the one I use the most!
Do you know when you need to center an element horizontally but it gets trickier than what it should be? We'll, just give a specific width to that element ( it can be width px or % ), apply 'margin:0 auto' and the element will be centered!

 ```html
 <body>

    <div class="box"></div>

</body>
 ```

I remember that when I learned about this my life just changed! 😂
Hope that, if you didn't know about this, it will be as helpful for you as it was to me.


 ```css
.box{
    background:url('./bg.jpg') no-repeat center center;
    background-size: cover;
    border-radius: 4px;
    width:80%;
    height:400px;
    margin:0 auto;
}
 ```

What about you? Do you use 'margin: 0 auto' a lot ? 🤔✋