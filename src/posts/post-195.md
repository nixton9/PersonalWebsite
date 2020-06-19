---
path: '/tips/post-195'
date: '2020-06-19'
title: 'Creating all sorts of shaps in CSS with clip-path'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1592577862/195-1_jmpuym.png'
description: 'How to use the clip-path property in CSS to clip elements'
number: 195
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1592577862/195-2_zmuim1.png 'CSS clip-path')

Creating different shapes on images with the clip-path property 🖼️

The clip-path property on CSS allow us to 'cut' part of an element and set what part of it should be shown. This can be pretty handy for specific designs and it's super easy to use .

```html
<img src="1.jpg" alt="Mountains" />

<img src="1.jpg" alt="Mountains" class="rectangle" />

<img src="1.jpg" alt="Mountains" class="circle" />

<img src="1.jpg" alt="Mountains" class="polygon" />
```

In this example we just have four images - the first one is the original and the other three are the result of different 'clip-path' values. We use 'inset' to create a rectangle, 'circle' to create a circular shape, and 'polygon' that lets us create all sorts of polygons. Inside each of these values, we pass the coordinates of where we want to make the cut.

```css
img {
  width: 300px;
  margin: 40px;
}

.rectangle {
  clip-path: inset(50px 60px 20px 20px);
}

.circle {
  clip-path: circle(90px at 170px 95px);
}

.polygon {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
```

There are also plenty websites where you can draw whatever shape you want and it will give you correct clip-path values for you to use on your code. A good example of this is: [Clip-path online tool](https://bennettfeely.com/clippy/)

Have a great weekend guys! 😁✌
