---
path: "/tips/post-121"
date: "2020-01-08"
title: "Defining default Props for a Component in React"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587501016/tips/121-1_vvsni8.png'
description: 'How to set default props on a Component in React'
number: 121
status: true
---

Hello guys!  
So last week I had a tip (\#117) on what are propTypes in reactJS and how we can use them - basically a way for you to set what props a component should be receiving and what should be their types. Following that, today we'll be seeing how we can easily set default props for a component.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587501015/tips/121-2_hv3vmq.png "React default props")

Default props serve the purpose of attributing some default values for the props of a component so when you don't explicitly pass those props to said component, things will still work.
So, let's see how we can do this!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587501016/tips/121-3_hcyzuz.png "React default props")

In order to get some default props on a component, wether it is a functional component or a class component, we just need to, after writing all of our component, do 'ourComponent.defaultProps = { }' and inside this object we can put all the props we have as properties and then their respective value.
Looking at the first two code examples we can see that we're doing exactly this. We have our component and then we have the 'defaultProps' object will all our props and some default values for them.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587501016/tips/121-4_vizrhm.png "React default props")

As you can see on the last slide, even if we then call this component with no props at all, we'll have no errors at all and we will see the default values that we passed, so all good!  
Hope you liked this tip and have a great day! 😁🔥🎉