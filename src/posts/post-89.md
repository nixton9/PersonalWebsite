---
path: "/tips/post-89"
date: "2019-11-09"
title: "Creating a simple timeline with some CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587073988/tips/89-1_mrtaqz.png'
description: 'How to create a timeline with CSS'
number: 89
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587073988/tips/89-2_x5rwip.png "Timeline")

Today we'll see how to easily create a timeline using some basic HTML and CSS, something that's often seen in websites.
Timelines are a cool and visual way to show events or to present a bit of history about a brand for example.

We start by creating a container for the timeline. Inside we'll add a div for each of the events we want on the timeline. This div will need to have a class where we declare if that event should be on the left or on the right side of the timeline.

 ```html
 <div class="timeline-container">

    <div class="left text-wrapper">
        <div class="text">
            <h3>Nov 2002</h3>
            <p>Some stuff happened...</p>
        </div>
    </div>

    <div class="right text-wrapper">
        <div class="text">
            <h3>Fev 2004</h3>
            <p>Some stuff happened...</p>
        </div>
    </div>

    <div class="left text-wrapper">
        <div class="text">
            <h3>Jan 2009</h3>
            <p>Some stuff happened...</p>
        </div>
    </div>

    <div class="right text-wrapper">
        <div class="text">
            <h3>Jul 2013</h3>
            <p>Some stuff happened...</p>
        </div>
    </div>

</div>
 ```

On the CSS we'll basically be using some pseudo elements to create the the visual of this timeline and we'll apply different position coordinates if the event is 'left' or 'right'.

 ```css
.timeline-container {
    position: relative;
    width: 600px;
    margin:150px auto 0 auto;
}

.timeline-container::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #F5F5F5;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}

.text-wrapper {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    box-sizing: border-box;
    margin: 50px 0;
}

.text-wrapper::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: #8125E2;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.left {
    left: 0;
}

.right {
    left: 50%;
}

.right::after {
    left: -10px;
}

.text {
    padding: 15px 15px 15px 17px;
    background-color: #F5F5F5;
    border-radius: 4px;
}

.text h3{
    text-transform: uppercase;
    font-size: 14px;
    color: #212121;
    letter-spacing: 1px;
}

.text p{
    color: #616161;
    font-weight: 300;
    font-size: 18px;
    margin-top: 2px;
}
 ```
  
Hope you liked this tip and let me know if you have any doubts! 😁👊