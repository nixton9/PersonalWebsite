---
path: "/tips/post-125"
date: "2020-01-15"
title: "Using HTML icons on your projects without any library"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587591211/tips/125-1_uoap6z.png'
description: 'On to use icons on a website without having to include any libraries'
number: 125
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1587591211/tips/125-2_q0pwbv.png "HTML icons")

What's uuup guys? 😁  
We will see today how we can have icons on our projects without having to import any library or framework, just by using them directly on our HTML with UTF8 codes.

This is something really really simple and often very handy when you just need to use a couple of icons for a random project and don't want to use a full library like Font Awesome, Typicons, etc ..

 ```html
 
     <div class="icons-container">

        <span class="icon">&#8986;</span> <!-- Watch -->
        <span class="icon">&#9749;</span> <!-- Coffee -->
        <span class="icon">&#127780;</span> <!-- Sun with Clouds -->
        <span class="icon">&#11106;</span> <!-- Arrow Right -->
        <span class="icon">&#128512;</span> <!-- Smile Emoticon -->
        <span class="icon">&#128584;</span> <!-- Monkey Emoticon -->
        <span class="icon">&#9989;</span> <!-- Check Mark -->

    </div>

 ```

So, to do this we first have to search for icons. We can search on Google something like 'UTF8 icons' or just go to 'www.utf8icons.com'. Here, you'll find a huge variety of icons from a lot of different categories. Choose whatever icon you like and click on it. You'll see that icon on a single page and there you'll find different types of codes to use this icon: Unicode Hex, ASCII, HTML, CSS, etc... You can go ahead and copy the HTML code that usually has a format like '&#172656'.

 ```css
.icon {
    font-size: 45px;
    margin: 0 25px;
}
 ```

After having this HTML code we just need to go to our HTML file and paste that code whatever we want to use the icon. We can put it inside a 'div', a 'span', a 'p', a 'h1', it doesn't matter. You can even just put it your 'body' without any other tag wrapping it!

And this is basically all we need. We can then use some CSS properties to style our icon, even though there aren't many properties that will work here. If you want to make your icon bigger or smaller you can use 'font-size' to do this, as you can see in the example.