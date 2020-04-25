---
path: "/tips/post-70"
date: "2019-10-07"
title: "Using some basic HTML tips for best practices"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975390/tips/70-1_muq8sq.png'
description: 'Good practices for HTML'
number: 70
status: true
---

How was your weekend guys?
So today I thought I'd share with you some pretty basic HTML tips for best practices.
Most of these are standard and some may seem really obvious but still it's quite common to see them not being used at all.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975400/tips/70-2_jdzk1d.png "HTML good practices")

1: this is something I used to do a lot when I first started, just insert 'br' all over the place when I needed some spacing between two sentences, for example. This is wrong and you should avoid it. Try wrapping things in elements and use CSS to separate these elements.

2: Your heading elements should reflect your content and the importance of it. The most important title of the page should be an 'h1' then a sub-title should be an 'h2' and so on..

3: Using the 'doctype' tag seems like something that isn't a big deal but it might be. Some browsers will start tripping balls if you don't explicitly add this tag

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975401/tips/70-3_r5pdy7.png "HTML good practices")

4: Try to use an svg image instead of an jpeg or png when possible, either with the 'img' tag or the 'svg' tag. Svg's are smaller and usually with better quality, making it a better choice.

5: When creating any sort of navigation just stick to the traditional and use an 'ul' element with some 'li' inside it instead of creating a complex hierarchy of 'div'.

6: Always use the 'alt' attribute when using an image. This way, if for some reason the image doesn't load or if the user is visually impaired, you'll always have a fallback that can tell what the image is all about.