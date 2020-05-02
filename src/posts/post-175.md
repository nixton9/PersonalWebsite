---
path: "/tips/post-175"
date: "2020-04-01"
title: "Creating a simple and clean testimonials section with CSS"
languages: ['HTML', 'CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588414262/tips/175-1_htqtph.png'
description: 'Designing a nice testimonials section for a website'
number: 175
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588414263/tips/175-2_zozcn8.png "Testimonials section")

Happy Friday guys! 😎

So, so since a lot of you guys have been asking me for more tips on UI & CSS I decided to show you how we can easily create a nice and clean testimonials section for a website.

```html

<div class="container">


    <div class="testimonial">
        <img class="testimonial__avatar" src="user1.jpg"/>
        <div class="testimonial__user">
            <h3 class="user__name">Eric Thomson</h3>
            <h4 class="user__company">Amazon</h4>
        </div>
        <p class="testimonial__text">
            "Lorem ipsum ..."
        </p>
    </div>


    <div class="testimonial">
        <img class="testimonial__avatar" src="user2.jpg"/>
        <div class="testimonial__user">
            <h3 class="user__name">David Lucas</h3>
            <h4 class="user__company">Facebook</h4>
        </div>
        <p class="testimonial__text">
            "Lorem ipsum ..."
        </p>
    </div>


    <div class="testimonial">
        <img class="testimonial__avatar" src="user3.jpg"/>
        <div class="testimonial__user">
            <h3 class="user__name">Albert Wallace</h3>
            <h4 class="user__company">Google</h4>
        </div>
        <p class="testimonial__text">
            "Lorem ipsum ..."
        </p>
    </div>

    
</div>

```

Won't go into detail on the HTML and CSS of it since it's all pretty simple and self explanatory.

```css

.container{
    display:flex;
    align-items:center;
    justify-content: center;
    min-height:100vh;
    width: 95%;
    margin: 0 auto;
}


.testimonial {
    position: relative;
    background-color: #FAFAFA;
    color: #424242;
    border-radius: 4px;
    padding: 2rem 2rem 3rem 2rem;
    margin: 0 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.testimonial__avatar {
    border-radius: 50%;
    max-width: 4rem;
    position: absolute;
    top: -1.5rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.testimonial__user {
    text-align: center;
    margin: 1.5rem 0 1rem 0;
}

.user__name {
    font-size: 1.15rem;
    margin-top: .5rem;
}

.user__company {
    color: #BDBDBD;
    margin-top: .4rem;
    font-size: .85rem;
    letter-spacing: .03rem;
}

.testimonial__text { 
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.85rem;
}

```

Have a great day guys! ♥️