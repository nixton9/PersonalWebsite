---
path: '/tips/post-211'
date: '2020-08-12'
title: 'Using SVG to create a wavy background'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1597248944/tips/211-1_yttpjk.png'
description: 'Creating waby backgrounds with SVG'
number: 211
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1597248942/tips/211-2_pjkwwm.png 'SVG Wavy background')

What's up guys? 😎✌

Today we'll check a very simple but cool snippet that was requested to me a ton a of times: creating a wavy background with SVG!

This is really simple, we basically just need to create a wavy shape (or whatever shape we want) using an svg element. To get the correct values for the path of the shape you can either: copy these values shown here, use an online svg tool that will give you these values or drawn a shape on a vector based software like Adobe Illustrator, export it as SVG and then open it with your IDE and you'll see these elements.

```html
<section class="wavy">
  <h1>Wavy background</h1>
</section>

<svg viewBox="0 0 500 200">
  <path d="M0, 100 C150, 200 350, 0 500, 100 L500, 00 L0, 0 Z"></path>
</svg>
```

After having the svg element with the shape we want, we just need to apply some CSS to set 'position: absolute', 'top: 0' and 'z-index: -1' on it so it will stay on the top of the page and behind any other content we have in here.

```css
.wavy {
  padding: 5rem;
  color: white;
}

.wavy h1 {
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1rem;
}

svg {
  position: absolute;
  top: 0;
  z-index: -1;
  fill: #45fce4;
}
```

And that's it! Hope you liked it and let me know if you ever use these types of backgrounds on your projects 😁👌
