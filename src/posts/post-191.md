---
path: '/tips/post-191'
date: '2020-06-08'
title: 'Creating a basic HTTP server with Node & Express'
languages: ['Node', 'Express', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1591621539/tips/191-1_u8zux3.png'
description: 'How to creating a web server with Node & Express'
number: 191
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1591621539/tips/191-2_m7iuoj.png 'Web server with nodeJS and Express')

How to create a basic HTTP server with nodeJS and Express 💥

Decided to do a tip on nodeJs since so many people asked for it! Let's check how we can easily create a simple server by using Express - a web framework for node.

We should start by creating a project with 'npm init'. We can use the defaults on all questions that are asked here, we'll just change the entry point from 'index.js' to 'server.js'. Once we are done with this we can go ahead and install 'express' and 'http'.

```bash

# Start a NPM project
npm init

# You use defaults for all fields, just change
# entry point from 'index.js' to 'server.js'


#Install Express and Http
npm install express http


# Once you write all the code start up the server
node server.js

```

Now let's create a file 'server.js'. This will be our main file where we'll set our server. We just need to require 'express' and 'http'. We'll initialize express and save a reference to it on our 'app' const. We'll also create a server with http and save a reference to it on the 'server' const. Now we'll create a 'port' const where we'll set on what port the server should run. By default, on local, it will run on Port 8000

```javascript
const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('We have an express HTTP server running!')
})

server.listen(port, () => {
  console.log(`Server running on Port ${port}`)
})
```

Now well create a route. Using the get method we'll send a response of 'We have an express HTTP server...' when the user tries to access the route '/'. You can create different routes by doing 'app.get('/example')' and sending a response to it. Then when the user visits '/example' he will see that response.

To finish, we just need to use the 'listen' method on our server and pass it the 'port' and a function. In this case we'll just do a console log. This method will initiate our server by listening for requests on the port we pass it. Now we can run 'node server.js' and if everything goes well we will see this log on the terminal.

Let me know your doubts if you have any! See you guys 😁
