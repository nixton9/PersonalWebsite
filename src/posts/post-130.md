---
path: "/tips/post-130"
date: "2020-01-24"
title: "Easiest way to get started with Redux - Part 1"
languages: ['React', 'Redux']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587592516/tips/130-1_gz15s7.png'
description: 'Simplest way to start using Redux on your React applications'
number: 130
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587592516/tips/130-2_fiilcl.png "Redux")

Hey guys!  
I've been getting some messages and comments requesting some tips on Redux. So i decided to show you the simplest way to use Redux to manage your state on a React app.

Redux helps us manage our state on an application by having a global state, that sits externally and can then be accessed by any component on our application. In this tip we'll see how we can list data with it, and in tomorrow's tip we'll see how to create stuff and how to delete stuff.

So let's start! We'll create a todo list to exemplify this. First we need to install the Redux packages we need, so on our terminal we just need to do: 'npm install redux react-redux'.
Next, you can take a look at the first code example and see the three files that we'll create/change here.
The first thing we need to do is on the index.js file, create a Store using our Reducers and wrap our 'App' component with a 'Provider'. Also, we need to pass our Store to our Provider.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587592517/tips/130-3_aiw0ns.png "Redux")

Then, we create a 'reducers' folder with two files: index and todosReducer. On the first, we'll combine all the Reducers we may have on our application with the 'combineReducers'. Then, on the other file, we'll create our Reducer for our todos.
We start by creating an initial state in here, that will have all the properties we need, for this case it will only have the 'todos' array with some default todos.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587592517/tips/130-4_ljzvz9.png "Redux")

Then, we need to export our Reducer function itself that will receive our state described above and actions and, using a switch, it will return different things based on the actions it receives. For now, we don't have any actions so we'll just return our state.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587592517/tips/130-3_aiw0ns.png "Redux")

Now, we can go to our App component and we start by importing 'connect'. We then create a function called 'mapStateToProps' that will receive our state and pass it as a prop to this component. Now, we need to export 'connect' with our App component and with 'mapStateToProps'. Now have access to our todos on our props and you can see on the component's return statement how we are using it!

Stay tuned for tomorrow's tip to see how we can create and delete todos! 🤓🔥