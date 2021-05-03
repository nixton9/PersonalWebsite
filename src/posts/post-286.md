---
path: '/tips/post-286'
date: '2021-05-03'
title: 'Creating the Instagram tooltip with CSS'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1620055079/tips/286-1_n9ntop.png'
description: 'How to implement the Instagram notification tooltip with CSS'
number: 286
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1620055079/tips/286-4_nocj2e.png 'Instagram tooltip')

Happy Monday guys! 🤗

Today's tip will be a simple HTML and CSS to create the Instagram's notifications tooltip!

```html
<div class="tooltip">
  <div class="item">
    <img src="comment.svg" />
    <span>2</span>
  </div>
  <div class="item">
    <img src="heart.svg" />
    <span>15</span>
  </div>
  <div class="item">
    <img src="user.svg" />
    <span>4</span>
  </div>
</div>
```

This is really simple to do so I won't go into much detail. The only thing that may be a bit more complex for some people is the little arrow on the tooltip's bottom. This is done with an ':after' pseudo element where we use its borders to achieve this result.

```css
.tooltip {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #f14653;
  border-radius: 13px;
  padding: 0.8rem 0.5rem;
}

.tooltip:after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  margin-left: -8px;
  border-top: 8px solid #f14653;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.item {
  display: flex;
  align-items: center;
  margin: 0 0.4rem;
  color: #fff;
}

.item img {
  width: 1.5rem;
}

.item span {
  font-weight: 300;
}
```

All the icons are from 'thenounproject.com' - a really cool website where you can find all sorts of icons either in SVG or PNG format.

Let me know if you have any UI elements like this in mind, that you would like to see me implement with HTML & CSS.

Have a nice one guys 😁✌️
