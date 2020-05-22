---
path: "/tips/post-185"
date: "2020-05-22"
title: "Creating a password input with a visibility toggle"
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1590160282/185-1_dhfjmq.png'
description: 'How to create a password field with a button to check the password'
number: 185
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1590160383/185-2_q28jyp.gif "Password visibility toggle")

Happy Friday 😁🔥  
For today, let's check how we can easily create those password fields where the user can check what he's writing.

This is something that is pretty common nowadays and it's super useful for the user to check if he wrote the password correctly.

```html

<div class="input-wrapper">

    <input type="password" id="password" placeholder="Type your password" />

    <div class="input-icon" id="icon" onclick="togglePassword()">
        <img src="./icon.svg" />
    </div>

</div>

```

On the HTML we just need to create a wrapper div with a password input inside and another div with an icon that will toggle the visibility.  We'll give an ID to the input to easily select it later on our JavaScript and we'll set an onclick function on the icon for the toggle.

```javascript

function togglePassword(){
    var input = document.getElementById('password');
    var icon = document.getElementById('icon');

    if (input.type === "password") {
        input.type = "text";
        icon.classList.add('selected');
        
    } else {
        input.type = "password";
        icon.classList.remove('selected');
    }
}

```

On the JavaScript side, we just need to create this toggle function. We'll first grab references for the input and the icon. Then, we just need to check the current type of the input. If it's 'password" we'll change it to tsxt. If it's'text' we'll change it to password. We'll also add and remove a 'selected' class on our icon to style it differently when the icon is selected.

```css

.input-wrapper {
    box-shadow: rgba(113, 113, 113, 0.15) -5px -5px 11px, rgba(0, 0, 0, 0.15) 5px 5px 11px;
    border-radius: 20px;
    width: 325px;
    height: 55px;
    display: flex;
    align-items: center;
}

.input-wrapper input {
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    text-indent: 20px;
    color: #B2BECD;
    font-size: 14px;
}

.input-icon {
    width: 20px;
    margin-right: 20px;
    border-radius: 50px;
    padding: 3px 6px;
    cursor: pointer;
    transition: all .4s ease;
}

.input-icon.selected {
    background-color: #2d2d2d;
}

.input-icon img{
    max-width: 100%;
}

::-webkit-input-placeholder { /* Edge */
    color: #B2BECD;
}

```

The CSS is pretty much self-explanatory and super basic!  
Hope you liked this tip and have a great weekend guys! 😎🙏

