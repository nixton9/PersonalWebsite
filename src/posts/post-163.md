---
path: "/tips/post-163"
date: "2020-04-03"
title: "Displaying images with a cool Ambilight effect"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362097/tips/163-1_akmsds.png'
description: 'How to create a ambilight effect - colorful shadows - in React'
number: 163
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362098/tips/163-2_wkaboh.png "Ambilight effect")

Happy Friday 😎🔥  
For today's tip we'll check a very cool library i found the other day that will create an Ambilight effect on an image. With the Ambilight effect you basically get a shadow around your image that will have the same colors of the image. It's pretty neat!

The library can be found on Github with the name 'Cosha' and was made by Robin Loeffel.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362097/tips/163-3_mz4jos.png "React Ambilight effect")

Using it is really really simple! We just need to first create an img element with whatever image we want and give it a specific class.

Then, we need to import the library. This can be done with a script tag with the source of the library. Next, we'll create another script where we call the 'cosha' function with an object that will have some settings. The most important here is className, where we need to put the same class that we gave to our image.

On this object we can also tweak some settings like brightness, blur, the x and y dimensions of our shadow, etc.
And we're done. Super easy to use and the result is really cool!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362097/tips/163-4_ihrxtq.png "React Ambilight effect")

Hope you guys have a nice weekend 😁✌🙏