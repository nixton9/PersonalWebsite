---
path: '/tips/post-244'
date: '2020-12-07'
title: 'Using Flexbox to easily align elements'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1607350153/tips/244-1_zftasb.png'
description: 'Aligning items in Flexbox'
number: 244
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1607350152/tips/244-2_llbdub.png 'Flexbox')

What's up guys? Hope you had a nice weekend! 😁

For today, we have a pretty simple tip on aligning items with Flexbox! Ever since it came out and started being supported by most browsers, Flexbox's popularity has been huge. And it's easy to see why!

Flexbox makes it super easy to create some specific layouts, that used to be a huge headache to implement.

```html
<div class="flex-container center"><h1>Center</h1></div>
<div class="flex-container center-right"><h1>Center Right</h1></div>
<div class="flex-container top-right"><h1>Top Right</h1></div>
<div class="flex-container top-left"><h1>Top Left</h1></div>
<div class="flex-container bottom-right"><h1>Bottom Right</h1></div>
<div class="flex-container bottom-left"><h1>Bottom Left</h1></div>
```

On this tip we can see how we can easily align elements just be using two CSS properties: 'align-items' and 'justify-content'.

```css
.flex-container {
  display: flex;
  padding: 1.5rem;
  background-color: #4605ff;
}

.center {
  align-items: center;
  justify-content: center;
}

.center-right {
  align-items: center;
  justify-content: flex-end;
}

.top-right {
  align-items: flex-start;
  justify-content: flex-end;
}

.top-left {
  align-items: flex-start;
  justify-content: flex-start;
}

.bottom-right {
  align-items: flex-end;
  justify-content: flex-end;
}
.bottom-left {
  align-items: flex-end;
  justify-content: flex-start;
}
```

This snippet is really simple and straightforward so I won't go into much detail. Let me know if you have any doubts!

Take care guys 🙏
