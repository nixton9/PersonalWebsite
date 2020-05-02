---
path: "/tips/post-160"
date: "2020-03-27"
title: "Using the 'reversed' attribute in ordered lists in HTML"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588230484/tips/160-1_dn3ygi.png'
description: 'How to use the reversed attribute in ordered lists with HTML'
number: 160
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588230483/tips/160-2_idjonb.png "HTML ol")

Happy Friday guys! 😎🔥  
Since it's been a while since i posted an HTML tip, decided to bring you one today: the reversed attribute on ordered list element.

An ordered list - 'ol' - is practically the same as 'ul' with the difference that is ordered. So, when you put your list items - 'li' - it will automatically put numbers in front of each item, by order.

 ```html
 
<div class="container">

    <ol start>
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
        <li>Fourth Item</li>
        <li>Fifth Item</li>
    </ol>

    <ol reversed>
        <li>Fifth Item</li>
        <li>Fourth Item</li>
        <li>Third Item</li>
        <li>Second Item</li>
        <li>First Item</li>
    </ol>

</div>

 ```

What is usually not known is that you can add an attribute that will define the order on the 'ol' - start or reversed. By the default, an ordered list will have 'start', so it will put the numbers by order - 1, 2, 3, 4, ...

If you add the 'reversed' attribute, we will have the opposite order - ... 4, 3, 2, 1 - on the numbers that appear in front of each item.
Notice that is just the numbers that change order, not the actual items.

```css

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

ol {
    background-color: #FAFAFA;
    padding: 20px 50px;
    margin: 50px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 4px;
}

ol li {
    margin: 20px 0;
    color: #212121;
    font-weight: 600;
}

```

And that's it, super simple! Hope you guys have a great weekend and stay at home! 😁🙏