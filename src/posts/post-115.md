---
path: "/tips/post-115"
date: "2019-12-27"
title: "Automatically creating tooltips for acronyms with HTML"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587499722/tips/115-1_wmdfnk.png'
description: 'How to create tooltips for acronyms'
number: 115
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587499804/tips/115-2_igl08b.png "HTML acronym tooptip")

What's up guys? How was your Christmas?  
Today we're back on our tips with a simple HTML tip. We'll see how we can use acronyms on a webpage and make it automatically display a tooltip to show the user the entire word!

 ```html
 
    <p>
        The 
        <acronym title="World Wide Web Consortium">W3C</acronym> 
        is a community that works to develop standards for the World Wide Web.
    </p>

 ```

In order to do this we just need to wrap whatever acronym we want with the 'acronym' tag as you can see in the example. Then, inside this element we need to add a 'title' attribute. The value of this attributes is the text that will be displayed on the tooltip when the user hovers our acronym.

And that's it. We just to use the 'acronym' tag with the 'title' attribute to create a tooltip on hover. Obviously we can the use this for other stuff that's not an acronym.  
Hope you have a good one guys! 😁