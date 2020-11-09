---
path: '/tips/post-236'
date: '2020-11-09'
title: 'Creating a tags input with suggestions in React'
languages: ['React']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1604937497/tips/236-1_pr6zuh.png'
description: 'Using react-tag-input to create a tags input with suggestions'
number: 236
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1604937545/tips/236-2_sudfbo.gif 'Tags input in React')

Hey guys, how are you? 😁✌️

Today we'll check how to create an input for tags with some suggestions using React. This is a really neat feature where you have a dynamic input where the user can create new tags or select tags from a suggestions list.

In order to do this, we'll use the 'react-tag-input' library. So the first thing we need to do is install it with: 'npm install react-tag-input'.

Now we can go ahead and create our component. In here we need to first create an array called 'delimiters' with the key codes for the 'comma' and 'enter' key. We'll also create an array called 'suggestions' with all the suggestions we want to show to the user.

```jsx
import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

const suggestions = [
  { id: '1', text: 'Comedy' },
  { id: '2', text: 'Action' },
  { id: '3', text: 'Drama' },
  { id: '4', text: 'Thriller' },
  { id: '5', text: 'Horror' },
  { id: '6', text: 'Crime' },
  { id: '7', text: 'Biography' },
  { id: '8', text: 'Fantasy' },
]

export const Tags = () => {
  const [tags, setTags] = useState([])

  const handleDelete = i => {
    const newTags = tags.filter((tag, index) => index !== i)
    setTags(newTags)
  }

  const handleAddition = tag => {
    console.log(tag)
    console.log(tags)
    setTags([...tags, tag])
  }

  return (
    <div className="tags-container">
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        delimiters={delimiters}
        placeholder="Movie genres"
        minQueryLength={1}
        allowDragDrop={false}
      />
    </div>
  )
}
```

Using the 'useState' hook we will store our 'tags' in an array. We also have to create two functions: one to handle the deletion of tags and another to handle the addition of tags.

Finally we just need to call the 'ReactTags' component and pass it the 'tags', 'suggestions', 'handleDelete', 'handleAdition', 'delimiters' and some other props that we can use to customize it.

Now we just need some custom CSS to make the tags input look how we want to, all pretty straightforward.

```css
.tags-container {
  position: relative;
}

.ReactTags__selected span.ReactTags__tag {
  position: relative;
  display: flex;
  align-items: center;
  background: #4605ff;
  color: #fff;
  min-width: 5rem;
  margin: 0 0.5rem;
  padding: 0.5rem 2rem 0.5rem 0.9rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 20px;
}

.ReactTags__selected a.ReactTags__remove {
  position: absolute;
  right: 0.6em;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
}

.ReactTags__suggestions {
  position: absolute;
  top: 4rem;
  background-color: #efefef;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.ReactTags__suggestions ul {
  list-style-type: none;
}
.ReactTags__suggestions li {
  padding: 1rem;
  font-weight: 500;
  margin-left: -40px;
  text-align: left;
  min-width: 10rem;
}
.ReactTags__suggestions li mark {
  background: none;
  color: #4605ff;
}
.ReactTags__suggestions ul li.ReactTags__activeSuggestion {
  cursor: pointer;
}

.ReactTags__selected {
  width: max-content;
  padding: 1rem;
  display: flex;
  align-items: center;
  background: #efefef;
  border-radius: 4px;
}

.ReactTags__tags input {
  width: 10rem;
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  background: transparent;
  border: none;
  margin-left: 0.5rem;
}
```

And that's it! Hope you liked it 🤓🙏
