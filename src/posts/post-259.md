---
path: '/tips/post-259'
date: '2021-01-27'
title: 'Creating a guided tour in your app with React Joyride'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1611763364/tips/259-1_v6pmsj.png'
description: 'Using React Joyride to create a walkthrough explainer'
number: 259
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1611763392/tips/259-2_antsfj.gif 'React joyride')

Creating a guided tour on your app with React Joyride 🔥🔥

Guided tours/Walkthroughs/Intros, whatever you want to call it, are an awesome way of showing users how to navigate through your app or how specific features work. A while ago I showed you how to do this in plain JavaScript using IntroJS (tip #231).

Well today we'll be checking 'react-joyride', a really neat library that makes it super simple to create a guided tour on our React app.

So the first thing we need to do is install the library by doing: npm install react-joyride.
Then, on the Component we want to use this, we import 'Joyride' and use it by passing some props. There are a lot of props we can use here to customize it - we can even pass our own custom component to make it look how we want to - but the main thing that we need to pass is the 'steps' prop.

```jsx
import React, { useState } from 'react'
import Joyride from 'react-joyride'

const tourSteps = ...

const Walkthrough = () => {
  const [steps] = useState(tourSteps)

  return (
    <>
      <Joyride steps={steps} continuous showSkipButton={true} />
      <div className="container">
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h1 className="title">webDevTips</h1>
        <p className="text">
          Want to learn more about Web Development? Follow @webdevtips on
          Instagram to get awesome tips!
        </p>

        <button className="cta">Follow</button>
      </div>
    </>
  )
}

export default Walkthrough
```

If you take a look a look at the 'tourSteps' on the last snippet, this is where we tell exactly what steps we want on our tour and what element they should refer to. Each step is an object that needs to have a 'target' - the element that we want to highlight - and a 'content' - the text that will appear on this step.

```javascript
const tourSteps = [
  {
    target: 'body',
    placement: 'center',
    title: 'Walkthrough',
    content:
      'Seems like it’s your first time here. Follow this quick walkthrough to know how get around. ',
    disableBeacon: true,
  },
  {
    target: '.menu',
    content: 'Click here to open the sidebar.',
    disableBeacon: true,
  },
  {
    target: '.title',
    content: 'This is the main title.',
    disableBeacon: true,
  },
  {
    target: '.text',
    content: 'This is the main text for the page.',
    disableBeacon: true,
  },
  {
    target: '.cta',
    content: 'This is the Call to Action button.',
    disableBeacon: true,
  },
]
```

By default, Joyride will display a beacon (a red bouncing circle) on the element so that the user can click on it and open the Tour. For this example I didn't want that so I set 'disableBeacon: true' on all of the steps.

If you like this and want to give it a try make sure you check this library on GitHub and see all of the props that you can use here to further customize it.

And that's it guys. What are you thoughts on using these sort of guided tours on applications? Do you find them useful or do they just get in the way? Let me know in the comments 👇😁
