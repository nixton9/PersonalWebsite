---
path: "/tips/post-165"
date: "2020-04-08"
title: "What are branches in Git and how to use them"
languages: ['Git']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362672/tips/165-1_wveqpl.png'
description: 'How to use branches in Git'
number: 165
status: true
---

What's up guys, how are you? 🤓

On my tip #159 i showed you how to create a repository on GitHub and put your code there. Since this is a pretty important topic I thought of having two more tips related to this. Today's tip will be about branches and on Friday I'll have a tip about Pull Requests. -
So what is a branch on git? Basically it's like a independent line of development on your project. Say you have a project in git. Usually, that code will be all on the 'master' branch - by default the main branch on a repository.

Now you want to add a new feature. Instead of using that branch, you can create a new one that will have exactly the same code but your new code will only be here - at least for now. You can mess around and do what you want with it and you'll never mess up the master branch.

So you do all the work for the new feature on this new branch. When you're done, you just need to push that branch, and if everything is okay, you can merge it with the master branch. This is particularly great when working in a team because every developer can work on it's own branch(es). This will make more sense after the next tip where I'll explain Pull Requests.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362672/tips/165-2_qgfqbr.png "Git branches")

Follow the code snippet to see how this is done, it's really simple. Let me know your doubts, if you have some!