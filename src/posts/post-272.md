---
path: '/tips/post-272'
date: '2021-03-15'
title: 'How to easily deploy your website on Netlify'
languages: ['Netlify']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1615815016/tips/272-1_pgqptu.png'
description: 'Deploying websites from Github with Netlify'
number: 272
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1615815209/tips/272-2_lxptcz.gif 'deploy on netlify')

Deploying your website on Netlify 🖥️

Hey guys! Today we have an awesome tip on how to deploy your website on Netlify through Git - it couldn't be any easier!

So for this tip, I created a really simple page using Gatsby and created a repo with it on Github. You can obviously do this using any other framework/tools you like.

First thing we need to do is to create a Netlify account. After you do this, go to the main dashboard and click the button 'New site from Git'. On the next page, click on GitHub (or any of the other if you prefer), login to your account and authorize Netlify to link the accounts. 

Now, click on the GitHub button again and choose the repository that has the website you want to deploy. On the next page, choose what branch you want to have deployed (usually it's 'master') and the build command (since I'm using Gatsby, the build command is 'gatsby build'. If you were using create react app the build command would be the default one 'npm run build'.

Finally just click on the Deploy button and it's all done! Super easy, right?
You will now be redirected to a page where you can see the current status of your website - it should be 'building'. Wait until it finishes building the website and then just go ahead and open it with the link you see at the top section. If you want, you can now add a custom domain to it.

What about you? Have you ever used Netlify to deploy your apps? 🤔✌️