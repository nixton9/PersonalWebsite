---
path: '/tips/post-242'
date: '2020-11-30'
title: 'Saving items to Local Storage in React with a custom hook'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1606745512/tips/242-1_xai5ew.png'
description: 'Creating a custom hook in React to save items in Local Storage'
number: 242
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1606745518/tips/242-2_ojm24u.gif 'React useLocalStorage hook')

Creating a custom Hook in React to save data to Local Storage

What's up guys?
As you might already know, browser's have a really neat feature that we can use to store some data: the local storage. If you don't know much about this, make sure you read my tip - #32 - on this topic, where I explain it and show you how to use it!

Well today, we'll check how to create a custom Hook in React to save and retrieve data from the local storage. This is awesome for projects where you need to interact with the local storage more than once.

```jsx
// hooks/useLocalStorage.jsx

import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
```

So the first thing we'll do is create a folder on our project called 'hooks' and inside we'll create a file 'useLocalStorage'. Here we'll create our Hook, that will basically get a 'key' for the item we want to save and the initial value for that item. Then we will set that item on the local storage and return it.

Next, on the Component we want to use this, we just need to import this hook and use almost the same way we use the 'useState' hook .

```jsx
// App.jsx
import React, { useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

const App = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useLocalStorage('user', '')

  const handleSubmit = () => setUser(name)

  return (
    <div className="container">
      <div className="form">
        <input
          type="text"
          placeholder="Write your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
        <button onClick={() => setUser('')}>Clear</button>
      </div>

      {user && (
        <div className="results">
          <p>
            Hey there <span>{user}</span>
          </p>
        </div>
      )}

      <button onClick={() => window.location.reload(false)}>
        Refresh Page
      </button>
    </div>
  )
}

export default App
```

If you want to use this on your project, you literally just need to copy and paste the 'useLocalStorage' hook and start using it!

Hope you liked tip guys! Make sure you like and drop a comment 😁
