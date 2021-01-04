---
path: '/tips/post-252'
date: '2021-01-04'
title: 'Bidirectional data flow in React'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1609775039/tips/252-1_xfdohx.png'
description: 'How to use useImperativeHandle in React'
number: 252
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1609775169/tips/252-2_ot5jw7.gif 'React useImperativeHandle')

Hey guys, happy new year! 🍾  
Today we will take a look at useImperativeHandle - something that allows us to have bidirectional data flow in React.

One of the first things that we usually learn when learning about React is that it has unidirectional data flow. This means that your state (and functions to update it) should always be on a parent Component and then passed to its child Components. So, usually if a child has a specific state, then you won't be able to access it or change it in a parent Component.

With useImperativeHandle we can slightly change this. If you look at the example you can see that we have an App Component (our parent) and a Checkbox Component (its child). The Checkbox Component uses state to store the current value of the checkbox.

```jsx
import React, { useRef } from 'react'

const App = () => {
  const checkBoxRef = useRef(null)

  const checkAll = () => {
    if (checkBoxRef && checkBoxRef) {
      checkBoxRef.current.check()
    }
  }

  return (
    <>
      <button onClick={checkAll}>Check</button>
      <CheckBox componentRef={checkBoxRef} />
    </>
  )
}

export default App
```

So, in order for us to change the Checkbox state on the App Component we'll first need to create a ref on the App Component and pass it to Checkbox.

Then, on the Checkbox Component we will use 'useImperativeHandle, passing in the ref we receive as props and an object where we can create any methods we want. In here we'll create a method called 'check' that will toggle the current Checkbox state.

```jsx
import React, { useState, useImperativeHandle } from 'react'

export const CheckBox = ({ componentRef }) => {
  const [isChecked, setIsChecked] = useState(false)

  useImperativeHandle(componentRef, () => ({
    check: () => setIsChecked(!isChecked),
  }))

  return (
    <div className="checkbox">
      <label>Checbox component</label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />
    </div>
  )
}
```

Now, back on our App Component we can finally update the Checkbox state by using 'ref.current.check()'. And that's pretty much it! This is a simple example but you can really do lots of awesome things with this.

How about you? Have you ever used useImperativeHandle in React? 😊✌️
