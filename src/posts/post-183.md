---
path: "/tips/post-183"
date: "2020-05-18"
title: "How to use the device's Orientation Sensor with JS"
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589810807/tips/183-1_q7wzbn.png'
description: 'Using the Orientation Sensor of a device with Javascript'
number: 183
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1589811022/tips/183-2_jtijst.gif "Smartphone orientation sensor")

Did you know it's super easy to use the devices on our devices with some JavaScript? 🤔

Last week I've decided to mess around a bit with this and wanted to show you how easy it is to do so. In the video, I'm using my smartphone to visit this page and I'm turning it around - that's why we see the values fluctuate so much.

We'll use the DeviceOrientationEvent API that will give us some information regarding the orientation of the device that's viewing our page. This will return us the three value that I'm using on the example: alpha, beta and gamma. 

Alpha will be the rotation of the device around the Z axis. Beta will be the rotation around the X axis. And Gamma will correspond to the Y axis.

```html

<h1 id="supported">Orientation Sensor</h1>
            
<div>
    <strong>Alpha</strong>
    <div id="alpha">0</div>
</div>

<div>
    <strong>Beta</strong>
    <div id="beta">0</div>
</div>

<div>
    <strong>Gamma</strong>
    <div id="gamma">0</div>
</div>

```

Basically we just check if the the devices supports this API first. If it doesn't support, we'll print a message on the page saying that is not supported. If it does support, we'll add an  EventListener for it that will trigger our handleOrientation function. In here we'll print the values we discussed above on the page.

```javascript

if (window.DeviceOrientationEvent) {
    document.getElementById("supported").innerText = "Orientation Sensor Supported!";
    window.addEventListener('deviceorientation', handleOrientation, false);
} else {
    document.getElementById("supported").innerText = "Orientation Sensor Not Supported!";
}

function handleOrientation(e){
    document.getElementById("alpha").innerText = e.alpha;
    document.getElementById("beta").innerText = e.beta;
    document.getElementById("gamma").innerText = e.gamma;
}

```

Using this, you can get creative and create some really cool apps! See you soon guys 😁