---
path: '/tips/post-248'
date: '2020-12-21'
title: 'How to render different content in different devices'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1608568639/tips/248-1_u8j2xh.png'
description: 'Responsive conditional rendering in React'
number: 248
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1608568639/tips/248-2_hlupdi.png 'React responsive')

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1608568639/tips/248-3_ncncxm.png 'React responsive')

How's it going guys? 🤗

Today we'll check a simple but really neat package for React that gives us ready to use media queries - react-responsive.

So on this example we have a Component where we display different content based on the size off the viewport. If it's a bigger screen, we'll display a white div with blue text and if it's a smaller screen we'll display a blue div with white text.

```jsx
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const App = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' })

  return (
    <div className="app">
      <h1>Resize the browser window to see different content</h1>

      {isSmallScreen ? (
        <div className="mobile box">This will only appear in small screens</div>
      ) : (
        <div className="not-mobile box">
          This will only appear in bigger screens
        </div>
      )}
    </div>
  )
}

export default App
```

In order to do this, we'll use the 'useMediaQuery' hook from 'react-responsive'. First we need to install this package with 'npm install react-responsive'. Then we need to import 'useMediaQuery' on our component and using it, we'll create a const 'isSmallScreen'. This const we'll always be a boolean (true or false) that tells us if the current screen is smaller than 1000px.

Now we can use 'isSmallScreen' for our logic and to display different content for different sized screens!

```css
.box {
  display: inline-block;
  font-weight: 700;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 8px;
}

.box.mobile {
  background-color: #4605ff;
  color: #fff;
}

.box.not-mobile {
  background-color: #fff;
  border: 3px solid #4605ff;
  color: #4605ff;
}
```

And that's it! Let me know in the comments what do you think of this approach for having responsive content 😁✌️
