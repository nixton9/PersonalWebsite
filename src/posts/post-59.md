---
path: "/tips/post-59"
date: "2019-09-18"
title: "Using the HTML 'figure' element to display an image with caption"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586886247/tips/59-1_wiw2rx.png'
description: 'Displaying a image with caption by using the HTML figure element'
number: 59
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586886248/tips/59-2_y0xoxl.png "Engraved text with CSS")

What's up guys? So today I want to show how to use the HTML 'figure' and 'figcaption' elements to create a nice looking image with some caption on it. The figure element is used for containing elements like images, illustrations, videos or even code. It's usually used with a caption inside to describe said element by using the figcaption element.

 ```html
<figure>

    <img src="./1.jpg" alt="Starry Sky" />

    <figcaption>
        <div class="title">Starry Sky</div>
        <div class="author">David Billings</div>
    </figcaption>

</figure>
 ```

Let's start by creating a 'figure' tag. Inside this tag we'll have an 'img' tag, with whatever image we want, and then a 'figcaption' tag where we'll place our caption. I created two 'div' elemrnts, one for the title and one for the author. That's all for the HTML.

Now, we'll apply some CSS to get looking like the end result. We just give a 'max-width' and relative positioning to the 'figure' element. Then we'll add a 'border-radius' and a 'box-shadow' on our image just to pimp it up a little bit 🔥


 ```css
figure{
    max-width:300px;
    position:relative;
}

figure img{
    width:100%;
    border-radius: 8px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

figcaption{
    position: absolute;
    bottom:12px;
    right:12px;
    text-align: right;
    color:#fff;
    font-size: .9em;
}

figcaption .title{
    line-height:24px;
    font-weight: 300;
}
 ```

Finally we'll apply absolute positioning on the 'figcaption' so it stays on the bottom right corner of the image and change the 'font-size' and 'color' of it.

And it's done! We easily created an image displaying it's title and the name of the author using HTML's 'figure' and figcaption'!