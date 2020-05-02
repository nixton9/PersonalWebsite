---
path: "/tips/post-162"
date: "2020-04-01"
title: "Using the useReducer hook in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588361504/tips/162-1_hqxahh.png'
description: 'How to use the useReducer hook in React'
number: 162
status: true
---

`youtube: https://www.youtube.com/embed/U40bzTv77PA`

Heyy, how are you guys? 😎🤘  
So, on some previous tips I've showed you what are React hooks, why the are awesome, and some of the hooks we can use. Today we'll take a look at the 'useReducer' by creating a card with the button that will alternate between three states: to do, doing & done.

A reducer is usually associated with Redux, and this Hook basically uses the same approach: an action is dispatched with a type (in this case it will be the click on the button and the type will be the current state) and it returns a new state based on that type.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588361505/tips/162-3_zhguts.png "React useReducer hook")

So on our Component file we'll first import 'useReducer'. Then we'll create our initial state and our reducer function, that will receive a state and an action and it will return a new state using a switch on the type of the action. The idea is that when we receive a type like 'Doing' we will return the next state - 'Done'

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588361505/tips/162-4_gxal7n.png "React useReducer hook")

Now, on the actual Component, we get 'state' and 'dispatch' from the useReducer hook by passing our reducer function and our initial state. With this 'state' const we'll always have access to the current state and with 'dispatch' we can dispatch the actions to our reducer.

We can now render our elements and on the button we just need to create an 'onClick' that will dispatch an action with the current state as the type. Inside the button we'll show the current status by using 'state'.

Hope you try this hook, is really powerful and handy! See you guys, take care 😀🙏
