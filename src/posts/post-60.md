---
path: "/tips/post-60"
date: "2019-09-20"
title: "Know your CSS selectors ( part I )"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1586886431/tips/60-1_zem3xc.png'
description: 'Understanding some CSS selectors'
number: 60
status: true
---

Hey guys, how is your week going?
Today, I thought of showing you some cool and, not so basic, CSS selectors. I find these quite handy and it's definitely something that I regret not have learned sooner in my Web Dev path.

I commented every one of the selectors and tried to briefly explain how each of them work so I won't describe them here. If you have any doubt, please comment or send me a DM!

 ```css
.wrapper *{
    /* Will target every child of the class 'wrapper' */
}

li + a{
    /* Will target only the 'a' that is immediately preceded by an 'li' */
}

li > a{
    /* Will target every 'a' that is direct child of 'li' */
}

a[href="http://webdevtips.com"]{
    /* Will target every 'a' that is has exactly this href */
}

input:checked{
    /* Will target every 'input' that's currently checked */
}

span::first-letter{
    /* Will target only the first letter of a 'span' */
}

p:nth-of-type(3){
    /* Will target the third 'p' element on the page */
}
 ```

And tell me, which of these selectors do you find more useful when working on CSS?