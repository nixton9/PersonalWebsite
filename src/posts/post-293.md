---
path: '/tips/post-293'
date: '2021-05-26'
title: 'Using your own controls for the audio tag'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1622040613/tips/293-1_pvn2ms.png'
description: 'How to create custom controls for the HTML audio element'
number: 293
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1622040773/tips/293-2_pec8dl.gif 'HTML audio')

How to create your own controls on the HTML Audio element 🎵

What's up guys? Today's snippet shows how we can create our own controls for the audio element in HTML.

```html
<div>
  <audio controls id="audioEl">
    <source src="music.mp3" type="audio/mpeg" />
    Your browser does not support audio. Try updating it or using a different
    one
  </audio>

  <div class="audio-controls">
    <img
      src="start.svg"
      alt="Play from start"
      onclick="playFromStart()"
      style="width: 4.2rem"
    />
    <img src="play.svg" alt="Play" onclick="play()" />
    <img src="pause.svg" alt="Pause" onclick="pause()" />
  </div>

  <div class="audio-inputs">
    <div class="input">
      <label for="volume">Volume</label>
      <input
        type="range"
        min="0"
        max="1"
        step=".1"
        value="1"
        onchange="changeVolume(event)"
        id="volume"
      />
    </div>

    <div class="input">
      <label for="speed">Speed</label>
      <input
        type="range"
        min="0"
        max="1"
        step=".25"
        value="1"
        onchange="changeSpeed(event)"
        id="volume"
      />
    </div>
  </div>
</div>
```

First, we'll create our HTML structure, with the audio element and then we'll add some controls - buttons to play, pause and play from the start and two range inputs to control the audio volume and it's speed. On each of these controls we'll add some onclick/onchange functions.

```javascript
const audioEl = document.getElementById('audioEl')

const playFromStart = () => {
  audioEl.pause()
  audioEl.currentTime = 0
  audioEl.play()
}

const play = () => audioEl.play()

const pause = () => audioEl.pause()

const changeVolume = e => (audioEl.volume = e.target.value)

const changeSpeed = e => (audioEl.playbackRate = e.target.value)
```

Now, in Javascript, we'll create these functions that we assigned to the controls. First we will create a const to reference our audio element, and then on our functions we will just use the audio native methods to control it - play, pause, volume, playbackRate, etc.

```css
.audio-controls {
  text-align: center;
  margin-top: 2rem;
}

.audio-controls img {
  width: 3rem;
  margin: 0 1rem;
  cursor: pointer;
}

.audio-inputs {
  display: flex;
  margin-top: 2rem;
}

.audio-inputs input {
  margin: 0 1rem;
}
```

And that's it in terms of functionality! Now we just need some simple CSS to put everything in place.

Let me know your thoughts on this tip 🤗✌️
