---
path: '/tips/post-208'
date: '2020-08-03'
title: 'Creating drag animations with React Framer Motion'
languages: ['React', 'Framer Motion']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1596468766/tips/208-1_auurta.png'
description: 'How to create drag animations in React with Framer Motion'
number: 208
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1596468757/tips/208-2_ettjm0.gif 'React Framer Motion')

Creating drag animations in React with Framer Motion 🤘

So, on my last tip (#207) I showed you the basics of animations with Framer Motion in React. Today, we'll continue with this cool library and see how we can create drag animations with it!

Check the animation on the example: we have a draggable element and we have an area that limits where we can drag the element. You can see that when I 'throw' the element, it bounces on the edges of this area and comes back. This limiting area is our 'constraint'.

```jsx
import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const App = () => {
  const constraintsEl = useRef(null)

  return (
    <div className="app">
      <motion.div className="constraint" ref={constraintsEl}>
        <motion.div drag dragConstraints={constraintsEl} className="circle" />
      </motion.div>
    </div>
  )
}

export default App
```

So let's do this. First we'll first create this constraint by using a div with 'motion'. We'll give it a class and we'll assign a ref to it. Now, let's create our draggable element. We can also use 'motion.div' and we'll pass the 'drag' prop and a 'dragConstraint' prop where we need to put the ref that we created for our constraint. We'll also add a class to it so we can style it.

```css
.constraint {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #2f2f2f;
}

.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #4605ff;
  cursor: pointer;
}
```

Finally, we just need to style our elements how we want. For the 'constraint' element I'm setting an area with 80% width and 80% height. I'm also using flex in it so the circle is centered by default.

Now, on the 'circle' element I'm just creating a circle with 200px width, 200px height and a border-radius of 50%.

And we're done! Let me know if you liked this tip and if you ever used Framer Motion 🤓👌
