---
path: "/tips/post-5"
date: "2019-07-07"
title: "How to optimize your for loops just by changing one thing"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586556397/tips/5_-_1_tw4ypi.jpg'
description: 'Optimizing for loops in Javascript'
number: 5
status: true
---


Decided to do the first JS tip today and thought that i started with a little optimization tip that i learned a while ago. This is useful for cases where you are using a for loop to loop through an array and do something with it.
Obviously, the results will be more noticeable when dealing with huge arrays, so i created a really big one to test the performance of this tip.

When we're looping through an array with a for loop we usually do the same as the first method (see the first for loop in the 2nd picture). What we're doing 'wrong' is that our condition for this loop is 'i < myArr.length'. This causes a property lookup - myArr.length - at every iteration of the loop. This is something small, but in a big loop it starts making a difference.


 ```js
var myArr = []
for(var i=0; i<1e6; i++){
    myArr.push(i)
}


console.time('firstTimer')
var firstCounter = 0
for(var i=0; i<myArr.length; i++){
    firstCounter++
}
console.timeEnd('firstTimer')



console.time('secondTimer')
var secondCounter = 0
for(var i=0, arrLength = myArr.length; i<arrLength; i++){
    secondCounter++
}
console.timeEnd('secondTimer')

 ```

See the second method provided and notice that to improve this we just need to save the 'myArr.length' in a var - in this case 'arrLength'. Then, in the condition, we just need to compare 'i' with 'arrLength' thus not causing a property lookup in every iteration.

On the 3rd picture i show you how to test the difference between both methods. In order to do this i start by creating an array with 10000000 elements in it. This will be big enough to compare the results. Then, i'm executing both for loops (the 'normal' one and the 'improved' one) with just a simple counter inside them. Around each for loop i have a 'console.time' and 'console.timeEnd'. This will show us the time passed between both functions allowing us to see the time it took for each of the for loops.

Finally, on the 4th picture i just show the output that we can see on the console when running this code. The first method took approximately 10.6s ms and the second one - the one with the improvement -  took approximately 3.4ms to complete. That's definitely a better result that should be taken into consideration and show us that we should try to always use the second, most efficient method.  
Hope you guys liked this first JS tip, i'm planning to make some more. 👍