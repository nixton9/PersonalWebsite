---
path: '/tips/post-290'
date: '2021-05-17'
title: 'Sending a text message from an HTML anchor'
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1621255813/tips/290-1_z6zxir.png'
description: 'Using an anchor to send a SMS'
number: 290
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1621255883/tips/290-2_nelz7n.gif 'HTML SMS anchor')

Sending an SMS from an HTML anchor ✉️

What's up guys? So only the other day I found that you can use an HTML anchor to create a link for a text message, basically the same way you can do for an email.

```html
<a
  href="sms://+351914765874?&body=Follow webDevTips for awesome Web Dev related tips"
  >Send Text Message</a
>
```

In order to do this, we need to create our anchor and on the 'href' we will type 'sms://"phone number"&body="text message content"'. It's that simple!

This will open any text message application that the user has on his device, with a text ready to be sent for the specified phone number and with the content that we passed in.

```css
a {
  background-color: #8125e2;
  color: #fff;
  font-weight: 700;
  font-size: 1.3rem;
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
}
```

How about you? Have you ever used this? 🤓
