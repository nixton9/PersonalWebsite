---
path: "/tips/post-136"
date: "2020-02-05"
title: "How to create, get and delete cookies with Javascript"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587971115/tips/136-1_uj3gqb.png'
description: 'Using cookies in Javascript'
number: 136
status: true
---

How is your week going guys? 😁  
Today's tip is about something that we usually hear a lot about: cookies 🍪🍪
But, what exactly are cookies and how we can use them?

A cookie is basically a piece of information that a website sends to your computer that is then stored in a file on your browser. The most common use case for a cookie is to store some information about the user that can later be retrieved and used to show custom stuff on the website.


![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587971375/tips/136-2_uipnaa.png "Cookies in Javascript")

So how we can use cookies? Well, first of all, we need some kind of server that supports HTTP, so if you try to do this only on a local browser you won't be able to do it.
Take a look at the code example, to set a cookie we only need to do "document.cookie = ' KEY = VALUE; expires = DATE' ". So, we associate a value with a key and then we set the date when the cookie will expire. -
To retrieve this cookie we just need to use 'document.cookie' and we have access to that cookie. Finally, if we want to delete a cookie, we can do exactly the same we did to create the cookie, but on the 'expires' we put some past date. This will delete the cookie because it's expiration date has already passed.

And that's it about cookies, hope you learned something new! See you guys 🤓✌️
