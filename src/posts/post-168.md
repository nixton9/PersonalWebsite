---
path: "/tips/post-168"
date: "2020-04-15"
title: "Creating a custom cursor with CSS"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588411987/tips/168-1_pov8w4.png'
description: 'How to have a custom cursor on a website'
number: 168
status: true
---

`youtube: https://www.youtube.com/embed/9oIo6kGu1LI`

What's up guys, all good? 🤘  
Have you ever used custom cursors on your websites?

Well, today we'll see how we can do that with some really simple CSS!
Having a custom cursor can be a cool feature on a website wether it is to match the overall design of the website or to create a more immersive experience.

 ```html
 
<div class="container">
            
    <h1>Some content here</h1>

    <p>
        Lorem ipsum dolor sit amet....
    </p>

</div>

 ```

On the HTML, I'm just adding some random content, nothing too special.
Now on our CSS, we just need to add a rule to the body element. We'll add 'cursor: (cursor.png), default;' and that's basically everything we need to create a custom cursor.

 ```css
 
body {
    cursor: url('cursor.png'), default;	
}

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    width: 85%;
    margin: 0 auto;
}

h1 {
    margin-bottom: 20px;
    color: #424242;
}

p {
    color: #616161;
    font-weight: 300;
    line-height: 30px;  
}

 ```

This 'cursor.png' is a image that I created - just a simple green circle. You can swap this for any image you want, wether it is a local image or some image you find on the internet. As @4nmolchaudhary
stated here, these images have to be 34px x 34px max.

And that's it. Do you like websites that use custom cursors instead of the default one?  
Have a great day guys! 🙏