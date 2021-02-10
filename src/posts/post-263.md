---
path: '/tips/post-263'
date: '2021-02-10'
title: 'Cool image effects with two lines of CSS'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1612973025/tips/263-1_gmofrx.png'
description: 'Using CSS mix-blend-mode to create filters for images'
number: 263
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1612973029/tips/263-2_yvdbir.png 'Image filters with mix-blend-mode')

How are you doing today guys? 🤗🤗

For today's tip I want to show you how we can use the CSS property 'mix-blend-mode' to create some mesmerizing image effects!  
To start, we just need some divs with some background images. We'll create an 'after' pseudo element on these divs to fill the whole div.

```html
<div class="flex">
  <div class="img first"></div>
  <div class="img second"></div>
  <div class="img third"></div>
</div>

<div class="flex">
  <div class="img fourth"></div>
  <div class="img fifth"></div>
  <div class="img sixth"></div>
</div>
```

Now, we just need two CSS properties on each 'after' to create these effects: 'background' and 'mix-blend-mode'. So by adding a color and changing the way this color will blend with the background image, different effects can be created.

```css
.img {
  position: relative;
  width: 22rem;
  height: 15rem;
  margin: 1rem;
  background: url('./1.jpg') center;
  background-size: cover;
  border-radius: 4px;
}

.img:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 4px;
}

.second:after {
  background: black;
  mix-blend-mode: soft-light;
}

.third:after {
  background: black;
  mix-blend-mode: color;
}

.fourth:after {
  mix-blend-mode: overlay;
  background: #681fd8;
}

.fifth:after {
  background: #20e8ff;
  mix-blend-mode: hue;
}

.sixth:after {
  background: #eae756;
  mix-blend-mode: saturation;
}
```

Just play with these two values and you can create a huge variety of 'filters' on each image. It's that simple!  
Make sure you try it and let me know your thoughts on this tip 😊👇
