---
path: "/tips/post-40"
date: "2019-08-16"
title: "Applying a different style to an input when invalid"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586811996/tips/40-1_odfzln.png'
description: 'Using CSS to apply a different style to an input when this input is invalid'
number: 40
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586812072/tips/40-2_uxplw7.png "Styling invalid input")

Did you know that inputs may be considered valid or invalid? And then that this allow us to target them on our CSS based on being one or the other ?

For example, if you have a required attribute on an input and that input is not filled it will be considered invalid. Also, if you have an input with email type and you don't fill that input with an email address that input will be considered invalid as well!

 ```html
<div class="login-form">
    <div class="login-intro">
        <h1>Be a part of our team!</h1>
        <h5>Sign up here</h5>
    </div>
    <div class="form">
        <input type="text" placeholder="Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="text" placeholder="Username" required/>
        <input type="password" placeholder="Password" required/>
        <button>Sign up</button>
    </div>
</div>
 ```

Then, in our CSS, we can use 'input:valid' and 'input:invalid' to target each of one these states. See this example to better understand how this works and how we can take advantage of that!

 ```css
.login-form{
    background-color: #F5F5F5;
    border-radius: 10px;
    padding: 20px;
    min-width: 400px;
    min-height: 450px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.login-intro{
    text-align: center;
    margin-top: 15px;
}

h1{
    color:#007EFF;
}

h5{
    font-weight:400;
    color: #616161;
    margin-top: 8px;
    font-size: 16px;
}

.form{
    margin-top:40px;
    text-align:center;
}

.form input{
    position:relative;
    display:block;
    height:40px;
    width:80%;
    margin:20px auto;
    border-radius:6px;
    border:none;
    text-indent: 15px;
    font-size: 13px;
    letter-spacing: .03em;
}

input:invalid{
    border-bottom:2px solid #F44336;
}

.form button{
    width:150px;
    height:40px;
    border-radius:50px;
    margin:20px auto 0 auto;
    border:none;
    background-color:#007EFF;
    color:#fff;
    font-size: 16px;
    font-weight:600;
    letter-spacing: .03em;
}
 ```
   Have a nice one guys!