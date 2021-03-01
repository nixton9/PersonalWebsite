---
path: '/tips/post-268'
date: '2021-03-01'
title: 'Creating an awesome animation with box-shadow'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1614612440/tips/268-1_cfuig3.png'
description: 'Using CSS box-shadow to create a mesmerizing animation'
number: 268
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1614612608/tips/268-2_kc2gub.gif 'CSS mobile touch')

Hey guys, what's up? 😊✌️

So a while ago I saw this cool post on reddit talking about properties that can be animated in CSS - https://codersblock.com/blog/the-surprising-things-that-css-can-animate/

On this post there was this snippet for a mesmerizing animation made only with box-shadow so I decided to share it here with you guys.

```html
<div class="shadow"></div>
```

Using nothing but some different shadows we can create this neat effect and it's just one of the huge amount of things you can do when playing around with box-shadow in CSS.

```css
.shadow {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  box-shadow: 0 0 30px #fff, -30px 0 95px #e91e63, 30px 0 95px #4605ff, inset 0
      0 60px #fff, inset 60px 0 95px #e91e63, inset -60px 0 95px #4605ff,
    inset 60px 0 400px #e91e63, inset -60px 0 400px #4605ff;
  animation: pulse 6s linear infinite;
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 30px #fff, 30px 0 95px #e91e63, -30px 0 95px #4605ff, inset
        0 0 60px #fff, inset -60px 0 95px #e91e63, inset 60px 0 95px #4605ff,
      inset -60px 0 400px #e91e63, inset 60px 0 400px #4605ff;
  }
}
```

Hope you liked this tip and let me know your thoughts on it! 🤓🙏
