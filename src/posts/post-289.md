---
path: '/tips/post-289'
date: '2021-05-12'
title: 'Simple text reveal animation with CSS'
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1620831765/tips/289-1_izjkg1.png'
description: 'Creating a neat text animation with some simple CSS'
number: 289
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1620832994/tips/289-2_sve6gg.gif 'CSS text animation')

What's up guys? 😁✌️

Today's snippet is a simple text animation that we can create with some basic CSS.

```css
button {
  background-color: #e91e63;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 700;
  max-width: 10rem;
  margin: 0 auto;
  margin-bottom: 3rem;
}

.text {
  height: 4rem;
  overflow-y: hidden;
  display: block;
}

h1 {
  font-size: 4rem;
  line-height: 4rem;
  transform: translateY(4rem);
  transition: all 0.3s ease;
}

.text.show h1 {
  transform: translateY(0);
}
```

Basically, using 'transform: translateY' we'll create a transition that takes the text from bottom to top. We just need to make sure that we have an 'height' property on our element with the same value that we use for this 'transform: translateY'.

```html
<button onclick="showText()">Show text</button>

<div class="text" id="text">
  <h1>Follow</h1>
</div>
<div class="text" id="text1">
  <h1>webDevTips for</h1>
</div>
<div class="text" id="text2">
  <h1>awesome tips.</h1>
</div>

<!-- ... -->

<script>
  const text = document.getElementsByClassName('text')

  const showText = () => {
    for (var i = 0; i < text.length; i++) {
      text[i].classList.toggle('show')
    }
  }
</script>
```

Using some JavaScript we'll just add and remove the 'show' class on our element' that will change this 'transform' property.

And that's it! Super simple, right?
Let me know your thoughts on this tip 🔥
