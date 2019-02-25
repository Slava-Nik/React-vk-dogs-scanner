# React-vk-dogs-scanner
The app scans members in your vk groups, and displays statistic (How many people are banned and deleted there).

Actually it's a VK Native Iframe-app, and i refused to deploy it :)  If you want to use it:

1) Go to front App -> npm i -> npm start
2) The app will be started on port 3000
3) Now you need to create your own Iframe App, using Vk-interface and link your localhost:3000 to it.
4) Congrats it's enough to display statistic. 

Server app just contains a simple node.js script for removing blocked or deleted members from a group. You don't need it if you just want to get statistic
