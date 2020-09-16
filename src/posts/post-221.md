---
path: '/tips/post-221'
date: '2020-09-16'
title: 'Creating a shadow glow effect with CSS'
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1600258880/tips/221-1_mzpkv7.png'
description: 'Same color shadows with CSS'
number: 221
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1600258880/tips/221-2_hcszkj.png 'CSS glow shadow effect')

What's up guys? 😁✌️

Today's tip is about creating a simple shadow glow effect using a few lines of CSS. This can make an element really stand out and it's something that we see quite often nowadays in webdesign.

On the HTML we just have have four divs with the class 'box' and with a specific class for the color of this box.

```html
<div class="box pink"></div>

<div class="box purple"></div>

<div class="box green"></div>

<div class="box blue"></div>
```

On the CSS, we'll use this 'box' class to create a square with rounded corners. All the magic will be on the ':after' pseudo element that we will create next. Basically what we are doing with this 'after' is creating another box that will be slightly smaller than the original one. This new box will be centered and we will move it a bit down so we can see it below the first box. We will reduce it's opacity to '90%' and we'll add a bit of blur. Finally we need to make sure that it inherits the background-color of the original box.

```css
.box {
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: 2rem;
  border-radius: 20px;
}
.box::after {
  content: '';
  position: absolute;
  width: 82%;
  height: 93%;
  top: 12%;
  left: 0;
  right: 0;
  margin: 0 auto;
  filter: blur(20px);
  opacity: 90%;
  background-color: inherit;
  border-radius: inherit;
}
.pink {
  background-color: #e91e63;
}
.purple {
  background-color: #8125e2;
}
.green {
  background-color: #45fce4;
}
.blue {
  background-color: #4605ff;
}
```

And that's all! We don't even use shadows for this. We basically just clone the element, make it a bit smaller and add some blur to create this effect.

Let me know your thoughts on this tip! 🤓🙏
