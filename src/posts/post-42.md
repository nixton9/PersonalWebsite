---
path: "/tips/post-42"
date: "2019-08-19"
title: "Creating a cool image zoom effect on hover"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586813018/tips/42-1_tpkgxz.png'
description: 'Using CSS to create a image zoom effect on hover'
number: 42
status: true
---

`youtube: https://www.youtube.com/embed/hqQPij6EwPQ`

Today i thought about showing you how to create a cool zoom effect in an image on hover. This is always handy to create more dynamic on your websites! -
To do this, we need to have a div wrapping our image element. This will allow us to create the zoom effect without the image simply getting bigger.

 ```html
<div class="image-wrapper">
    <img src="./img.jpg" class="image-zoom" alt="Forest" />
</div>
 ```

In our CSS we need to set a specific height and width for our wrapper div and 'overflow: hidden' as well. Then, on our image element, we need to specify a transition. This will create a smooth transition and not just a simple bumpy effect.


 ```css
.image-wrapper{
    width:557px;
    height: 842px;
    overflow:hidden;
}

.image-zoom{
    height:100%;
    transition:transform 200ms linear;
}

.image-zoom:hover{
    transform: scale(1.15);
}
 ```

Finally, we need to apply some CSS when hovering our image: we'll apply a 'transform: scale(1.15). This will scale our image x1.15. If we did not have a wrapper div with hidden overflow, the image would simply become larger.