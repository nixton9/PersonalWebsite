---
path: '/tips/post-217'
date: '2020-09-02'
title: 'Using the Array find() method in Javascript'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1599068516/tips/217-1_yupqsv.png'
description: 'How to use the find() method in Javascript'
number: 217
status: true
---

Hey there 😁✌️

Today we'll take a look at the 'find()' method in Javascript. This method works with arrays and it returns the first element in an array that meets the criteria that we pass as a function.

Having to do this is pretty common so this is a super handy method to use, even though there other ways of doing this.
If we want to, for example, to get the first element in an array that has the string 'banana', we just need to do: 'array.find(el => el === 'banana')'

```javascript
const users = [
  { id: 1, name: 'John', email: 'john@gmail.com', age: 17 },
  { id: 2, name: 'William', email: 'william@gmail.com', age: 26 },
  { id: 3, name: 'Thomas', email: 'thomas@gmail.com', age: 37 },
  { id: 4, name: 'Daniel', email: 'daniel@gmail.com', age: 18 },
  { id: 5, name: 'James', email: 'james@gmail.com', age: 15 },
]

const nameJohn = users.find(user => user.name === 'John')
console.log(nameJohn) // -> {id: 1, name: "John", email: "john@gmail.com", age: 17}

const id4 = users.find(user => user.id === 4)
console.log(id4) // -> {id: 4, name: "Daniel", email: "daniel@gmail.com", age: 18}

const under18 = users.find(user => user.age < 18)
console.log(under18) // -> {id: 1, name: "John", email: "john@gmail.com", age: 17}

const over18 = users.find(user => user.age >= 18)
console.log(over18) // -> {id: 2, name: "William", email: "william@gmail.com", age: 26}
```

On the code snippet we have an array with some users. Each user is an object that has some properties. Then we have some examples showing how we can use 'find()' to get different users based on some properties. Notice that even in cases where more than one user meet the criteria we pass, only the first one is returned!

Give this a try!
See you guys, take care 🤗🙏
