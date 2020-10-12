---
path: '/tips/post-228'
date: '2020-10-12'
title: 'Getting to know the different data types in Javascript'
languages: ['JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1602518179/tips/228-1_xwonxn.png'
description: 'Data types in Javascript'
number: 228
status: true
---

Happy Monday guys 😁✌️

Today we have a pretty simple tip on the different data types in Javascript. It's always important to make sure we know the basics, right?

Basically there 8 data types: 7 primitive and 1 non-primitive. The only non-primitive type is 'object' and we use it for more complex data structures (objects, arrays, functions...)

We can check the type of a variable by using the 'typeof' operator. Check the example to see the different data types and how we can use this 'typeof' operator to get the data type for each const.

```javascript
const isString = 'webDev Tips'
console.log(typeof isString) // -> string

const isNumber = 1231
console.log(typeof isNumber) // -> number

const isBigInt = 43248204284204284294024324247924242n
console.log(typeof isBigInt) // -> bigint

const isBoolean = true
console.log(typeof isBoolean) // -> boolean

const isUndefined = undefined
console.log(typeof isUndefined) // -> undefined

const isNull = null
console.log(typeof isNull) // -> object

const isObj = { id: 2, name: 'John Doe' }
console.log(typeof isObj) // -> object

const isSymbol = Symbol('sym')
console.log(typeof isSymbol) // -> symbol

const isArray = ['banana', 'apple', 'peach']
console.log(typeof isArray) // -> object
```

Let's quickly go through each data type:

The string is used to represent textual data.  
The number type is used to represent integers, floating-point numbers, +Infinity, -Infinity and NaN.  
The bigint type is the most recent one here and it's used for large integers that the type number cannot represent.

The boolean type represents only one of two values: true or false.  
The undefined type only represents the value 'undefined' when a variable has not been assigned a value.  
The null type only holds the 'null' value and it represents 'nothing'. Due to a bug in Javascript, 'typeof null' returns 'object' instead of 'null'.

The object type, as said previously, is the only non-primitive data type and it's used to store collections of data.  
The symbol type represents a unique identifier.

Finally, on the last example we have an array. As you can see, using the 'typeof' operator with an array also returns 'object'. This is right since array is not it's own data type.

And that's all! Let me know your thoughts 🤓🙏
