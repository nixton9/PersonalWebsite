---
path: "/tips/post-23"
date: "2019-07-27"
title: "Progress and meter bars with HTML only"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586692868/tips/23-1_cfkcur.png'
description: 'Creating progress bars and meter bars only with some HTML'
number: 23
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586692935/tips/23-2_ojdmtd.png "Progress and meter bars")

As mentioned in previous tips, HTML5 brought to us a lot of cool new elements, and some of them most people don't even know about!  
Today I'll show you how to create some basic progress bars and meter bars only with HTML. Not a single line of CSS or JS! Obviously, we can enhance the look and feel of this elements using CSS and JavaScript but here I want to show you just how simple this is !

 ```html
 <h2>Progress and Meter Bars</h2>

<progress value="56" max="100"></progress>

<meter min="0" max="100" value="10" low="25" high="75" optimum="50"></meter>

<meter min="0" max="100" value="55" low="25" high="75" optimum="50"></meter>

<meter min="0" max="100" value="90" low="25" high="75" optimum="50"></meter>
 ```

The progress element can receive the 'value' and 'max' attributes - this will define how much progress we want to show in the bar. The meter element receives the same two attributes and then we can set 'low', 'optimum' and 'high' - this will automatically set different colors for our meter bar wether the value is considered low, optimum or high.  
Hope you liked it! 😁