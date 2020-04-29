---
path: "/tips/post-135"
date: "2020-02-03"
title: "Getting familiar with the Chrome DevTools (part 3)"
languages: ['Chrome', 'Misc']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587970626/tips/135-1_tg7lj0.png'
description: 'Using the Chrome DevTools - Memory tab'
number: 135
status: true
---

`youtube: https://www.youtube.com/embed/GNp5YfZ-sts`

Hey guys, how was your weekend? 😁  
Today we'll have one more tip on the Chrome DevTools series - the Memory Tab. Previously, I released two tips on the Chrome DevTools - one on the Elements tab (tip 102) and the other on the Console tab (tip 119). Go check them out if you haven't.

So what's the Memory tab for?
Well, here we can see the amount of memory that is being consumed by our page at a given moment. I created this random example with a for loop that starts creating new elements with event listeners attached to them so the memory consumption increases a bit.


 ```html
 
<div class="container">

    <header>
        <h2>Header</h2>
    </header>

    <main>

        <h1>Some Title</h1>
        
        <div id="text"></div>
        
    </main>

    <footer>Footer</footer>
    

</div>


<script>

    const LOREM_IPSUM = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
    dolor in reprehenderit in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
    `

    for(var i = 0; i<10000; i++) {

        var p = document.createElement('p');

        p.innerText = LOREM_IPSUM;

        p.addEventListener('mouseover', () => {
            console.log('Hovering text!')
        })
        
        document.getElementById('text').appendChild(p);

    }

</script>

 ```

When analyzing this page on the Memory tab we can see that the page is consuming around 2.8mb of memory. We can click on the dark circle or on the 'Take Snapshot' button to take a heap snapshot and it will show us exactly how much memory the page is consuming at that time.

With this, we'll also have access (on the right panel) to the memory distribution of the JavaScript objects and DOM nodes. This is fundamental when we are trying to understand what exactly is causing big memory consumption on our page.

Overall, this is a great tool that can help you see some performance issues you might have on your website. This is just the tip of the iceberg for you guys to have a basic understanding on what we can do with this tab but i suggest you to try it and see of the other features that we have in here.
