---
path: '/tips/post-288'
date: '2021-05-10'
title: 'Creating a custom right click menu in React'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1620655345/tips/288-1_zkpocv.png'
description: 'Custom context menu in React'
number: 288
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1620655393/tips/288-2_qahdai.gif 'Custom right click menu')

Creating a custom context menu (or right click menu) in React!

Today's snippet shows how we can easily override the default context menu of the browser, and instead use our own right click menu, in React.

Using the 'useState' hook we create three variables - showMenu, x and y. showMenu will always be true or false, wether the menu should be opened or not. X and Y will store the values for the x and y coordinates where the user clicked and where we'll place the context w.

```jsx
import React, { useState, useEffect } from 'react'

export const ContextMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleContextMenu = e => {
    e.preventDefault()
    setX(`${e.pageX}px`)
    setY(`${e.pageY}px`)
    setShowMenu(true)
  }

  const handleClick = e => {
    showMenu && setShowMenu(false)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('click', handleClick)
    }
  })

  return showMenu ? (
    <ul className="context-menu" style={{ top: y, left: x }}>
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
      <li>Menu Item 3</li>
    </ul>
  ) : null
}
```

Now, on a useEffect, we'll add two event listeners (and remove them). The first will be for the 'contextmenu' event and using this event we'll get those x and y coordinates and we'll set showMenu to true. On this event we also need to 'preventDefault' on the event so it doesn't show the browser's context menu.
The other event will be on 'click' and we'll use it to set showMenu to false.

Now we just need to return the menu itself if 'showMenu' is true and we'll set those x and y coordinates on the element's 'left' and 'top' properties.

```css
.context-menu {
  position: fixed;
  list-style-type: none;
  padding: 0;
  background-color: #eeeeee;
  border-radius: 4px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.context-menu li {
  padding: 1rem;
  min-width: 10rem;
  color: #424242;
  font-size: 0.9rem;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
}

.context-menu li:hover {
  background-color: #e0e0e0;
}
```

On the CSS we need to make sure that our menu has 'position: fixed' so it will always be positioned exactly where we want it.

And we're done! Let me know your thoughts on this tip! 🤗✌️
