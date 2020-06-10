---
path: '/tips/post-192'
date: '2020-06-10'
title: 'How to use variables with vanilla CSS'
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1591804320/tips/192-1_yeiipq.png'
description: 'Using variables with regular CSS'
number: 192
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1591804319/tips/192-2_i7thfy.png 'CSS variables')

Using variables in CSS 🔥

Did you know that you can use variables in plain CSS? That's right! Even though it's supports by all browsers it has a pretty decent support for you to use them.

And the best part is that they're super easy to use. You can use these variables for any property/value you want - color,. font-size, border-radius, box-shadow, padding, ...
Let's check it out.
I just created three 'h1' with some text, each one with a different class.

```html
<h1 class="dark-grey">All these colors</h1>

<h1 class="light-grey">are set by using</h1>

<h1 class="pink">CSS variables!</h1>
```

Now on the CSS, we'll create set these variables on the ':root' selector. Usually this is the common place to set these variables.
The common approach to define a CSS variable is to use a double dash and then the name that you want for the variable, like: --main-blue: #1167b1

```css
:root {
  --dark-grey: #292e35;
  --light-grey: #b2becd;
  --pink: #e91e63;
  --header-font-size: 36px;
}

h1 {
  margin: 1rem 0;
  font-size: var(--header-font-size);
}

.dark-grey {
  color: var(--dark-grey);
}
.light-grey {
  color: var(--light-grey);
}
.pink {
  color: var(--pink);
}
```

Now to use this variable on some property we just need to do this: 'property: var(--main-blue)'. And it's done! Super simple, right?

How about you, do you usually use CSS variables? 🤔  
Have a great day guys 😁🙏
