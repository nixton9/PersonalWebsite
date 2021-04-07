---
path: '/tips/post-279'
date: '2021-04-07'
title: 'How to easily use the webcam with some JS'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1617796633/tips/279-1_g6imxx.png'
description: 'Streamiing video from a webcam usng Javascript'
number: 279
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1617796756/tips/279-2_p1owta.gif 'Webcam tester')

How to use the webcam with Javascript 📷

For today's snippet we'll check how easy it is to stream video from a webcam to a webpage just by using some simple JavaScript.

In order to do this, we'll first create our HTML where we'll have two buttons (one to start the stream, and another to stop it) and a video element where we'll display the stream. This video element should have an ID for us to use in JS and 'autoplay' set to true.

```html
<h1>Webcam Tester</h1>

<div class="buttons">
  <button onclick="startWebcam()">Turn on webcam</button>
  <button onclick="stopWebcam()">Turn off webcam</button>
</div>

<video id="webcam-vid" autoplay="true" />
```

Using 'navigator.mediaDevices.getUserMedia' we'll have access to the stream and we just need to apply it to the video element srcObject.

```javascript
const videoEl = document.getElementById('webcam-vid')

const startWebcam = () => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        videoEl.srcObject = stream
      })
      .catch(err => {
        console.log('Something went wrong', err)
      })
  }
}

const stopWebcam = () => {
  var stream = videoEl.srcObject
  var tracks = stream.getTracks()

  for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i]
    track.stop()
  }
  videoEl.srcObject = null
}
```

To stop the stream, we need to first get it from the video srcObject, get the 'tracks' on this stream and use the 'stop' method on them.

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
  background-color: #45fce4;
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
  margin-top: 3rem;
}
```

And we're done! On a later tip we'll check how we can use this to take screenshots of the webcam stream and show them on the webpage. See you soon! 🤓✌️
