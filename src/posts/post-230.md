---
path: '/tips/post-230'
date: '2020-10-19'
title: 'Creating neat notifications in React with React Toastify'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1603116847/tips/230-1_rop094.png'
description: 'Using React Toastify to create good looking notifications'
number: 230
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1603116851/tips/230-2_hpk3kr.gif 'React Toastify')

Hey guys, hope you add a good weekend 🤗

To start this week we'll take a look at how we can easily implement cool notifications on a React project using 'react-toastify'.

So the first thing we need is to install this package with 'npm install --save react-toastify'. Now, on our Component, we need to import 'ToastContainer' and 'toast' from 'react-toastify'. We'll also import their CSS so we get all styling already done for us.

Now, inside our Component, we will create a function for every different notification we want. These functions will return a 'toast' and we'll pass the text we want for the notification as a parameter. There are different types of notifications so we call the type we want after 'toast', like - toast.info("notification content") - to create a Info Notification.

```jsx
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Notifications = () => {
  const notification = () => toast('You are being notified!')
  const infoNotification = () => toast.info('You are being notified!')
  const errorNotification = () => toast.error('You are being notified!')
  const darkNotification = () => toast.dark('You are being notified!')

  return (
    <>
      <button onClick={notification}>Notification</button>
      <button onClick={infoNotification}>Info Notification</button>
      <button onClick={errorNotification}>Error Notification</button>
      <button onClick={darkNotification}>Dark Notification</button>
      <ToastContainer autoClose={5000} pauseOnHover draggable closeOnClick />
    </>
  )
}
```

Finally, we just have some buttons where we call each notification when clicked and we need to return the 'ToastContainer' with some options on it. This 'ToastContainer' is what will render each notification and we are passing 'autoClose={5000}' so each notification automatically fades away after 5 seconds, 'pauseOnHover' so the notifications' timer pause when we hover them, 'draggable' so we can dismiss a notification by dragging it and 'closeOnClick' so we can just click anywhere on a notification to dismiss it.

And that's it guys! Let me know your thoughts 😁✌️
