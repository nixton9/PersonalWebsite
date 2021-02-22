---
path: '/tips/post-266'
date: '2021-02-22'
title: 'Adding a touch effect on your elements with some CSS'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1614008071/tips/266-1_a7o1hx.png'
description: 'Touch animation on elements with CSS'
number: 266
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1614008257/tips/266-2_kgelgu.gif 'CSS mobile touch')

What's up guys, how are y'all doing?

For today's tip I decided to share with you this simple snippet that I've used on my latest project - this will add a 'touch' effect on elements that are touched on smartphones.

```html
<nav>
  <div class="hamburguer mobile-touch">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="search mobile-touch">
    <img src="./glass.svg" alt="Search" />
  </div>
</nav>
```

So basically the idea is just to create a darker background around the element that is being clicked. In order to do this, I'm just addingg a class 'mobile-touch' to the elements where I want this to happen.

Now we just need to create some styles for this class. First thing we need is to add 'position: relative'. Then, we'll use the 'before' pseudo element to create that rounded, darker background on any element with 'mobile-touch'.

```css
nav {
  position: absolute;
  top: 4rem;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #8125e2;
  z-index: 0;
}

.hamburguer span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 10px;
}

.search img {
  width: 30px;
  display: block;
}

.mobile-touch {
  position: relative;
}

.mobile-touch:active:before {
  content: '';
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #651eaf;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  z-index: -1;
}
```

And that's it! Though it's simple, this simple snippet can definitely enhance a project for mobile users, making it feel more app like.

Let me know what were your thoughts on this tip 😁👇
