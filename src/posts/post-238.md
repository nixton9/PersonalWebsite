---
path: '/tips/post-238'
date: '2020-11-16'
title: 'How to create a tiltable 3D element with some CSS & JS'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1605535789/tips/238-1_gimlri.png'
description: 'Using Javascript to create tiltable 3D elements'
number: 238
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1605535918/tips/238-2_pirgxg.gif 'Tiltable element')

What's up guys, how are you? 😁✌️

Today we'll check a really neat snippet to create tiltable 3D elements with CSS and JavaScript. Let's get to it!

So on our HTML we just have our 'box' div - the actual element that we will tilt - and inside it I have some random stuff - an heading and some spans.

```html
<div class="box">
  <div class="cross">+</div>
  <h1>webDev Tips</h1>
  <div class="balls">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
```

With Javascript, we'll start by creating two variables, one for referencing our 'box' element and another we'll store the result of using 'getBoudingClientRect()' on our 'box' element. This 'getBoudingClientRect' will return the size and position of the element.

```javascript
const box = document.querySelector('.box')
const boxRect = box.getBoundingClientRect()

box.addEventListener('mousemove', e => {
  const xPos = (e.clientX - boxRect.left) / boxRect.width
  const xOffset = -(xPos - 0.5)
  const dxNorm = Math.min(Math.max(xOffset, -0.5), 0.5)
  const yPos = (e.clientY - boxRect.top) / boxRect.height - 0.5
  box.style.transform = `perspective(1000px) rotateY(${dxNorm *
    45}deg) rotateX(${yPos * 45}deg) `
})

box.addEventListener('mouseleave', () => {
  box.style.transform = 'none'
})
```

Next, we need to add two event listeners on our 'box' element. The first will be on 'mousemove' and it will add some 'transforms' on the styles of our element to tilt it.
The second event listener will be on 'mouseleave' and it will unset the 'transform' property on our element, thus making it return to it's initial state.

Finally, on our CSS, we can pretty much style everything how we want to. We just need fo make sure that we add 'transform-style: preserve-3d' on our 'box' div!

```css
.box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 20em;
  background: linear-gradient(
    45deg,
    rgba(129, 37, 226, 1),
    rgba(174, 98, 255, 1)
  );
  transform: perspective(1000px);
  transform-style: preserve-3d;
  border-radius: 8px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transition: all 200ms ease-out;
}

.box h1 {
  color: #fff;
  font-size: 1.9rem;
  font-weight: 600;
  text-shadow: 0 0 22px rgba(0, 0, 0, 0.7);
  transform: translateZ(50px);
}

.balls {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
}

.balls span {
  display: inline-flex;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.1rem;
  border-radius: 25px;
  background: #ffffff;
  box-shadow: 0 0 22px rgba(0, 0, 0, 0.7);
  transform: translateZ(50px);
}

.cross {
  position: absolute;
  top: 0.8rem;
  right: 1.8rem;
  font-size: 2.3rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 0 22px rgba(0, 0, 0, 0.7);
  transform: translateZ(50px) rotate(45deg);
}
```

And that's it guys, let me know what you thought of this snippet 🤓👍
