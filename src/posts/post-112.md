---
path: "/tips/post-112"
date: "2019-12-20"
title: "Inserting an audio file on a webpage using only HTML"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587499125/tips/112-1_gimw3e.png'
description: 'How to insert a audio file on a page'
number: 112
status: true
---

Hi guys! Today we'll be seeing how we can easily use audio on a webpage. With HTML5 we have an 'audio' element that does just this. Let's see how it works!

Doing this is really super simple. We just need to create an 'audio' element. On this element we can add the 'controls' parameter. What this will do is create controls like play, pause and volume for this audio file. Without it you just won't have any controls and the audio will just play.

```html
 
<audio controls>
    <source src="./music.mp3" type="audio/mpeg">
    Your browser does not support audio. Try updating it or using a different one
</audio>

```

Inside this audio element we then need to add another element - source. Here you'll have to put the 'src' that will have the path to your audio file and then 'type' where we need to set the type of this audio file. In my case I was using a .mp3 file so the type is 'audio/mpeg'.

Finally, before closing the audio tag we can place any message we want that will only show to users that are using browsers that don't support audio.

And that is all! Is really simple to add an audio file to your website as you can see so give it a try and play with it if you haven't yet 😁