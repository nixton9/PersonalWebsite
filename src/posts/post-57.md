---
path: "/tips/post-57"
date: "2019-09-14"
title: "Using Hooks in ReactJS and getting to know the 'useState' one"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1586885838/tips/57-1_o28bto.png'
description: 'Looking at React Hooks and playing with the useState one'
number: 57
status: true
---

`youtube: https://www.youtube.com/embed/z5fS0DXuX74`

Back in February, React 16.8 was introduced to the public and with it React Hooks came out. Basically Hooks allow us to use some functionalities that we could only use on Class Components, but now on Functional Components. And since, performance wise, Functional Components are the way to go, this is really awesome and helps us avoiding Class Components at all!

There are various Hooks: useState, useEffect, useCallback, etc. Here I'll talk about useState - definitely the most used one. Before Hooks came out, when we needed to have state on a component we just had to use a Class. With this Hook we can easily have state in any Functional Component and it's super simple to use!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1586885837/tips/57-3_y6qmnx.png "React Hooks")

Look at the code snippet. We want to have a state property named 'name' that will store a random name. We just have to declare 'const [name, setName] = useState(' ')'.
What this means is that our property 'name' is where this state value will be stored and 'setName' is a function that we'll use to update this property whenever we want. Finally, inside 'useState' we just set what will be the initial value of this property. In this case we just want an empty string to we just to put ' '.

Now, state is initialized! Everytime we want to reference this state property we just need to use 'name' and if we want to set another name we can just declare 'updateState('randomName') ' and our property will be updated!

This is really super handy and we can easily have state functionality on our Functional Components 🔥🔥