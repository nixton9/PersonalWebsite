---
path: '/tips/post-292'
date: '2021-05-24'
title: 'Positioning a fixed element in relation to the parent element'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1621866578/tips/292-1_jjezum.png'
description: 'How to position a fixed element relatively to its parent element'
number: 292
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1621866578/tips/292-2_qn0ade.png 'CSS Fixed element')

So, when it comes to CSS, position fixed is often used to make an element stay fixed on a specific place - and even when the user scrolls, that element will still stay there. This is usually used for things like navbars, modals, pop-ups, etc

One of the first things we usually learn about 'position: fixed' is that it positions the element always in relation to the viewport. So if you use 'top: 10px', it will always stay fixed, 10px from the top of the page.

But what if we wanted to have an element fixed on the page but positioning it relatively to another element? Well, there's a way to do this!

```html
<div class="sidebar"></div>

<div class="page">
  <div class="box">
    This element is fixed but it's positioned in relation to it's parent and not
    the viewport.
  </div>
</div>
```

Imagine the following page layout that you see on this tip's example: a sidebar on the left, and a main section on the right. Let's say we want a fixed modal to appear, but we want it centered on the main section, and not on the whole page.

To achieve this, we will style our modal (in this case the div .box) exactly how we would to center it on the page, but we'll add a 'transform' property on the main section.

```css
.sidebar {
  width: 30%;
  background-color: #4605ff;
}

.page {
  width: 70%;
  transform: translate(0);
  /* ANY TRANSFORM WOULD DO THE TRICK */
}

.box {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 20rem;
  font-size: 1.2rem;
  line-height: 2rem;
  color: #212121;
  background-color: #e0e0e0;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
```

On this example I used 'transform: translate (0)', but any 'transform' would have done the trick! Just by adding this, our fixed element will now always be positioned in relation to this parent element and not to the viewport!

And that's it! Had you ever used this 'trick' before? Do you know any other ways of achieving this?
