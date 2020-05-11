---
path: "/tips/post-97"
date: "2019-11-23"
title: "How to take advantage of the browser's Session Storage"
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587242915/tips/97-1_zph6px.png'
description: 'What is the Session Storage in the browser and how to use it'
number: 97
status: true
---

On my tip [#32](/tips/post-32) I talked about Local Storage - a feature of the Web API that allows us to save data on the browser in a 'key -> value' format. Today I'll be talking about Session Storage, something that's very similar to Local Storage but has a main difference.

Session Storage allows us to also save data on the browser using a 'key -> value' format but unlike Local Storage, this data will be deleted when the Session ends. So, everytime the user closes the tab or the browser that data will be completely lost.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587243033/tips/97-2_nyynto.png "Session Storage")

Look at the code snippet to see how to use this feature. We basically only use three commands: one to add a item to the Session Storage, one to retrieve a item and another to delete that item. It is important to note that we can only save strings in here so if you want to save something that is not a string you have to mutate it first .

We can use 'sessionStorage.setItem( key, value )' to save a specific value under a key. To then retrieve this value we use 'sessionStorage.getItem(key)' with the same key name we first defined.
Finally we can use 'sessionStotage.removeItem(key)' to delete a specific item from the Session Storage.