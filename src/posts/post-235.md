---
path: '/tips/post-235'
date: '2020-11-04'
title: 'Building an animated search input'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1604506014/tips/235-1_qlinv5.png'
description: 'How to create an animated search input'
number: 235
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1604506027/tips/235-2_fwhslt.gif 'Animated search input')

What's up guys, how are you? 😊✌️

Today we'll check how to create an animated search input for you to use on your projects. So, let's take a look!

```html
<div id="search" class="search">
  <img id="icon" src="search.svg" alt="Search" />
  <input id="input" type="text" placeholder="Search for something" />
</div>
<div id="overlay" class="overlay" style="display: none"></div>
```

On the HTML we will need a div with the ID 'search' and inside it we'll add an img with the ID 'icon' where we'll place our icon and a text input with the id 'input'. Finally, we need a div with the ID 'overlay' and 'display: none'.

```javascript
const search = document.getElementById('search')
const icon = document.getElementById('icon')
const input = document.getElementById('input')
const overlay = document.getElementById('overlay')

icon.addEventListener('click', () => {
  search.classList.add('open')
  overlay.style.display = 'block'
})

overlay.addEventListener('click', () => {
  search.classList.remove('open')
  overlay.style.display = 'none'
  input.value = ''
})
```

With Javascript, we will start by creating references to the four elements we need: search, icon, input and overlay.
We'll add an event listener for a 'click' event on the icon, that will add the class 'open' on our input and will change the 'display' on our overlay to 'block'. We'll also add another event listener for a 'click' event on our overlay, that will remove the class 'open' on our input, change the overlay 'display' to 'none' and reset the input value.

```css
.search {
  position: fixed;
  top: 8rem;
  right: 4rem;
  z-index: 11;
  cursor: pointer;
}

.search img {
  width: 3rem;
  position: relative;
  z-index: 1;
  transform: scale(1) translateX(0);
  transition: transform 0.15s linear;
}

.search input {
  background-color: #e4e4e4;
  width: 16rem;
  height: 2.8rem;
  position: absolute;
  right: 0;
  border-radius: 20px;
  color: #212121;
  border: none;
  padding: 0 3rem 0 1.3rem;
  font-size: 0.9rem;
  box-shadow: 11px 15px 16px 0 rgba(0, 0, 0, 0.07);
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.15s linear;
}

.search.open img {
  transform: scale(0.6) translateX(-0.6rem);
}

.search.open input {
  transform: scaleX(1);
}

.overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  display: block;
  z-index: 1;
}
```

Finally we need some CSS to make everything work and everything is pretty straightforward. We just need to make sure we add 'transform: scaleX(0)' on the input so it doesn't have any width by default, thus becoming hidden. When the input has the class 'open' we will change this transform property so our input opens up and becomes visible.

And that's it guys! Let me know what you thought of this tip 🤓🙏
