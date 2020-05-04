---
path: "/tips/post-10"
date: "2019-07-12"
title: "Building a simple animated modal from scratch"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586600782/tips/10-1_vdgvqd.jpg'
description: 'Creating an animated modal from scratch with HTML, CSS and Javascript'
number: 10
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588575379/tips/10-2_xa0luk.gif "Modal")

Traditional modals have been used for so long in web design and will definitely stay that way for the near future. Whether it's for advertising pop-ups, newsletters sign-ups, to confirm a user action, or whatever other reason, modals are a great way to display specific content in a special way.

This is, at least for me, the easiest way to create an animated modal since we only need a few lines of code.

 ```html
 <div class="parent flex-center">
            
    <div class="toggle-modal" onclick="openModal()">
        Open Modal!
    </div>

</div>

<div id="modal" class="flex-center">
    <div class="modal-close" onclick="closeModal()">+</div>
    <h2>This is a modal!</h2>
</div>

<script>
    function openModal(){
        document.getElementById('modal').classList.add('is-open');
    }

    function closeModal(){
        document.getElementById('modal').classList.remove('is-open');
    }
</script>
 ```

On the HTML side, we only need three things: - an element where we will click to display our modal; - our actual modal, preferably with a 'close' button inside it; - a script with two simple functions - one to display the modal and another to close it.
These functions will just set and remove a class - 'is-open' - on the modal element.


 ```css
.flex-center{
    display:flex;
    align-items: center;
    justify-content: center;
}

.toggle-modal{
    width: 250px;
    text-align: center;
    color: #fff;
    padding: 20px 0;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background: linear-gradient(-30deg, #4A00E0, #8E2DE2);
    z-index: 0;
}

#modal{
    position:fixed;
    min-height:70vh;
    width:500px;
    background-color:#fff;
    color: #333333;
    top:50%;
    left:0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-250%);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 4px;
    z-index: 11;
    opacity:0;
    transition: all .5s ease;
}

#modal.is-open{
    transform: translateY(-50%);
    opacity:1;
}

.modal-close{
    position: absolute;
    top: 2px;
    right: 8px;
    transform: rotate(45deg);
    font-size: 30px;
    cursor: pointer;
}
 ```

In terms of CSS, we start by applying some styles to our 'toggle-modal button' and then set the properties for our modal - it's basically just a div that we center with position absolute, give some styling to it and then we hide it with 'opacity:0' and 'transform: translateY(-250%).
Finally, we set to properties to apply on the modal element only if this has the class 'is-open' - 'opacity:1' and 'transform: translateY(-50%). This will create a simple animation where the modal will slide from the top of the screen, while fading in. When closing the modal, the opposite will happen.  
Simple, right? 😁