---
path: "/tips/post-117"
date: "2020-01-01"
title: "What are PropTypes in React and how to use them"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587500136/tips/117-1_uvjoj0.png'
description: 'Using PropTypes in React'
number: 117
status: true
---

Hey guys, happy new year! 🥳🎉
Hope you had an awesome New Year's Eve and that you are ready to start this year with full energy!
We'll start this new year with a reactJS tip: propTypes. As you should now by now, props play a big role in reactJS. We use them to pass data, functions, etc from component to component. So what exactly are propTypes?

These are something that basically let you type your props, helping you to have a stricter code and thus improve overall code quality and reduce bugs. Each prop that you need on a component will have a specific type (string, number, function, etc) and if you pass a prop with the wrong type then an error will pop-up. We can also set if a prop is required or not. So if you don't pass a specific prop to a component that is set as 'required' then an error will pop-up as well.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587500137/tips/117-2_auu49e.png "React Proptypes")

Let's see the first slide. We have a class component 'UserInfo' where we are using four props: name, email, gender and deleteUser. At the end of our class, we set it's propTypes. We define that 'name' is a string and it's required, 'gender' is a string, 'email' is a string and required and finally 'deleteUser' is a function and it's required.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587500137/tips/117-3_zioprz.png "React Proptypes")

Now, on the second slide we have two examples of the usage of this 'UserInfo' component. On the first we only pass two props: 'name' and 'deleteUser'. And to both props we pass random strings. With this we'll have some errors pop-up: the 'email' prop is required and it's not being passed and the 'deleteUser' prop should be a function and not a string.

Finally, on the second example everything works nicely. We pass all the required props with the correct types for each of them!  
Overall, if you're not using something like Typescript on your application, propTypes are a simple way to help you a little bit on having better code that is not so prone to bugs. It will make sure every component receives the props it really needs with the correct types.