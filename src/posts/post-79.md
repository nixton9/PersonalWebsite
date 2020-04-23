---
path: "/tips/post-79"
date: "2019-10-23"
title: "What are Styled Components and how to use them"
languages: ['React', 'Styled Components']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/v1587032651/tips/79-1_apseph.png'
description: 'Using Styled Components in React'
number: 79
status: true
---

Styled Components are great! They are a way to use CSS in modern JavaScript, especially in your React components. You basically write some CSS for a specific component and these styles won't be applied to any other elements on the page, even if they have the same class. -
To understand how they work let's look at the first code example: an 'App' component that seems to render two elements. These two elements are 'Box' and 'Button' and they are in fact two Styled Components (notice the uppercase). So what are these components exactly in terms of markup?

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587032650/tips/79-2_fopfbw.png "Styled Components in React")

If we go to the second code snippet, we have the file where we are defining those two Styled Components. Basically, we're saying that 'Box' is a HTML 'div' and that 'Button' is a HTML 'button' . Below that we start writing all of our CSS rules for each of the elements. -
First advantage of this is the modularity that this creates. Your element and it's CSS are completely isolated and you can easily remove it from one place and put it on another and the CSS rules that it has won't affect any other elements or won't be affected by any other CSS. -
Another advantage is that with this is that you get a lot of features that you see in some CSS pre-processors like SCSS. You can use variables, mixins and one of my favorites, nested styles - you can see this in the code example where we are setting rules for the element and also setting some rules for the 'h1' and 'p' inside the 'Box' Styled Component.
Finally, we can also pass props to these Styled Components and use them for dynamic properties, which is awesome and super handy!

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/v1587032650/tips/79-3_fkb4rj.png "Styled Components in React")

Hope that if you use React, you give this a try. I bet you'll love it!