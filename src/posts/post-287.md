---
path: '/tips/post-287'
date: '2021-05-05'
title: "How to use the 'every' and 'some' array methods in JS"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1620215342/tips/287-1_mpheoo.png'
description: 'Javascript - every and some array methods'
number: 287
status: true
---

Hey guys! 😁✌️

Today we'll check some basic examples on how we can use the 'every' and 'some' array methods in Javascript.

Both methods are super straightforward to use and, unlike array methods like 'filter', 'map' , 'sort', etc, they both return a boolean - either true or false.

The name of each method pretty much describes what it does. The 'every' method returns true if all the items on an array pass a given condition, otherwise it will return false.

On the snippet we first check if every user has 'HTML' on their languages array. Since all of them have it' will return true. Then we do the same with 'CSS' which will return false since not all users have it.

```javascript
const users = [
  {
    id: 1,
    name: 'John',
    languages: ['HTML', 'CSS', 'JS', 'PHP'],
  },
  { id: 2, name: 'Erick', languages: ['HTML', 'CSS', 'C#'] },
  { id: 3, name: 'Megan', languages: ['HTML', 'PHP'] },
  { id: 4, name: 'Anthony', languages: ['HTML', 'CSS', 'JS'] },
  {
    id: 5,
    name: 'Diana',
    languages: ['HTML', 'CSS', 'Python', 'Java'],
  },
]

const doAllUsersKnowHTML = users.every(user => user.languages.includes('HTML'))
console.log(doAllUsersKnowHTML) // -> true

const doAllUsersKnowCSS = users.every(user => user.languages.includes('CSS'))
console.log(doAllUsersKnowCSS) // -> false

const doSomeUsersKnowPython = users.some(user =>
  user.languages.includes('Python')
)
console.log(doSomeUsersKnowPython) // -> true

const doSomeUsersKnowGO = users.some(user => user.languages.includes('GO'))
console.log(doSomeUsersKnowGO) // -> false
```

On the other hand, 'some' will return true if at least one of the items on an array passes a given condition. If none the items pass this condition it will return false.

So on the example we first check if some user has 'Python'. Since one of them has it' it will return true. We then check if some user has 'GO' and since none of the users has it, it will return false.

And that's pretty much it. Let me know if you have any doubts 🤗🙏
