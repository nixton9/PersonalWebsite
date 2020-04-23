---
path: "/tips/post-2"
date: "2019-07-04"
title: "Create a centered three column layout with Grid and Flex"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586555049/tips/1_ntx4j1.jpg'
description: 'Using Grid and Flexbox to create a centered three column layout with HTML and CSS'
number: 2
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1586555310/tips/2_k6h0nx.jpg "Three column layout")

Three columns layouts are one of those super mainstream layouts in webdesign that we all use. That being said, is super usefull to master this type of grid layouts in order to easily implement any design that you want.
Here in this tip, i show you how to easily create a three column layout using CSS Grid. Then we'll use Flexbox to completely center the content of each item in the grid.

 ```html
 <div class="grid-container">

    <div class="grid-item"><div class="item flex">1</div></div>

    <div class="grid-item"><div class="item flex">2</div></div>

    <div class="grid-item"><div class="item flex">3</div></div>

</div>
 ```

In our 'grid-container' class we'll have 'display: grid' to initialize the grid. Then, since we want to have three equal sized colums we use 'grid-template-columns: 1fr 1fr 1fr'. 'Fr' symbolizes a fractional unit and '1fr' means 1 part of the available space. So, with '1fr 1fr 1fr' we'll have three grid-items, each one with 1/3 of the available space minus the grid-gap. Obviously, if you want 5 equally sized columns you woud set this property to: '1fr 1fr 1fr 1fr 1fr'. Another way of doing the same thing without using 'fr' is to use 'grid-template-columns: 20% 20% 20% 20% 20%', thus creating 5 columns, each with 20% of the available space.
Finally, we set 'grid-gap: 20px' to get a - wait for it - 20 pixels gap between each one of these columns. Pretty self explanatory, right?


 ```css
.grid-container{
   width:100%;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 20px;
}

.grid-item{
    padding: 40px;
}

.item{
    height: 250px;
    font-size: 6em;
    font-weight:600;
    color: #8125E2;
    background-color:#FAFAFA;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 
    0px 1px 1px 0px rgba(0,0,0,0.14), 
    0px 2px 1px -1px rgba(0,0,0,0.12);
}

.flex{
    display: flex;
    align-items: center;
    justify-content: center;
}

 ```

Note: imagine you you were creating a 4 column layout with 'grid-template-columns: 25% 25% 25% 25%' and you wanted a 'grid-gap' of 20 pixels. What would happen is that your content would overflow from its parent. This is because when using '%' instead of 'fr' the grid-gap is not taken in consideration so, if you layout is messed up always check this.

Finally, we want each of the grid items to have its content completely centered so we'll use the almighty Flexbox (more tips on this will come). Just take a look at what the class 'flex' is doing in each of the items.
We just need to set 'display:flex' to start using Flexbox. Then we just have to use 'align-items:center' to keep the content vertically centered and 'justify-content: center' to get the content horizontally

That's it! With just some lines of CSS we get a perfectly centered three column layout 👌😁