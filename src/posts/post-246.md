---
path: '/tips/post-246'
date: '2020-12-04'
title: 'Getting started with Webpack'
languages: ['Webpack', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1607960085/tips/246-1_mple7t.png'
description: 'How to start using Webpack on your projects'
number: 246
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1607960085/tips/246-2_np7ubl.png 'Final result')

What's up guys? 🤗
Today we'll be taking a look on how to get started with Webpack.

For those of you who don't know, Webpack is probably the most used module bundler for JavaScript. It will take all your code and generate optimized packages to be used by the browser. It can also be highly configurable and you can use it with a ton of different plugins for different use cases.

Webpack it's something that can generate some confusion, especially for more inexperienced devs, so in here we'll take a look at the most basic example on how to use it with some imports (we'll import the 'moment' library in this case).

We'll start by creating a new project with 'npm init' and then installing webpack and webpack CLI with 'npm install webpack webpack-cli --save-dev'.

```json
{
  "name": "proj",
  "version": "1.0.0",
  "description": "",
  "private": "true",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.6.0",
    "webpack-cli": "^4.2.0"
  },
  "dependencies": {
    "moment": "^2.29.1"
  }
}
```

Next we'll create an two folders: 'dist' and 'src'. On the 'src' folder we'll have our 'original' code that we'll edit and on the 'dist' folder we'll have the minimized and optimized version of the code. We can go ahead and create an 'index.html' file on the 'dist' folder and a 'index.js' on the src folder.
We should also go to our 'package.json', remove the 'main' property that we have there and add a new one with '"private": true'.
Your package.json should look like the one here.

```javascript
import moment from 'moment'

const dateEl = document.getElementById('date')

dateEl.innerHTML = moment(new Date()).format('DD MMM')
```

Now we can go ahead and write our code. On this example I'm just importing 'moment' - a library to handle dates - and I'm displaying the current date with a specific format. We also need to make sure we import our 'index.js' file on the 'index.html'.

```html
<!--CONTENT-->
<div class="content">
  <h1>Today is <span id="date"></span></h1>
</div>
<!--CONTENT-->
<script src="main.js"></script>
```

When everything is done we just need to run 'npx webpack'. This will take 'index.js' as the entry file and will generate a 'main.js' file on the 'dist' folder with our code. If we now open our HTML file on the 'dist' folder we should see everything working!

Let me know what are your thoughts on Webpack and if you use it, on the comments! 🤓🙏
