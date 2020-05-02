---
path: "/tips/post-161"
date: "2020-03-30"
title: "How to use the 'bind' function in Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588361256/tips/161-1_cptlgr.png'
description: 'Using the bind function in Javascript'
number: 161
status: true
---

Hello guys 😀  
Today we'll take a look and how we can use bind ( ), a very powerful method, in JavaScript.

With bind, we can create a new function that will let us do two things: change the 'this' inside it and fix parameters on it. Don't worry if this doesn't make much sense to you, it will get clearer with the two examples provided.

 ```javascript
 
 // Using bind to pass 'this'
var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.getFullName())
// -> John Doe


var henry = {
    firstName: 'Henry',
    lastName: 'Kramer'
}

var getHenryFullName = person.getFullName.bind(henry)

console.log(getHenryFullName())
// -> Henry Kramer

 ```

**First slide**   
So we have an object 'person' with some properties and a method that will return the properties (firstName and lastName). On this method, see that we use those properties by using 'this'. In here, 'this' will refer to the object itself - 'person'.

Now we create another object 'henry' with the same properties. We want to use the method 'getFullName' from the 'person' object. To do this we call that method with bind. Bind expects an argument that is the new 'this'. So we pass 'henry' and with it, the 'this' inside the 'getFullName' will refer to 'henry' and not to 'person'.

 ```javascript
 
 // Using bind to pin parameters in a function

var multiplyByX  = function(x, num) {
    return num * x
}

console.log(multiplyByX(3, 5))
// -> 15


var multiplyBy4 = multiplyByX.bind(this, 4);

console.log(multiplyBy4(2));
// -> 8
console.log(multiplyBy4(10));
// -> 10

 ```

**Second slide**  
We have a 'multiplyByX' function that receives 'x' and 'num' and will multiply both values. Then, with bind, we create a new function 'multiplyBy4' where we pass 'this' (it doesn't matter much here) and we pass '4'. This will pin '4' as the first argument of the 'multiplyByX' function - in this case the 'x' argument.

So now, when we call this new function, 'x' will always be 4 and we just have to pass the 'num' argument!  
Hope this made sense and let me know your doubts! 🤓🙏