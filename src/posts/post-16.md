---
path: "/tips/post-16"
date: "2019-07-19"
title: "Using an input type color to change an element's background color "
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586628562/tips/16-1_r4ltqx.jpg'
description: 'Changing an element background color using an input type color with some HTML, CSS and Javascript'
number: 16
status: true
---

`youtube: https://www.youtube.com/embed/iJwVGqWruVw`

Did you know that since HTML5 came out we now have an input type color ? This works like a traditional color picker for any cases where you want the user to pick a color for a form or whatever other purpose it may have.  
In this snippet I'll show you how to use this - it's just 'input type="color" ' duh - and then change an element's background color with whatever color gets picked in the input.

 ```html
<div class="parent flex-center">
            
    <div class="input-container">
        <label>Pick a random color to change the box!</label>
        <input type="color" onchange="changeColor(this.value)"/>
    </div>

    <div id="box"></div>

</div>


<script>
        
    function changeColor(color){
        document.getElementById('box').style.backgroundColor = color
    }

</script>
 ```

In order to do this, we just have to create an input with 'type: color' and an onChange function where we'll pass the input value as an argument.
We'll also need an element - i used a div - with an ID to then target it.  
Finally we just need to create the function that we used on the input - I called it 'changeColor'. This function will receive the color from the input as an argument and set it as the background color of our element - document.getElementById(box).style.backgroundColor = color.


 ```css
.flex-center{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

label{
    font-weight: 600;
    margin-right: 35px;
    color: #424242;
    font-size: 1.2em;
}

#box{
    width: 300px;
    height:200px;
    border-radius: 4px;
    background-color: #007EFF;
    margin-top: 30px;
}

 ```
Super simple, am I right? 😃😃