---
path: '/tips/post-210'
date: '2020-08-10'
title: "Auto-pausing a video that's out of view with JS"
languages: ['HTML', 'JS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1597077297/tips/210-1_hfzwre.png'
description: 'Using the Intersection Observer in Javascript to pause a video when out of view'
number: 210
status: true
---

`youtube: https://www.youtube.com/embed/Jv1vRMTFGpA`

Auto-pausing an out of view video with some JS 📺

It's pretty common to see nowadays this feature on websites where you have a video and when you scroll and leave the video out of view, it automatically pauses the video for you. Let's check how we can easily create this feature using Javascript's Intersection Observer.

```html
<div class="container">
  <video src="video1.mp4" id="video" controls autoplay muted></video>
</div>

<section></section>
```

For this example I just created a page with a video on it, and then some empty section below so we can get some empty space. In terms of CSS it's all pretty straightforward as well.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

video {
  width: 50rem;
  border-radius: 20px;
}

section {
  width: 100%;
  height: 100rem;
}
```

Now on our Javascript, we'll start by grabing a reference to our video element. Then we'll setup what we need for our Intersection Observer. This API will let us observe changes in the intersection of two elements or if an element is currently in view. To use it we have to pass two parameters: a callback function and an options object.

```javascript
const video = document.getElementById('video')

const callback = entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio != 1 && !video.paused) {
      video.pause()
    } else if (video.paused) {
      video.play()
    }
  })
}

const options = { threshold: 0.5 }

const observer = new IntersectionObserver(callback, options)
observer.observe(video)
```

The callback function will receive a new entry everytime the intersection occurs. So what we'll do is, for every new entry we'll check if the video element is in view and if the video is not paused. Is this is the case we'll pause the video, otherwise we'll unpause it!

Then, on the options object we'll set the threshold to 0.5, and finally we create our Intersection Observer by passing it the callback and options.

Finally, we call the 'observe' method on our observer and pass it our video element. And we're done! 😁✌
