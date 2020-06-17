---
path: '/tips/post-194'
date: '2020-06-17'
title: 'Using Recoill to easily share state across components'
languages: ['React', 'RecoilJS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1592406978/tips/194-1_gejp7b.png'
description: 'How to use RecoilJS to share state in React'
number: 194
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1592407103/tips/194-2_rzcnuu.gif 'RecoilJS in action')

Hey guys, what's up? 😁👊  
Today we'll take a look at a pretty recent React state management library - recoilJS

Recoil helps us deal with a pretty common 'problem' when creating React applications - sharing state across different components. We already have tools and other libraries that help us with this, like React Context and Redux (you can find more on these in other tips), but I personally liked Recoil for its simplicity and ease of use when compared to these alternatives. Let's see how we can use it!

```jsx
import React from 'react'
import { UserGreet } from './components/UserGreet'
import { UsernameForm } from './components/UsernameForm'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <RecoilRoot>
      <UsernameForm />
      <UserGreet />
    </RecoilRoot>
  )
}

export default App
```

We have here a pretty basic example. Two Components where in one of them we have an input where we get a 'username' and then set it to state. Theb, another one where we want to show that username. So first thing we have to do is to wrap all Components with 'RecoilRoot'.

```jsx
//state.js
import { atom } from 'recoil'

export const usernameState = atom({
  key: 'username',
  default: '',
})
```

Then, we need to specify what pieces of state we need - these are called 'atoms'. I created a 'state.js' file and there I created the atom for the usernameState. We have to pass in a 'key' - something that will identify this piece of state - and a 'default' - the default value for this piece of state.

```jsx
//UsernameForm
import React from 'react'
import { useRecoilState } from 'recoil'
import { usernameState } from '../state'

export const UsernameForm = () => {
  const [username, setUsername] = useRecoilState(usernameState)

  return (
    <div className="form">
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Write your name"
      />
    </div>
  )
}
```

Now on the Component with the input we just get 'username' and 'setUsername' from 'useRecoilState' and we pass in our atom. This will work in a pretty similar way to the 'useState' hook - 'username' will give us the value for our state and 'setUsername' will give us a function that will update it.

```jsx
//UserGreet
import React from 'react'
import { useRecoilValue } from 'recoil'
import { usernameState } from '../state'

export const UserGreet = () => {
  const username = useRecoilValue(usernameState)
  return <div className="greet">{username && <p>Welcome {username}</p>}</div>
}
```

Finally, on the Component where we want to display the username, we use 'useRecoilValue', pass it our atom and get the 'username' const. Now we have our username state ready to use and it will be automatically updated everytime we type something on the input!

Let me know what you think of this! 🤓
