---
path: '/tips/post-284'
date: '2021-04-26'
title: 'How to take screenshots with the webcam in JS'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1619449556/tips/284-1_n9xade.png'
description: 'Using Javascript to take screenshots from the webcam'
number: 284
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1619449711/tips/284-2_pbc30p.gif 'JS Webcam')

Happy Monday guys! 🤓✌️

So a couple of weeks ago I made a tip on how to stream video from a webcam with Javascript. Using this as a base, we will check today how to take screenshots from this video stream!

```html
<h1>Webcam Tester</h1>

<div class="buttons">
  <button onclick="startWebcam()">Turn on webcam</button>
  <button onclick="takeScreenshot()">Take screenshot</button>
</div>

<video id="webcam-vid" autoplay="true"></video>

<div id="screenshots"></div>
```

The HTML is pretty much the same from the the first tip - I just replaced the button to stop the stream with a button to take the screenshots and I added to div that will be used for us to insert the screenshots we'll take.

```javascript
const videoEl = document.getElementById('webcam-vid')
const screenshotsEl = document.getElementById('screenshots')
let imageCapture

const startWebcam = () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        videoEl.srcObject = stream
        imageCapture = new ImageCapture(stream.getVideoTracks()[0])
      })
      .catch(err => {
        console.log('Something went wrong', err)
      })
  }
}

const takeScreenshot = () => {
  imageCapture.takePhoto().then(blob => {
    const img = document.createElement('img')
    img.src = window.URL.createObjectURL(blob)
    screenshotsEl.appendChild(img)
  })
}
```

On the JavaScript, we also keep the same 'startWebcam' function and we'll add another function - 'takeScreenshot'. On this function we'll use the 'imageCapture' object - that we initially defined on the 'startWebcam' function - and we'll call the 'takePhoto' method on it.

This method will return a blob that we'll use as src (with the createObjectURL method) for an image that we will create here and append to the correct element.

```css
h1 {
  color: #424242;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

button {
  background-color: #4605ff;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  margin: 0 1.5rem;
  cursor: pointer;
}

video {
  width: 525px;
  height: 400px;
  display: block;
  margin: 3rem auto;
}

#screenshots {
  display: flex;
  justify-content: center;
}

#screenshots img {
  max-width: 100%;
  width: 17rem;
  margin-right: 1.5rem;
  border-radius: 4px;
}
```

And that's it! We have a working web app where we can stream the user's webcam and take screenshots with it!
