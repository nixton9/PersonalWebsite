---
path: '/tips/post-253'
date: '2021-01-06'
title: 'How to access URL parameters with Javascript'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1609951965/tips/253-1_eb0e7x.png'
description: 'Acessing parameters in the URL with JS'
number: 253
status: true
---

What's up guys, how are you today? 🤓✌️

Today's tip is about accessing URL parameters with Javascript. This is really simple to do so let's get to it!

Take a look at code example. Let's say we are in a webpage with the url: localhost/index.html?id=30&option=3

```javascript
// PAGE URL: localhost/index.html?id=30&option=3

const searchParams = window.location.search
console.log(searchParams)
// ?id=30&option=3

const params = new URLSearchParams(searchParams)
console.log(params.get('id'))
// -> 30

if (params.has('option')) {
  console.log(params.get('option'))
  // -> 3
}
```

We have two parameters here: 'id' and 'option'. So, how can we get these values? By doing 'window.location.search' we get access to these parameters and their values, but in a continued string. If we wanted to extract the values, we would have to do some operations here.

Instead, we'll use 'new URLSearchParameters' and we will pass it 'window.location.search'. This will give us some neat methods to use on our URL query string.

Now, using the 'has' method we can check if a parameter exists and using the 'get' method we can easily retrieve the value assigned to a parameter!

And that's it! Let me know your thoughts on the comments 🤗
