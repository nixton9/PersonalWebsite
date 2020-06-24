---
path: '/tips/post-196'
date: '2020-06-24'
title: 'How to copy text to the clipboard with Javascript'
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1593012434/tips/196-1_rqkkwv.png'
description: 'Using JS to copy text to the clipboard'
number: 196
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1593012442/tips/196-2_zahgd7.gif 'Copy to clipboard')

What's up guys, how are you? 😁👊

Today we'll check a little snippet that lets us copy text to the clipboards using some simple Javascript.

```html
<div class="box">
  <p id="content">Click on the icon to copy this to the clipboard!</p>
  <i onclick="copy()" class="far fa-copy"></i>
</div>

<div class="box">
  <input type="text" />
</div>
```

To do this, we'll start by creating an element where we will have the text we want to copy and give it a 'content' ID to then be able to select it on our JS. Then, we'll create some sort of button where we will execute the function to copy when clicked.  
For demo purposes, I'm adding an empty input just to paste the result of the copy.

```javascript
function copy() {
  var content = document.getElementById('content').innerHTML
  var el = document.createElement('textarea')
  el.value = content
  el.setAttribute('readonly', '')
  el.style = { position: 'absolute', left: '-9999px' }
  document.querySelector('body').appendChild(el)
  el.select()
  document.execCommand('copy')
  alert('Copied!')
  docu
  ment.querySelector('body').removeChild(el)
}
```

Now on our Javascript, we'll create the copy function. In it, we first need to grab the text we want and save it on a var.
Then, the trick to create this copy functionality is to dinamically create a 'textarea' element, set it as 'read only', place it outside of the view and set our text as its value. We'll then 'select' this textarea and use the method 'execCommand' with the 'copy' argument. This will copy the text to the clipboard. Finally, we can remove the textarea from the body of our document.

And we are done! Super easy, right? 🤓🔥
