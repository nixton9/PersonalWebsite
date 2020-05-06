---
path: "/tips/post-178"
date: "2020-04-07"
title: "Creating scroll animations with ScrollMagic"
languages: ['HTML', 'CSS', 'JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588780412/tips/178-1_pto7de.png'
description: 'How to create animations on scroll'
number: 178
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588780805/tips/178-2_xtmpph.gif "Scroll animation")

Let's do some scroll animations!

Doing animations on scroll has been one of the topics that's been more requested on this page. So, I decided to try ScrollMagic - one of the best libraries in JS to do this - and do a tip on it. This is a simple example, I plan on showing you more on the future.

On this example, we have an image that will centered in a section. When we start scrolling we'll keep that image pinned on the center of that section, when there's no more room it will stay pinned on top and then finally the second section will overlap the first one with a parallax effect.

```html

<section id="intro">
    <img src="logo.svg" alt="WebDev Tips" />
</section>

<section id="main">

    <h1>WebDev Tips</h1>

</section>


<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>

```

To start we need to go the ScrollMagic website - scrollmagic.io - and grab the cdn links they have there so we can include the library on our project. We'll then place these script tags on our HTML file. In our HTML we'll also create this basic markup for the example.

```javascript

var controller = new ScrollMagic.Controller();

window.addEventListener('load', 
function() {

    var pinIntro = new ScrollMagic.Scene({
        triggerElement: '#intro',
        duration: '20%',
        triggerHook: 0.1
    })
    .setPin('#intro')
    .addTo(controller);


    var pinMain = new ScrollMagic.Scene({
        triggerElement: '#main',
        triggerHook: 0.5,
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);

}, false);

```

All the magic then happens on our JavaScript. We create a new instance of the ScrollMagic Controller and then we'll create some Scenes that will be our two sections on the page. On these Scenes we'll have to pass some options like the element where we'll trigger this and will add pins on them. This pin will be the element that we want to have pinned when we scroll. In both cases it will be the first section.

Finally we'll add both Scenes to the controller we created on the top. Make sure that this code is inside an 'on load' event listener so we make sure we have all elements loaded when we create this.

```css

section {
    width: 100%;
}

#intro {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#intro img {
    width: 250px;
}

#main {
    min-height: 200vh;
    background-color: #E0E0E0;
    padding-top: 10rem;
    position: relative;
}

#main h1 {
    font-size: 3rem;
    font-weight: 800;
    color: #2a2f35;
}

```

Hope you guys liked this and have a great day! 🙂🙏
