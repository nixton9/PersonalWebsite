---
path: '/tips/post-285'
date: '2021-04-28'
title: 'Using the marquee tag in HTML'
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1619612364/tips/285-1_nmbpt1.png'
description: 'Checking the deprecated marquee tag'
number: 285
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1619612355/tips/285-2_ft6qaw.gif 'Marquee tag')

What's up guys? 😁✌️
Today we'll check the 'marquee' tag in HTML.

Even though this is tag is already deprecated in HTML5, I wanted to share it here since it's a 'quite different' tag.

So what does it do? The marquee tag creates a scrolling piece text from left to right, right to left, top to bottom or bottom to top. Just take a look at the video!

```html
<marquee behavior="scroll" bgcolor="#eee">
  They see me rolling, they hatin'
</marquee>

<marquee behavior="scroll" direction="right">
  Scrolling to the right
</marquee>

<marquee direction="up">
  Scrolling up
</marquee>

<marquee direction="down" loop="4">
  Scrolling down but only four times
</marquee>
```

We can pass some attributes to change its behavior, like: direction, number of loops' background color and behavior.

```css
marquee {
  color: #e91e63;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 2rem;
}
```

How about you? Have you ever used the marquee element on any project? 🤔
