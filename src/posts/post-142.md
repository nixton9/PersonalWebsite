---
path: "/tips/post-142"
date: "2020-02-15"
title: "How to use the @supports rule in CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588057336/tips/142-1_rugmm6.png'
description: 'Understanding how the @supports CSS rule works'
number: 142
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588057336/tips/142-2_ppl9sl.png "CSS @supports")

Happy Saturday guys 😎  
Have you ever used the CSS '@supports' property? Today we're talking a bit about it and how we should use it.

Basically the '@supports' allows us to wrap some CSS styles in a conditional block that will only be applied if the browser supports a special property.

 ```html
 <div class="container">

    <h2>With Browser support</h2>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>

</div>

 ```

As you can see on the example, we have an 'h2' and a 'p' tag with some text. On our CSS, we apply some basic styles to both elements and then we use the '@supports' to apply 'text- align-last: end' to our text, but only if the browser supports this property.

```css

.container{
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    min-height:100vh;
    padding: 0 50px;
}

h2 {
    color: #8125E2;
    font-size: 24px;
    margin-bottom: 20px;
}

p {
    color: #212121;
    font-weight: 300;
    line-height: 25px;
    width: 78%;
}

@supports (text-align-last: end) {
    p {
        text-align-last: end;
    }
}

```

The result is what you can see on the 'Final Result'. If the browser doesn't support the property (like Safari) we will not even try to apply it. If the browser supports the property (like Chrome) we'll apply it.

Overall the '@supports' is great for helping us deal with fallback styles for browsers that don't have a good support.  
Hope you have a good weekend guys, cyaa 😁🤘
