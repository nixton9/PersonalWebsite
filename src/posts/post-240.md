---
path: '/tips/post-240'
date: '2020-11-23'
title: 'Calculating word frequency in a string with Javascript'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1606147241/tips/240-1_mfw8bx.png'
description: 'Count the number of times a word appears in a string with JS'
number: 240
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1606147291/tips/240-2_bbbffc.gif 'Word count')

Hey guys, what's up? 😁✌️

Today we'll check a simple JavaScript snippet to calculate the number of times that a specific word appears in a string.

We'll start by inserting some random text on a 'p' element and we also need to create an input to insert the search word, a button to submit this input and an empty element where we'll append our results.

```html
<p id="text">
  But I must explain to you how ...
</p>

<input id="input" type="text" placeholder="Write a word" />
<button id="button">Check</button>

<h3 id="results"></h3>
```

Now, on our Javascript, we'll start be creating some references for all of the elements that we created on our HTML. Next we will create the function that will check the word frequency.

```javascript
const text = document.getElementById('text')
const input = document.getElementById('input')
const button = document.getElementById('button')
const results = document.getElementById('results')

function checkWordFrequency() {
  const word = input.value
  const regExp = new RegExp(word, 'gi')
  const matches = text.textContent.match(regExp)
    ? text.textContent.match(regExp).length
    : 0
  results.innerHTML = `The word <span>${word}</span> appears ${matches} times in this text`
}

button.addEventListener('click', checkWordFrequency)
```

This function will get the input value, create a global regular expression with it , and then apply this regular expression on a 'match' method that we will call on our text.

Finally we just need to add a click event listener on our button to execute this function and then style everything how we want to.

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
  background: #4605ff;
  color: #fff;
  font-weight: 700;
  padding: 1rem;
  min-height: 3.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
}

h3 {
  margin-top: 3rem;
  font-weight: 600;
  color: #424242;
}

h3 span {
  color: #4605ff;
  font-weight: 800;
}
```

And that's it! Let me know if you liked this tip! 🤗🙏
