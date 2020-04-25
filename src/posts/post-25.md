---
path: "/tips/post-25"
date: "2019-07-30"
title: "Creating expandable boxes with HTML only"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586693325/tips/25-1_ckpyyu.png'
description: 'Using the details tag to create expandable boxes in HTML'
number: 25
status: true
---

`youtube: https://www.youtube.com/embed/GQOBmS5sVok`

In this tip we'll cover another new element that HTML5 brought to us: expandable boxes (with the details and summary tags)!
This allow us to have a tab with a title for example, and an arrow that when you click it will expand a section to show the user more content. And with this method.you won't need CSS or JS to create this functionality.

 ```html
<details>

    <summary>This is an expandable box, click it!</summary>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </p>

</details>
 ```

You just have to create a 'details' element. Inside it use a 'summary' element where you'll place your title. Then you can have another tag like a 'div' or a 'p' where you'll place all your remaining content! See the snippet to have a better grasp of how this works.

 ```css
details {
    width: 400px;
    border-radius: 8px;
}

summary {
    padding: 20px;
    background-color: #8125E2;
    color:#fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

details p {
    padding: 10px 20px;
    font-size: 14px;
    line-height: 24px;
    color: #424242;
}

details[open] {
    background: #FAFAFA;
}
 ```  
It's a really cool and simple effect you can use on your projects!  
Have a nice one guys! 😄👊