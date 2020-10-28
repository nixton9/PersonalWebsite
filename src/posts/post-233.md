---
path: '/tips/post-233'
date: '2020-10-28'
title: "Hiding elements in HTML with the 'hidden' attribute"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1603900947/233-1_dwa6pr.png'
description: 'HTML hidden attribute'
number: 233
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1603901166/233-2_vw6oip.gif 'HTML hidden attribute')

How are you guys? All good? 😁✌️

Today we'll take a look at the 'hidden' attribute in HTML - an attribute that, as the name says, makes an element hidden if set to true-. This can be a simple and neat replacement to using 'display: none' on the style of an element.

Let's check how we can use this. I provided two simple examples: the first shows how we can use this in plain HTML and the second shows how we can use some logic in Javascript to make an element hidden.

To simply use this in HTML we just need to add 'hidden' to your element.

```html
<button onclick="toggle()">Toggle</button>
<h1 id="title">webDev Tips</h1>
```

On the second example we have an h1 element with the id 'title' and a button with an onclick function 'toggle()'. On Javascript, we'll create a reference for our title and we will create a variable 'show' with the value 'true'. Now we'll create the 'toggle' function that will just two two things: change the current value of 'show' to its opposite (false to true or true to false) and based on the current value of 'show' we'll either add the 'hidden' attribute to our title element or we will remove it!

```javascript
const el = document.getElementById('title')
let show = true

const toggle = () => {
  show = !show
  show ? el.removeAttribute('hidden') : el.setAttribute('hidden', 'true')
}
```

And that's pretty much it! Hope you liked this tip and let me know your feedback 🤗🙏
