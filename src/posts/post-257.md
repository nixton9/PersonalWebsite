---
path: '/tips/post-257'
date: '2021-01-20'
title: 'How to add swipe to close on a sidebar using JS'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1611158757/tips/257-1_qlcq2l.png'
description: 'Swipe to close effect using some simple Javascript'
number: 257
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1611158773/tips/257-2_inroow.gif 'Swipe to close')

How are you doing guys? 🤗

We have a really neat tip for today: adding a 'swipe to close' functionality on a sidebar using some simple Javascript! This is something that we can easily add on our projects so they become a bit more 'app-like' when being used on mobile.

```html
<div class="hamburguer" id="icon">
  <span></span>
  <span></span>
  <span></span>
</div>

<div class="sidebar" id="sidebar"></div>
```

So let's dive into it.
We have some really simple HTML and CSS: just an hamburger menu and a 'sidebar' div that will fill the whole page in terms of height and that by default will be hidden, with the transform property. When our sidebar has the class 'open' we'll show it with a left to right transition.

```css
.hamburguer {
  position: absolute;
  top: 3rem;
  left: 2rem;
  cursor: pointer;
}

.hamburguer span {
  display: block;
  width: 2rem;
  height: 0.3rem;
  margin: 0.3rem 0;
  background-color: #e91e63;
  border-radius: 30px;
}

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 18rem;
  height: 100vh;
  background-color: #e91e63;
  transform: translateX(-20rem);
  transition: all 0.2s ease;
}

.sidebar.open {
  transform: translateX(0);
}
```

Now on the JS side we'll start by creating two consts to reference our hamburger icon and our sidebar. The first thing we need to do is add a 'click' event listener on our icon so that it adds the class 'open' to the sidebar.

And now to create the actual swipe to close effect we start by creating two vars: touchStart and touchEnd. Next, we need to add three event listeners on our sidebar: one for 'touchstart', one for 'touchmove' and one for 'touchend'.

```javascript
const icon = document.getElementById('icon')
const sidebar = document.getElementById('sidebar')

let touchStart, touchEnd

icon.addEventListener('click', () => {
  sidebar.classList.add('open')
})

sidebar.addEventListener(
  'touchstart',
  e => (touchStart = e.targetTouches[0].clientX)
)

sidebar.addEventListener(
  'touchmove',
  e => (touchEnd = e.targetTouches[0].clientX)
)

sidebar.addEventListener('touchend', e => {
  if (touchStart - touchEnd > 45) {
    sidebar.classList.remove('open')
  }
})
```

Basically what happens is that when the user touches on the sidebar the first time, we'll keep track of the place where he touched first. Once he's done touching it we'll keep track of the latest place where he touched. And then we just check if the distance between the two places is bigger than 45. If so, we'll remove the class 'open', thus closing the sidebar!

You can change this 45 value. If you increase it, the user will need to swipe more to close the sidebar. If you decrease it, less swiping will be necessary.

Let me know if you liked this tip and if you would use this on your projects 👇
