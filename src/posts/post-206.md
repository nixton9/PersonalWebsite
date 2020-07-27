---
path: '/tips/post-206'
date: '2020-07-27'
title: "Using the 'place-items' property with CSS Grid"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1595866192/tips/206-1_wxdsxf.png'
description: 'Aligning items in CSS Grid with the place-items property'
number: 206
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1595866193/tips/206-2_rykmwo.png 'place-items property in CSS')

What's up guys? 😁

Today we'll check the 'place-items' property and see how we can use it with CSS grid to align the content of a grid. This property is not exclusive for Grid, you can use it with other things, but in this example we'll only check it in a Grid scenario.

The 'place-items' property is shorthand for the 'align-items' and 'justify-content' properties. It accepts two values - one for each property - but you only pass one value it will set that value for both properties.

```html
<h1>Place-items: start</h1>
<div class="container start">
  <div class="box"><p>Grid Item 1</p></div>
  <div class="box"><p>Grid Item 2</p></div>
  <div class="box"><p>Grid Item 3</p></div>
</div>

<h1>Place-items: center</h1>
<div class="container center">
  <div class="box"><p>Grid Item 1</p></div>
  <div class="box"><p>Grid Item 2</p></div>
  <div class="box"><p>Grid Item 3</p></div>
</div>

<h1>Place-items: end</h1>
<div class="container end">
  <div class="box"><p>Grid Item 1</p></div>
  <div class="box"><p>Grid Item 2</p></div>
  <div class="box"><p>Grid Item 3</p></div>
</div>
```

If you take a look at the example, you can easily see the difference of using three different values - start, center, end - in a case where we have a grid with three columns.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.start {
  place-items: start;
}
.center {
  place-items: center;
}
.end {
  place-items: end;
}

.box {
  width: 175px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(113, 113, 113, 0.15) -5px -5px 11px, rgba(0, 0, 0, 0.15) 5px 5px
      11px;
}
```

On the first example we set 'place-items: center' so all the items will be aligned at the start of each column.  
On the second one we use 'place-items: center' so the items will be centered. And finally on the last example we are using 'place-items: end' that will align items to the end of the column.

This can be a simple but quite handy property in a lot of cases so make sure you use it! See you guys, take care 🤓🙏
