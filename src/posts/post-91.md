---
path: "/tips/post-91"
date: "2019-11-13"
title: "Understanding some basics about accessibility for the web"
languages: ['Accessibility']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587145956/tips/91-1_vi0mca.png'
description: 'accessibility for the web'
number: 91
status: true
---

There are way more people than we think using our websites that have some sort of limitation. And a big, big portion of websites on the web aren't fully accessible for people with these limitations.

It's our responsibility as web developers to create stuff that everybody can use despite whatever limitations they might have. You can find out more about this and the A11Y project at www.a11yproject.com  
That being said, here are some basic tips you can start using to boost the accessibility for people who use Screen Readers:

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587145955/tips/91-2_dyicod.png "Accessibility Tips")

1 - Use the correct HTML5 element for the thing you are creating. Put your navigation inside a nav element, your main content inside a main element and so on.. This make it easier for a Screen Reader to tell the user what is on the page.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587145956/tips/91-3_tm8kuv.png "Accessibility Tips")

2 - In cases where you can't or simply choose not use one of these tags you can add the role attribute to specify what that element is so that Screen Readers know it.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587145955/tips/91-4_akqlps.png "Accessibility Tips")

3 - In this example we see something very common: a link that is only accessible through an image or an icon. For these cases we should add an 'aria-label' attribute on our anchor tag that will explain to the user what will this link do. We can also do this when the text inside the link is not that self explaining.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587145955/tips/91-5_lssi99.png "Accessibility Tips")

4 - For cases where we have an anchor tag and inside it we have both text and an image or icon, Screen Readers will not need to know about the image since it has the text. We can add one of two attributes to the image then: 'role="presentation"' or 'aria-hidden="true"'. Both will have the same effect here.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587145955/tips/91-6_j8ekja.png "Accessibility Tips")

5 - We can use the 'lang' attribute to specify the language on a specific element that has content in a different language than the rest of the website. Screen Readers will pronounce this differently based on the language specified.

That's it guys. This was just a small intro to this big and important topic. Hope this encourages you to dig deeper on web accessibility!