---
path: "/tips/post-86"
date: "2019-11-04"
title: "Using Event Listeners in Javascript"
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587073184/tips/86-1_bu1iku.png'
description: 'What are Event Listeners in Javascript and how to use them'
number: 86
status: true
---

`youtube: https://www.youtube.com/embed/dV3tHDrMGKw`

Today we'll be talking a bit about Event Listeners in JavaScript - a popular topic that you probably already know or at least have heard something about. So what is an Event Listener?

As the name says, this is something that will be listening for a specific event to trigger something. On a more realistic example, we can a have an Event Listener for a 'click' on a specific element that will trigger a function that alerts something on the browser. So anytime there's a click on said element, the user will get a browser alert. -
This 'Event' can be of numerous types: click, mouseover, keypress, mouseenter, dblclick, keydown, etc. Basically there are a lot of JavaScript events for lots of different things and obviously, you don't have to know them all, only the main ones and how they work.

 ```html
<div id="box-1" class="box">
    <h1>On Mouse Over Event Listener</h1>
</div>

<div id="box-2" class="box">
    <h1>On Click Event Listener</h1>
</div> 

<input id="text-input" type="text" placeholder="On Key Press Event Listener" />

<div id="result">Do stuff</div>


<script>

    var box1 = document.getElementById('box-1');
    var box2 = document.getElementById('box-2');
    var textInput = document.getElementById('text-input');
    var result = document.getElementById('result');

    box1.addEventListener('mouseover', () => result.innerHTML = 'You hovered the first box')
    box2.addEventListener('click', () => result.innerHTML = 'You clicked the second box')
    textInput.addEventListener('keypress', () => result.innerHTML = 'You are typing something in the input')

</script>
 ```

In today's example we'll be adding three of the most common event listeners to some elements. In order to do this I start by creating three HTML elements were I'll later add these event listeners. The first two elements are 'divs' and the third one is an 'input'. I'll also have a div with the ID 'result' where I'll be showing some outputs to better demonstrate how this works.

Now for the JavaScript, we start by creating bindings for all the elements talked above. Then, on each of these bindings, we'll use the 'addEventListener' function. As the name says, this function will add a Event Listener on an element and it expects two parameters. The first is the type of event - the ones I talked above - and the second is the function you want to call when the event occurs. So, we add this addEventListener function on each element, each one with a different type. Each one of them will trigger a function that will put some text on our 'result' div saying what is happening.

 ```css
.box{
    background: linear-gradient(120deg, #0086FF, #0066FF);
    color: #fff;
    padding: 15px;
    margin: 20px 0;
    min-width: 350px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.box h1{
    font-weight: 500;
    font-size: 25px;
}

input{
    height: 60px;
    min-width: 350px;
    margin: 20px 0;
    padding: 0 15px;
    border: none;
    text-align: center;
    border-radius: 4px;
    outline: none;
    font-size: 15px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

#result{
    margin-top: 50px;
    font-size: 21px;
    color: #424242;
}
 ```

The first Event Listener will be triggered when we hover the element. The second one when we click on the element. The third one will be triggered everytime we press a key on the input.