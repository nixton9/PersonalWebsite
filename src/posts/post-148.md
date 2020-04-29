---
path: "/tips/post-148"
date: "2020-02-28"
title: "Creating a clock from scratch with Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588142114/tips/148-1_zam0s7.png'
description: 'How to create a clock from scrach with Javascript'
number: 148
status: true
---

`youtube: https://www.youtube.com/embed/bH_CVFq2KsQ`

Happy Friday guys 😎🔥  
Hope you are having a productive day! For today's tip we'll see how we can easily create a clock with some JavaScript!

Creating a clock with JavaScript is super simple. We basically just need to get the current date, extract the hours, minutes, seconds from this date, append all this stuff to an element and finally, we need make sure we run this every second so our clock is constantly updating. Let's follow this steps.

 ```html
 
<div id="clock"></div>

 ```

We start by creating an element with the id 'clock' and we save a reference to it on a variable. Next, we get the current date with 'new Date( )' and use the methods 'getHours', 'getMinutes' and 'getSeconds' to grab the current hour, minute and second.

 ```javascript
 
const showClock = () => {
    const clock = document.getElementById('clock');
    let currDate = new Date();

    let h = currDate.getHours();
    let m = currDate.getMinutes();
    let s = currDate.getSeconds();

    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    clock.innerText = `${h}:${m}:${s}`;

    setTimeout(showClock, 1000)
}
showClock();

 ```

Now, since our minutes and seconds will not have a zero to the left if they are smaller than 10, we need to check this and add that zero if necessary.
Then, we create a string displaying the hours, minutes and seconds and we append it to our clock element.

 ```css
 
#clock {
    font-size: 28px;
    color: #007EFF;
    font-weight: 600;
    padding: 40px 55px;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

 ```

Finally, we create a setTimeout to run this same function we're in every second. And now we just need to execute our function and we're done! 😁  
Hope you liked this tip guys, let me know your thoughts! 👌🤓

