---
path: "/tips/post-153"
date: "2020-03-11"
title: "What is the Critical Rendering Path and why it's a big deal"
languages: ['Browser', 'Misc']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588228792/tips/153-1_xzwnnc.png'
description: 'Understanding the browser Critical Rendering Path'
number: 153
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588228792/tips/153-2_ailotd.png "Critical Rendering Path")

Do you know what is the 'Critical Rendering Path' ?  
Critical Rendering Path - or CRP - is a term that is often used in webdev especially when talking about performance. So what is this CRP?

Well, it basically describes the steps that a browser goes through to be able to render a page on your screen. It's important to have some basic notions about this so that, if needed, you are able to identify problems on the performance of a webpage and fix them.

So, for a browser to display a page, it has to go through six steps. Let's take a brief look at them:

DOM (Document Object Model) - The DOM tree gets constructed by parsing the HTML and in it, nodes will be created for every element on the HTML.

CSSOM (CSS Object Model) - The CSSOM is created, representing the styles associated to the DOM that was previously constructed.

Render Tree - By combining the DOM and the CSSOM from the previous steps, the browser creates the Render Tree. This will have the content and the styles of the page.

Layout - On the Layout step, elements will be positioned on the page accordingly and their widths and heights will be determined. -
Paint - Finally, on the last step, the browser will paint the pixels on the screen according to the Render Tree and Layout.

And that is it. See you soon guys 😎