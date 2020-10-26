---
path: '/tips/post-232'
date: '2020-10-26'
title: 'What is Tailwind CSS and how to start using it'
languages: ['HTML', 'CSS', 'Tailwind']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1603731451/232-1_yjbvi9.png'
description: 'Using Tailwind CSS'
number: 232
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1603731451/232-2_s6kvpt.png 'Tailwind CSS')

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1603731451/232-3_mifdat.png 'Tailwind CSS')

Using Tailwind CSS

Tailwind CSS is a CSS framework that has been gaining a lot of popularity for a while now. It basically provides a ton of different classes to do all sorts of things. So, in order to create and style beautiful elements, we just need to use the classes we want.

Tailwind also provides responsive features and it's super customizable, thus making it a great choice for a CSS framework. Let's check how we can use it!

Check the example. We are creating a hero banner with some buttons that is fully responsive. So the first thing we need to do is getting Tailwind to our project. If you go to their website, on the 'Get Started' section you'll find different ways of doing this. For this example I decided to use their CDN to include the framework.

```html
<div
  class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
>
  <h2
    class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
  >
    Ready to dive in?
    <br />
    <span class="color-blue">Start your free trial today.</span>
  </h2>
  <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
    <div class="inline-flex rounded-md shadow">
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue"
      >
        Get started
      </a>
    </div>
    <div class="ml-3 inline-flex rounded-md shadow">
      <a
        href="#"
        class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md color-blue"
      >
        Learn more
      </a>
    </div>
  </div>
</div>
```

Now, that we have imported Tailwind we can go ahead and start using their classes on our elements. These classes can be used for a lot of different things: padding, font-size, border-radius, margin, display, color, etc. Just take a look at their documentation to find out more.

And that's basically it! For this example, I just added two of my own classes to change the color and background-color and that was the only CSS I needed to write.

```css
.bg-blue {
  background-color: #4605ff;
}

.color-blue {
  color: #4605ff;
}
```

How about you? Have you every tried Tailwind CSS? If so, what were your thoughts? 🤔🤓
