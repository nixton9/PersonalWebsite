---
path: "/tips/post-124"
date: "2020-01-13"
title: "Easily creating tabs from scratch with HTML, CSS & JS"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587590870/tips/124-1_ynlezi.png'
description: 'How to create tabs on a website'
number: 124
status: true
---

`youtube: https://www.youtube.com/embed/Juw4efbgeK4`

Hey guys! 🤓✌  
So today we'll be seeing how we can easily create Tabs for different content by using some HTML, CSS and JavaScript.

Tabs are a cool way to condensate different pieces of content on the same place, by having some buttons that when clicked will display only one of these pieces of content. If done right, they are a neat way to save space and avoid displaying to much content at once to the user. Let's see how we can implement this!

 ```html

<div class="tabs">

    <div class="tabs__navigation">
        <button onclick="changeTab('first')">First Tab</button>
        <button onclick="changeTab('second')">Second Tab</button>
        <button onclick="changeTab('third')">Third Tab</button>
    </div>


    <div class="tabs__content">

        <div id="first" class="single-tab">
            <h2>This is the First tab</h2>
            <p>Lorem ipsum dolor ...</p>
        </div>

        <div id="second" class="single-tab">
            <h2>This is the Second tab</h2>
            <p>Sed ut perspiciatis unde ...</p>
        </div>

        <div id="third" class="single-tab">
            <h2>This is the Third tab</h2>
            <p>Neque porro quisquam est... </p>
        </div>

    </div>
    

</div>

 ```

So let's start with the HTML: we have a div with the class 'tabs' and inside it we have two more divs 'tabs\_\_navigation' and 'tabs\_\_content'. Inside the 'tabs\_\_navigation' div we'll have a button for each tab we want and onclick we'll just call the function 'changeTab' and pass it the correspondent tab as parameter.

Then, on the 'tabs\_\_content' div, we will have one 'single-tab' div for each tab we want. Each one of these divs will have a unique ID that we'll then use on our JavaScript. I chose to use 'first', 'second', 'third', ... for the ID's here.

 ```javascript

function changeTab(tab) {
    var i;
    var x = document.getElementsByClassName('single-tab');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}

 ```

 Now, on our JavaScript we need to create our 'changeTab' function that will basically hide all the tabs content and just display the one we want. This function will receive a string as a parameter: the ID of the tab we want to display. Then, this function will loop through all our divs with the class 'single-tab' and change their display to 'none'. Finally, it will go to the div that has the ID that we passed as a parameter and change its display to 'block'.

  ```css

.tabs {
    width: 65%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 4px;
}

.tabs__navigation {
    border-bottom: 1px solid #E0E0E0;
}

.tabs__navigation button {
    color: #F91890;
    border: none;
    padding: 20px;
    font-size: 16px;
    font-weight: 500;
    outline: none;
}

.tabs__navigation button:hover {
    background:#F5F5F5;
    cursor: pointer;
}

.tabs__content { 
    padding: 20px;
}

.single-tab {
    display: none;
}

.single-tab:first-child {
    display: block;
}

.single-tab h2 {
    color: #424242;
    font-size: 20px;
}

.single-tab p {
    color: #212121;
    font-size: 15px;
    line-height: 26px;
    margin-top: 8px;
}
 ```

To end, we use some basic CSS to style the overall tabs, nothing to special. The only important thing we need to do in terms of CSS is by default set 'single-tab' to have 'display: none' but on the first 'single-tab' element we want to set 'display: block'. You can see this at the end of our CSS code.  
Aaand we're done! Have a nice one guys 😁