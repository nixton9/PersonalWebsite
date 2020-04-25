---
path: "/tips/post-55"
date: "2019-09-11"
title: "Using the HTML 'small' element for some fine print text"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586884158/tips/55-1_vazojf.png'
description: 'Using the HTML small element for some fine print text'
number: 55
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586884158/tips/55-2_dik9f1.png "HTML small element")

So, for today's tip I want to show you another 'not so used' HTML element: the 'small' tag.
This element is a really simple one and doesn't exactly adds a lot of functionality but still can be pretty handy for some cases.

 ```html
 
    <p>This is some normal text <small>and this is some smaller fine print.</small></p>

 ```

The 'small' tag is used to make the text one size smaller. This means that if a specific text is by default with 'font-size: medium' this will turned into 'small'. Usually it's used for disclaimers, legal text, copyright information or just some side comments.


 ```css
p{
    color:#007EFF;
    font-size: 1.6em;
}
 ```

Using it its obviously super simple: just wrap the text you want smaller on a '<small>' tag and you're good to go! 👌