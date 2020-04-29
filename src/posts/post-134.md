---
path: "/tips/post-134"
date: "2020-01-31"
title: "Using HTML5 to create a link that downloads a file"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587970223/tips/134-1_avqen3.png'
description: 'How to create a link to download a file in HTML'
number: 134
status: true
---

`youtube: https://www.youtube.com/embed/NrLMVnSX15g`

Happy Friday guys, how are you? 😁  
For today we have a simple tip on how to create links for downloadable files on your website, it's really simple!

It's a pretty common case for us to need to have to put a downloadable file on a website. Some link, where the user just needs to click and it automatically downloads a specific file. So, let's see how we can do this.

 ```html
 
<div class="container">

    <a href="random-file.pdf" download>
        Download File
    </a>

</div>

 ```

To do this we just to use an anchor tag with two attributes: href and download. In the 'href' attribute we'll put the path to the file we want to download. In this case, i had the file on the same folder as the HTML so it's just the name of the file itself.

With the second attribute, 'download', we can do one of two things. The first is just to put 'download' and this will make the file downloadable. The second is to put 'download="someName"'. This will also make the file downloadable and when the user downloads it, it will have the name that you put there!

 ```css
 
.container{
    display:flex;
    align-items:center;
    justify-content: center;
    min-height: 100vh;
}

a{
    text-decoration: none;
    color: #8225E2;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 600;
    letter-spacing: .04em;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

 ```

And that's all 😁  
Hope you have a great weekend guys, see you tomorrow 🤓
