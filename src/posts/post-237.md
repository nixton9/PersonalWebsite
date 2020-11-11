---
path: '/tips/post-237'
date: '2020-11-11'
title: 'Adding a noise texture effect to an image with CSS'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1605105329/tips/237-1_ob04l6.png'
description: 'How to create a noise texture effect with CSS'
number: 237
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1605105337/tips/237-2_mnwl4a.gif 'Tags input in React')

Adding a noise texture effect with CSS

What's up guys? For today's tip we'll check how we can apply a noise texture effect on an image with some CSS.

This is really simple to do. We need to create an element - in this case it's a div - with the class 'bg' and apply a background image on it.

```html
<div class="bg"></div>
```

Then, we'll create a 'before' pseudo element on our element, that should be significantly bigger than the element itself. On this 'before' we will apply a 'noise' image pattern as background. You can find these patterns online on websites like 'Subtle Patterns'. We also need to add an animation to it.

```css
.bg {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('./1.jpg');
  background-position: 50% 20%;
  background-size: cover;
}

.bg::after {
  content: '';
  background: url(./noise.png);
  position: absolute;
  top: -50%;
  left: -50%;
  width: 400%;
  height: 400%;
  opacity: 0.8;
  animation: noiseFX 2s steps(6) infinite;
}

@keyframes noiseFX {
  0%,
  100% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  30% {
    transform: translate(3%, -15%);
  }
  50% {
    transform: translate(12%, 9%);
  }
  70% {
    transform: translate(9%, 4%);
  }
  90% {
    transform: translate(-1%, 7%);
  }
}
```

Finally, we need to create the keyframes for our animation. This animation will basically just make our 'before' pseudo element move around with 'transform: translate' thus creating this cool, subtle noise effect.

And that's it guys, let me know what you thought of this tip! 🤓✌️
