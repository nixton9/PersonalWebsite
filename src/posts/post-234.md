---
path: '/tips/post-234'
date: '2020-11-02'
title: 'Creating an app to open, edit and save text files'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1604333621/234-1_porioj.png'
description: 'Using the File System API'
number: 234
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1604333713/234-2_hr4z9x.gif 'File System Access API')

Using the File System Access API to interact with files

Today we will take a look at the new File System Access API and see how we can create a simple app to open, add and edit text files. Please note that at this moment, this API is only supported by Chrome.

```html
<textarea id="content" placeholder="Write here ..."></textarea>
<div class="buttons">
  <button id="openfile">Open file</button>
  <button id="savefile">Save file</button>
</div>
```

So on the example, we basically just have three things: a textarea where we can write some text or open the content of a text file, a button to open text files and a button to save files.

```javascript
const openFile = document.getElementById('openfile')
const saveFile = document.getElementById('savefile')
const contentTextArea = document.getElementById('content')
let fileHandle

const open = async () => {
  ;[fileHandle] = await window.showOpenFilePicker()
  const file = await fileHandle.getFile()
  const contents = await file.text()
  contentTextArea.value = contents
}

const save = async content => {
  try {
    const handle = await window.showSaveFilePicker({
      types: [
        {
          accept: {
            'text/plain': ['.txt'],
          },
        },
      ],
    })
    const writable = await handle.createWritable()
    await writable.write(content)
    await writable.close()
    return handle
  } catch (err) {
    console.error(err.name)
  }
}

openFile.addEventListener('click', () => open())
saveFile.addEventListener('click', () => save(contentTextArea.value))
```

On our Javascript we'll first create references to all these 3 elements. Then we'll create a 'open' function and a 'save' function. These functions will use some methods from the File System Access API to open files and save them onto the user's computer.

Finally we'll just add two event listeners on our buttons to run these functions when clicked. And that's pretty much it. If you wish to learn more about this, make sure you read this article on web.dev: [web.dev/file-system-access](https://web.dev/file-system-access/)

```css
textarea {
  margin: 2rem 0;
  width: 80%;
  min-height: 18rem;
  color: #555;
  font-size: 1.1rem;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  background-color: #8125e2;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 0 2rem;
  padding: 1rem 2rem;
  font-weight: 800;
  letter-spacing: 0.03rem;
  text-transform: uppercase;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
}

button#openfile {
  background-color: #fff;
  color: #8125e2;
}

::placeholder {
  color: #bbb;
  font-size: 0.9rem;
}
```

How about you? Have you ever used the File System Access API? 🤔🤓
