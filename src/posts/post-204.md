---
path: '/tips/post-204'
date: '2020-07-15'
title: 'How to use the Resize Observer in Javascript'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594824492/tips/204-1_clvk88.png'
description: 'Using the Resize Observer in Javascript'
number: 204
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1594824916/tips/204-2_vc6baj.gif 'JS Resize Observer')

Hey guy, what's up? 😁👊

Today I want to share with you a really cool JavaScript feature that I've discovered recently: the Resize Observer.  
This is a Web API that helps us monitor an element for changes in its dimensions. So we basically subscribe to this Resize Observer on a specific element, and everytime this element's dimensions change, we will be able to know it and get its new dimensions.

This can be really helpful because instead of depending on the window resize event - something that's often used - to do some changes, we instead use the changes on the element itself to do some modifications that we might want to do.

For this example I just created a simple 'box' that has a width of '80%' and a max-width of '800px'. This will help us see when exactly is the Resize Observer kicking in.

```html
<div class="box" id="box">
  <p>This box has a width of <span id="width"></span>px</p>
</div>
```

On the Javascript side, I just created a reference for our box and another for the element where I want to present its current width. Next, I create a callback function that will be executed everytime our element gets resized. On this callback function we'll show the current width of the 'box' using 'offsetWidth'.

```javascript
var box = document.getElementById('box')
var widthEl = document.getElementById('width')

function callback() {
  widthEl.innerHTML = box.offsetWidth
}

const observer = new ResizeObserver(callback)

observer.observe(box)
```

Now we just to create a 'new ResizeObserver' and pass our callback function to it. Finally, on this observer, we'll call the 'observe' method and pass our box element to it. And it's done!  
As you can see on the video, we can now resize our window and the Resize Observer will only execute when the dimensions of our box element change, not the window's dimensions.

Hope you give it a try, it can be pretty useful! 🤓
