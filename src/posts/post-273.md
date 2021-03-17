---
path: '/tips/post-273'
date: '2021-03-17'
title: 'Animating the URL bar with emojis'
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1615985689/tips/273-1_gu1k8w.png'
description: 'How create an animation with emojis on the URL'
number: 273
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1615985672/tips/273-2_yktoka.gif 'Animated url')

What's up guys? 😁✌️  
Today we will check how we can do an animation on the url bar (yes, you read that right) by using emojis!

This is something I found a while ago on a blog post and didn't know it was possible to accomplish. Well, it is accomplishable and it's really easy as well 👌

So the first thing we need to do is to create a script and there we'll start by creating an array with the various emojis that we want to create the animation. For this example, I used the various moon emojis because they easily create a continuous animation effect.

```javascript
const emojies = ['🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔']

const animateUrl = () => {
  window.location.hash =
    emojies[Math.floor((Date.now() / 100) % emojies.length)]

  setTimeout(animateUrl, 50)
}

animateUrl()
```

Now we just need to create a function 'animateUrl' that will continuously call itself with a setTimeout. This function will change window.location.hash and set it with a different emoji in sequence.

And that's it!
What do you think of this type of animation? Would you use it on a website? 🤓
