---
path: "/tips/post-151"
date: "2020-03-06"
title: "Using the native image lazy-loading in Chrome"
languages: ['HTML', 'Chrome', 'Misc']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588143047/tips/151-1_sodb3v.png'
description: 'How to do native lazy-loading in Chrome'
number: 151
status: true
---

`youtube: https://www.youtube.com/embed/4VxB17eAo-Y`

Hey guys, happy Friday! 🥳🎉  
Have you ever heard of lazy loading?
I'm sure most of you have! Lazy loading is a method were we basically only load a specific thing on a webpage when the user is getting 'near' that thing. This can be used with lots of things but it's mostly used with images.

Consider the following scenario: you have a page that's suuuuper long. At the end of that page you have an image. Normally, you will load everything on that page (including this image) as soon as the user enters the website. But what if the user never goes to the end of the page and thus will not see that image? You have just loaded that image for no reason! And the more things you load, the slower a page will be.

So, we could use lazy loading on this image. Basically we'll only load the image when the user is scrolling to get to the section where that image is. Performance and data consumption wise, this is much better!

Google introduced on Chrome native lazy loading. We just have to add an attribute to an image and it will be lazy loaded automatically! Unfortunately, at the time of this writing, this is only supported in newer versions of Chrome even though other browsers are starting to implement this.

Look at the video. We have a page with some images. As you can see on the right side, on the Network tab of the Dev Tools, images are only being loaded when we are scrolling the page and getting near them.

 ```html
 
<div class="container">

    <img loading='lazy' src='https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3793689/pexels-photo-3793689.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/1553962/pexels-photo-1553962.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3375903/pexels-photo-3375903.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/2772854/pexels-photo-2772854.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg' width='600' />
    <img loading='lazy' src='https://images.pexels.com/photos/3395817/pexels-photo-3395817.jpeg' width='600' />

</div>

 ```

To do this, we just need to insert an image as we usually do and add ' loading="lazy" ' and that's it! It's that easy.  
Hope you have a great day 😁👊