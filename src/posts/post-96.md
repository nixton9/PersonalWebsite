---
path: "/tips/post-96"
date: "2019-11-22"
title: "Creating a cool glitch effect with CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587242743/tips/96-1_lllxs5.png'
description: 'How to create a glitch effect in CSS'
number: 96
status: true
---

`youtube: https://www.youtube.com/embed/9mKFMKJC2p0`

How's your Friday going guys?  
Today we have an awesome tip on how to create a 'glitch' effect with some CSS.
This effect is pretty simple to create and looks cool when applied on some intro text or something that you simply want to highlight.

To start, you just need some element where you'll have your text. In this case I used a 'h1' and gave it a class of 'glitch-effect'. This is all in terms of HTML!

 ```html

    <h1 class="glitch-effect">webDev Tips</h1>

 ```

Onward with the CSS now. To get this effect we basically have to create two pseudo-elements on our main element: an ':after' and a ':before'. Both these pseudo-elements will have a 'content' property where we put the same text that we have on our main element. This will create like 3 layers of the same text, that will have different colors and will then be animated.

So, we create this pseudo elements, give them different colors, different z-index for one to be on top of the other and then we give them an animation. This animation will use a transform 'translate' to slightly move each of the pseudo-elements in different directions thus creating the final effect.

 ```css
.glitch-effect{
    position: relative;
    text-transform: uppercase;
    color:#007EFF;
    font-size: 50px;
    letter-spacing: 10px;
}

.glitch-effect::before, .glitch-effect::after{
    content: 'webDev Tips';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    text-transform: uppercase;
    opacity: .8;
}

.glitch-effect::before{
    color: #14e2e2;
    z-index: -1;
    animation: effect .3s ease infinite;        
}

.glitch-effect:after{
    color: #FF2A78;
    z-index: -2;
    animation: effect .3s ease reverse infinite;
}

@keyframes effect {
    0% { transform: translate(0) }
    20% { transform: translate(-3px, 3px) }
    40% { transform: translate(-3px, -3px) }
    60% { transform: translate(3px, 3px) }
    80% { transform: translate(3px, -3px) }
    100% { transform: translate(0) }
}
 ```

And that's it! A pretty easy effect to implement on your projects that can help your pages stand out more. Let me know if you have any doubts.