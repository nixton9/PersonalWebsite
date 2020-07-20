---
path: '/tips/post-205'
date: '2020-07-20'
title: 'Creating clickable areas on images'
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1595262949/tips/205-1_apt5zf.png'
description: 'Creating image maps with HTML'
number: 205
status: true
---

`youtube: https://www.youtube.com/embed/_lGjpR2TXTE`

Today we'll check how to create images with clickable areas using HTML only 😎🔥

Basically, with this, we are able to have an image where some specific areas (that are set by us) will be clickable and will link to a specified page.  
For this example, I decided to use a picture of me on my setup and I created two clickable areas: the area where the mouse is - that will take us to the website of the mouse - and the keyboard area - that will link to the keyboard's website.

This is super easy to do, we just need three elements: 'img', 'map' and 'area'. So we'll set an img tag with image we want, a specific width and a 'usemap' attribute that will refer to the map we want to use.  
Next, we will create a map element with a name attribute and inside it we'll create an area tag for each clickable area we want on the image.

```html
<img src="1.png" usemap="#image-map" width="600px" />

<map name="image-map">
  <area
    target="_blank"
    alt="Logitech MX Master 3"
    title="Logitech MX Master 3"
    href="https://www.logitech.com/en-us/product/mx-master-3.html"
    coords="240,150,20"
    shape="circle"
  />
  <area
    target="_blank"
    alt="Ducky One 2 SF"
    title="Ducky One 2 SF"
    href="https://www.duckychannel.com.tw/en/Ducky-One2-SF"
    coords="290,220,50"
    shape="circle"
  />
</map>

<p>Click on the mouse and on the keyboard to find out more about them</p>
```

On this 'area' we want to set some attributes. We'll set 'shape=circle' for the clickable area to be circular. We have to set the 'href' for the page we want to redirect to and 'target=\_blank' to redirect to this page in a new tab. Finally we need to set the 'coords' attribute that will define where exactly the clickable area will be. We are passing three values: the x coordinate, the y coordinate and finally the size of our area!

Hope you liked this tip and see you soon! 🤗✌️
