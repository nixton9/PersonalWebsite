---
path: '/tips/post-278'
date: '2021-04-05'
title: "Fixing 'cannot read property x of undefined' in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1617637412/tips/278-1_adfg9i.png'
description: "How to fix 'cannot ready propert x of undefined' in Javascript"
number: 278
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1617637412/tips/278-2_eqzsys.png 'Javascript')

Happy Monday guys, hope you are doing well! 🤓✌️

Today's post is more intended for beginners as it's about an error that we see often when working with Javascript - cannot read property 'x' of undefined.

If you work with Javascript, you surely have seen this before - more than once! This error can be caused by different scenarios, but usually it's simple to fix. In here I'll show two examples of code that can produce this error, and how to fix it.

On the first example we have an array of users, where each user is an object. Each user object is the same as the other, but the last one doesn't have the 'work' property. So, when we try to map our users and log their company, we will get this error once we reach the user that doesn't have the 'work' property.

```javascript
// 1st Example
const users = [
  {
    name: 'John Doe',
    age: 30,
    country: 'USA',
    work: {
      industry: 'Tech',
      company: 'Google',
    },
  },
  {
    name: 'June Harris',
    age: 45,
    country: 'England',
    work: {
      industry: 'Tech',
      company: 'Facebook',
    },
  },
  {
    name: 'Tracey Curtis',
    age: 25,
    country: 'Norway',
  },
]

// This code will produce error - Cannot read property 'company' of undefined
users.forEach(user => {
  console.log(user.name)
  console.log(`Works at ${user.work.company}`)
})

// One way to fix it is:
users.forEach(user => {
  console.log(user.name)
  user.work && console.log(`Works at ${user.work.company}`)
})
```

And this is the number one cause for this error - simply calling a property on an object that doesn't exist or is not defined. So if you see ' cannot read property 'name' of undefined' go check your code and find where are you calling '.name' and make sure the object where you're calling this property actually exists and it's defined. A simple way to fix this is by adding a simple validation before, such as 'if (object && object.name)'.

The second example shows a scenario where beginners tend to fall a lot: async operations. Imagine you're fetching some data and you expect to get an object that has a 'res' property inside. If you try to log this property straight away you may face this error. This happens because you're doing an async operation and when you try to log this data, the fetching hasn't completed yet.

```javascript
// 2nd Example

// This code will most likely return - Cannot read property 'res' of undefined
const data = someAsyncOperation()
console.log(data.res.users)

// We should instead do this
someAsyncOperation().then(data => console.log(data.res.users))
```

There are several ways of fixing this. One of those, is to simply turn your fetching operation into a promise and just use 'then' to log your data. This way you'll always make sure to log the data after the fetching is done.

And that's it! Do you know any other scenarios where this error can arise? And how do you fix it?
