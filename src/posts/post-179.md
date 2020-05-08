---
path: "/tips/post-179"
date: "2020-05-08"
title: "Using data-attributes in HTML"
languages: ['HTML', 'Javascript', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588950857/tips/179-1_vs4ung.png'
description: 'How to use data attributes with HTML and Javascript'
number: 179
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1588951138/tips/179-2_su0klp.gif "HTML data attributes")

Ayooo guys 😎  
Let's check some data-attributes on our HTML elements today!

These, are basically custom attributes that we can place on a HTML element and use to store whatever data or values we may need.
We can the use some simple JavaScript to get them. Let's see how!

On the example we just three boxes, each with one number, and then a box below that will display the same number as the box we click.

 ```html

<div class="numbers">

    <div class="box" data-number="1" onclick="getNumber(this)">
        1
    </div>

    <div class="box" data-number="2" onclick="getNumber(this)">
        2
    </div>

    <div class="box" data-number="3" onclick="getNumber(this)">
        3
    </div>

</div>

<div class="box" id="result">-</div>

 ```

So, on each of these boxes we create an attribute 'data-number' and pass to it the value we want. Notice that we can use whatever name you want for this attributes after the 'data-'. So we could have something like 'data-randomValue'.

On each box we'll also have a onclick function and we'll pass it the current element - using this.

 ```javascript

function getNumber(element) {

    var value = element.getAttribute('data-number');

    document.getElementById('result').innerHTML = value;    

}

 ```

On JavaScript we just need to create this function and we'll grab the value from that data attribute and print it on the '#result' box. Super easy! To access the data attribute we just use - element.getAttribute('name-of-the-attribute).

```css

.numbers {
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    padding: 4rem 6rem;
    margin: 2rem 4rem;
    box-shadow: -5px -5px 11px rgba(113, 113, 113, 0.15), 5px 5px 11px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
}

 ```

Have a nice weekend guys, see you! 😁👌