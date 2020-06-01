---
path: "/tips/post-189"
date: "2020-06-01"
title: "Easily creating a reveal on scroll animation"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1591024325/tips/189-1_weln1o.png'
description: 'How to create a reveal on scroll animation with ScrollMagic'
number: 189
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1591024636/tips/189-2_q7hpca.gif "Animation on scroll")

Making revel on scroll animations 🔥🔥  
Today we'll see how to create a reveal on scroll animation using the ScrollMagic library. On my tip #179 I talked about this library, how to use it, and made a simple example with it so go check it first if you haven't 😁

```html

<section>

    <div class="reveal">
        <div id="trigger1"></div>
        <div id="revealbox1" class="box">
            <h1>Let's reveal this on scroll</h1>
        </div>
    </div>

    <div class="reveal">
        <div id="trigger2"></div>
        <div id="revealbox2" class="box">
            <h1>and this</h1>
        </div>
    </div>

    <div class="reveal">
        <div id="trigger3"></div>
        <div id="revealbox3" class="box">
            <h1>aaaand this.</h1>
        </div>
    </div>

</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>

```

So, first we need to include the scripts for the library on our HTML. Then, for each element we want to animate on scroll, I'm adding a div with the class 'reveal'. Inside it, we have an empty div with an ID that will be used as a trigger for the animation. Then we have the actual div that we want to animate when we scroll. We also need to give it a specific ID.

```javascript

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9,
    duration: "80%",
    offset: 50
})
.setClassToggle("#revealbox1", "visible")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.9,
    duration: "80%",
    offset: 50
})
.setClassToggle("#revealbox2", "visible")
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#trigger3",
    triggerHook: 0.9,
    duration: "80%",
    offset: 50
})
.setClassToggle("#revealbox3", "visible")
.addTo(controller);

```

On the JavaScript side, we start by creating a new instance of the ScrollMagic Controller. Then, for each element we'll animate, we need to create a Scene with some options like the duration, offset and triggerElement. The triggerElement will be the ID of the empty div we created on our HTML. Basically when we scroll to the element, the animation will start.

When this happens, we'll do a class toggle on the element we want to animate. So when we scroll to the element we'll add it a class of 'visible'. We'll use this to create the reveal animation. Finally we need to add our Scene to the Controller.

```css

section {
    width: 100%;
    padding: 500px 0;
}

.reveal {
    margin-top: 500px;
}

.box {
    width: 300px;
    margin:0 auto;
    padding: 4rem 6rem;
    box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    font-weight: 700;
    opacity: 0;
    transform: scale(0.9);
    transition: all 1s ease-in-out;
}
.box.visible {
    opacity: 1;
    transform: none;
}

```

On the CSS everything is pretty straightforward. We just need to add 'opacity: 0' and 'transform: scale(0.9)' to our main element. Then when this element has the class 'visible' we'll change the 'opacity' to 1 and 'transform: scale' to 1 as well. And these are basically the main properties necessary to create the reveal on scroll animation!

And we're done! Let me know your feedback and any doubts you might have 🤗✌️