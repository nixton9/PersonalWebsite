---
path: "/tips/post-133"
date: "2020-01-29"
title: "How to use Font Awesome icons on your projects"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587969830/tips/133-1_k5furz.png'
description: 'Using Font Awesome icons'
number: 133
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587969830/tips/133-2_erbfdf.png "Font Awesome Icons")

Hey guys, how are you? 😁  
So, on my tip [#125](/tips/post-125) I showed you how we can use icons on our websites without even to import any library, go check it out if you haven't. Today i want to show how we can use Icons from a library - more specifically Font Awesome!

Font Awesome is a very cool Icons library that lets you use for free hundreds of custom made icons from different categories. You can also buy a Premium plan that will give you access to even more Icons, but for this tip we'll just go with the free version. Let's see how to use them 👍

Using the Font Awesome Icons is really really simple. First, we need to import the library on our project. We can do this using their CDN, and to get access to this you have to first create an account on their website. After you do that, they will send you an email with the script that will import the library from the CDN. -
After getting this script, we just need to include this on the 'head' tag on the top of our document. Now we can easily use the Icons 😁

 ```html
 
     <head>

         <!-- ... -->

        <script src="https://kit.fontawesome.com/4d0b4c932e.js" crossorigin="anonymous">
        </script>

    </head>

        <!-- ... -->

        <div class="container">

            <i class="icon fab fa-amazon"></i>
            <i class="icon fab fa-angular"></i>
            <i class="icon fas fa-angry"></i>
            <i class="icon fab fa-apple-pay"></i>
            <i class="icon fas fa-laptop-code"></i>
            <i class="icon fas fa-pizza-slice"></i>
            <i class="icon fas fa-bahai"></i>
            <i class="icon fas fa-atom"></i>
            <i class="icon far fa-bell"></i>
            <i class="icon fas fa-bolt"></i>

        </div>

 ```

Using the Icons is also really simple! Just go to the Font Awesome website, browser through all their Icons and pick one you like. On the Icon page you can copy the HTML for that icon - it's usually just an 'i' tag. Paste that on the body of your document and voilà we have the icon showing!

 ```css
 
.container{
    display:flex;
    align-items:center;
    justify-content: center;
    min-height: 100vh;
}

.icon {
    font-size: 45px;
    color: #007EFF;
    margin: 0 25px;
}

 ```

On the HTML example you can see that i also added a custom class on each icon - 'icon' - and I'm using that to apply some CSS.
We can use some CSS properties like color and font-size to change the appearance of the icons.  
Hope you liked this tip and, as always, leave your feedback! 🤓👍