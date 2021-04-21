---
path: '/tips/post-283'
date: '2021-04-21'
title: 'Creating a simple chat app with SocketIO'
languages: ['HTML', 'CSS', 'Javascript', 'NodeJS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1619009350/tips/283-1_awdiwv.png'
description: 'How to use SocketiO to create a chat app'
number: 283
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1619009485/tips/283-2_ljr2ts.gif 'SocketIO chat app')

Hey guys! 😀✌
Today we'll check how to build a really simple chat app using SocketIO!

SocketIO is a Javascript library that lets us do bi-directional communication between client and server. We'll use it to build a chat app on NodeJS. So the first thing we need to do is create a new node project with 'npm init' and do 'npm install express http socket.io' so we can create an Express server that will use SocketIO.

```javascript
// index.js

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

const PORT = 5000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connect', socket => {
  console.log('User connected')

  socket.on('chat message', msg => {
    io.emit('chat message', msg)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected')
  })
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Now, let's create our Express server on a file 'index.js'. Here we'll start socketIO and we need to use the 'on' method to add these sort of event listeners that will be listening to these custom events. For example, every time we want to send a new message, our client needs to emit an event with the name 'chat message'.

Now we can go ahead and create our 'index.html' file where we'll deal with the frontend. We need to have an element with the id 'messages' where we'll push all the new messages that arrive. We also need an input inside a form where we can write messages.

```html
<!-- index.html -->

<ul id="messages"></ul>

<form id="form" action="">
  <input id="input" autocomplete="off" placeholder="Write something" />
  <button>Send</button>
</form>

<script>
  const socket = io()

  const messages = document.getElementById('messages')
  const form = document.getElementById('form')
  const input = document.getElementById('input')

  const userID = Date.now()

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
      socket.emit('chat message', {
        msg: input.value,
        user: userID,
      })
      input.value = ''
    }
  })

  socket.on('chat message', function(msgObject) {
    const message = document.createElement('li')
    const messageItem = document.createElement('span')
    messageItem.textContent = msgObject.msg
    if (msgObject.user === userID) {
      message.classList.add('right')
    }
    message.appendChild(messageItem)
    messages.appendChild(message)
  })
</script>
```

On this HTML file, we'll add a script where we need to add the client-side logic to handle SocketIO. When the form is submitted we'll emit a socket event with the name 'chat message' and we'll pass an object with the actual message and a randomly generated ID for the user.

We also need to add an 'on' method here to listen for 'chat message', so anytime a new message arrives we will display it on our page.

```css
#form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}

#input {
  border: none;
  background: #eeeeee;
  width: 85%;
  height: 4rem;
  padding: 2rem;
  border-radius: 10px;
  color: #424242;
  font-weight: 600;
}

#form button {
  background: #45fce4;
  border: none;
  color: #fff;
  width: 12%;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 10px;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages li {
  display: flex;
}

#messages li.right {
  justify-content: flex-end;
}

#messages li span {
  background-color: #eeeeee;
  color: #424242;
  width: fit-content;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
}

#messages li.right span {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0;
}
```

And that's basically it. Let me know your thoughts on this tip! 🤓
