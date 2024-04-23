---
layout: page 
title: Home

---
<sup style="float:right">Last update: 04.2024</sup>

# Hi

I'm a software engineer with experience dating back to 2015. I place a high value on stepping out of my comfort zone to learn new technologies. Currently, my primary focus is on developing VR training games and other applications using Unity.

Most of the projects I work on in my free time are game prototypes created in Unity and C#, either independently or with my friends at game jams and hackathons. Additionally, I've participated in several other projects.

# Keywords
**Primary:** Unity, C# (5 years)
**Secondary:** GIT, DOTween, Zenject, Blender, Java, Blazor, SignalR, scripting
languages, Docker, UNIX systems, Jira, GitHub
**Other:** profiling and optimizing Unity apps, project management, UX design

<br/> <!-- #################################################### -->

## Experience
**Sim Factor — Software Engineer** (C#, Unity, VR), 10.2021 - Present
* Developed VR training games for standalone VR headsets, from game mechanics design to server-side communication.
  * Vectron machine room - VR frontend for a full-cabin simulator
  * CityJet - VR frontend for a full-cabin simulator
  * High voltage pole grounding - standalone VR training game
  * Intercity elevator - standalone VR training game
* Designed a reusable VR framework for future projects
  * Set of common reusable VR objects and mechanics
  * Multiplayer support to synchronize states between many players, utilizing a central server created with Blazor and SignalR
  * Framework was adopted successfully by other developers
* Optimizing VR projects
  * Identifying and resolving performance bottlenecks
  * Collaborated closely with 3D artists to deliver optimized assets
  * Utilized game-dev tricks to enhance performance and visual realism
* Worked in a small (2) and bigger (7) team.
  * For VR applications I was fully responsible for the entire project, working with one or more 3D artists
  * Contributed to other projects by completing specific tasks, such as creating a frontend for a warehouse simulator within a larger solution.
* Planned, estimated costs and managed projects
  * Created estimates for future projects
  * Planned tasks for upcoming sprints
  * Participated in client meetings
* Ability to remain calm under pressure
  * Demonstrated ability to stay steady during challenging client interactions, earning management recognition

**Yggdrasil Gaming — Prototype Developer (C#, Unity, WebGL)**, 08.2019 - 09.2021 (2 years)
* Produced high quality prototypes of new casino games
* My goal was to show how a new game idea works in real life before it gets
to the production team
* Worked mostly with Unity UI and DOTween

**Giganci Programowania - Programming Teacher for children and youth**, 09.2019 - 01.2020 (5 months)
* Taught basics of programming and computer security to students aged 9-15

**Nokia — Intern -> Software Engineer**, 08.2015 - 07.2019 (4 years)
As my main task was to develop and maintain a mature product (suite for 3rd generation mobile network monitoring), I took the opportunity to gather experience in many fields. Although I didn't become a pro at any of them, I'm grateful for the experience I gained. Looking back, I realize it was a valuable starting point for my career as a software engineer. Some of the things I did:
* Working with the legacy code, fixing bugs, applying security fixes, writing technical documentation
* Writing new code in Python, Bash, Perl, some C++
* Leading SCM team and maintaining product delivery to the client
* Automating manual procedures using Python, Bash, Perl and Jenkins
* Work with various operating systems: Windows 10, Solaris, Windows Server, CentOS
* Work with various software: PyCharm, Visual Studio 2017, GitLab, Jenkins, ClearCase, Jira,...
* For half a year, part-time work as a Scrum Master
* Recruitment and mentoring of new employees
* For two years, part-time work as customer technical support, debugging problems in the field
* For half of a year, part-time work as Product Owner for a new LTE product

**Intern - VSoft**, 07.2015 (1 month)
Design and implementation of a system consisting of Web Service, web application client web administration application (ASP.NET, C#). I was mostly responsible for implementing SOAP client.


<br/> <!-- #################################################### -->

## Education
**Jagiellonian University, 2016-2018**
M.S. in Computer Science - Video Game Production

**AGH University of Science and Technology, 2012-2016**
B.S. in Applied Computer Science, Faculty of Metals Engineering and Industrial Computer Science

<br/> <!-- #################################################### -->

## Hobbies
Game development, [guitar playing](http://www.smiertelnik.pl), computer games, new technologies.

<br/> <!-- #################################################### -->

# Personal projects

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/placuszki-dev/krakjam2024) Choose your cheese, please!, Global Game Jam 2024 (KrakJam)
Game Jam subject: Make me laugh

#### Story
In our game, two teams of cheese throwers (and possibly lovers) are trying to cover the most cat heads with their cheese type of choice.

#### Gameplay
Anyone can join using only a smartphone with web browser. Smartphones are used as controllers, and game screen is displayed on bigger display. Smartphone is used as a controller for the game. Up to 12 players at a time.

#### Tech info
* Game server made with ASP.NET Core. Communication made with SignalR. We host it on some cheap VPS.
* Game controller running on player's smartphone made with with vanilla HTML + CSS + JavaScript.
* Game client made with Unity.

#### Credits
This project was done by three people in 48 hours.
@ympek - smartphone app
@twinkeywinkey - game client made with Unity, game assets, look and feel, polish gameplay
@pastew - make both apps talk to each other

#### Links
* Source code:  [https://github.com/placuszki-dev/krakjam2024](https://github.com/placuszki-dev/krakjam2024)
* Build: [download link](https://github.com/placuszki-dev/krakjam2024/releases/)
* GGJ page: [GGJ - Choose Your Cheese, Please!](https://globalgamejam.org/games/2024/czerwone-maki-pr-7)

### Video
<iframe width="100%" height="415" src="https://www.youtube.com/embed/rKhZyXvgZrE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/placuszki-dev/krakjam2023) Boss Level, Global Game Jam 2023 (KrakJam) - <span style="color:#FFD700">**Audience award!**</span>
Game Jam subject: Roots  

#### Story
Let's get back to the roots. Remember playing Pegasus/SNES in front of your TV? Remember that one tough boss level, even your older brother couldn't beat? Well, in our game you can BE the boss, and finally take revenge. 

"Boss Level" is a game for two to five players, where up to four players play a platformer in 2D and additional one is playing the "boss" on a VR headset - seeing the players below and trying to kill them by throwing hammers at them. Players, on the other hand, have to collect bananas to defeat the boss. 

Why this project? What's the idea? Every single one of us started their video game journey as a kid from sitting in front of (now ancient) CRT TV and playing classics, like Super Mario or Tetris. While brainstorming on this year’s subject we concluded that for us, the “roots” are exactly this – simple game, small screen, and us trying to beat another boss level. Then we began experimenting on the subject - what if we take our "roots", this simple idea of trying to beat a boss - and fast forward 20-30 years to modern technology, like Oculus VR. And try to... fit both of this approaches in one game. To show where we were, and where we are now. That's why we later decided to pick up some old TV and use it in this project as well, trying to make oldschool part of the game look as good as possible on CRT display, to hit all of us with a healthy dose of nostalgia.

#### Tech info
Game connects two gameplays:
* One player plays on any SteamVR supporting VR headset - he is a cloud that throws hammers on monkeys.
* Up to 4 players play with any standard game controller, like Xbox gamepad. They are monkeys in 2D world trying to avoid hammers and try to gather enough bananas to win.
* Unity used for game.

This project was done by four people in 48 hours. We got a <span style="color:#FFD700">**audience award**</span> for this game. I was working mostly on VR part of this game.

* More information and source code:  [https://github.com/placuszki-dev/krakjam2023](https://github.com/placuszki-dev/krakjam2023)
* Build: [download link](https://github.com/Pastew/krakjam2023/releases/download/v1.01/BossLevel-KrakJam2023.zip)
* GGJ page: [https://v3.globalgamejam.org/2023/games/boss-level-6](https://v3.globalgamejam.org/2023/games/boss-level-6)

### Video
<iframe width="100%" height="415" src="https://www.youtube.com/embed/aacJmZuBWAs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/krakjam2020) Work at Januszex, Global Game Jam 2020 (KrakJam) - <span style="color:#FFD700">**1st place!**</span>
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

This project was done by two people in 48 hours. We got a <span style="color:#FFD700">**first place prize**</span> for this game and we are super happy about it, especially there were about 150 other people, (~40 teams) there.
I was responsible for designing, 3D printing, coding custom controller, coding gameplay (Unity, C#, Arduino) while my friend was implementing microphone usage and doing the design, visual and audio assets.

* More information and source code:  [https://github.com/Pastew/krakjam2020](https://github.com/Pastew/krakjam2020)
* Build: [download link](https://github.com/placuszki-dev/krakjam2020/releases/tag/2)
* GGJ page: [https://globalgamejam.org/2020/games/work-januszex-2](https://globalgamejam.org/2020/games/work-januszex-2)

### Video
<iframe width="100%" height="415" src="https://www.youtube.com/embed/CuvS7_y8ex4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/><br/> <!-- #################### project separator ################################ -->

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

<br/><br/> <!-- #################### project separator ################################ -->

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

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/krakjam2017) Red Wave, Global Game Jam 2017 (KrakJam)
Game Jam subject: Waves.
Story:
You're working as a radio broadcasting station operator in soviet-occupied Poland. You have lots of power and great responsibility. Will you be smart and brave enough to get rid of this fatal establishment and finally set the country free? Emit proper radio programs to influence people in polish cities, react properly for various fascinating historical (and fictional) events and splendidly avoid government agents, so you don't end up as a public enemy. Become the master of propaganda. Let the waves of freedom flow!

This project was done by three people in 48 hours. I was fully responsible for coding (Unity, C#) while my friends was doing the design, gameplay balancing and assets.

More information: [https://github.com/Pastew/krakjam2017](https://github.com/Pastew/krakjam2017)

<iframe width="100%" height="415" src="https://www.youtube.com/embed/OKJAgOTh-co" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/><br/> <!-- #################### project separator ################################ -->

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

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/rpi_car) Raspberry Pi, WiFi controlled car with 180* video streaming
I created this car during my engineering studies when I attended additional classes at the SKIP scientific club. This was my first contact with:
* electronics
* 3D modeling - rotating turret was designed in SketchUp and 3D printed.
* NodeJS

I learned a lot and it was also fun for me.
Later it became the subject of my engineering work.

More information: [https://github.com/Pastew/rpi_car](https://github.com/Pastew/rpi_car)

<iframe width="100%" height="415" src="https://www.youtube.com/embed/vOVKgLQbhpc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/ISEngineerExam) Android app for learning for an engineering exam
This is my first released product that was useful for others. It helped me and my collegues from university with learning to engineering exam in 2015. All of us passed.
I also implemented Google Analytics to learn how to use it and it turns out the app is still used by students in 2019.
It can be downloaded on [Google Play](https://play.google.com/store/apps/details?id=com.pastew.isexam&hl=pl).

More information: [https://github.com/Pastew/ISEngineerExam](https://github.com/Pastew/ISEngineerExam)

![img]({{ '/assets/images/isexam.png' | relative_url}} ){: .center-image }

<br/><br/> <!-- #################### project separator ################################ -->

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

<br/><br/> <!-- #################### project separator ################################ -->

## [<i class="fab fa-github fa-2x"></i>](https://github.com/Pastew/browsergotchi) Browsergotchi - anti-procrastination web browser addon
Browsergotchi is a hackathon project, bringing to your browser funny froggy widget you probably need to take care of. Browsergotchi lives inside your Chrome. It becomes happy when you're visiting proper websites, and unhappy when you're procrastinating on some 9gagy stuff. It can also recognize if YouTube video you're watching comes from some silly category! You better look after it.

This project was done by two people.
I was fully responsible for coding while my friend was doing the design and assets.
It was first time I met developing browser addons, it was fun.

More information: [https://github.com/Pastew/browsergotchi](https://github.com/Pastew/browsergotchi)

![img]({{ 'https://raw.githubusercontent.com/Pastew/browsergotchi/master/screenshots/sad_example_youtube.png'  }}){: .center-image }