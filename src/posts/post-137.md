---
path: "/tips/post-137"
date: "2020-02-07"
title: "Adding fonts to your website using Google Fonts"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587971440/tips/137-1_xounkt.png'
description: 'How to use fonts from Google Fonts on your websites'
number: 137
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587971441/tips/137-2_p8rfxc.png "Google Fonts")

Hope you're having a good Friday guys 😎  
Today we're talking a little about Google Fonts. I know most of you may already know this, but for those who don't i think it will be a great tip.

So basically when you want to have a custom font on your website you need to make sure that you use something like 'font-face' to include that font so that when a user visits your website, it will automatically download the font. If you don't do this, the user will not be able to see that font.

Luckily, some years ago, Google created 'Google Fonts' - a service that has a lot of awesome fonts that you can choose and use on your websites. You just need to include a link for the font that you want and you'll be able to use it on your website!

 ```html
 
     <head>
        
        <!-- ... -->

        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,900&display=swap" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,500,700&display=swap" rel="stylesheet">

        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800,900&display=swap" rel="stylesheet">

    </head>

    <!-- ... -->

    <p class="lato">This is the Lato font family.</p>

    <p class="roboto">This is the Roboto font family.</p>

    <p class="merriweather">This is the Merriweather font family.</p>

    <p class="opensanscond">This is the Open Sans Condensed font family.</p>

    <p class="montserrat">This is the Montserrat font family.</p>

 ```

So to use this just go to 'fonts.google.com' and choose a font that you like. You can try them by entering preview text and seeing how it looks. Then click on 'Select this Font' and it will open a drawer that you can expand. On this drawer you can go to 'Customize' and choose the weights you want. Then, go back to 'Embed' and copy the link and paste it on the 'head' of your website. And you have the font included on your website!

```css

p {
    font-size: 26px;
    color: #212121;
    margin:10px 0;
}

.lato {
    font-family: 'Lato', sans-serif;
}

.roboto {
    font-family: 'Roboto', sans-serif;
}

.merriweather {
    font-family: 'Merriweather', serif;
}

.opensanscond {
    font-family: 'Open Sans Condensed', sans-serif;
}

.montserrat {
    font-family: 'Montserrat', sans-serif;
}

```

Now you can also copy that CSS line on the drawer to set the font and apply it to the body of your website or any other element you want. And it's all done 🤘  
Overall, this is super useful and super easy to use! Hope you liked it guys! 😁🔥