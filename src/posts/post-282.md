---
path: '/tips/post-282'
date: '2021-04-19'
title: 'How to turn a React app into a PWA in two minutes'
languages: ['React', 'PWA']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1618832971/282-1_ku5upm.png'
description: 'Create React App to PWA!'
number: 282
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1618833058/282-2_oxgwvw.gif 'React PWA')

Create react app to PWA in two minutes 🔥

Hey guys! Today we'll check how simple it its to create a PWA using create-react-app.

A PWA - Progressive Web App - is a type of application built with web technologies but that tries to replicate the features of a native app. You can install the app on a device, use push notifications, have offline support, custom shortcuts, etc. You can even upload it to the Google Play Store with some tweaks!

On this tip we'll just see how we can turn an app from 'create-react-app' into a PWA. So the first thing you need is an app made with CRA - for this example I've created a very basic one.

```javascript
//index.js

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
```

Now, if we go to 'index.js' we should have a line on the end of file that is 'serviceWorker.unregister()'. Well, just change that to 'register()' and we have a PWA! Easy, right?

But this would be the bare minimum. So what we'll do next is add some icons and colors schemes for our app so it looks good when users install it on their device. To do this just go to 'public/manifest.json'. This file has all the metadata associated with our App and how it should look and behave across devices.

```javascript
//public/manifest.json

{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

So on this file , write your app's name, a description, add some icons with the sizes intended (and make sure you add the actual icons files on the 'public' folder) and specify your app's theme and background color.

And we're done! We have a very basic PWA. If you open it and go the browser's settings you should see an option to 'add to homescreen' or something similar.

How about you? Have you ever built a PWA? How was your experience with it?
