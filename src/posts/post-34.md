---
path: "/tips/post-34"
date: "2019-08-09"
title: "The position absolute & position relative combo"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586803987/tips/34-1_ofyloa.png'
description: 'Understanding the position absolute & position relative combo and why it is so powerfull'
number: 34
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586803987/tips/34-2_yqkgyp.png "position absolute & position relative")

Today I decided to show you another really simple tip that, when I first learned it, had a really big impact on my CSS skills! I call it the 'position absolute and position relative combo' and even though most of you might know it, at least some of you might not know.
It's as simple as this: you a have a container element with relative positioning and a child element with absolute positioning that you can place wherever you want to inside the container.

 ```html
<div class="box">
    <div class="text">
        <h2>This is some random text</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
        </p>
    </div>
    <div class="close-button">+</div>
    <div class="add-button">+</div>
</div>
 ```

In this example we want to place the 'X' icon and the '+' icon next to the top right corner q d bottom right corner respectively. To achieve this we simply need to set 'position: relative' to our box element and then set 'position: absolute' to our icons and use the 'top' and 'right' properties to place them exactly where we want!
This will make the icons stay always on the same place in relation to the 'box' element.


 ```css
.box{
    position: relative;
    width: 450px;
    background-color: #FAFAFA;
    padding: 38px 40px;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.box h2{
    color:#8125E2;
}

.box p{
    color: #757575;
    font-weight: 100;
    line-height: 28px;
    margin-top: 20px;
}

.close-button{
    position: absolute;
    top: 2px;
    right: 10px;
    transform: rotate(45deg);
    color: #616161;
    font-size: 30px;
}

.add-button{
    position: absolute;
    bottom: 4px;
    right: 10px;
    color: #8125E2;
    font-size: 25px;
}
 ```

Once you fully understand this you can create a huge number of different layouts!  Hope this is helpful for you!