---
path: "/tips/post-143"
date: "2020-02-17"
title: "Inspecting your CSS animations in Chrome"
languages: ['Chrome', 'CSS', 'Misc']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588057594/tips/143-1_o5ufqs.png'
description: 'Using the Chrome DevTools to inspect CSS animations'
number: 143
status: true
---

`youtube: https://www.youtube.com/embed/jLR1-Klzp9k`

What's up guys, all good? 😁🤘  
Today i want to talk with you about another neat functionality that i recently found on Chrome: the Animations Inspector.

So what does this Inspector do? When you have some CSS animation on a specific element, this lets you select that animation and review it in real time.

 ```html

<h1>webDev Tips</h1>

 ```

This is awesome for debugging purposes as it let's you change the velocity of your animation and the delay of it. With this you can easily fix any problems that your animation may have or it can help you understand why the animation isn't as smooth as it should be.


 ```css

 h1 {
    color: #8125E2;
    font-size: 45px;
    opacity: 0;
    animation: fadeUp .5s linear .5s forwards;
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(40px);
        }
    to {
        opacity: 1;
        transform: translateY(0);
        }
}

 ```

To open this Inspector you just need to open your Chrome DevTools, select the 'Elements' tab, click on the three vertical dots, click on 'More Tools' and then on 'Animations'. This will open a tab on the bottom of your DevTools and when you reload the page, the animations will appear there. You just need to click on whatever animation you want and do what you want with it 😁

Hope you give this a try, it's really handy! See you soon guys 😎🤘
