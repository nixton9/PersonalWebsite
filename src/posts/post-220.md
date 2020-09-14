---
path: '/tips/post-220'
date: '2020-09-14'
title: 'Validating data on inputs with the pattern attribute'
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1600093478/tips/220-1_edxybh.png'
description: 'Using the "pattern" attribute to validate inputs'
number: 220
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1600093713/tips/220-2_ibfgoz.gif 'HTML input pattern')

Using the 'pattern' attribute to validate inputs

What's up guys? Today we'll check a HTML tip on validating inputs by using the 'pattern' attribute.

The 'pattern' attribute lets us specify a regular expression that must be respected by the input value. So if a user types a value that doesn't fit this regular expression, it won't be submitted. This can be super handy for an initial layer of validation on a form as you'll make the user respect the mandatory types for each input.

```html
<form>
  <input
    type="text"
    placeholder="Has to contain 4 letters and no numbers"
    pattern="[A-Za-z]{4}"
  />
  <button>Send</button>
</form>

<form>
  <input
    type="password"
    placeholder="Has to contain 6 characters or more"
    pattern=".{6,}"
  />
  <button>Send</button>
</form>

<form>
  <input type="text" placeholder="Can only contain numbers" pattern="[0-9]+" />
  <button>Send</button>
</form>

<form>
  <input
    type="url"
    placeholder="Must start with https:// or http://"
    pattern="https?://.+"
  />
  <button>Send</button>
</form>
```

In here we have four examples, each one with a form and an input with different patterns: containing exactly 4 letters and no numbers, containing at least 6 characters, containing only numbers and starting with 'http://' or 'https://'. They are all pretty straightforward so just take a look to check how they are being implemented.

Let me know your thoughts on it! See you guys 😁✌️
