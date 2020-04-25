---
path: "/tips/post-41"
date: "2019-08-17"
title: "Updating state in reactJS with setState"
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586812777/tips/41-1_sclkv9.png'
description: 'How to use setState in React to update state'
number: 41
status: true
---

In one my previous tips I explained what state is in reactJS and how we can use it. Now, I'll show you the correct way to update it.

The first thing we need to have in mind is that we should always treat state as immutable and never change it directly. So, instead, we should always use setState to update our state.
Using this is quite easy: 'this.setState({ourProperty: newValue})

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586812776/tips/41-2_bjeilt.png "Updating state in React")

In the snippet you can see that I have a state property that stores a counter. When we want to increase this counter we can store the current value of the counter in a var called 'currentCount'. Then using setState we update this property to be 'currentCount + 1'. This works but there's a more elegant way to do this.

With setState we have access to the previous state. This allows us to call this 'prevState' and easily know the current value of our state properties. In cases like this one where we're creating a counter this is extremely handy! We just need to declare that 'count' will be equal to 'prevState.count +1'
