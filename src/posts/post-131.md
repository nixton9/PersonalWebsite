---
path: "/tips/post-131"
date: "2020-01-25"
title: "Easiest way to get started with Redux - Part 2"
languages: ['React', 'Redux']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587592741/tips/131-1_sao09v.png'
description: 'Simplest way to start using Redux on your React applications - part 2'
number: 131
status: true
---

`youtube: https://www.youtube.com/embed/1ylyh6zWT4k`

Hey guys! Ready for the second part on our little Redux tutorial?  
So yesterday, i posted a tip on the 'Easiest way to get started with Redux' where i should you the first steps to set up Redux to create a Todo list with React and how we could list our todos.

On this tip we'll see how we can create and delete todos. To do this we'll use 'actions', that are functions that will to a specific thing. Let's go!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587592741/tips/131-3_s1fz2a.png "Redux")

So we start by creating a folder 'actions' and inside it a 'index.js' file where we'll create two actions. Each action is a function that will receive some values (called payload) and will return that payload and a type that will define what will this action trigger.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587592741/tips/131-4_xiycbn.png "Redux")

Then, we need to edit our 'todosReducer' file and we'll add two 'cases' on the switch we had already created. Based on the action type, we'll do different things. If the action is 'DELETE\_TODO' we want to get the id of the todo that comes with the payload and use it do delete it from our todos. If the actions is 'ADD\_TODO' we'll receive a title for the new todo on the payload and we will add it to our todos.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587592741/tips/131-5_x7whjt.png "Redux")

Finally, we need to edit our 'App' component. Using the code we already had, we now need two first import our actions here. Then we'll create a 'mapDispatchToProps' function with our actions, add this function to our 'connect' that we are exporting here, and we now have access to our actions from our props!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587592741/tips/131-6_llbars.png "Redux")

Now, we can edit our return statement and first, we'll add the function to delete on that span that every todo has. Second, we'll create a small form that only has one input for the todo title and a submit button. When this form is submitted we'll execute our 'add' function with the value from the input.

And it's done! We now have a React application that let's us manage our global state using Redux. With it we can list our todos, delete them and add new ones.  
Hope you liked this tip and let me know your doubts! 🤓🤘🔥