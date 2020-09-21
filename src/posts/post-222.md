---
path: '/tips/post-222'
date: '2020-09-21'
title: 'Creating native animations from After Effects in React'
languages: ['REACT']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1600705321/tips/222-1_mzty0f.png'
description: 'Rendering high quality animations in React with Lottie'
number: 222
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1600705434/tips/222-2_khfhlm.gif 'React Lottie')

Today we'll be checking Lottie - a library originally made by Airbnb that let's us use high quality animations from After Effects on the web!

With this, you can create any animation you want on After Effects, export it as JSON with the 'Bodymovin' plugin, and then just import it into your app to use it with Lottie.

Check the example provided. We have two animations: the first one just continuosly running on loop, and the second one with some buttons to control it. To start using this, we first need to install Lottie with: npm install --save react-lottie

So for the first animation, we just need to import the JSON data for the animation, create an object with some options for Lottie (including the animation data we want) and then using the Lottie component by passing it these options, a width and an height. And that's all you need to render these smooth animations!

```jsx
import React, { useState } from 'react'
import Lottie from 'react-lottie'
import animation404 from './assets/404animation.json'
import animationMarker from './assets/markerAnimation.json'

const App = () => {
const [isStopped, setIsStopped] = useState(false)
const [isPaused, setIsPaused] = useState(false)

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation404,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
}

const secondAnimOptions = {
    ...defaultOptions,
    animationData: animationMarker
}

const handlePlay = () => {
    setIsStopped(false)
    setIsPaused(false)
}

return (
    <div>
        <Lottie options={defaultOptions} height={400} width={400} />
    </div>

    <div>
        <Lottie options={secondAnimOptions} isStopped={isStopped}
                isPaused={isPaused} height={400} width={400} />

        <div className="buttons">
        <button onClick={() => setIsStopped(true)}>Stop</button>
        <button onClick={() => setIsPaused(!isPaused)}>Pause</button>
        <button onClick={handlePlay}>Play</button>
        </div>

    </div>
)
}
```

On the second animation we start by doing pretty much the same thing. But we'll create two pieces of state: one to control the pause and another to control the stop. We'll pass these properties to the Lottie component and then beneath it we will add some buttons that will control the pause and the stop. And we're all done.

In case you want to try this out but don't want to make a custom After Effects animations, you can just go to [LottieFiles](https://lottiefiles.com) and browse through hundreds of animations you can use. Just need to copy the JSON data and paste it on your app!

Hope you liked this tip guys, see you soon! 😎✌️
