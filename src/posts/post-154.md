---
path: "/tips/post-154"
date: "2020-03-13"
title: "Difference between using 'async' and 'defer' on your scripts"
languages: ['Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1588228992/tips/154-1_hm4hvr.png'
description: 'Loading scripts with async and defer'
number: 154
status: true
---

Happy Friday guys 😁  
When we place scripts on our HTML pages, those scripts need to be loaded. This loading, depending on numerous reasons, can slow down the overall performance of our page so we need to be careful with how we handle them.

Usually we write a script tag with a src attribute. On this attribute we'll place the path to our script. When the HTML is being parsed, it will find this script, make a request to fetch it and then execute it. After this is done, the parsing of the HTML will continue. This why a script can affect the performance of a page - we are stopping the HTML parsing because of the script.

Additionally, we can also add one of two attributes on the script tag: 'async' and 'defer'. Using them, makes the loading of a script behave differently. Let's see how.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1588228992/tips/154-2_pq3mob.png "Scripts with async and defer")

With 'async' the browser will fetch the script asynchronously while the HTML is being parsed. When the fetch ends, the parsing will pause to execute the script. After this, the parsing will continue. An 'async' script will not block the page, but you should not use this on scripts that rely on another scripts since the first to be loaded will be executed straight away. It's better to use this when we are using a third-party script.

With 'defer' the browser will also fetch the script asynchronously while the HTML is being parsed. The difference is that the script will only be executed once the parsing is completed. Scripts with 'defer' won't block the page so the page content will show immediately. If we have multiple scripts with 'defer', they will be executed in whatever order they already have, unlike scripts with 'async'.

Hope you liked this tip and hope you a have a great weekend! 🔥🤘