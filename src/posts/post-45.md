---
path: "/tips/post-45"
date: "2019-08-24"
title: "Using the filter property to create multiple hover effects"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586813977/tips/45-1_qeyo12.png'
description: 'Creating different hover effects in CSS with the filter property'
number: 45
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588702269/tips/45-2_h3oms6.gif "CSS Filters")

The CSS filter property is awesome! With it you can apply filters to your images, for example, where you can change the brightness, contrast, blur, opacity, saturation and a few more properties. This is pretty nifty to create cool hover effects as well 👌

 ```html
<div class="image-wrapper">
    <img src="./img.jpg" class="image-effect" alt="Mountain" />
</div>
 ```

In this snippet we'll use the filter property to change an image's blur and saturation on hover. Know that you can use this snippet the same way for all the other properties listed above.

We just need an image element and a div wrapping this image. This wrapper div will have the dimensions we want on the image and hidden overflow so that we can apply some blur to the image without some odd looking pixels around it.


 ```css
.image-wrapper{
    width:800px;
    height:534px;
    overflow: hidden;
}

.image-effect{
    width:100%;
    transition:filter 200ms linear;
}

.image-effect:hover{
    filter: blur(2px) saturate(1.7);
}
 ```

We then need to set a transition on our image and apply some CSS when hovering this same image: 'filter: blur(2px) saturate(1.7)'. This will create a 2 pixels blur on the image and increase it saturation by 1.7.

This is just a really simple example on what we can do witht the filter property. With some creativity we can easily create really cool looking effects with only a few lines of CSS 🔥🔥