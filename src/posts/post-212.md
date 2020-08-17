---
path: '/tips/post-212'
date: '2020-08-17'
title: 'How to create a Dark/Light theme switch'
languages: ['HTML', 'CSS', 'Javascript']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1597682524/tips/212-1_obxtkd.png'
description: 'Creating a Dark/Light theme toggle'
number: 212
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1597682806/tips/212-2_btpxwb.gif 'Light/Dark theme toggle')

What's up guys? Hope you're having a good Monday so far 😎
Today we'll take a look at how easy it is to create a Dark/Light theme switch using CSS variables!

In terms of HTML, we just need some content and a toggle - we'll use a disguised checkbox - so we can switch the theme.

```html
<div class="toggle-switch-container">
  <label class="toggle-switch">
    <input type="checkbox" id="toggle" />
    <span class="slider"></span>
  </label>
</div>

<h1>WebDev Tips</h1>
<p>Lorem ipsum dolor ...</p>
<button>See more</button>
```

Basically what need to do now on our CSS is to first create some variables under the ':root' selector so they are available to all other selector. Here, I'm just creating vars for some default colors - background, main text, secondary text and accent.

```css
:root {
  --bg-color: #f7f7f7;
  --main-text: #262626;
  --secondary-text: #666666;
  --acent-color: #4605ff;
}

[data-theme='dark'] {
  --bg-color: #111111;
  --main-text: #ffffff;
  --secondary-text: #f7f7f7;
}

.container-box {
  background-color: var(--bg-color);
}

h1 {
  color: var(--main-text);
  font-weight: 800;
}

p {
  color: var(--secondary-text);
}

button {
  background-color: var(--acent-color);
  border-radius: 50px;
}
```

Then we'll use these same variables, with different values, but under the '[data-theme="dark"] selector. So when the body has the 'data-theme="dark"' attribute it will use these new variables instead of the default ones.
Now we can simply use these vars throughout our styles, as needed.

```javascript
const toggle = document.getElementById('toggle')

const changeTheme = () => {
  if (document.body.getAttribute('data-theme') === 'dark') {
    document.body.removeAttribute('data-theme')
  } else {
    document.body.setAttribute('data-theme', 'dark')
  }
}

toggle.addEventListener('change', changeTheme)
```

Finally, we just need to create a function in Javascript that will remove or add the 'data-theme="dark"' attribute from the body, everytime the toggle is clicked.  
And it's done! Let me know what you think of this tip 🤓🙏
