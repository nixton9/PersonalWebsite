---
path: "/tips/post-31"
date: "2019-08-06"
title: "Creating your custom input type file"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586803277/tips/31-1_umslkq.png'
description: 'Using HTML and CSS to create your own custom input type file'
number: 31
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586803280/tips/31-2_xm8qw3.png "Custom file input")

Inputs of file type are usually pretty useful when you need to have a form where the use can upload a file, for example. That being said, each browser styles these types of inputs in their own way and we can't directly apply CSS to them! So, in order to create our own custom inputs we have to hide the input type file and instead style the label that surrounds it.

 ```html
<div class="file-input">
    <input type="file" id="file" class="inputfile">
    <label for="file">Choose a file <img src="./file.png" width="40px"/></label>
</div>
 ```

We basically just have to apply 'position: absolute' and 'opacity:0' to the input and then we can easily style the label to display it how we want it! This will create a 'fake input' on the label and when you click it you'll get the same behaviour that you would get on the original input. You can also add an icon or an image inside the label, as I'm doing in the snippet, to add a little bit of sparkle to our input!


 ```css
.file-input input{
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.file-input label {
    color: white;
    background-color: #007EFF;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
}

.file-input img{
    margin-left: 10px;
}
 ```
It's pretty easy, right?