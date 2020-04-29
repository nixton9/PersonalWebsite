---
path: "/tips/post-147"
date: "2020-02-26"
title: "How to write your first test for a React Component"
languages: ['React', 'Unit testing']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588141753/tips/147-1_mdwjky.png'
description: 'Unit Testing in a React component'
number: 147
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588141753/tips/147-2_nhbmzc.png "Unit Testing in React")

What's up guys? Hope you're having a productive day 👌  
Today i want to show you the basics on how to write your first test for a React Component.

Tests should help us believe that our application will always run smoothly. When refactoring a part of your application, you can break things you don't even consider. Tests will let you know about if you break something that has been tested so you can fix it instead of pushing breaking code to production.

We'll be using Create React App that already comes with Jest - a testing framework for JavaScript. With CRA we just need to create a 'tests' folder and put our tests files here or simply name our test files as 'filename.test.js'.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588141753/tips/147-3_zid9pq.png "Unit Testing in React")

For this example, i created a 'UsersList' Component. A very simple Component that just receives an array of users and displays them. If there's no users, it shows a message saying that.

Now, we create a 'tests' folder and inside it we create a file named 'UsersList.test.js'. Here we need to import React, 'shallow' - that will do a shallow render of our component and finally we import our component. We'll also create some mock data for the test.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588141753/tips/147-4_fwoatz.png "Unit Testing in React")

We now create a test suite - a group of tests. We do this with the 'describe' method, were we pass a string that will describe this test suite and then a function where we'll put all of our tests for this suite. -
For each test, we use the 'it' method, giving it a description and a function with the test itself. On the first test we just do a shallow render of our Component. If it renders, our test will pass, otherwise the test won't pass. On the second, we shallow render our Component with no users and we expect to find a message where it says that there are no users otherwise the test will fail.

On the third test, we shallow render our Component with users, and since we have two users, we expect our Component to have two 'li' there, one for each user.

After having our tests ready we just run 'npm test' on the terminal to find and run all tests. 
Good luck on your tests guys! 😎🔥


