---
path: '/tips/post-247'
date: '2020-12-16'
title: 'Animated menu with JS and a couple of lines of JS'
languages: ['HTML', CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1608134113/tips/247-1_pmxzxo.png'
description: 'Creating a rudder navigation menu'
number: 247
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1608134142/tips/247-2_yxbuf9.gif 'Ruder menu')

Animated menu with some CSS and JS 🔥

What's up guys?
For today's tip I'm sharing with you a simple but really neat type of animated menu using CSS and a tiny bit of JavaScript. This is a type of navigation can work really well on smaller screens.

```html
<div class="menu">
  <div class="item"><i class="fa fa-home"></i></div>
  <div class="item"><i class="fa fa-comments"></i></div>
  <div class="item main-item"><span>+</span></div>
  <div class="item"><i class="fa fa-sticky-note"></i></div>
  <div class="item"><i class="fa fa-cog"></i></div>
</div>
```

Basically we are just creating the whole navigation but hiding almost item (minus the plus icon) when it does not have the 'open' class on it.

```css
.menu {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  padding: 1rem;
}

.menu:before {
  content: '';
  position: absolute;
  background-color: #4be6d2;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  transform-origin: center;
  transform: scaleX(0.25);
  transition: all 0.2s ease;
}

.menu.open:before {
  transform: scaleX(1);
  border-radius: 30px;
}

.item {
  position: relative;
  font-size: 1.3rem;
  color: #fff;
  margin: 0 1.2rem;
  cursor: pointer;
}

.main-item {
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
  transition: all 0.4s ease;
}

.menu.open .main-item {
  transform: rotate(405deg);
}

.main-item span {
  position: relative;
  bottom: 1px;
}
```

Then, on Javascript, we just need to add an event listener on our plus icon so, when it's clicked, we'll toggle the class 'open' on our menu.

```javascript
const plus = document.querySelector('.main-item')

plus.addEventListener('click', () =>
  document.querySelector('.menu').classList.toggle('open')
)
```

And that's pretty much it! Let me know your thoughts on using this type of navigation, in the comments 😁✌️
