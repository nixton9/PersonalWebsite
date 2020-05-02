---
path: "/tips/post-166"
date: "2020-04-10"
title: "Creating Pull Requests in Github"
languages: ['Git', 'Github']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362846/tips/166-1_p1rlmo.png'
description: 'What are Pull Requests and to create them in Github'
number: 166
status: true
---

Happy Friday guys, hope you are well! 😁

On my last tip i talked a bit about branches in Git - what they are, why they are useful and how to use them. Today's tip will kind of continue on this tip, so please go check my last post if you haven't yet.

So today we'll talk about Pull Requests on GitHub! You can create a Pull Request basically to ask to merge your branch to another branch on a repository. To better understand this last continue on last tips' example.

So you created a new branch where you wrote some code for a new feature and then you pushed this branch to the repository. Now, you create a Pull Request asking to merge this branch into the master branch - the main and most up to date branch.

Usually, when working on a team, other developers will have to check this Pull Request and review it to see if all seems good. If they accept these new changes you wrote, your branch will then be merged.

Overall, this creates a nice and safe process to integrate new pieces of code on an application without breaking stuff and without allowing bad code to the code base.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362846/tips/166-2_o9foht.png "Github Pull Requests")

Creating a Pull Request is super easy, look at the images. When you push your branch to the repository, if you go on Github a new alert will appear you the branch that you just pushed. There, you'll find a button saying 'Compare & pull request'. Click here.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1588362847/tips/166-3_n5bgxm.png "Github Pull Requests")

This will take you to this next page, where you should fill some fields: a title saying what the feature is and a description where you should tell exactly what you did on this branch. You can also add reviewers here. Finally just click on 'Create pull request' and you're done!

Hope this made sense and let me know your doubts. See you guys, take care! 😁🙏