---
path: '/tips/post-193'
date: '2020-06-15'
title: 'Automatically format your code with Prettier'
languages: ['VSCode', 'Misc']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1592227354/tips/193-1_qjsr8p.png'
description: 'What is Prettier, how to use it and why you should use it'
number: 193
status: true
---

`youtube: https://www.youtube.com/embed/6NZxSqpoGIQ`

What's up guys? 😁  
Today we'll take a look at Prettier - a well known a code formatter that helps you keep a consistent style across your code!

You probably already use this or at least heard of it but for those who don't, Prettier is a super handy tool that will automatically format your code following specific rules that you can set. Besides saving a lot of your time - by not having to worry with indentation, semicolons, double quotes or single quotes, etc - it also helps you keep a consistent style on the code across your projects.

On the video you can see a really small example of this. I'm writing some HTML, JS and CSS and whenever I save, Prettier just automatically formats the code for me. But it can do some more things!

To use it with VSCode you can go to the VSCode extensions, search for 'prettier' and install it. Then you have to go to the VSCode settings (you can do Command+Shift+P and search for 'settings') and add these options that you can see on the code slide.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "none"
}
```

The first option will set Prettier as the default formatter for VSCode, then we set the format on save so each time we save our code, it will get automatically formatted. On the third line, I'm turning semicolons to false and that will make Prettier remove all semicolons from your code. Then I'm setting 'singleQuote' to true as I want all my code to use single quotes instead of double quotes. Finally, I set 'traillingComma' to 'none'.

There a lot more options - you can check on the Prettier website - to change all sorts of things, such as: using parenthesis on arrow functions, tabs or spaces, the max line length, , etc.

Take care guys! 🙏🙏
