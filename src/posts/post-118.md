---
path: "/tips/post-118"
date: "2020-01-03"
title: "What is CSS BEM and why you should use it on your projects"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587500325/tips/118-1_ttzef3.png'
description: 'Using BEM in CSS'
number: 118
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587500325/tips/118-2_sbjqdc.png "CSS BEM")

What's up guys? 😁
Today we'll be talking a little bit about a very cool and useful CSS methodology - BEM.

BEM stands for 'Block Element Modifier' and it's a really popular naming convention for your CSS classes. It helps you write HTML and CSS that are more easily perceivable and reusable. Following this methodology on your projects has a lot of advantages and avoids the creation of a big CSS mess. This is also a great choice when working on a team, as it creates a standard way to implement styling. So, let's see what exactly is this.

 ```html
<div class="card">
    <h2 class="card__title">Some random title here</h2>
    <p class="card__text">Lorem ipsum ...</p>
    <button class="card__button">See more</button>
</div>

<div class="card">
    <h2 class="card__title card__title--purple">Some random title here</h2>
    <p class="card__text">Lorem ipsum ...</p>
    <button class="card__button card__button--purple">See more</button>
</div>

<div class="card">
    <h2 class="card__title card__title--green">Some random title here</h2>
    <p class="card__text">Lorem ipsum ...</p>
    <button class="card__button card__button--green">See more</button>
</div>
 ```

To follow the BEM convention we have to first split the content of a page in 'blocks'. A 'block' can be a card, a button, an header, a post, a footer, whatever. Then, inside each 'block' we will have 'elements'. If our block is the footer, inside it we can have a title, a paragraph, a logo, an icon, etc. These are the 'elements'. Finally, since we want this stuff to be reusable we have 'modifiers' . These are used when we have two elements that are basically the same one of them has a different color, for example.

The naming for the classes used across these levels should always be:
'.block'
'.block\_\_element'
'.block\_\_element--modifier'

 ```css
.card{
    width: 505px;
    padding: 25px;
    background-color: #F5F5F5;
    border-radius: 4px;
    margin: 25px 0;
}

.card__title{
    margin-bottom: 8px;
    font-size: 22px;
    color: #212121;
}
.card__title--purple{ color: #8225E2; }
.card__title--green{ color: #45FCE4; }

.card__text{
    color: #616161;
    font-weight: 300;
    line-height: 22px;
    margin-bottom: 15px;
}

.card__button{
    border: none;
    padding: 10px 15px;
    border-radius: 30px;
    background: #212121;
    color: #fff;
    font-weight: 600;
}
.card__button--purple{ background-color: #8225E2; }
.card__button--green{ background-color: #45FCE4; }
 ```

On the example of this tip I use a card to show this. So each card will be a 'block' and will have the class 'card'. Inside each we have a title, a text and a button. So the classes for these elements will be, respectively, '.card\_\_title' '.card\_\_text' '.card\_\_button'. Now, we want some cards to have a different color on the title and on the button so what we do is go these elements and add the 'modifier' , just like: '.card\_\_title--purple' and ' card\_\_button--green'.

Now our CSS just need to reflect this. Every 'block' and 'element' classes will have whatever CSS it's needed. Then, we just need to add the minor CSS rules we need on our 'modifiers'.

Hope this was helpful to you, I really suggest you guys try this on your projects since it's really handy! See ya 🤓✌️