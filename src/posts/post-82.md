---
path: "/tips/post-82"
date: "2019-10-26"
title: "Getting the user's position using the HTML Geolocation API"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587033377/tips/82-1_jazb1l.png'
description: 'How to use the HTML Geolocation API'
number: 82
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587033376/tips/82-fr_e7luca.png "Geolocation API")

How was your weekend guys? Hope you are having a nice start to the week!
Today we'll be talking about how we can easily get the user location without any external libraries or plugins. Just by using HTML's native Geolocation API.

Note that this will create a pop-up for the user asking for his permission to allow us tracking his location. Also note that, for security concerns, the usage of this API won't work if you try it on a local HTML file open in a browser. You have to test this online or by setting up a server. -
To start, we create two div elements, each one with a specific ID. This div's will be where we'll insert the user location once we get it.

```html
<body>

<div class="container">
    
    <div id="lat" class="coords"></div>
    <div id="long" class="coords"></div>
</div>

</body>

<script>
    var latEl = document.getElementById("lat");
    var longEl = document.getElementById("long");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(printCoordinates);
    }

    function printCoordinates(position){
        const {latitude, longitude} = position.coords
        latEl.innerHTML = `Your current latitude is <span>${latitude}</span>`;
        longEl.innerHTML = `Your current longitude is <span>${longitude}</span>`;
    }

</script>
 ```

Then, on a script tag, we first create two bindings for those two div's. Then, we check if the user has access to the Geolocation API. If so, we'll call the getCurrentPosition method and pass a function as argument. We then need to set this function that will have a 'position' argument. This 'position' will be automatically passed by the getCurrentPosition method.

Inside our function 'printCoordinates' we can use the 'position' object returned by the getCurrentPosition. In this object we have access to some properties related to Geolocation. In this case we are only using 'latitude' and 'longitude' so we'll extract those properties from 'position.coords'.
Finally, we just need to use those bindings we created earlier to change the innerHTML of the two div's and inside them put the coordinates!

 ```css
.wrapper{
    position: relative;
    margin: 100px;
}
.container{
    width: 100%;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
}

.coords{
    color: #424242;
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0;
}

.coords span{
    color: #8125E2;
}
 ```

And it's all! Super simple, right?
