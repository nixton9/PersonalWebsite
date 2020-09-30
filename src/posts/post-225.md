---
path: '/tips/post-225'
date: '2020-09-30'
title: 'Easily creating a simple image gallery'
languages: ['HTML', 'CSS', 'JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1601476198/tips/225-1_bigaqd.png'
description: 'Simple gallery with CSS and barely 3 lines of JS'
number: 225
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1601476254/tips/225-2_udwkvl.gif 'HTML, CSS & JS gallery')

What's up guys? 😁✌️
Today we'll see how we can create a really simple image gallery with barely 3 lines of Javascript.

Let's get to it! We'll start by creating a div that will hold the main image on the gallery - and we'll add the 'main' id to this image - and another that will hold all the miniature, preview images that we are displaying below the main image. On these preview images we need to add an onclick function where we'll pass the image src.

```html
<div class="gallery">
  <div class="gallery__main">
    <img src="./1.jpg" id="main" alt="Gallery image" />
  </div>

  <div class="gallery__previews">
    <img src="./1.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
    <img src="./2.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
    <img src="./3.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
    <img src="./4.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
    <img src="./5.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
    <img src="./6.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
    <img src="./7.jpg" onclick="changeImage(this.src)" alt="Gallery image" />
  </div>
</div>
```

Now on the JS side, we just need to create the 'changeImage' function that we used on all the preview images. This function will simply change the src attribute on the main image to be the same as the preview image we just clicked.

```javascript
const changeImage = src => {
  document.getElementById('main').src = src
}
```

The CSS is pretty straightforward as well. We just need to make sure that the main image is well fitted inside a container with specific dimensions. This will avoid layout shifts when the images have different sizes. Next we place our previews - also with specific dimensions - inside a container with display flex so they all line up nicely .

```css
.gallery {
  width: 90%;
  margin: 0 auto;
}

.gallery__main {
  width: 45rem;
  height: 30rem;
  margin: 0 auto;
}

.gallery__main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.gallery__previews {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.gallery__previews img {
  width: 9rem;
  height: 7rem;
  object-fit: cover;
  border-radius: 4px;
  margin: 0.5rem;
  cursor: pointer;
}
```

And that's it! Let me know your thoughts on this tip 🤗
