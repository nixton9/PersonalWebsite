---
path: "/tips/post-28"
date: "2019-08-02"
title: "How to create fullscreen sections with a video background"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586718167/tips/28-1_bhiqf4.png'
description: 'Creating a fullscreen video background in HTML'
number: 3
status: true
---

`youtube: https://www.youtube.com/embed/3SH87ZGkHak`

Having sections with a video background is a great way to add some dynamic to your websites! This a been a trend for a while now and I'm sure it will stay that way for now.

 ```html
<div class="container">

    <video autoplay muted loop id="background-video">
        <source src="./video.mp4" type="video/mp4">
    </video>

    <div class="text">
        <h1>This is a section with a background video!</h1>
    </div>

</div>
 ```

There are various way to add a video background but I believe this is one of the easiest methods. Just create a container (this will be your section) that will fit the whole screen. Inside this container we'll have a video element with our chosen video. We'll also place inside this container any other content we want on top of the video.

 ```css
.container{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.container::after{
    content: '';
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color:rgba(0,0,0,.4);
}

.text{
    position: absolute;
    top:50%;
    left:0;
    right:0;
    transform: translateY(-50%);
    text-align: center;
    color: #fff;
    z-index: 1;
}
 ```

Finally, the CSS is pretty straightforward! It's just styling our container to fit the page, creating an overlay to place between the video and the content, and then we have some CSS to place our content fully centered inside our container.  
Do you like seeing video backgrounds on a website ?