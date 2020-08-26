---
path: '/tips/post-215'
date: '2020-08-26'
title: 'How to start using Typescript on your React apps'
languages: ['React', 'Javascript', 'Typescript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1598455340/tips/215-1_y1pgwb.png'
description: 'Intro to React with Typescrit'
number: 215
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1598455340/tips/215-2_agokix.png 'IDE - React & Typescript')

Hey guys, how are you? 😁🤘

Today we'll take a quick look at Typescript and how to start using it with React.
But first, why Typescript? Typescript is a superset of Javascript and it's main advantage is providing static typing. This means that, unlike with regular Javascript, your variables will have a specific type of data associated to them. This is super useful for development as it helps avoiding a lot of common errors and bugs.

Your IDE will spot errors more rapidly as you type the code as you can see on the preview image of this post - Visual Code is complaining about the type on the 'premium' prop since it should be a boolean and not a string. Overall you'll end with way more robust software. Typescript is also a great match for React. You can easily start using it with Create React App by doing 'npx create-react-app my-app --typescript'. I'll make some more posts on it, but on this post we'll check how we can use it to type the props we expect on a component.

```jsx
interface UserProps {
  name: string
  age: number
  email: string
  premium?: boolean
  updateUser: () => void
}

const User: React.FC<UserProps> = ({
  name,
  age,
  email,
  premium,
  updateUser,
}) => (
  <div className="user">
    <p>{name}</p>
    <p>{age} years</p>
    <p>{email}</p>
    <p>{premium && 'Is premium'}</p>
    <button onClick={updateUser}>Edit</button>
  </div>
)

export default User
```

In order to do this, we can just create an Interface before our component, where we'll type every prop we expect for the component. We write the name of the prop, we can put a '?' if this prop is optional, and we'll set the type expected for that prop.

```jsx
const App: React.FC = () => (
  <div className="App">
    <User
      name={'John'}
      age={25}
      email={'john@gmail.com'}
      premium={true}
      updateUser={() => console.log('updated')}
    />
  </div>
)

export default App
```

Now when we create our component, we can set it's type with React.FC (for a functional component) and pass in the Interface we've just created. Whenever we now try use this component, in case we miss one of the required props, or use the wrong data type for a prop, our IDE will automatically complain about and say exactly what is the problem. I can't really stress how useful this can be in larger applications.

And that's it! What about you guys? Have you ever tried Typescript? 🤔🤔
