---
layout: page 
title: Home

---
<sup style="float:right">Last update: Feb 2020</sup>

# Hi

I'm a game prototype developer in [Yggdrasil Gaming](https://www.yggdrasilgaming.com/).

Most of the projects that I'm working on in my free time are game prototypes made in Unity and C#. Apart from that I have created one small Android app published on Google Play and took part in some other projects.


<br/>
<hr>
## Experience
**Game Prototype Developer - Yggdrasil Gaming**, 08.2019 - now
My main task is to create high-fidelity prototypes of new casino games to depict how new game idea works in real life.
* Unity, C#, JetBrains Rider
* DOTween, Zenject
* GIT
* MacOS

**Software Engineer - Nokia**, 08.2015 - 07.2019 (4 years)
As my main task was to develop a mature product (suite for 3rd generation mobile network monitoring), I took the opportunity to gather experience in many fields.
* Working with the legacy code, fixing bugs, applying security fixes, writing technical documentation.
* Writing new code in Python, Bash, Perl, some C++.
* Leading SCM team and maintaining product delivery to the client.
* Automating manual procedures using Python, Bash, Perl and Jenkins.
* Work with various operating systems: Windows 10, Solaris, Windows Server, CentOS.
* Work with various software: PyCharm, Visual Studio 2017, GitLab, Jenkins, ClearCase, Jira, MobaXterm...
* For half a year, part-time work as a Scrum Master.
* Recruitment and mentoring of new employees.
* For two years, part-time work as customer technical support, debugging problems in the field.
* For half of a year, part-time work as Product Owner for a new product related with LTE.

**Intern - VSoft**, 07.2015 (1 month)
Design and implementation of a system consisting of Web Service, web application client web administration application (ASP.NET, C#).

<br/>
<hr>
## Education
**Jagiellonian University, 2016-2018**
M.S. in Computer Science - Video Game Production

**AGH University of Science and Technology, 2012-2016**
B.S. in Applied Computer Science, Faculty of Metals Engineering and Industrial Computer Science

<br/>
<hr>
## Hobbies
Game development, [guitar playing](http://www.smiertelnik.pl), computer games, new technologies.


<br/>
<hr>
# My projects

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/krakjam2020) Work at Januszex, Global Game Jam 2020 (KrakJam) - **1st place!**
Game Jam subject: Repair  

#### Story
Game about having minimum wage job tightening screws under rather unpleasant leadership.  
You have to tighten the screws.

* Too much force will break it.
* Too little will make your boss angry.
* Too many mistakes will make you get fired!
* You get 5 groszy for every screw you tighten correcly.
* Timer speeds up, you have to hurry up!

#### Tech info
The game uses 2 custom controllers
* 1st controller = Arduino + Potentiometer + 3D printed case + 3D printed spannerit designed and printed during the jam.
* 2nd Controller is a computer's microphone. You have to shout loudly to get next bolt.
* Blender used for 3D modeling.
* Unity used for game.
* Ender-3 used for 3D printing.


This project was done by two people in 48 hours. We got a **first place prize** for this game and we are super happy about it, especially there was about 150 other people, (~40 teams) there.
I was responsible for designing, 3D printing, coding custom controller, coding gameplay (Unity, C#, Arduino) while my friend was implementing microphone usage and doing the design, visual and audio assets.

More information: [https://github.com/Pastew/krakjam2020](https://github.com/Pastew/krakjam2020)


### Video
<iframe width="100%" height="415" src="https://www.youtube.com/embed/CuvS7_y8ex4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br/>
### Screenshots
![img]({{ 'https://github.com/Pastew/krakjam2020/raw/master/screenshots/s1.png?raw=true'  }}){: .center-image }
![img]({{ 'https://github.com/Pastew/krakjam2020/raw/master/screenshots/s2.jpg?raw=true'  }}){: .center-image }



<br/>
<br/>
<hr>

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/room) Room - VR game
I wanted to learn basics of 3D modeling in Blender, so I modeled my room.
I also wanted to try creating a VR game, so I used my room model and prototyped an escape room game.

Key goals:
* Prepare game with 10 minutes gameplay.
* Create every asset by myself (to learn 3D modeling).
* Game should be playable without any controller (only VR headset + smartphone).
* Deploy to Google Play only.
* No annoying ads.

What I did so far:
* I used [Google VR SDK](https://developers.google.com/vr/develop/unity/get-started-android) for handling VR.
* I modified original VR selector to circle-based (see YT video).
* I optimized models to get smooth gameplay on mid-range Android smartphone (tested on Nokia 6.1).
* I prototyped two walking modes: marks on floor and looking down to move forward.
* I used lightmapping to get the shadows (for better performance no real time lights are used in game).

Work in progress: ~20%. I plan to finish this game in the future.

<iframe width="100%" height="415" src="https://www.youtube.com/embed/j-zB5VxvMKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>







<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/form) Form - 2D platformer logic game with soft body physics.
I was interested in soft body physics during my university studies, so I wanted to create a game using it. I found [great repo](https://github.com/kwanchangnim/Jello-Physics) I utilized in my game prototype.
**Form** is a mobile oriented game where player controls jelly-like hero who can change his form - a soft ball, a flying baloon or a sticky ball. The goal is to reach the end of the level by solving logical puzzles and arcade challenges.

* [Ferr2D Terrain Tool](https://assetstore.unity.com/packages/tools/level-design/ferr2d-terrain-tool-11653) used for creating the terrain.
* [Jello-Physics](https://github.com/kwanchangnim/Jello-Physics) used for soft body physics
* Side goal of this project was to learn the Inkscape for creating 2D assets, so objects in game are created by me.
* I also wanted to learn [Unity Post Processing Stack](https://assetstore.unity.com/packages/essentials/post-processing-stack-83912), it is used in the game for death effect. It contains multiply effects mixed up.
* I created only two levels. I don't plan to finish this game, because it would consume too much time to prepare all assets and levels by myself.

More information: [https://github.com/Pastew/form](https://github.com/Pastew/form)
<iframe width="100%" height="415" src="https://www.youtube.com/embed/JK-xgJiYcnk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>







<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/krakjam2017) Red Wave, Global Game Jam 2017 (KrakJam)
Game Jam subject: Waves.
Story:
You're working as a radio broadcasting station operator in soviet-occupied Poland. You have lots of power and great responsibility. Will you be smart and brave enough to get rid of this fatal establishment and finally set the country free? Emit proper radio programs to influence people in polish cities, react properly for various fascinating historical (and fictional) events and splendidly avoid government agents, so you don't end up as a public enemy. Become the master of propaganda. Let the waves of freedom flow!

This project was done by three people in 48 hours. I was fully responsible for coding (Unity, C#) while my friends was doing the design, gameplay balancing and assets.

More information: [https://github.com/Pastew/krakjam2017](https://github.com/Pastew/krakjam2017)

<iframe width="100%" height="415" src="https://www.youtube.com/embed/OKJAgOTh-co" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>







<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/krakjam2018) AdBlock Simulator, Global Game Jam 2018 (KrakJam)
Game Jam subject: Transmission.
Story:
Your browser delivers to you great amount of data each day. However, alongside with your beloved cat pictures and memes there is always data you would rather not see - the ubiquitous demons of the web - the ADS. You probably use an ad blocker browser plugin, to help you hunt them down & forget they really exist. But do you think YOU can take it's place?
In this little arcade/puzzle game you will be responsible for classifying correctly incoming packets of data. We will test your speed, observation skills and ability to multitask. Enjoy!

This project was done by two people in 48 hours
I was responsible for coding (Unity, C#) while my friend was doing the design and assets.
First version of the project didn't involve webcam at all. We got this idea after 24 hours. Once we added webcam game became much more fun.
To play the game you need a red and green objects in your hand. It is your game controller. Webcam recognizes if you're showing the red or green objects. This is how you pass/block data packets.

More information: [https://github.com/Pastew/krakjam2018](https://github.com/Pastew/krakjam2018)

<iframe width="100%" height="415" src="https://www.youtube.com/embed/AuSQ8tW7N4U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>








<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/rpi_car) Raspberry Pi, WiFi controlled car with 180* video streaming
I created this car during my engineering studies when I attended additional classes at the SKIP scientific club. This was my first contact with:
* electronics
* 3D modeling - rotating turret was designed in SketchUp and 3D printed.
* NodeJS

I learned a lot and it was also fun for me.
Later it became the subject of my engineering work.

More information: [https://github.com/Pastew/rpi_car](https://github.com/Pastew/rpi_car)

<iframe width="100%" height="415" src="https://www.youtube.com/embed/vOVKgLQbhpc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>








<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/ISEngineerExam) Android app for learning for an engineering exam
This is my first released product that was useful for others. It helped me and my collegues from university with learning to engineering exam in 2015. All of us passed.
I also implemented Google Analytics to learn how to use it and it turns out the app is still used by students in 2019.
It can be downloaded on [Google Play](https://play.google.com/store/apps/details?id=com.pastew.isexam&hl=pl).

More information: [https://github.com/Pastew/ISEngineerExam](https://github.com/Pastew/ISEngineerExam)

![img]({{ '/assets/images/isexam.png' | relative_url}} ){: .center-image }







<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/ingameads-server) Microservices based web service for renting advert space inside game world.
This application is the subject of my master's thesis.
It is an intermediary between video game owners and advertisers that are willing to pay for placing their advertisements inside the game world. The project consists of:
* client application written in Unity
* server side written using Java, Spring Boot, Spring Cloud and microservices architecture.

I was responsible for everything in this project:
* designing the microservice architecture
* designing business model
* implementing the server and client side.
I chose this topic because I wanted to learn Spring Boot and microservices which was new for me, so it was a valuable lesson.

More information: [https://github.com/Pastew/ingameads-server](https://github.com/Pastew/ingameads-server)

![img]({{ 'https://github.com/Pastew/ingameads-server/raw/master/architecture.PNG?raw=true'  }}){: .center-image }







<br/>
<br/>
<hr>
## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/browsergotchi) Browsergotchi - anti-procrastination web browser addon
Browsergotchi is a hackathon project, bringing to your browser funny froggy widget you probably need to take care of. Browsergotchi lives inside your Chrome. It becomes happy when you're visiting proper websites, and unhappy when you're procrastinating on some 9gagy stuff. It can also recognize if YouTube video you're watching comes from some silly category! You better look after it.

This project was done by two people.
I was fully responsible for coding while my friend was doing the design and assets.
It was first time I met developing browser addons, it was fun.

More information: [https://github.com/Pastew/browsergotchi](https://github.com/Pastew/browsergotchi)

![img]({{ 'https://raw.githubusercontent.com/Pastew/browsergotchi/master/screenshots/sad_example_youtube.png'  }}){: .center-image }