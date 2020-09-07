---
path: '/tips/post-218'
date: '2020-09-07'
title: 'Using Typescript on your React apps - part 2'
languages: ['React', 'Typescript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1599495076/tips/218-1_e4mkjw.png'
description: 'Typescript and React - state and events'
number: 218
status: true
---

What's up guys, how are you doing? 😁🤗

For today's tip, we'll continue taking a look on how to use Typescript with React. But first, make sure you check tip #215 as it is the first part on this topic.

On tip [#215](/tips/post-215) we saw how we can start using Typescript with React by statically typing the props on a component. Today we'll check how we can statically type state in a component and how we can handle forms.

```jsx
  // Statically typing state
  type User = {
    id: string
    name: string
    email: string
    premium: boolean
  }

  interface LoadingState {
    isLoading: boolean
    isLoaded: boolean
    hasError: boolean
  }

  const App: React.FC = () => {
    const [users, setUsers] = useState<User[] | []>([])

    const [loading, setLoading] = useState<LoadingState>({
      isLoading: true,
      isLoaded: false,
      hasError: false
    })

    const [name, setName] = useState<string>('')

    return (
    	/* ... */
    )
  }
```

Take a look at the first code snippet. Here we can see three different ways to statically type our state. For the 'users' state I'm using a 'type', for the 'loading' state I'm using an 'interface' and for the 'name' I'm passing the type inline. We can do this with the syntax:' useState<type>(initialValue)'.

Even though they haver some minor differences, you can choose to use a 'type' or an 'interface' - most people usually go with interface.

```jsx
// Handling Form events

const App: React.FC = () => {
  const [name, setName] = useState < string > ''
  const [email, setEmail] = (useState < number) | (string > '')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  )
}
```

On the second code snippet we have a simple example of a form with two input fields. Each of the values will be stored using useState, where we are passing the type of it inline. Then we're creating one event handler for each input, and we are typing the event that we will receive on that event handler.

Hope you liked this tip and let me know if you have any doubts 🤓✌️
