---
path: "/tips/post-129"
date: "2020-01-22"
title: "How to control the way a image fits into its box with 'object-fit'"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587592281/tips/129-1_j3tela.png'
description: 'Controlling the look and aspect of an image in its box with object-fit'
number: 129
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587592282/tips/129-2_ygeujz.png "CSS object-fit")

How are you doing guys? 🤘  
Today i want to show you a very neat CSS property that i just discovered recently: object-fit.

Looking at the W3Schools description, the object-fit property is used to specify how an 'img' or 'video' should be resized to fit its container.
Basically, and for most cases, it helps us control how an image should fit its box.

It's pretty common for us to throw an image inside an element that has specified width and height, and the image's aspect ratio will be destroyed. Using object-fit we can control exactly this!

 ```html
 
     <div class="container">

        <div class="img-container">
            <h2>No object-fit</h2>
            <img src="1.jpg" alt="Mountains" />
        </div>

        <div class="img-container ">
            <h2>object-fit: cover</h2>
            <img src="1.jpg" alt="Mountains" class="cover"  />
        </div>

        <div class="img-container ">
            <h2>object-fit: contain</h2>
            <img src="1.jpg" alt="Mountains" class="contain"  />
        </div>

    </div>

    <div class="container">

        <div class="img-container">
            <h2>object-fit: none</h2>
            <img src="1.jpg" alt="Mountains" class="none" />
        </div>

        <div class="img-container ">
            <h2>object-fit: fill</h2>
            <img src="1.jpg" alt="Mountains" class="fill"  />
        </div>

    </div>

 ```

Look at the example. We have a container arround the images, that has a specified width and height. To even, make things worst, our image has an aspect ratio that's the opposite of the container element. You can see the image getting all messed up on the first example where we are not using the 'object-fit' property.

 ```css
 .container{
    display:flex;
    align-items:center;
    justify-content: center;
    margin: 55px 0;
}

.img-container {
    position: relative;
    width: 325px;
    height: 200px;
    margin: 0 35px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 4px;
}

img {
    width: 250px;
    height: 100%;
    width: 100%;
    border-radius: 4px;
}

.cover {
    object-fit: cover;
    object-position: 50% 65%;
}
.contain {
    object-fit: contain;
}
.none {
    object-fit: none;
}
.fill {
    object-fit: fill;
}

h2 {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    color: #212121;
}
 ```

Now, look at the different examples and you cab easily see how the difference 'object-fit' values affect our image and how we can easily get way better visuals on our pages just by using this!  
Hope you liked this tip guys! Have you ever used this? 🤓🤔