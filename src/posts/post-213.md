---
path: '/tips/post-213'
date: '2020-08-19'
title: 'Hashing password in Node with Bcrypt'
languages: ['Node', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1597850566/tips/213-1_oehf2y.png'
description: 'How to hash and compare a password in Node with Cbrypt'
number: 213
status: true
---

How to hash a password using bcrypt 🔒

Today we'll check two ways of hashing a password and then checking if a given string matches that password. We'll doing this in node, using the bcrypt library.

With bcrypt we can do this in a synchronous and asynchronous way. We'll use the 'hash' method (or hashSync for synchronous) by passing it the string we want to hash, the number of rounds (we'll use 10 by default) and, when doing it asynchronous, we pass a function where we will have access to the hashed string.

```javascript
// Hashing and checking password in synchronous way

// Install bcrypt with 'npm install --save bcrypt
const bcrypt = require('bcrypt')

let hashedPassword = bcrypt.hashSync('asdf1234', 10)

if (bcrypt.compareSync('asdf1234', hashedPassword)) {
  console.log('Password matches!')
} else {
  console.log('Wrong Password')
}
```

The we'll use the compare method (or comparedSync if synchronous) to compare a string with the hashed string we got on the previous operation. We just need to pass both strings to it and, when doing it asynchronous, we pass a function where we will have access to the response if the strings match, or an error if they don't.

```javascript
// Hashing and checking password in asynchronous way

// Install bcrypt with 'npm install --save bcrypt
const bcrypt = require('bcrypt')

let hashedPassword
bcrypt.hash('asdf1234', 10, (err, hash) => {
  hashedPassword = hash
})

bcrypt.compare('asdf1234', hashedPassword, (err, res) => {
  if (res) {
    console.log('Password matches!')
  } else {
    console.log('Wrong Password')
  }
})
```

And that's basically it!  
Hope you liked it guys, take care 😁✌️
