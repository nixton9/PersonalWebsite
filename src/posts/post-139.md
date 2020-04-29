---
path: "/tips/post-139"
date: "2020-02-10"
title: "How to use CSS intrinsic sizing to set the width of an element"
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588056453/tips/139-1_jx8pfb.png'
description: 'Learning about CSS intrinsic sizes'
number: 139
status: true
---

`youtube: https://www.youtube.com/embed/ASvrqrROXtU`

Hello guys, how are you? 😁  
Today's tip will be on CSS intrinsic sizing for elements. This fancy words basically means that the the size of the element will be based on its content. But let's see what we can do with this.

When you set the width of an element you can use different types of units: auto, em, rem, px, vw, %, etc. But we can also set the width of an element using intrinsic sizing: 'min-content', 'max-content' and 'fit-content'. Even though this is not yet fully compatible on all browsers, it's still a good option for some cases since it's really easy to use.

 ```html

<div class="box box1">
    <h2>This box has 400px width</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
</div>

<div class="box box2">
    <h2>This box has min-content width</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
</div>

<div class="box box3">
    <h2>This box has max-content width</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
</div>

<div class="box box4">
    <h2>This box has fit-content width</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
</div>

 ```

Look at the video example and try to understand the differences between the cases we have here:  
The first box has a specified with of 400px. It will always stay that way. If our screen is smaller than 400px then we won't see the whole box.

The second box has 'min-content' so, the width of the box will be equal to wider word on our text (content or consecteur). If we had a longer word in here, the box would have enough width to accommodate that word.

```css

.box {
    background: #FAFAFA;
    border-radius: 4px;
    padding: 25px;
    color: #212121;
    margin: 20px 0;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    box-sizing: border-box;
}

.box1 {
    width: 400px;
}
.box2 {
    width: min-content;
}
.box3 {
    width: max-content;
}
.box4 {
    width: fit-content;
}

.box h2 {
    color: #007EFF;
}

.box p {
    margin-top: 10px;
    font-weight: 300;
}

 ```

Third box has 'max-content'. The width will be the minimum width necessary to fit all the content without overflowing it. It also won't respect the page width, it only cares about its content.

Finally, the last box has 'fit-content'. The width will be the same as 'max-content' while there is more available space then needed. If that's not the case, it will use the available space. If the available space is not enough, it will be the same as 'min-content'.  
Hope you liked this tip and let me know your thoughts! 😁👍
