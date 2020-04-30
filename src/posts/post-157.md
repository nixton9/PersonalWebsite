---
path: "/tips/post-157"
date: "2020-03-20"
title: "Fetching data from a REST API in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1588229683/tips/157-1_u2zgyo.png'
description: 'How to fetch data from an API in React with axios'
number: 157
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1588229685/tips/157-2_pfqpli.png "Fetching data in React")

What's up guys, how are things going? 😎  
Today's tip is a simple one, on how we can fetch data from an API in React. This is something handy and that's pretty frequent for us to do. For this example, i decided to use the 'Rick and Morty API' because it's super easy to use, and we don't need any keys to use it. So, we'll fetch some characters from this API and show them in our UI.

In order to do this, we'll use 'axios' - a promise based HTTP client that we'll use to do these requests to an API. So first, we need to install by doing 'npm install axios'.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1588229684/tips/157-3_n6xkd4.png "Fetching data in React")

Then, we'll create our Component where we'll fetch the data. We'll start by importing the stuff we'll need and we'll also require 'axios'. Then, using the 'useState' hook we'll create a state property for the characters that we will fetch.

We'll create a 'getCharacters' function and this is where we'll fetch the data. With axios, we just need to use the 'get' method and pass it the url of the endpoint we want to request. We'll then grab the response from this and store it on our 'characters' state property.

Now we just need to use the 'useEffect' hook to run this function. This will make sure the function runs once the Component mounts.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1588229685/tips/157-4_g1rf07.png "Fetching data in React - CSS")

Finally, we just need to create our UI with the data that we now have. So basically, we start by checking if we already have 'characters', just checking its length. If we don't have any, we'll show a 'loading' message. If we do have, we'll map them, creating a div with the image of the character as the background and the name inside. -
Hope you liked this tip and let me know if you have any doubts! 😀✌️🎉

