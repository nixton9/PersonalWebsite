---
path: "/tips/post-128"
date: "2020-01-20"
title: "Using the Javascript debugger keyword to debug your scripts"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587592074/tips/128-1_yt5q8s.png'
description: 'How to use the Javascript debugger'
number: 128
status: true
---

`youtube: https://www.youtube.com/embed/cMn6JMD2dmo`

Heyy, hope you're having a great start to the week guys!  
We'll start our week with a handy JavaScript tip: the debugger statement.

So what is this debugger statement? Basically, and obviously, the debugger can help us with the debugging process. Let's say we have a random block of code with some normal instructions and we place a 'debugger' in the middle. When we run this code, the debugger will stop the execution of the JavaScript as soon as we get to that line, acting like a breakpoint.

On the browser, we will see the page completely paused there and we will have access to different stuff. We are able to see all the variables and their values on the current scope. This is great for debugging because we can see, at any given time what a specific value is and why something may be breaking in our application.

Another thing we have access here is the current call stack. This means we can see in what function we are right now, and what other functions called the current one.

 ```javascript

let val1 = 230;
let val2 = 450;

let string1 = 'random string';
let string2 = 'Webdev Tips';

function sayHi(name) {
    const greeting = `Hey ${name}!`;
    debugger;
    console.log(greeting);
    changeValues();
}

function changeValues() {
    val1 = 200;
    val2 = 400;
    string1 = 'This is the first string';
    string2 = 'This is the second string';
    debugger;
    sayBye();
}

function sayBye() {
    debugger;
    console.log('Bye bye!');
}


sayHi('John');

 ```

On the example, i have a script with completely random code: some values and some functions that call each other. I then proceed to change these values in a random way and i place three debuggers on different places. We can see what happens on each one of them and we can see the values on the current scope changing and also the call stack changing accordingly.

Overall this is a great tool to help us developers debug our code, way better in most cases then to simply use console logs to debug our applications.