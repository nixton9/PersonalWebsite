---
path: "/tips/post-46"
date: "2019-08-26"
title: "Grouping your select options in different categories"
languages: ['HTML']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586814321/tips/46-1_kf6may.png'
description: 'Grouping your select options in different categories'
number: 46
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/v1586814322/tips/46-2_cm4jla.png "Categories in select options")

Did you know that HTML has a special element that you can use in your select options to group them in different categories? This is something a lot of people don't know about and it's extremely handy for a lot of cases! Look at the 'Final Result' slide to understand exactly what I'm talking about 😁

 ```html
<div class="select-container">

    <label>Select your favorite music artist/band</label>
    <br>
    <select>
        <option selected disabled>Choose your favorite</option>
        <optgroup label="Pop">		
            <option value="">Ariana Grande</option>
            <option value="">Justin Bieber</option>
            <option value="">Taylor Swift</option>
        </optgroup>
        <optgroup label="Rock">		
            <option value="">Imagine Dragons</option>
            <option value="">Twenty One Pilots</option>
            <option value="">Pearl Jam</option>
        </optgroup>
        <optgroup label="Hip Hop">		
            <option value="">Tupac Shakur</option>
            <option value="">Notorious BIG</option>
            <option value="">Eminem</option>
        </optgroup>
    </select>

</div>
 ```

In order to do this you first just have to create a typical 'select' element with some 'options' inside. Then, you just need to wrap some of the desired options inside a 'optgroup' tag. This tag must have a 'label' attribute where you'll place the name you want for this specific category.

And it's done! Extremely easy and super handy to arrange your options in a more convenient way 🔥🔥