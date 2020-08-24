---
path: '/tips/post-214'
date: '2020-08-24'
title: 'How to use the "focus-within" pseudo class'
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1598275130/tips/214-1_bpdsa6.png'
description: 'Using the "focus-within pseudo class in CSS'
number: 214
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1598275197/tips/214-2_qabsnq.gif 'CSS focus-within pseudo class')

Using the 'focus-within' pseudo class in CSS 💻

As the name says, the 'focus-within' pseudo class is active when a element within it is focused. This can be super advantageous when dealing with forms to create some cool effects and we can pretty much use it on any element.

```html
<div class="contact">
  <h2>Leave us a message!</h2>
  <form>
    <div class="input-wrapper">
      <input type="text" placeholder="Your name" />
    </div>
    <div class="input-wrapper">
      <input type="Email" placeholder="Your email" />
    </div>
    <div class="input-wrapper">
      <textarea placeholder="Your message"></textarea>
    </div>
    <button>Send</button>
  </form>
</div>
```

For this example I created a very simple contact form. Every input in it, is wrapped by a 'input-wrapper' div, and we'll use the 'focus-within' on this div.

```css
.input-wrapper {
  height: 4rem;
  margin-top: 3rem;
  font-size: 1rem;
  border-radius: 20px;
  box-shadow: rgba(113, 113, 113, 0.15) -5px -5px 11px, rgba(0, 0, 0, 0.15) 5px 5px
      11px;
  transition: all 0.15s linear;
}

.input-wrapper:focus-within {
  height: 6rem;
  font-size: 1.1rem;
}

.input-wrapper input,
.input-wrapper textarea {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: inherit;
  text-indent: 2rem;
  background-color: transparent;
  border: none;
}
```

In this example, we're increasing the height and font-size of the 'input-wrapper' element when the input or textarea inside it is focused and it creates this example that you can see on the preview. To do this we just need to write: .input-wrapper:focus-within { }

Hope you liked this simple but neat trick and give it a try! See you guys 😁👌
