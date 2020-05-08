---
path: "/tips/post-90"
date: "2019-11-11"
title: "Using some basic JS to create a simple image slideshow"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587074233/tips/90-1_cbirkb.png'
description: 'Creating an image slideshow with some basic Javascript'
number: 90
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588789223/tips/90-2_ngnbdt.gif "Javascript slideshow")

So today, for the first time, I have a tip that partially comes from another user. @housee47 came to me with this cool slideshow made in JavaScript and I only changed the visuals of it by tweaking the HTML and CSS.

To start, we just need a div with the class 'slideshow' on our HTML where we'll later inject the slideshow with JS. We can then go ahead and create our 'script'

 ```html
<div class="container">

    <div class="slideshow"></div>

</div>

<script>
    var slideshow=document.querySelector(".slideshow");
    var count=0;

    var images=['1.jpg', '2.jpg', '3.jpg'];
    var limit=images.length-1; 
    
    window.addEventListener("load", () =>{
        setInterval( () => {
            if(count==limit){
                count=0;
            }
            else{  
                count++;
            }
            slideshow.style.backgroundImage=`url(${images[count]})`;
        } ,2000);
    })
</script>
 ```

We start by creating a binding that will reference our div. Then we create a binding for a 'count' that will start on 0. Next, we set an array called 'images' where each element will be the path for the images we want on the slideshow. We'll also have a binding for a 'limit' that will be the maximum number of iterations we can do based on the number of images.

Then we add an 'load' event listener on our window object that will create a setTimeout function that will be executed every 2 seconds. This function will check if we can still do another iteration or if it should reset the counter to the start and after that it will update the image of the slideshow based on the 'count' value.

 ```css
.container{
    display:flex;
    align-items:center;
    justify-content: center;
    min-height:100vh;
}

.slideshow{
    width:600px;
    height:350px;
    background-image:url('3.jpg');
    background-position:center;
    background-size:cover;
    transition:1s ease-in;
    border-radius: 4px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25),
                0 10px 10px rgba(0,0,0,0.22);
}
 ```
  
And that is all! We easily get an image slideshow with a few lines of JavaScript.