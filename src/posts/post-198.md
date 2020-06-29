---
path: '/tips/post-198'
date: '2020-06-29'
title: 'Creating and writing to a file in nodeJS'
languages: ['Node', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1593436697/tips/198-1_fmiclr.png'
description: 'How to create a file and write to it in nodeJS'
number: 198
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1593436697/tips/198-2_dugwkg.png 'Node fs.writeFile')

Creating and writing to a file in nodeJS 💻

One of the most used modules in nodeJS is the 'fs' module - File System.
This modules provides us with an API that lets us interact with the file system. In this simple example we'll check out to use it to write to a file.

We just need to first make sure we require the 'fs' module. Then, we'll use the 'writeFile' method. This method allows us to replace the content of a file if it exists, otherwise it will create a new file with the content we pass to it.

```javascript
fs = require('fs')

fs.writeFile(
  '/Users/eduardoaraujo/Desktop/sample.txt',
  'Follow @webdev.tips for awesome Web Dev related tips',
  err => {
    if (err) return console.log(err)
  }
)
```

To use 'writeFile' we need to pass three arguments - the path to the file we want to create/modify, the content we want to put on that file and finally a callback function that will be executed when this is done. On this callback function we have access to any error that may come up.

And that's all! With this simple snippet we just created a new file and wrote some content to it.  
Have you ever used this in any project? 😁✌
