---
path: '/tips/post-250'
date: '2020-12-28'
title: 'Highlighting keywords in a string with Javascript'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1609171664/tips/250-1_zswt9l.png'
description: 'How to do word highlighting with JS'
number: 250
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1609171721/tips/250-2_dag3vc.gif 'JS highlight word')

Hey guys, hope you had an amazing Christmas 🤗

Today we will check how to highlight keywords in a string using JavaScript! It's really simple to do it, so let's dive into it. We'll start by creating some long text where we'll find our keywords, an input to type the keywords and a submit button.

```html
<p id="text">
  But I must explain to you how all this mistaken idea of denouncing pleasure
  and praising pain was born and I will give you a complete account of the
  system, and expound the actual teachings of the great explorer of the truth,
  the master-builder of human happiness. No one rejects, dislikes, or avoids
  pleasure itself, because it is pleasure, but because those who do not know how
  to pursue pleasure rationally encounter consequences that are extremely
  painful. Nor again is there anyone who loves or pursues or desires to obtain
  pain of itself, because it is pain, but because occasionally circumstances
  occur in which toil and pain can procure him some great pleasure.
</p>

<input id="input" type="text" placeholder="Word to highlight" />
<button id="button">Highlight</button>
```

Now, using JS, we'll create the function 'highlightWord' and assign it to our submit button, when clicked. This function will basically check if we have any value on our input. If so, we'll create a regular expression with the keyword on the input and we will replace it on the text by the same keyword, but with the tag 'mark' around it .

```javascript
const text = document.getElementById('text')
const originalText = text.innerHTML
const input = document.getElementById('input')
const button = document.getElementById('button')

function highlightWord() {
  if (input.value) {
    const word = input.value.trim()
    const regexp = new RegExp(word, 'g')
    text.innerHTML = originalText.replace(regexp, `<mark>${word}</mark>`)
  }
}

button.addEventListener('click', highlightWord)
```

And that's pretty much it. The 'mark' tag will automatically style our keyword with that yellow highlight.

```css
p {
  color: #212121;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.9rem;
  margin-bottom: 3rem;
}

input {
  min-width: 20rem;
  border: none;
  background: #eeeeee;
  font-size: 1.1rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 4px;
  margin-right: 1rem;
  min-height: 3.5rem;
  color: #212121;
}

button {
  border: none;
  background: #8125e2;
  color: #fff;
  font-weight: 700;
  padding: 1rem;
  min-height: 3.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
}
```

Super simple, right? Let me know your thoughts on the comments 😁✌️
