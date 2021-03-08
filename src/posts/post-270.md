---
path: '/tips/post-270'
date: '2021-03-08'
title: 'What are React Portals and how to use them'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1615220554/tips/270-1_hvaiir.png'
description: 'Using Portals in React'
number: 270
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1615220678/tips/270-2_zvufhy.gif 'React Portal')

React Portals allow you to render an element outside of the DOM structure of your app. So usually, we have a div on our DOM where we render our entire React application. This allows us to have an element outside of this div.

A good use case for React Portals is implementing a Modal, because you usually want this element at the top level of your DOM structure. So let's see how we can do this.

On our App component we just have some text with a button to open the Modal. We are controlling the display of this Modal with the 'useState' hook.

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <p>
        Click <span onClick={() => setShowModal(true)}>here</span>
        to open the modal
      </p>

      {showModal &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="close" onClick={() => setShowModal(false)}>
              +
            </div>
            <h3>This modal is being rendered with a Portal</h3>
          </div>,
          document.getElementById('modal-root')
        )}
    </>
  )
}

export default App
```

Now we just need to render our Modal using the method 'createPortal' from 'ReactDOM'. To this method we will also need to pass the element where we want to render, so we'll pass a div with the id 'modal-root'.

Finally, we just to go to our app's main HTML file and create there a div with the id 'modal-root'.

```html
<!-- .... -->

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <div id="modal-root"></div>

  <!-- .... -->
</body>
```

And that's it! When we open out Modal it will be rendered on top level of our DOM.

How about you? Have you ever used React Portals before? 🤔🤓
