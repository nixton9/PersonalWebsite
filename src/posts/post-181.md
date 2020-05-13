---
path: "/tips/post-181"
date: "2020-05-13"
title: "What is GatsbyJS and how to start using it"
languages: ['Javascript', 'GatsbyJS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589382501/tips/181-1_fddd2e.png'
description: 'How to start using GatsbyJS'
number: 181
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589382501/tips/181-2_b4bkpv.png "Gatsby starter blog")

What's up guys? 😎  
Have you ever used GatsbyJS?

GatsbyJs is a static site generator. Basically it's a really awesome framework for building super fast static websites using React. I've just used it to create my website - [eduardo-araujo.com](https://eduardo-araujo.com) - and it made the whole process simple and fun!

This brings a lot of advantages in terms of caching, speed, SEO, etc.
If you create a website with React using 'Create React App' for example, everything will be Client Side Rendered. In terms of SEO, this will make things way more difficult because when Google bots try to index the pages, they will not exist. With Gatsby, every page will be created during the build process and stored on the server, thus making it way more efficient in terms of SEO.

Gatsby has some awesome pre-made components to help and improve your images, SEO, etc.
Another really cool thing with Gatsby is that it's gaining a lot of popularity and a huge community with it. You have tons of plugins for all sorts of different features that you can easily use on your website. 

Gatsby is often used for blogs. You can write the content using Markdown - which is super simple - and then fetch all the content with graphQL.

```bash

# First we install Gatsby globally on our machine
npm install -g gatsby-cli


# Then we can create a new Gatsby project from scratch
gatsby new gatsby-site

# OR we can use a Starter for our project
gatsby new gatsby-starter-blog https://github.com/gatsbyjs/gatsby-starter-blog


# We CD into our project
cd gatsby-site


# And we run the development server
gatsby develop


# Visit http://localhost:8000 and you'll see your new project!

```

To start using you don't need much. Just check the code to see what you need to do. First we need to install the gatsby cli. Then we can either create a website from scratch or using one of the many starters that Gatsby has on their website - check them. You have different starters for pretty much all kinds of websites and blogs.

Then we just need to cd to the website folder and run 'gatsby develop' to spin up our website on localhost:8000.

Visit [gatsbyjs.org](https://gatsbyjs.org) to know and learn more about this! See you soon guys, take care! 😁🙏