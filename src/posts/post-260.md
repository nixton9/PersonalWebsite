---
path: '/tips/post-260'
date: '2021-02-01'
title: 'Ready to use CSS transitions with SunsetCSS'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1612194117/tips/260-1_ilrmdy.png'
description: 'SunsetCSS - Cool and simple to use transitions for your projects'
number: 260
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1612194122/tips/260-2_qwzgoa.gif 'SunsetCSS')

What's up guys? 😁✌️

Today I want to share with you this neat CSS library I found with some ready to use transitions: SunsetCSS

SubsetCSS has a collection of CSS only transitions that you can easily use on your projects. First, you need to go to the library's website - www.sunsetcss.com - download their CSS file and include it on your project. Make sure you link this file on your HTML.

```html
<link href="./sunset.min.css" rel="stylesheet" />

<!-- ... -->

<div class="box box1 pwa-element pwa-borders-topRightBottomLeft">
  Border fill
</div>

<div class="box box2 pwa-element pwa-borders-round">Border radius</div>

<div class="box box3 pwa-element pwa-background-easeInFromTop-easeOutToTop">
  Background fill
</div>

<div class="box box4 pwa-element pwa-element pwa-background-bounceInFromLeft">
  Background fill with bounce
</div>

<div class="box box5 pwa-element pwa-element pwa-2D-pulse-smallBigNormal">
  Pulse
</div>
```

Then, just browse through their transitions and click on the one you like to automatically copy the classes you need. Just paste these on the element where you wish to use the transition and you're good to go!

For transitions that use some color, you can change this color by overriding it on your CSS - just look at my CSS snippet.

```css
.box {
  background: #4605ff;
  color: #fff;
  font-weight: 700;
  padding: 2rem;
  width: 20rem;
  text-align: center;
  margin: 0.5rem 0;
}

.box1:after,
.box1:before {
  border-color: #e91e63;
}

.box3:after {
  background-color: #e91e63;
}

.box4:after {
  background-color: #e91e63;
}
```

And that's it! Let me know your thoughts on this tip 🤓👇
