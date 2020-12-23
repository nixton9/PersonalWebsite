---
path: '/tips/post-249'
date: '2020-12-23'
title: 'Dealing with dates in JS using date-fns'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1608737877/tips/249-1_pfk5v8.png'
description: 'Using date-fns in Javascript'
number: 249
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1608737878/tips/249-2_lmbchk.png 'date fns')

Using date-fns to deal with dates in Javascript.

What's up guys?
Dealing with dates in Javascript seems simple at first. But when you start doing some more advanced stuff with dates, things can get really messy, really quick. That's why I believe that our best option is just to use some library to do this for us.

There are two date utilities libraries that I really like: momentJS and date-fns. In this tip, we'll take a look at the later one.

Date-fns provides us with a set of simple and ready to use functions to deal with a lot of scenarios regarding dates. To use it, we first need to import the library (in this example I'm using their CDN link on a script tag).

```html
<div class="container">
  <h3>Today is <span id="date1"></span></h3>
  <h3>Yesterday was <span id="date2"></span></h3>
  <h3>Tomorrow will be <span id="date3"></span></h3>
  <h3>Is 20-11-2020 after 20-10-2020? <span id="date4"></span></h3>
  <h3>Is 11-12-2020 before 10-12-2020? <span id="date5"></span></h3>
  <h3>Is 02-10-2020 past? <span id="date6"></span></h3>
</div>
```

You can take a look at the example and see the different functions that I'm using here. The main one is 'format'. This will format a date with whatever format that we pass in to it. In this case I'm using the format 'dddd, DD of MM', where 'dddd' is the full day, 'DD' is the day of the month, and 'MM' is the full month.

```javascript
const NOW = new Date()
const dateFormat = 'dddd, DD of MMMM'

const date1 = document.getElementById('date1')
const date2 = document.getElementById('date2')
const date3 = document.getElementById('date3')
const date4 = document.getElementById('date4')
const date5 = document.getElementById('date5')
const date6 = document.getElementById('date6')

date1.innerHTML = dateFns.format(NOW, dateFormat)
date2.innerHTML = dateFns.format(dateFns.subDays(NOW, 1), dateFormat)
date3.innerHTML = dateFns.format(dateFns.addDays(NOW, 1), dateFormat)
date4.innerHTML = dateFns.isAfter(
  new Date(2020, 11, 20),
  new Date(2020, 10, 20)
)
date5.innerHTML = dateFns.isBefore(
  new Date(2020, 12, 11),
  new Date(2020, 12, 10)
)
date6.innerHTML = dateFns.isPast(new Date(2020, 10, 2))
```

Besides the 'format' function, I'm also using 'subDays' to subtract days from a date, 'addDays' to add days to a date, 'isAfter' to check if one date is after another date, 'isBefore' to check if a date is before another date and 'isPast' to check if a date has already passed.

And that's pretty much it. Take a look at their documentation if you want to find out more about this neat utilities library.

How about you? How do you usually deal with dates in Javascript? Let me know in the comments 🤗✌️
