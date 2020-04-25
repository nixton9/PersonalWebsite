---
path: "/tips/post-29"
date: "2019-08-03"
title: "Using the ternary operator in JavaScript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586718446/tips/29-1_ozt7cy.png'
description: 'Understanding the ternary operator in Javascript and why it is so handy'
number: 29
status: true
---

The conditional ternary operator allows you to do an if/else condition in a much cleaner way. It's a simple way to help you improve the readability and size of your code by shortening some of your conditional blocks.

The syntax is pretty straightforward: 'someCodidition' ? 'do this if true' : 'do this if false'. Look at the example to easily understand how to replace a typical if/else with the ternary method.

 ```javascript
var val = 6
        
//TRADITIONAL METHOD
if(val > 5){
    console.log('above 5')
}
else{
    console.log('bellow 5')
}


//USING TERNARY OPERATOR
val > 5 ? console.log('above 5') : console.log('bellow 5')



//TRADITIONAL METHOD
if(val%2 === 0){
    if(val > 10){
    console.log('even & above 10')
    }
    else{
    console.log('even % bellow 10')
    }
    console.log('above 5')
}
else{
console.log('not even')
}


//USING TERNARY OPERATOR
val%2 === 0 ? (val > 10 ? console.log('even & above 10') : console.log('even % bellow 10')) : console.log('not even')
 ```

You can also use it to assign a var, for example. Here is how: 'var result = someArray.length > 0 ? someArray : "no results" '
In this case we would set the var result to be equal to 'someArray' if someArray had elements. If someArray was empty we would set the var result to the string "no results".  
Hope this will be helpful for you!