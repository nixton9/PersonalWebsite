---
path: '/tips/post-227'
date: '2020-10-07'
title: 'How to create a drag and drop list in React'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1602077122/tips/227-1_y7ipvv.png'
description: 'Creating a drag and drop list with react-beautiful-dnd'
number: 227
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1602077132/tips/227-2_vi5qoo.gif 'React drag and drop list')

For today's tip I wanted to show you how to create a list with draggable items using 'react-beautiful-dnd'.
This awesome tool helps us create beautiful and accessible drag and drop lists in React with amazing performance and flexibility.

To start using it, we first have to install it with 'npm install react-beautiful-dnd --save'. Then, we'll create an array with our items for the list and a 'reorder' function that will be used to deal with the reordering of the items when we drop them.

```jsx
import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initialItems = [
  { id: '1', content: 'First item' },
  { id: '2', content: 'Second item' },
  { id: '3', content: 'Third item' },
  { id: '4', content: 'Fourth item' },
  { id: '5', content: 'Fifth item' },
  { id: '6', content: 'Sixth item' },
]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const Example = () => {
  const [listItems, setListItems] = useState(initialItems)

  const onDragEnd = result => {
    if (!result.destination) return
    const items = reorder(
      listItems,
      result.source.index,
      result.destination.index
    )
    setListItems(items)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            className="list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {listItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Example
```

Now, on our Example component, we start by using the 'useState' hook to store our array of items and we'll create a 'onDragEnd' function to be applied to the items when we finish dragging them.

Next on our return statement, check how we start by wrapping everything with the 'DragDropContext' and 'Droppable' components. Inside, we'll have our 'list' element and then we'll map our items and return them wrapped inside a 'Draggable' component.

```css
.list {
  margin: 0 auto;
  width: 18px;
  border: 2px dashed #828282;
  padding: 1rem;
}

.item {
  background: #45fce4;
  color: #fff;
  margin: 1rem 0;
  padding: 1rem;
  text-align: center;
  border-radius: 4px;
}
```

And that's basically it. Let me know your thoughts on this tip!
