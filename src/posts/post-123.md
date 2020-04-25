---
path: "/tips/post-123"
date: "2020-01-11"
title: "How to compare two objects in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587590744/tips/123-1_ukvqfd.png'
description: 'Comparing objects in Javascript'
number: 123
status: true
---

How is your weekend going so far? 😁
We'll see today how we can compare two objects in plain JavaScript without using some external libraries like Loadash.

So I decided to make this tip because some time ago I had this exact question on a job interview and honestly I couldn't get it 100% right. I knew that you couldn't just do something like ' object1 === object2 ' but I wasn't sure on what was the best way to do this. So, in case some of you also face this on future interviews I thought of showing on we can do this!

 ```javascript
 
const obj1 = {
    name: 'John Doe',
    age: 45,
    country: 'USA'
}

const obj2 = {
    name: 'John Doe',
    age: 45,
    country: 'USA'
}

console.log(obj1 == obj2) // -> false
console.log(obj1 === obj2) // -> false


console.log('-------------------------')


const obj3 = {
    name: 'Eric B',
    age: 35,
    country: 'England'
}

const obj4 = {
    name: 'Eric B',
    age: 35,
    country: 'England'
}


const matches = (firstObj, secondObj) => (
    Object.keys(secondObj).every(key => (
        firstObj.hasOwnProperty(key) && firstObj[key] === secondObj[key]
    ))
)

console.log(matches(obj3, obj4)) // -> true

 ```

On the first example we see what doesn't work. We have two objects that are equal and have exactly the same properties and values but still, if we compare them with ' == ' or ' === ' then we'll get false on both cases. This happens because 'obj1' and 'obj2' will only be a reference to a location in memory, and since these two references are different then the comparison fails.

To actually be able to compare two objects we can use something like this 'matches' function that we've created on the second example. This function will receive two objects as parameters. Then, it will loop over every property of the second object with (Object.keys.every) and see if the first object has this same property and if the value is the same. If this is the case for every property then the function will return true otherwise it will return false. And this is how we can actually compare two objects!

Hope you liked this tip and if in the near future you get asked this question on a job interview I sure hope you deal with it better than I did 😂😂