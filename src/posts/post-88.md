---
path: "/tips/post-88"
date: "2019-11-08"
title: "Easily finding if browser is Internet Explorer to apply fallback code"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587073701/tips/88-1_cfa7f1.png'
description: 'Applying CSS only to Internet Explorer'
number: 88
status: true
---

Internet Explorer can be a real pain in the ass for web developers, right?  
Due to it's lack of support towards different features we sometimes have to create workarounds for the stuff we create so it doesn't completely break.
And even though most of us would love to just ignore it, that's just not possible sometimes since they are still a lot of people who use it.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587073842/tips/88-2_nw44ct.png "Check Internet Explorer")

So for today's tip I bring you a really simple and small snippet that can help you a little bit with this chore. Basically, we find if the browser being used by the user is Internet Explorer and, if so, we'll add the class 'is-ie' to the 'body' so we can then add custom CSS that will only be applied to this browser. With this, we can easily create any workarounds needed so our page looks awesome across all browsers!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587073842/tips/88-3_chxnu2.png "Check Internet Explorer")

Just look at the first code example how simple and easy this is. After using this you can just use the class 'is-ie' before any other classes you have and you'll be applying those styles only when the browser where your page is being opened is IE.  
Hope this helped you!