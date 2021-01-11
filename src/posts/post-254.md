---
path: '/tips/post-254'
date: '2021-01-11'
title: 'Beautiful, easy and ready to use components with Tailblocks'
languages: ['CSS', 'Tailwind']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1610379342/tips/254-1_m9wzrs.png'
description: 'Read to use Tailwind components with Tailblocks'
number: 254
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/v1610379342/tips/254-2_ibrewz.png 'Tailblocks')

Hello guys, what's up? 😁✌️
Today I want to share with you a really cool website thay I found the other day: Tailblocks!

Tailblocks is a set of beautiful Tailwind components that you can just copy and paste to your projects and you're done!

```html
<header class="text-gray-700 body-font">
  <div
    class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
  >
    <a
      class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
      <img src="./logo.svg" class="w-20 h-20 p-2" />
      <span class="ml-3 text-xl">webDevTips</span>
    </a>
    <nav
      class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
    >
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button
      class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
    >
      Let's chat
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
```

To use this you just to do two things: first, make sure you are including the tailwind css on your project (check my tip #232). Second, go to 'tailblocks.cc', select the block you want and just paste it on your project. And that's it!

How about you? Have you ever tried Tailwind? Let me know in the comments 👇
