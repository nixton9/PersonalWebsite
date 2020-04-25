---
path: "/tips/post-63"
date: "2019-09-25"
title: "Creating a cool slider with a range input "
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586887014/tips/63-1_edov8c.png'
description: 'How to create a slider with a range input in HTML'
number: 63
status: true
---

`youtube: https://www.youtube.com/embed/ODnZ95lIFfY`

What's up guys?
Today I want to show how to create a range input (or a slider input) and how to then customize it with some CSS. I'll also show you to then display the number we get from the input on a DOM element.

 ```html
<div class="container">
                
    <div class="slider-container">
        <input type="range" min="1" max="100" value="50" class="slider-input" id="slider" onchange="setValue()">
    </div>

    <div class="slider-result"><h1 id="result"></h1></div>

</div>

<script>
    
    var sider = document.getElementById('slider')
    var element = document.getElementById('result')
    element.innerHTML = slider.value

    slider.oninput = function() {
        element.innerHTML = this.value;
    }

</script>
 ```

We'll start by creating an 'input type="range" ' and setting some attributes to it: 'min', 'max', 'value' , 'onchange' and a 'class'.
'min' is the minimum value this input will accept, 'max' is the maximum one, 'value' is the default value the input has and 'onchange' will be the function we call everytime the user changes the input.
Then we need to create some element when we'll later insert the input result - in this case I'm using an 'h1' with an ID 'result'.

Now we just need a simple script were we'll get the value from the input and insert it on our element using the 'innerHTML' function. We then create a function on this script that will update this value anytime the input changes.

 ```css
.container{
    width: 100%;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
}

.slider-input{
    -webkit-appearance: none;
    appearance: none;
    width: 250px;
    height: 12px;
    background: #F5F5F5;
    outline: none;
    border-radius: 25px;
}

.slider-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px; 
    height: 20px;
    background: #F91890;
    cursor: pointer;
    border-radius: 50%;
}

.slider-result{
    color:#424242;
    font-size: .7em;
    margin-top: 15px;
}

h1{
    font-weight: 400;
}
 ```

To wrap things up we just need a bit of styling to get things prettier than the ugly default input. We set some properties on the input itself - this will the slider in the input - and on the 'webkit-slider-thumb' - this will be the round button were we press to slide.  
Hope this will be handy to you!