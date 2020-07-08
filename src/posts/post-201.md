---
path: '/tips/post-201'
date: '2020-07-08'
title: 'How to easily deploy an app on Heroku'
languages: ['Misc', 'Heroku']
img: 'https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594222567/tips/202-1_nyt4wn.png'
description: 'Deploying apps on Heroku'
number: 201
status: true
---

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594222568/tips/202-2_wuanrn.png 'App deployed on Heroku')

Hey guys, hope you are having a good week! 🤗👊

Today we'll see just how easy it is to deploy an app using Heroku. Heroku is a cloud platform that makes deploying and hosting applications super simple for developers and without any charges! Let's see how.  
For this example, I just created a really simple app (it basically just has an heading) with Create React App and a basic Express server to serve the React application.

First thing we should do is to create a repo on GitHub with our app. This will allow automatic deploys, everytime our repository changes. Next, we go to Heroku (heroku.com) and create an account. Then, on the main dashboard we select 'Create new App).

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594222568/tips/202-3_i4tmf6.png 'Step 1')

We give our App a name and select the region that's most convenient to us. Now, we need to set the deployment method we want to use. I really suggest using GitHub, as I believe this is the easiest way. So, we select 'Github', connect to our account and then, on 'Automatic deploys' search and select the repository we want. Finally, we can select the branch we'll want to deploy (usually is master) and click on 'Enable Automatic Deploys'.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594222569/tips/202-4_vpnfv8.png 'Step 2')

Now, everytime there's a change on the code of our repository, Heroku will automatically deploy our app so it reflects the latest changes. To make sure our app is deployed straight away, we can click on 'Deploy Branch' under 'Manual deploy'.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594222569/tips/202-5_nudylp.png 'Step 3')

We can now go to the 'Overview' tab of our app and if everything is correct, we should see a build in progress on the right side. If everything goes well, we will see 'Build succeeded' and then 'Deployed' on these activity logs. That means we are done and our app is now online! Click on 'Open app' on the right top corner to check it out.

![alt text](https://res.cloudinary.com/duejrcpct/image/upload/q_auto/f_auto/w_1000/v1594222568/tips/202-6_xh4jsc.png 'Step 4')

Hope you liked this tip and let me know if you have any doubts 🤓✌️
