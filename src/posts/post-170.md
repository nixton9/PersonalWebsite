---
path: "/tips/post-170"
date: "2020-04-20"
title: "Easily creating borders with anything in CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588412487/tips/170-1_hbqsi1.png'
description: 'How to create custom border in CSS'
number: 170
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588412488/tips/170-2_wwvukp.png "CSS border-image")

Hello guys, hope you had an amazing weekend 😁✌  
Today we'll be seeing how we can easily create borders in CSS with pretty much anything we want.

Using the 'border-image' property we are able to use an image as a border. This allows us to create a lot of different and creative borders, thing that would just not be possible by only using the regular 'border' property.

 ```html
 
<div class="box">
    <h2>I'm just a box with a cool border!</h2>
</div>

 ```

For this example, I wanted to have a gradient as a border, so the first thing I did was creating an image for this. The image is just a simple rectangle filled with this gradient.

```css

.box {
    width: 500px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-image: url(gradient.png);
    border-image-slice: 25;
    border-image-width: 15px;
    border-image-repeat: round;
}

.box h2 {
    color: #424242;
    font-weight: 300;
}

```

Then, on the element where we want to apply the border, we first need to set 'border-style: solid' - because I want a solid border, otherwise we could have set this to 'dashed' for example. Next, and this is the main step, we set 'border-image: url(pathToImage)'.

Now, there are some additional properties we can use to tweak this border for it to look exactly how we want. 'border-image-slice' will define how the image will be sliced to create this border. 'border-image-width' will set the width of this border. 'border-image-repeat' will define how the image should be repeated in case the image is not big enough for the border.

And that's it! Hope you find this useful 🤓👌
