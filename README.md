# FSD Game Project
This is the third proyect of GeeksHubs Academy FSD bootcamp.
The objective is to create a basic videogame using HTML5, CSS3 and JavaScript Vanilla.
The minimum requeriments are to have 3 different screens (start, select players and ending) selectable players and a function that determines winner randomly.

In this case I have opted for a shooting game controlled by the user and an autonomous AI enemy with different levels of difficulty.


    
[Features](#features)

[Upcoming](#upcoming)

[Technologies](#technologies)

[Sources Credits](#sources-credits)

[Thanks](#thanks)

* You can try web version here
https://jmonloop.github.io/GeekshubsFSD_Pr03_battleGame/



### Features 📋
* Point and click action game:
    * Players only can shoot when they are unhidden but is also when they can be damaged.
    * Players only can move when they are covered.
    * Player2 (AI) accuracy increases if Player1 remains static.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Pr03_battleGame/master/assets/screenshots/battle.jpg)



* Retro style with animated sprites that react to the mouse movement or player's position in case of the AI.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Ch1_consoleGame/master/screenshots/running.jpg)



* 3 options for choose character (fourth is locked at the beginning).
    Each of them with their own health points.
* 4 options for choose weapon.
    Each of them with their own of ammo and damage parameters.
* 3 different difficulty levels with their own parameters agains the user (fourth is locked at the beginning). The AI behaviour also affects the way the enemy "steals" the spawned power-ups.
* An adittional 4th character and difficulty level achieved only when the user has defeated the first 3 characters.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Ch1_consoleGame/master/screenshots/selectplayers.jpg)



* Random power-ups that improve weapon damage, increase health and even an xVision googles that allow players to damage the enemy still if he is hidden.
* Drag and drop system to take the power-ups both mouse and touch system.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Ch1_consoleGame/master/screenshots/powerup.jpg)




* Statistics collection when the battle ends.

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Ch1_consoleGame/master/screenshots/statistics.jpg)



* A secret cheat mode to win enemies with a secret code (more info [here](#secret-code))

![ScreenShot](https://raw.githubusercontent.com/jmonloop/GeekshubsFSD_Ch1_consoleGame/master/screenshots/cheat.jpg)



### Upcoming 💭
* As I progress and get backend knowledge, I will make player2 controllable by another player.
* I will develope a wrap bigger royale game and this one will be just the battle level.



### Technologies 🛠️
No frameworks have been use for this project. Only Vanilla JS.
* HTML5
* Javascript ES6
* CSS3



### Sources Credits
Player 2 textures:
<a href='https://pngtree.com/so/pastel'>pastel png from pngtree.com/</a>

Player 1 brick textures:
<a href='https://pngtree.com/so/brick'>brick png from pngtree.com/</a>

Sky textures:
<a href='https://pngtree.com/so/clouds'>clouds png from pngtree.com/</a>

Custom pointer:
<a href='https://pngtree.com/so/red'>red png from pngtree.com/</a>

Main and final themes:
<a href='https://www.youtube.com/watch?v=LMQ8sSvqphg'></a>

Quake voices:
<a href='https://www.youtube.com/watch?v=ym4VmVwd24c'></a>

Healing SFX:
<a href='https://www.youtube.com/watch?v=idVg3eKcbL0'></a>

xVision SFX:
<a href='https://www.youtube.com/watch?v=TC0KTDMPx5E'></a>

ak47 SFX:
<a href='https://www.youtube.com/watch?v=1otAua9XIPs'></a>
<a href='https://www.youtube.com/watch?v=gjbgJNQP6_M'></a>

Mp5 SFX:
<a href='https://www.youtube.com/watch?v=q7uojrDfEvw'></a>

Desert Eagle SFX:
<a href='https://www.youtube.com/watch?v=sHffVHCiUto'></a>

AA12 SFX:
<a href='https://www.youtube.com/watch?v=MYbnuaifdN0'></a>



### Thanks
* Thanks to Geekshubs Academy for the training received (https://github.com/GeeksHubsAcademy)

* Thanks to everyone who spends time spreading their knowledge in Stack Overflow.

* Created by Javier Monleón López (https://github.com/jmonloop)



### Secret Code
User can low enemy life to 10hp pressing any key during battle and writting the text:
"geekshubsacademy". The code is divided between the Ghost character stats random info.