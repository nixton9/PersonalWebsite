---
path: '/tips/post-291'
date: '2021-05-19'
title: 'Using labels on if statements in Javascript'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1621435594/tips/291-1_lqlxub.png'
description: 'Javascript - If statements with label'
number: 291
status: true
---

Hello guys, how are you? 🤓✌️

Did you know that you can label if statements on JavaScript? I know I didn't! Basically, you can use these labels to give names to your if statements, and then you can use these names to reference them so you can, for example, break this if statement.

Honestly, I struggled a bit to find a good use case for this, but here is the example I chose: so I have this function 'assignColorToValue'. It receives a value and based on that value it return a color - either 'red', 'green', 'black' or 'grey'.

```javascript
const assignColorToValue = val => {
  let color

  checkVal: if (val != null) {
    console.log('checkIfNegative')
    if (Math.sign(val) === -1) {
      color = 'red'
      break checkVal
    }

    console.log('checkIfZero')
    if (Math.sign(val) === 0) {
      color = 'black'
      break checkVal
    }

    console.log('checkIfPositive')
    if (Math.sign(val) === 1) {
      color = 'green'
    }
  } else {
    color: 'grey'
  }

  return color
}

const color1 = assignColorToValue(-2)
console.log(color1)

// This will log the following output:
//    checkIfNegative
//    red
```

I have two examples using this same function. On the first I use the labels, on the second I'm not using any. On this first example, notice that the first if has 'checkVal:' before it - this is the actual label. Then, inside other ifs, I'm using 'break checkVal' to exit the main if statement.

```javascript
const assignColorToValueWithouLabel = val => {
  let color

  if (val != null) {
    console.log('checkIfNegative')
    if (Math.sign(val) === -1) {
      color = 'red'
    }

    console.log('checkIfZero')
    if (Math.sign(val) === 0) {
      color = 'black'
    }

    console.log('checkIfPositive')
    if (Math.sign(val) === 1) {
      color = 'green'
    }
  } else {
    color = 'grey'
  }

  return color
}

const color2 = assignColorToValueWithouLabel(-2)
console.log(color2)

// This will log the following output:
//    checkIfNegative
//    checkIfZero
//    checkIfPositive
//    red
```

Take a look at the output of both examples and see how they differ!

How about you? Have you ever used these labels on if statements? Do you know of a good use case for it? 🤗
