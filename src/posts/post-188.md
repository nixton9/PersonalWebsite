---
path: "/tips/post-188"
date: "2020-05-29"
title: "How to create an image slider from scratch"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1590765342/tips/188-1_urqfem.png'
description: 'Building your own image slider with HTML, CSS and Javascript'
number: 188
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1590765600/tips/188-2_ij8g3k.gif "Image slider")

Happy Friday guys 😁  
Today we'll check how to create an image slider from scratch with some HTML, CSS and JavaScript!

This is super easy to do. On the HTML we just need to create a 'slider' div and inside it put some 'slides' - divs with the images we want as background. We'll also add here two arrows that onclick will trigger the slider to change to the previous or next slide using the  'changeSlide' function.

```html

<div class="slider">

    <div class="slide" style="background-image:url('./1.jpg')"></div>
    
    <div class="slide" style="background-image:url('./2.jpg')"></div>
    
    <div class="slide" style="background-image:url('./3.jpg')"></div>
    
    <a class="prev" onclick="changeSlide(-1)">&#10094;</a>
    <a class="next" onclick="changeSlide(1)">&#10095;</a>
    
</div>

```

On the JavaScript we'll start by setting a global variable that will hold the number of the current slide being displayed. Then we'll create two functions. The 'showSlide' will figure what slide should be displayed and hide all the others. The 'changeSlide' will simply call 'showSlide' with the next slide to be display.

```javascript

var currSlide = 1;
showSlide(currSlide);

function changeSlide(val) {
    showSlide(currSlide += val);
}

function showSlide(val) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (val > slides.length) {currSlide = 1}
    if (val < 1) {currSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currSlide-1].style.display = "block";
}


```

Finally, our CSS just consists of some basic layout rules and a fade animation that we'll show everytime a new slide comes in!

```css

.slider { position: relative; }

.slide {
    width:900px;
    height: 550px;
    background-size: cover;
    border-radius: 20px;
    animation: fade 1.5s;
    display: none;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 16px;
  color: white;
  transition: 0.6s ease;
}
.next { right: 0; }

.prev:hover, .next:hover { background-color: rgba(0,0,0,0.8); }

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

```

And with this we easily have a ready to use, simple image slider! You can tweak it as you want and even so things like add navigation bullets 

Let me know if you have any doubts with this. See you guys! 🤗✌️