---
path: '/tips/post-276'
date: '2021-03-29'
title: 'Database on the browser with PouchDB'
languages: ['HTML', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1617028405/tips/276-1_m5svup.png'
description: 'What is PouchDB and how to use it'
number: 276
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1617028405/tips/276-2_cf8mly.png 'useContext hook')

What is PouchDB and how to use it?

Hey guys, what's up? Today we'll be taking a look at PouchDB - a JavaScript database that runs within the browser! This can be super handy for specific scenarios as it gives you a way to store some data on the client, without needing any backend work!

So let's take a look at how we can use it. The first step is to include pouchdb js file in your HTML with a script tag. Now, we can go ahead and start using PouchDB!

```html
<h2>Users on database</h2>

<div id="users"></div>

<!-- ... -->

<script src="https://cdn.jsdelivr.net/npm/pouchdb@7.2.2/dist/pouchdb.min.js"></script>
```

Take a look at the script I provided to see how we can easily create a database for 'users' and start adding and retrieving these users.

```javascript
var db = new PouchDB('users')
var usersDiv = document.getElementById('users')

const addUser = (id, name, email) => {
  const user = {
    _id: id,
    name,
    email,
  }

  db.put(user, (err, res) => {
    if (err) {
      console.log('Error', err)
    }
    if (res) {
      console.log('User created!', res)
    }
  })
}

const showUsers = () => {
  db.allDocs({ include_docs: true, descending: true }, (err, doc) => {
    if (err) {
      console.log('Error', err)
    }
    if (doc) {
      doc.rows.map(row => {
        const nameEl = document.createElement('p')
        const emailEl = document.createElement('p')
        const divEl = document.createElement('div')
        divEl.classList.add('single-user')
        nameEl.innerHTML = row.doc.name
        emailEl.innerHTML = row.doc.email
        divEl.appendChild(nameEl)
        divEl.appendChild(emailEl)
        usersDiv.appendChild(divEl)
      })
    }
  })
}

addUser('16232', 'John McKenzie', 'johnmck@gmail.com')
addUser('12312', 'Erik Garner', 'erikgarner@gmail.com')
addUser('16250', 'Anthony Cuban', 'tonycuban@gmail.com')

showUsers()
```

Obviously, this shouldn't be used to store huge amounts of data since this will use the user's disk for storage. But still, this can be really handy for smaller sets of data!

How about you? Have you ever used PouchDB? What's your thoughts on having a database in the browser?
