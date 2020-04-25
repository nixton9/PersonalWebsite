---
path: "/tips/post-72"
date: "2019-10-01"
title: "Building a simple Todo list with reactJS"
languages: ['React', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975814/tips/72-1_rdmjjq.png'
description: 'How to create a simple Todo list in React'
number: 72
status: true
---

`youtube: https://www.youtube.com/embed/zw3V9jnh6H0`

How are you guys?
So, for today, I thought of showing you what I believe is the simplest way to create a Todo list with reactJS. This I a good tutorial for beginners in reactJS or people who want to start learning it, as you'll see it's pretty simple to code.

This Todo list will have the following functionalities: list all the todos, delete todos, add todos and update the status of each todo (done or not). We will only need three components: App (will encapsulate everything), ShowTodos (will list our todos) and CreateTodo (to create new todos). Let's start!

Before diving into the components, know that we initialize the app with some default todos. This is an array with objects where called 'initalTodos'. Each object is as it follows: { id: 1, desc: 'todo text here', done: false }

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975815/tips/72-3_eq3okr.png "React todo list")

App component: basically here we're using state to store our todos. We initialize this state with our 'initialTodos'. We then have three functions here: one to add a new todo, one to update the status of the todo and one to remove a todo. We then return our ShowTodos component and our CreateTodo component. To the first one we pass the update and the remove functions and also the todos. To the second component we pass the add function.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975815/tips/72-4_midbzz.png "React todo list")

ShowTodos component: here we are listing all our todos using a map function. On each todo we have that little ball were we add an onClick to fire the updateTodo function. We also have an 'x' with an onClick to fire the removeTodo function.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975815/tips/72-5_vvdkyw.png "React todo list")

CreateTodo component: here we just have a simple form with a single input to insert the text for the new todo. This text is stored in a state. The form has an onSubmit that we're using to fire the addTodo function.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586975815/tips/72-6_kxagpd.png "React todo list")

Hope you liked this brief 'tutorial' and give it a try. Let me know if you have any doubts or don't understand something.