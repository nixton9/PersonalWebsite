---
path: '/tips/post-275'
date: '2021-03-24'
title: 'Using the useContext hook in React'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1616600533/tips/275-1_u2hepl.png'
description: 'useContext hook in React'
number: 275
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1616600553/tips/275-2_nrrwir.gif 'useContext hook')

UseContext hook in React ⚙️

Hey guys, how are you doing?
Today we will check the 'useContext' hook in React and how can we use it to avoid props drilling across our Components. I've already made a tip about Context in React so, if you're unfamiliar with it make sure you check this tip first!

With the 'useContext' hook we can easily use a piece of Context anywhere we want on our app. To start, we need to first create a Context. For this example we want to have a 'name' and a 'setName' function available to all our Components so I created a file 'MainContext' where we export the Context and we also export the Context Provider where the value will be the 'name' and 'setName'.

```jsx
// ./MainContext.jsx

import React, { useState, createContext } from 'react'

export const MainContext = createContext()

export const MainProvider = ({ children }) => {
  const [name, setName] = useState('')

  return (
    <MainContext.Provider value={{ name, setName }}>
      {children}
    </MainContext.Provider>
  )
}
```

Next thing we need to do is to wrap all of out Components with the 'MainProvider' that we just created on the previous step. This will make sure that all these components can access this Context.

```jsx
// ./App.jsx
import React, { useContext } from 'react'
import { MainProvider, MainContext } from './MainContext'

const App = () => {
  return (
    <MainProvider>
      <div className="user-intro">
        <UserGreeting />
        <Form />
      </div>
    </MainProvider>
  )
}

export default App
```

Now, whenever we need to use the 'name' or 'setName' we just use the 'useContext' hook and we'll pass it the 'MainContext' like - const { name, setName } = useContext(MainContext)

```jsx
// ./UserGreeting
const UserGreeting = () => {
  const { name } = useContext(MainContext)
  return <h2>Hey there {name || 'mate'}</h2>
}

// ./Form
const Form = () => {
  const { name, setName } = useContext(MainContext)
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Write your name"
      />
    </form>
  )
}
```

And this is basically how we can use the 'useContext' hook in React to avoid props drilling!  
How about you? Have you ever used this hook? 🤔🤔
