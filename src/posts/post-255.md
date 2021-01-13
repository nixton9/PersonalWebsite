---
path: '/tips/post-255'
date: '2021-01-13'
title: 'Image upload to Cloudinary on the client side'
languages: ['HTML', 'Javascript', 'Cloudinary']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1610555385/tips/255-1_xezb5f.png'
description: 'Uploading images to Cloudinary without a backend'
number: 255
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1610555614/tips/255-3_loykxd.gif 'Cloudinary image upload')

Uploading images to Cloudinary on the client side 🖼️

So recently I made a tip on Cloudinary and why it's an awesome service for images. Today we'll check how we can create a basic form that lets users pick an image an upload it to Cloudinary, without any backend work!

So the first thing you need is to create an account on Cloudinary. For this to work, you have to go the settings page on Cloudinary, navigate to 'Upload Presets' and create a new one.

Presets let you create default settings for all images uploaded using it. For example, you can create a preset that will transform any images uploaded here to have 200px width. You have to make sure you create a new one and make it 'unsigned' - without this we won't be able to upload our images on the client.
Okay, with this done we just need to go ahead and create our form as you can see on the HTML snippet.

```html
<form>
  <label for="imgupload">Chose an image</label>
  <input type="file" id="imgupload" />
  <button>Upload!</button>
</form>

<div id="imageContainer"></div>
```

Finally, we'll implement the 'uploadImage' function you can see on the JS snippet that will grab the image from the file input and using 'fetch' will make a POST request to the Cloudinary API.

```javascript
const form = document.querySelector('form')
const imageContainer = document.getElementById('imageContainer')

const uploadImage = e => {
  e.preventDefault()
  const { files } = document.querySelector('input[type="file"]')

  if (files.length) {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'wdtips')
    const options = {
      method: 'POST',
      body: formData,
    }

    return fetch('https://api.Cloudinary.com/v1_1/trckr/image/upload', options)
      .then(res => res.json())
      .then(res => displayImage(res.secure_url))
  }
}

const displayImage = imgUrl => {
  imageContainer.innerHTML = ''
  const img = document.createElement('img')
  img.setAttribute('src', imgUrl)
  img.setAttribute('width', '250px')
  imageContainer.appendChild(img)
}

form.addEventListener('submit', uploadImage)
```

If you want, you can also display the image on the page after uploading it, using the 'displayImage' function!

And that's it! Let me know your thoughts on this tip in the comments 🤗✌️
