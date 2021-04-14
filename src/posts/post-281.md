---
path: '/tips/post-281'
date: '2021-04-14'
title: 'Awesome menu reveal effect with a tilting image'
languages: ['HTML', 'CSS', 'JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1618402325/tips/281-1_owpchl.png'
description: 'Creating a neat mobile menu reveal effect'
number: 281
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1618402381/tips/281-2_jfzh9q.gif 'Menu Reveal Effect')

Creating a menu reveal effect with a tilting image 🔥

Hey guys! So the other day I saw this neat animation on Reddit and decided to give it a try!

Using some CSS and a couple of lines of JavaScript (just to toggle the menu) we can create this cool animation.

```html
<div class="phone" id="phone">
  <div class="image">
    <img src="1.jpg" />
  </div>
  <div class="icons">
    <i class="fa fa-home"></i>
    <i class="fa fa-users"></i>
    <i class="fa fa-envelope"></i>
    <i class="fa fa-cog"></i>
  </div>
  <div class="menu" id="menu">
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</div>
```

```javascript
const menu = document.getElementById('menu')
const phone = document.getElementById('phone')

menu.addEventListener('click', () => {
  phone.classList.toggle('active')
})
```

By applying some 'perspective' on the phone and then some transforms on the background image, we can this image tilt back and free some space for the menu to show up.

```css
.phone {
  position: relative;
  width: 350px;
  height: 650px;
  margin: 0 auto;
  background-color: #000;
  border: 6px solid #504d4d;
  border-radius: 30px;
  box-shadow: 0px 20px 35px rgb(0 0 0 / 50%);
  perspective: 640px;
  overflow: hidden;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 55px;
  width: 55px;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  cursor: pointer;
}

.menu span {
  display: block;
  height: 3px;
  width: 22px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 25px;
}

.image {
  width: 100%;
  height: 100%;
  transform-origin: 100% 0;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  overflow: hidden;
}

.active .image {
  transform: rotateX(-45deg);
}

.image img {
  max-height: 100%;
}

.icons {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.icons i {
  font-size: 1.8rem;
  color: #fff;
  margin: 0 1.5rem;
  opacity: 0;
  transition: all 1s ease;
}

.active .icons i {
  opacity: 1;
}
```

Let me know your thoughts on this snippet! 🤓🙏
