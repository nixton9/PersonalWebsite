---
path: "/tips/post-140"
date: "2020-02-12"
title: "Using Icons from different libraries on a React application"
languages: ['React', 'Icons']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588056720/tips/140-1_zhpagc.png'
description: 'How to use icons from different libraries on React'
number: 140
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588056720/tips/140-2_slud3b.png "React Icons")

Hey guys, what's up?  
So, on on the past two weeks i shared two tips showing you how to use icons on a website with Font Awesome library and how to use icons without any library (tips 133 and 125). Today i want to show you how we can easily add icons on a React application 👍

To do this, we'll be using a library called 'react-icons'. This library is awesome because it let us use icons from different libraries ( FontAwesome, Typicons, Material Design Icons, DevIcons, and a bunch more) and it's super easy to use. I suggest you visit their website - react-icons.netlify.con - to browse through all the icons you can use.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588056891/tips/140-3_ybku8h.png "React Icons JSX")

We'll start by installing this library by doing ' npm install react-icons' on our project. Then, we just need to go a Component and import the icons that we want. We can this by writing ' import { someIcon } from 'react-icons/fa' ', where 'fa' is the icon library that we want to use. -
Now, inside our Component's return we just need to use that Icon as a component, so: ' <SomeIcon /> '. We can also give it a class if we want.
We can then style it with CSS by using 'fill' to set the color of the icon, 'stroke' to set the strole color of the icon and 'font-size' to set the size of the icon!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588056891/tips/140-4_sxuycx.png "React Icons CSS")

Hope you liked this tip, have a nice one 😎✌️