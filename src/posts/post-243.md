---
path: '/tips/post-243'
date: '2020-12-02'
title: 'Horizontally scrollable sections with minimal CSS'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1606925559/243-1_cu9hm1.png'
description: 'Horizontal scroll with CSS'
number: 243
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1606925565/243-2_nduc0n.gif 'Horizontal scroll')

Hey guys! Ever wondered how to create horizontally scrollable sections? Well today we'll check that out!

This snippet is really simple: we just have some divs with the class 'section' inside a 'content' div.

```html
<div class="content">
  <div class="section" style="background: #8125e2">
    <h1>First section</h1>
  </div>
  <div class="section" style="background: #45fce4">
    <h1>Second section</h1>
  </div>
  <div class="section" style="background: #4605ff">
    <h1>Third section</h1>
  </div>
  <div class="section" style="background: #f91890">
    <h1>Fourth section</h1>
  </div>
</div>
}
```

On the 'content' div we'll set 'display: flex', 'flex-wrap: nowrap' and 'overflow-x: auto'. On the 'section' div we have to set 'flex: 0 0 auto' and that's pretty much it! We can also hide the scrollbar like I did on the example.

```css
.content {
  width: 100%;
  height: 600px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}

.section {
  width: 100%;
  height: 100%;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

::-webkit-scrollbar {
  display: none;
}
```

Let me know your thoughts on this snippet 😁🙏
