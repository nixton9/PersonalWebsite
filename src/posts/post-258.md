---
path: '/tips/post-258'
date: '2021-01-25'
title: 'What is margin collapse in CSS'
languages: ['CSS']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1611589902/tips/258-1_ahfuny.png'
description: 'Understanding how margin collapsing works in CSS'
number: 258
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1611589888/tips/258-2_i5m4ct.gif 'Margin collapse')

Hey guys, how are you? 😊✌️

Today I want to talk with you about a simple particularly that exists in CSS, but that a lot of beginners usually don't know: margin collapse.

```html
<div class="box box1">Box 1</div>
<div class="box box2">Box 2</div>
```

So what's this margin collapse? If you take a look at the video, you can see that I'm inspecting two divs with the Developer Tools. As you should know, that orange area seen on each div is the margin on that element. And what we can see here is that one margin is overlapping the other.

```css
.box {
  width: 20rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8125e2;
  color: #fff;
  font-weight: 700;
  border-radius: 8px;
  font-size: 1.5rem;
  margin: 0 auto;
}

.box1 {
  margin-bottom: 80px;
}

.box2 {
  margin-top: 40px;
}
```

So the first div has a margin bottom of 80px. And the second one has a margin top of 40px. But, this doesn't create a 120px gap between both divs. Instead, it only creates a gap of 80px.

So this is basically what margin collapse is about. Since one margin is bigger than the other on a vertical axis, the bigger margin will override the other.

Hope this made sense and let me know your doubts! 🤓
