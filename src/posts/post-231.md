---
path: '/tips/post-231'
date: '2020-10-21'
title: 'Implementing a step-by-step guide on your website in 5 min'
languages: ['HTML', 'JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1603292771/tips/231-1_aer6f6.png'
description: 'Creating a guided tour for your website'
number: 231
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1603292923/tips/231-2_dy9sc6.gif 'IntroJS')

Easily adding a guided tour to your website!

Guided tours are a nice way to show your users how they should use your website. Specially in more complex websites/platforms, it can be valuable to provide a 'tutorial' to your users that shows them what they can do and where they should click.

That being said, in this tip we'll see how we can do this easily by using 'introJS' - a step-by-step guide and feature introduction to your website.

To start we need to make sure we import the necessary files from introJS - 'introjs.css' and 'intro.min.js'. You have different ways of doing this, I chose to use the CDN links they provide on their website - https://introjs.com

```html
<link
  href="https://cdn.jsdelivr.net/npm/intro.js@2.9.3/introjs.css"
  rel="stylesheet"
/>

<!-- ... -->
<div class="navbar">
  <h1 data-intro="Title is here!" data-step="1">WEBDEVTIPS</h1>
  <div class="items">
    <ul data-intro="Menu items here" data-step="2">
      <li>First item</li>
      <li>Second item</li>
    </ul>
    <button onclick="introJs().start()">Start Tour</button>
  </div>
</div>

<div class="text">
  <h2 data-intro="Almost there" data-step="3">Some random title</h2>
  <p data-intro="Last one!" data-step="4">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
    dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
    voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem
    eum fugiat quo voluptas nulla pariatur?
  </p>
</div>
<!-- ... -->
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/intro.js@2.9.3/intro.min.js"
></script>
```

Now we need to setup the different steps we want on our guided tour. To do this we just need to go to an element that we want to feature on one of the steps and add two data attributes - 'data-intro' that will have the content that will be displayed on the guided tour and 'data-step' that will have a number that determines the order of that step.
Just check the example to see how I'm doing this.

Finally, we need to make sure we start the guided tour. I created a button on the header that says 'Start Tour'. We'll add a onclick function here to start introJS - onclick="introJs().start()"

And that's it! What are your thoughts on having step-by-step tours on a website? Do you find it valuable or just whack?
