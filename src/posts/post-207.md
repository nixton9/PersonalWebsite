---
path: '/tips/post-207'
date: '2020-07-29'
title: 'Basics of animations with React Framer Motion'
languages: ['React', 'Framer Motion']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1596029111/tips/207-1_ptwmy1.png'
description: 'Creating animations with React Framer Motion'
number: 207
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1596029359/tips/207-2_dczpni.gif 'React Framer Motion')

Creating animations in React with Framer Motion 🔥🔥

Today I want to show you a bit about Framer Motion: an animation and gesture library for React. This makes creating animations super simple, let's see how.

On the first example we have a sliding down animation while increasing the opacity. To do so, we need to first import 'motion' from the library. Then, we'll create a div element with the 'motion.div' component and we'll pass in some props.

```jsx
import { motion } from 'framer-motion'

const App = () => {
  const variants = {
    hidden: { opacity: 0, transform: 'translateY(-60vh)' },
    visible: { opacity: 1, transform: 'translateY(0vh)' },
  }
  return (
    <div className="app">
      <motion.div
        className="box"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        WebDevTips
      </motion.div>
    </div>
  )
}
```

Here the main one is the 'variants' object where we pass the properties that our element will have when it's hidden and when it's visible. Notice that we set the names for these states - 'hidden' and 'visible' - also as props. Finally we pass a transition object where we are setting the duration for it.

```jsx
import { motion } from 'framer-motion'

const App = () => {
  return (
    <div className="app">
      <motion.div
        className="box"
        animate={{
          scale: 1.8,
          rotate: 360,
        }}
        transition={{ duration: 1 }}
      >
        WebDevTips
      </motion.div>
    </div>
  )
}
```

On the second example we have an element that scales and rotates at the same time. To do this, we basically do the same thing as in the first example but instead of passing the variants to define the animation, we just pass the properties we want to animate on the 'animate' prop. And we're done!

Hope you liked it and let me know if you have any doubts with it 😁✌️
