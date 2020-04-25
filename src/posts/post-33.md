---
path: "/tips/post-33"
date: "2019-08-08"
title: "Fetching some data from an API in JavaScript with Fetch"
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586803755/tips/33-1_v0wupz.png'
description: 'Using fetch in Javascript to get data from an API'
number: 33
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586803754/tips/33-2_kpte0i.png "Fetch data from API")

Having to consume data from an API is a pretty common thing for web devs to do in most web applications. While there are several methods to achieve this - using native methods, external libraries, etc - I'll show you how to do this using the Fetch API, a web API.

In this example we'll use the Rick and Morty API to fetch some characters from the show and display them in a page. Look at the code to see how simple this is! We just use fetch() with the URL of the endpoint we want to access. This will return some data that we'll need to parse using json().

 ```html
<div class="parent flex-center">

    <h1>Rick and Morty Characters</h1>

    <div id="characters"></div>

</div>
 ```

From this we'll have access to the data object which we'll loop. In each of these loops we'll create a new div element, place a image of the character and the name of the character inside it and then append this div to our parent div#characters that we already have on our HTML.


 ```javascript
fetch('https://rickandmortyapi.com/api/character/')
    .then(results => results.json())
    .then(data => {
        data.results.map(character => {
            var div = document.createElement('div')
            div.classList.add('single-character')
            div.innerHTML = `<img src=${character.image} alt=${character.name} /><h3>${character.name}</h3>`
            document.getElementById('characters').append(div)
        })
    })
    .catch(error => console.log(error))
 ```
  Easily we can fetch some data from an API and present it on our page. Super awesome, right? 🔥