---
path: '/tips/post-199'
date: '2020-07-01'
title: 'How to use the new Nullish Coalescing operator in JS'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1593618719/tips/199-1_kab2ha.png'
description: 'Nullish Coalescing opeator - ES2020'
number: 199
status: true
---

What's up guys, how are you doing? 😁  
Today we'll check a new feature brought to Javascript on ES2020: the nullish coalescing operator - '??'

This gives us the ability to check if a value is nullish instead of simply checking if it's falsey. A falsey value can be: 0, ' ', null, undefined, false, NaN.
A nullish value can only be 'null' and 'undefined'.

In practice, this can be really handy, because there a lot of times when we want to cross these values out but still allow other values like '0' or empty string.
On the code snippet we first see a lot of examples where we are doing a console.log of a falsey value if it's not nullish, otherwise we'll log 'value is nullish'.

```javascript
const val1 = ''
const val2 = false
const val3 = 0
const val4 = null
const val5 = undefined

// We'll log the value if is not nullish only
console.log(val1 ?? 'val1 is nullish') // ->
console.log(val2 ?? 'val2 is nullish') // -> false
console.log(val3 ?? 'val3 is nullish') // -> 0
console.log(val4 ?? 'val4 is nullish') // -> val4 is nullish
console.log(val5 ?? 'val5 is nullish') // -> val5 is nullish

// More practical example
const gradeA = null
const gradeB = null
const gradeC = 10

const grade = gradeA ?? gradeB ?? gradeC ?? 0

console.log(grade) //-> 10
```

Then we have a more practical example where we have three consts - two of them are null and the third points to '10'.
Next we create a new const 'grade' that will point to the value of 'gradeA' if this is not nullish, otherwise it will point to 'gradeB' if this is not nullish, otherwise it will point to 'gradeC' if this is not nullish, otherwise it will point to '0'.
In this case only 'gradeC' is not nullish so 'grade' will point to '10'.

And that's it! Hope you liked it and give it q try! See you guys 😎🤘
