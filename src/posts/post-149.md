---
path: "/tips/post-149"
date: "2020-03-02"
title: "Making images blend with the background using some CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588142569/tips/149-1_tcwbyo.png'
description: 'How to make a image blend with the background using CSS'
number: 149
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588142570/tips/149-2_wvvrsw.png "Image blended with background")

What's up guys, how was your weekend? 😁  
Today i want to show you a little neat trick i really like using to make a background image blend with the background with the rest of the page.

This is something that's really easy to do and can make big a difference on the look of a webpage. Instead of having a section with a background image and then another section with a background color, we can make both sections look as if they're one.

 ```html
 
<section>

    <div class="image"></div>

</section>

 ```

To do this, in our HTML, we can create w section and inside it create a div for our image. -
On the CSS, we give a background color to our section. On a side note, this works better with darker colors or by picking a color from the image. Then, on our image div, we want to set s background image, position it how we want and make sure we set the position to 'relative'.

```css
section {
    height: 100vh;
    width: 100vw;
    background-color: #101010;
}

.image {
    width: 100%;
    height: 55%;
    background-image: url(1.jpg);
    background-size: cover;
    background-position: 50% 10%;
    position: relative;
}

.image::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(transparent -30%,#101010);
    background: -webkit-gradient(linear,left top,left bottom,color-stop(-30%,transparent),to(#101010));
}

```

Finally, to create this blending we'll create a ::after on our image div. We'll use position 'absolute' on it and make sure it will cover our image div completely. Now we set the background to be a gradient that will b transparent on one side and on the other side we'll set the same color we used as the background color for the section. That way the same color will continue from thr background of our section to the image.

And that's all, hope you liked this little trick 🤓🔥