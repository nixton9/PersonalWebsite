---
path: "/tips/post-9"
date: "2019-07-11"
title: "Using CSS Media Queries to target different browsers and different devices"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1586600478/tips/9-1_zqr1tb.jpg'
description: 'Creating CSS Media Queries to target different browsers and different devices'
number: 9
status: true
---


Media queries are awesome. They basically allow you to use some CSS if only specific criteria are being met. The most common use, at least for me, is when dealing with responsive web design - you can apply specific CSS rules only for smaller screens, for example.
That being said, there are lot more types of media queries. Here i'll just show you the ones i use the most.

 ```css
/* STYLES WILL BE APPLIED IF BROWSER VIEWPORT HAS A MAXIMUM WIDTH OF 800PX */

@media only screen and (max-width: 800px){
    p{
        color:brown;
    }
}



/* STYLES WILL BE APPLIED IF BROWSER VIEWPORT HAS A MAXIMUM HEIGHT OF 600PX */

@media only screen and (max-height: 600px){
    p{
        color:violet;
    }
}



/* STYLES WILL BE APPLIED IF BROWSER VIEWPORT HAS A MAXIMUM HEIGHT OF 600PX AND
A MAXIMUM WIDTH OF 800PX*/

@media only screen and (max-height: 600px) and (max-width:600px){
    p{
        color:green;
    }
}



/* STYLES WILL BE APPLIED IF BROWSER VIEWPORT HAS A MAXIMUM WIDTH OF 600PX
OR A MINIMUM WIDTH OF 1000PX */

@media only screen and (max-width: 600px), (min-width:1000px){
    p{
        color:lightblue;
    }
}
 ```

Most media queries follow this structure : '@media only screen and ([YOUR RULE]){ CSS HERE }'. You can add more rules and combine them to suit your needs.

 ```css

/* STYLES WILL BE APPLIED IF BROWSER IS CHROME (29+) */

@media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) {
    p{
        color:red;
    }
}




/* STYLES WILL BE APPLIED IF BROWSER IS SAFARI (10.1+) */

@media not all and (min-resolution:.001dpcm) { 
    p{ 
        color:pink; 
    }
}




/* STYLES WILL BE APPLIED IF WEBPAGE IS BEING PRINTED */

@media print {
    p{
        color:black;
    }
}


 ```

Look at the media queries in this post and you'll se how to use them for: . setting CSS for responsive concerns; . setting CSS for specific browsers; . setting CSS only when the website is in 'printing' mode;