---
path: "/tips/post-186"
date: "2020-05-25"
title: "Modules and mixins in Sass"
languages: ['CSS', 'SASS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/q_auto/w_1000/v1590420745/tips/186-1_qkopaz.png'
description: 'How to use modules and mixins in SASS/SCSS'
number: 186
status: true
---

It's time for more Sass tips! 🔥  
Today we'll continue to check some more features that we get from using Sass (or in this case SCSS). Check my tip #180 to see how to use it and some other features.

The first feature we'll check today is modules.  Basically they allow us to split our styles in different files and then import them where we want. This is super advantageous in bigger projects so you don't end with a hugeee CSS file.

```scss

/* base.scss */

$darkGrey: #10191B;
$lightGrey: #B2BECD;
$background: #E2E2E2;
$borderRadius: 20px;

* {
    margin: 0;
    padding: 0;
}

body {
    background: $background;
    font-size: 14px;
    font-family: 'Muli', sans-serif;
    min-height: 100vh;
}

```

Check the first two code snippets to see how this is done. We have a 'base.scss' file where we set some variables and some basic styles. Then, on our 'main.scss' file we import the base file with '@use nameOfFile'. With this we'll have access to all the variables we defined on the base file!

```scss

/* main.scss */

@use 'base';

.header {
    border-radius: $borderRadius;
    h1 {
        color: $darkGrey;
    }

    p{
        color: $lightGrey;
    }
}

```

Finally we have mixins, which are kind of functions on Sass. These are great if you want to avoid repeating some rules or simply avoid repeating browser prefixes!

```scss

@mixin offsetByX($x) {
    -webkit-transform: translateY($x);
    -ms-transform: translateY($x);
    transform: translateY($x)
}


h1 {
    font-size: 32px;
    color: blue;
    @include offsetByX(20px); 
}

.card {
    background: #ccc;
    width: 400px;
    height: 200px;
    @include offsetByX(10px);
}

```

If you check the third code snippet, we create a mixin called 'offsetByX' where we receive an argument '$x' and we do a transform translateY, with all the prefixes, using '$x' as the value for this translate. Then we just use where we want by writing '@incluces nameOfTheMixin($argument)', inside the selector.

Hope you liked this tip and have a great day guys! 😁🔥✌️ 
