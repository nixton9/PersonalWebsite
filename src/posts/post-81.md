---
path: "/tips/post-81"
date: "2019-10-26"
title: " How does Z-index works in CSS?"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587033102/tips/81-1_odpwza.png'
description: 'Understanding the z-index property in CSS'
number: 81
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587033101/tips/81-fr_jpuyyc.png "CSS z-index")

For today's tip we'll be talking a bit about z-index and the use case for which we use this property: defining the order of stacked elements.

I remember when I was starting in web dev. I would just set 'z-index: 9999' on all elements that I wanted to be stacked on top and that was it! I never gave much thought about it. Until I started having cases where even 'z-index: 9999' wouldn't work, and the element wouldn't be on top of another element.

That's when I had to start really looking at how the stacking order works on CSS and learned that 'z-index' is not the only property that will define this. The 'position' property is equally important. Let's look at the example to understand this.

```html
<div class="wrapper example1">
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
</div>

<div class="wrapper example2">
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
</div>

<div class="wrapper example3">
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
</div>
 ```

We basically have 3 sets of two 'divs' with the class 'box'. They all have the same CSS properties besides 'z-index' and 'position'. Those 2 properties are different in each set and will define what 'box' will stay on top.

 ```css
.wrapper{
    position: relative;
    margin: 100px;
}

.box{
    width: 300px;
    height: 425px;
    color:white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 21px;
    font-weight: 300;
    justify-content: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.box1{
    background: linear-gradient(120deg, #4A00E0, #8E2DE2);
}
.box2{
    background: linear-gradient(120deg, #04CBD3, #45FCE4);
}

.example1 .box1{
    z-index: 1111111;
}

.example1 .box2{
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 1;
}

.example2 .box1{
    z-index: 1111111;
    position: relative;
}

.example2 .box2{
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 1;
}


.example3 .box1{
    z-index: 1111111;
}

.example3 .box2{
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: -1;
}
 ```

On the first example we have one div with 'z-index: 1111111' but it's still below the other div. This is because the second div has 'position: absolute'. This will take it out of the document's flow and will place it on top of the other elements.

On the second example, we have exactly the same CSS that we have on the first one. But the first div has 'position: relative' so, since it also has an higher 'z-index', it will stay on top.

Finally, on the third example, we have the first div only with 'z-index: 1'. The second div has once again 'position: absolute' but it also has 'z-index: -1'. This will make it go bellow any other elements, making the first div stay on top.

Hope this made sense to you and helped you better understand how this works.
