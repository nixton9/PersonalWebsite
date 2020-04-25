---
path: "/tips/post-109"
date: "2019-12-14"
title: "Know your CSS selectors (part 2)"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587329873/tips/109-1_psbqo3.png'
description: 'Part 2 of understanding some CSS selectors'
number: 109
status: true
---

How is your Saturday going guys? Today we'll be seeing some cool CSS selectors that you can and should use. This is a Part 2 of this topic, you can check Part 1 on my tip #60 so find some more practical CSS selectors.

 ```css
.container a {
    /* Will target every 'a' inside the '.container' */
}

a:link {
    /* Will target every 'a' that have not been clicked yet */
}

a:visited {
    /* Will target every 'a' that have already been clicked or visited */
}

input:focus {
    /* Will target every 'input' when it has focus */
}

p:not(.text) {
    /* Will target every 'p' that doesn't has a class of '.text' */
}

p::first-line {
    /* Will target only the first line of a 'p' */
}

.container p:first-child {
    /* Will the first 'p' inside '.container' */
}

.item:nth-child(odd) {
    /* Will target all '.item' elements that are odd */
}

.item:nth-child(even) {
    /* Will target all '.item' elements that are even */
}
 ```

I find most of these super helpful in a lot of different situations. Hope you understand them all and what they do. If you have any doubts just leave a comment or send a DM 😁📥  
Hope you have an amazing weekend, cya! 😁
