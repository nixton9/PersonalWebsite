---
path: "/tips/post-69"
date: "2019-10-05"
title: "Creating a dropdown menu from scratch with HTML and CSS only"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586975101/tips/69-1_amk2g1.png'
description: 'How to create a dropdown menu from scratch using some HTML and CSS'
number: 69
status: true
---

`youtube: https://www.youtube.com/embed/dE8PedAqTcw`

Hey guys, how is your Saturday going?
Today we'll see how we can easily create a dropdown menu with a few lines of HTML and CSS. Let's start?

First, we create our menu using an 'ul'. Inside it, we'll have an 'li' for each menu item we need and inside it we'll have a 'span' with the menu item name. Then, on the items we want to have a dropdown - in this case it's only on the 'projects' item - we'll add another 'ul' and inside it some more 'li' for all the dropdown menu items we want. I'm giving a class 'menu' to the main menu and a class 'sub-menu' to the dropdown menu.

 ```html
<ul class="menu">
    <li class="menu-item"><span>home</span></li>
    <li class="menu-item"><span>about</span></li>
    <li class="menu-item has-child">
        <span>projects</span> <img src="./chevron.svg"/>
        <ul class="menu sub-menu">
            <li class="menu-item sub-menu-item">html</li>
            <li class="menu-item sub-menu-item">css</li>
            <li class="menu-item sub-menu-item">javascript</li>
            <li class="menu-item sub-menu-item">react</li>
            <li class="menu-item sub-menu-item">php</li>
        </ul>
    </li>
    <li class="menu-item"><span>contact</span></li>
</ul>
 ```

Now in terms of CSS I will just talk about what is relevant for the dropdown functionality. First, we need to add 'position: relative' to our 'menu-item' class. This will allow us to position the dropdown menu exactly below the menu item we hover. Then, on our 'sub-menu' we need to apply 'position: absolute; left: 0; top: 50px; opacity: 0: transform: scaleY(0)'. This will make our dropdown menu stay hidden and positioned exactly where we want. (Note that there's an error on the code snippet, the value of the opacity is 1 and should be 0).

 ```css
ul{
    margin:0;
    padding:0;
}

.menu{
    display: flex;
    list-style-type: none;
    border-radius: 4px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.menu-item{
    position:relative;
    padding: 10px 20px;
    border-right: 1px solid #EEEEEE;
    color:#212121;
    background:#fff;
    transition: background .3s linear;
}

.menu-item:hover{
    background: #F5F5F5;
}

.sub-menu{
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50px;
    opacity: 1;
    transform-origin: top;
    transform:scaleY(0);
    transition: all .2s linear;
}

.has-child:hover .sub-menu{
    opacity:1;
    transform:scaleY(1);
}
 ```

Now that our dropdown menu is hidden be default we just need to set an hover on the parent 'li' where we'll set ' opacity: 1; transform: scaleY(1) '. With this, our menu will smoothly appear and grow vertically when we hover the menu item.