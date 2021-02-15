---
path: '/tips/post-264'
date: '2021-02-15'
title: 'Refreshing or redirecting a page using only HTML'
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1613403941/tips/264-1_tulfoh.png'
description: 'Using HTML meta http-equiv'
number: 264
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1613404020/tips/264-2_j00z9y.gif 'HTML meta http-equiv')

Hey guys, how are you? 😊✌️

On today's tip we'll check how to easily redirect or simply refresh a page with an HTML meta tag.

This is super simple. By creating a 'meta' tag with the attribute 'http-equiv="refresh''' we can make the page refresh automatically. By passing a 'content' attribute we can set a timer for the page to refresh.

So if we use 'meta http-equiv="refresh" content="10"' the page will automatically refresh in 10 seconds.

```html
<meta http-equiv="refresh" content="10;url=https://eduardo-araujo.com/tips" />
```

Another thing we can do is pass an URL on the "content" attribute and the page will redirect to that URL. With 'meta http-equiv="refresh" content="10; url=https://google.com"' our page will redirect to 'google.com' after 10 seconds.

And that's it! Have you ever used this meta refresh?
