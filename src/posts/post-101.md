---
path: "/tips/post-101"
date: "2019-11-30"
title: "Using position sticky in CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1587327770/tips/101-1_d6bpvi.png'
description: 'How does position sticky works in CSS'
number: 101
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1588789328/tips/101-2_v8zmku.gif "CSS Sticky position")

How is your weekend going guys?  
So, some days ago I talked about the main types of 'position' in CSS - tip #95. But in that post I didn't talked about 'sticky' position because I wanted to show you a more practical example with it, so we'll cover it today!

As you can see in the video, we have a navbar on the page and when you scroll to it, it will stick to the top of the page. Sticky position allows us to have a element anywhere on the page, and when you scroll to it's position it will get stuck to a specific point. But, until that point, the element will remain on it's default place in the document flow. With this we can create a lot of cool stuff. 

 ```html
<div class="container">

            <header>
                <h1>This is a sticky Header</h1>
            </header>

            <main>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

            </main>

            <footer>Footer</footer>
            

        </div>
 ```

Doing this is super easy. We just need to set 'position: sticky' and 'top: 0' on the element where we want to apply this. If we wanted, we could also make the element stick to the bottom of the page. We would just need to change 'top: 0' to 'bottom: 0'. Apart from this CSS, we'll also need to make sure that the element where we're applying this effect has some siblings. Without this, the effect won't work.

 ```css
.container{
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    min-height:100vh;
    margin-top: 100px;
}


header, main, footer{
    width:100%;
    padding: 40px;
    box-sizing: border-box;
}

header{
    position: sticky;
    top: 0;
    background: linear-gradient(226deg, #45FCE4, #04CBD3);
    color: #fff;
}


footer{
    background: linear-gradient(226deg, #45FCE4, #04CBD3);
    color: #fff;
    font-size: 18px;
}

p{
    margin-top: 10px;
    line-height:34px;
    color: #424242;
}
 ```

Hope you liked this tip guys, see you!!