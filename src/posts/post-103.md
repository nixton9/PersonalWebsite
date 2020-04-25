---
path: "/tips/post-103"
date: "2019-12-04"
title: "How to easily change the website tab title"
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587328136/tips/103-1_nubmif.png'
description: 'Changing the title of the tab in the browser'
number: 103
status: true
---

`youtube: https://www.youtube.com/embed/T0jWzU91GMI`

What's up guys? How is your week going?
Today we'll see how we can easily change a website page title with some basic JavaScript!

We usually set the page title inside the 'title' tag that is placed inside the 'head' tag. This is then visible on the browser's tab, as you can see in the video. The cool thing is that, with one line of JS, we can dinamically change that title to be whatever we want. With this we can make some cool things.

 ```html
<div class="container">

    <div class="input-container">

        <label for="title-input">Change the website title</label>
        <input type="text" id="title-input" placeholder="Write something" />

    </div>

    

</div>


<script>
    
    const titleInput = document.getElementById('title-input');

    titleInput.addEventListener('input', (e) => {
        document.title = e.target.value;
    })

</script>
 ```

On this example, we have a text input that when the user starts writing something it will update the page title to be this value from the input. To start we just need a simple text input with an ID.

Then, on our script, we first grab a reference for this input using it's ID. We then add to it an Event Listener, that will be triggered 'on input', and this will change 'document.title' to be the value of the input.

 ```css
.container{
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    min-height:100vh;
}

.input-container{
    background: #f5f5f5;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

label{
    display: block;
    color: #007EFF;
    font-size: 19px;
    margin-bottom: 8px;
}

input{
    width: 250px;
    border: none;
    border-bottom: 2px solid #616161;
    padding: 10px;
    font-size: 14px;
    font-weight: 200;
    background: transparent;
    outline: none;
}
 ```

And it's done! It's super easy right? Basically if we just wanted to change the page title to something random we would just need to do 'document.title = 'Something random'.