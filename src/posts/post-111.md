---
path: "/tips/post-111"
date: "2019-12-18"
title: "What are Environment Variables and how to use them"
languages: ['React', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587498726/tips/111-1_ah7hft.png'
description: 'Using Env Variables'
number: 111
status: true
---

Hey guys! Today we'll be talking about Environment Variables - what they are and how we can use them.  
Env variables are a pretty nifty way to store some pieces of data that you need on your application but that you don't want people to see. For example, some API key that you need to use, or a Token, and with this you can save these values on a 'special' kind of file. You should then add this file to your .gitignore so that you never have these things on your repositories for others to see.

On this tip, I'll show you how to use these env variables on a Create React App application. But you can still use this on different applications and it's basically the same.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587498745/tips/111-2_utrzst.png "ENV variables")

To start we need to install the 'dotenv' library, without it we won't be able to use these files. We just need to do 'npm install dotenv --save'. Then, after we install the library, we can go ahead and create a file called '.env' at the root level of our application.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587498746/tips/111-3_ixshr1.png "ENV variables")

We then open this file and it's here that we'll put all the data we want. Here need to put the data following this format: 'SECRET\_KEY = value'. But, if we are using this in a Create React App, like in this example, all keys must start with 'REACT\_APP\_' so it would be 'REACT\_APP\_SECRET\_KEY = value'.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587498746/tips/111-4_qsyd9f.png "ENV variables")

Now that we have our data stored in the file, we can access it on the application. We first need to require the library with 'require('dotenv').config( ). Then we just need to do 'const SECRET\_KEY = process.env.REACT\_APP\_SECRET\_KEY' and it's done! We can have easily have access to this sensitive piece of data.

Finally, as I mentioned earlier, be sure to include the '.env' file on the gitignore file so we don't show this sensitive data on the repository.  
Hope you liked it and let me know your feedback! 🤓✌
