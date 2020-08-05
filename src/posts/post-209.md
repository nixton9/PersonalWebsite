---
path: '/tips/post-209'
date: '2020-08-05'
title: 'Card with text on hover effect'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1596644557/tips/209-1_jqrv7x.png'
description: 'Creating a card with some scrollable text on hover'
number: 209
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1596644908/tips/209-2_i06cwv.gif 'Card with text on hover')

What's up guys? 😎

Today I want to share with you a little snippet that I created recently for a small project I was doing. This creates a card with a background image and when you hover it you can see some scrollable text.

This is fairly simple to do so I won't go much into detail. We just need a 'card' element with some fixed width and height and where we'll place our image as background. We have to make sure we set 'overflow: hidden' so the text won't come out of it.

```html
<div class="card">
  <div class="card__inner">
    <h2>Dinner with a view</h2>
    <p>Lorem ipsum ....</p>
  </div>
</div>
```

Inside it we'll have a 'card-inner' element that will be absolutely positioned to fit the 'card' and by default will have the opacity set to 0. When we hover the 'card' we'll change this opacity to 1 to make the content visible.

```css
.card {
  position: relative;
  width: 24rem;
  height: 34rem;
  background-size: cover;
  background-color: black;
  background-image: url('./1.jpg');
  background-clip: content-box;
  border-radius: 20px;
  background-position: center center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 15px 12px, rgba(0, 0, 0, 0.3) 0px 19px 38px;
}

.card__inner {
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  opacity: 0;
  padding: 2rem 1.3rem 2rem 2rem;
  transition: all 0.4s ease 0s;
}

.card:hover .card__inner {
  opacity: 1;
}

.card__inner h2 {
  margin-top: 1rem;
}

.card__inner p {
  overflow-y: scroll;
  height: 87%;
  padding-right: 1rem;
  font-weight: 200;
  line-height: 2.5rem;
  margin-top: 1.5rem;
}

::-webkit-scrollbar {
  width: 0.3rem;
}

::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 50px;
}
```

Then we want to give a specific height to our text element and 'overflow-y: scroll' so we get a scrollable area on it.
And finally we just want to add some styles to change the default look of the scrollbar and make it look a bit cooler!

Hope you liked it and let me your thoughts on this one! Take care 😁🙏
