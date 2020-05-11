---
path: "/tips/post-180"
date: "2020-05-11"
title: "Why SCSS is awesome and how to use it"
languages: ['CSS', 'SASS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589215036/tips/180-1_d4fn0h.png'
description: 'How to start using SCSS/SASS'
number: 180
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1589215036/tips/180-2_p9atze.png "SCSS")

Have you ever used Sass or SCSS? 🤔  
Well today we'll take a look at what is this and  how we can easily use it!

So what is this? Sass is a CSS preprocessor - sort of a extension to it that will let us use really cool features that we can't use with traditional CSS. There are two syntaxes that can be used for Sass - Sass and SCSS. We'll be using SCSS since it is the most commonly used and it accepts traditional CSS syntax, while Sass doesn't.

Some of the cooler features are: nested rules, variables, functions, interpolation, mixins, inheritance, etc. On this tip we'll take a look at the nested rules and the variables.

But note that browsers can't read neither of this. So, we always need to compile Sass to regular CSS for the browsers to use it! We'll see how we can do this.

```json

{
  "name": "proj",
  "version": "1.0.0",
  "description": "sass project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "scss": "node-sass scss/ -o css/",
    "watch-scss": "node-sass -w scss/ -o css/"
  },
  "author": "edd",
  "license": "ISC",
  "dependencies": {
    "node-sass": "^4.14.1"
  }
}

```

We'll start by creating a new npm project. On your terminal just cd to the folder you want and run 'npm init' - this will ask you basic questions regarding your project, you can default all them. When this finishes you'll have a 'package.json' file on your folder, like the one you can see on the first code slide. Under 'scripts' go ahead and paste the 'scss' and 'watch-scss' scripts I have here. The first we can run to compile all of our SCSS to CSS and the second will do the same but in watch mode.

```html

<div class="card">
    <h1>WebDev Tips</h1>
    <p>Follow for some awesome web development tips!</p>
</div>

```

Now we can create our HTML and then we create a .scss file where we'll write all our styles. We can now run scss watch by going to the terminal and typing 'npm run watch-scss'. You'll notice that when you save your changes on the .scss file, a .css file will be created with the compiled CSS. This is the file that you'll want to reference on your HTML file.


```scss

$darkGrey: #10191B;
$lightGrey: #B2BECD;
$pink: #E91E63;
$shadow: -5px -5px 11px rgba(113,113,113,0.15), 5px 5px 11px rgba(0,0,0,0.15);
$borderRadius: 20px;

body {
    background: $darkGrey;
}

.card {
    width: 35rem;
    padding: 4rem 0;
    text-align: center;
    border-radius: $borderRadius;
    box-shadow: $shadow;

    h1 {
        color: $pink;
        font-weight: 700;
    }

    p{
        color: $lightGrey;
        margin-top: .5rem;
        font-weight: 300;
        letter-spacing: .02rem;
    }
}

```

We can now write our Sass with no problems! Look at the last code snippet. We see here two of Sass features. The first is variables. We can set variables and use them for anything we want and anywhere we want. This is super handy for having somr constants on our styles. And if, for example, we need to change a color in the future, we just have to do it in one place instead of having to look for all the places where that color was used.

Next we have nested rules, which are super awesome! See that we have the 'h1' and 'p' inside the 'card' class? This means that those rules will only be applied to 'h1' and 'p' elements that are inside a element with the 'card' class! These rules won't be applied to any other elements.

Hope you liked this tip, I plan on doing some more on Sass/Scss 😁✌️
