---
path: '/tips/post-203'
date: '2020-07-13'
title: 'Animating with clip-path in CSS'
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594657196/tips/203-1_p6vu27.png'
description: 'Using the clip-path property in CSS to create animations with shapes'
number: 203
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1594657424/tips/203-2_xugxyj.gif 'Animating clip-path')

Happy Monday guys, how are you doing? 😁🤘

On tip #195 I showed what we can do with the 'clip-path' property in CSS and the shapes that we can create on our elements by using it.
For today I want to show you a simple snippet on how we can easily animate this property and create some cools animations!

```html
<div class="container">
  <img src="1.jpg" alt="Mountains" />
</div>
```

In order to do this we just need an image where we'll apply some clip-path to create this initial polygonal shape we can see. Then we'll apply a animation on it with the name 'clipPath, that will have a duration of 3 seconds and will run infinitely.

```css
img {
  width: 600px;
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  animation: clipPath 3s infinite;
}

@keyframes clipPath {
  0% {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
  50% {
    clip-path: polygon(50% 50%, 90% 88%, 80% 10%, 20% 10%, 8% 90%);
  }
  100% {
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  }
}
```

On the animation keyframes we'll just switch the 'clip-path' values to change our shape. To make sure the animation runs smoothly we need to ensure that when changing these values we keep exactly the same number of values.  
And it's done! You can take this snippet abd apply it how you want, creating different shapes.

See you soon guys, take care! 🤗✌
