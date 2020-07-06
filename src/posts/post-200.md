---
path: '/tips/post-200'
date: '2020-07-06'
title: 'How to create CSS animations with good performance'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594054305/tips/200-1_svuhvp.png'
description: 'Enhancing the performance of CSS animations'
number: 200
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1594054572/tips/200-2_open9o.gif 'CSS menu toggle')

Tip 200! 🥳🎉

For today's tip we'll see how we can enhance the performance of our CSS animations by following some simple steps.

The first important thing has to do with the 'Critical Rendering Path'. If you don't know what this is, I suggest you take a look at tip #153. Any changes we want to do on an animation we want to make sure we do them on the 'Composite' phase - the last one of the Critical Rendering Path. To do this we should animate only these two properties: transform and opacity.

So let's say you want to make an animation where you move an element from left to right. Instead of using something like 'margin-left' or 'left', you should use 'transform: translateX'.  
The next thing we want to do is to make sure we run the animations on the GPU. To do this, we can use the 'will-change' property and state what property will change. So all we need to in this case is: 'will-change: transform'.

```html
<div class="toggle" id="toggle">
  <img src="icon.svg" alt="Hamburguer" />
</div>

<div id="menu" class="menu"></div>

<section class="home">
  <h1>Home</h1>
  <p>Lorem ipsum ...</p>
</section>
```

```javascript
var btn = document.getElementById('toggle')
var menu = document.getElementById('menu')

btn.addEventListener('click', toggleMenu)
menu.addEventListener('click', toggleMenu)

function toggleMenu() {
  console.log('here')
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  } else {
    menu.classList.add('open')
  }
}
```

```css
.toggle {
  position: absolute;
  left: 2.5rem;
  top: 2.5rem;
  cursor: pointer;
}

.toggle img {
  width: 2.5rem;
}

.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 50vw;
  height: 100vh;
  background-color: #e91e63;
  transform: translateX(-101%);
  will-change: transform;
  transition: all 0.2s ease-in;
}

.menu.open {
  transform: translateX(0);
}

.home {
  min-height: 100vh;
  width: 100%;
  padding: 8rem;
}
```

You can see on this example how this was done and if you try it out yourself, you can check the FPS we get on this animation.  
See you next time! 🤗
