---
path: "/tips/post-92"
date: "2019-11-15"
title: "How to get started with Bootstrap on your projects"
languages: ['Bootstrap']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587146372/tips/92-1_q2ymcx.png'
description: 'Using Bootstrap'
number: 92
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587146372/tips/92-2_o86osr.png "Bootstrap")

Have you ever used Bootstrap on your projects?  
Today we'll be talking about Bootstrap. I'm sure most of you already know it and perhaps already used it. But for the ones who don't know it, Bootstrap is an HTML, CSS and JS framework (but mostly CSS) to help you easily create responsive and 'mobile first' websites.

It can really help you speed up the development process as you won't have to waste much time with design concerns. It is also packed with a lot of features and utilities such as: navbars, carousels, dropdown menus, grids, alerts and so much more.. You just need to add some HTML elements with the correct CSS classes and it will inherit the styles applied by Bootstrap.

To start using it I suggest you go to their website 'www.getbootstrap.com' and check their 'Get Started' guide. There, you can also see all the features that this framework has and how to implement them. Let's see how we can start using it.

 ```html
 
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>WEBDEVTIPS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">

</head>



<body>

    <!-- Your content here -->
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</body>

 ```

Look at the first code example. The first thing you need is to include the necessary files. You can copy these lines from their 'Get Started' guide and paste them on your code. Basically you just need the link for the CSS in the 'head' of your page and then three scripts at the end of the 'body'. Now we can start using it!

 ```html
<div class="container">

    <div class="alert alert-success" role="alert">
        Hey, we managed to start using Bootstrap components. Sweet!
    </div>

    <div class="jumbotron">
        <h2>This is a heading with a badge <span class="badge badge-secondary">Dope</span></h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <hr class="my-4">
        <button type="button" class="btn btn-primary">Click me!</button>
    </div>

</div>
 ```

Look at the second code example. Basically all the classes you see here are from Bootstrap and I'm not applying any CSS of mine. Here you can see how simple and time saving using Bootstrap is! I just need to put the correct classes on the elements and they automatically will look this way.

I suggest you give Bootstrap a try if you haven't already, it's a really cool tool to help us. Even though I prefer not to use this when I need custom designs on projects, I like using it if I'm creating something simple and don't want to spend much time around the design.