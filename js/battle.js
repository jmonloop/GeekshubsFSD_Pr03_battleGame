



const AIdifficulty = () => {
switch (difficultyChosen) {
    case "easy" :
        // AI movement ratio
        setInterval(()=>{
            player2.move();
        }, 2000);
        // AI hiding ratio
        setInterval(()=>{
            let value = Math.round(Math.random());
            if(value == 0) {
                player2.hide();
            } else player2.show();
        },1000); 
        //AI shooting ratio
        setInterval(()=>{
            if(player2.covered == false) {
                player2.shooting();
            }
            if(player2.ammo == 0) {
                player2.hide();
            } 
            },800) 
        AIminAccuracy = 50;
    break;

    case "medium" :
        //AI movement ratio
        setInterval(()=>{
            player2.move();
        }, 2000);
        //AI hiding ratio
        setInterval(()=>{
            let value = Math.round(Math.random());
            if(value == 0) {
                player2.hide();
            } else player2.show();
        },1000); 
        //AI shooting ratio
        setInterval(()=>{
            if(player2.covered == false) {
                player2.shooting();
            }
            if(player2.ammo == 0) {
                player2.hide();
            } 
            },400) 
        AIminAccuracy = 60;
    break;

    case "hard" :
        //AI movement ratio
        setInterval(()=>{
            player2.move();
        }, 1500);
        //AI hiding ratio
        setInterval(()=>{
            let value = Math.round(Math.random());
            if(value == 0) {
                player2.hide();
            } else player2.show();
        },800); 
        //AI shooting ratio
        setInterval(()=>{
            if(player2.covered == false) {
                player2.shooting();
            }
            if(player2.ammo == 0) {
                player2.hide();
            } 
            },200) 
        AIminAccuracy = 70;
    break;

    case "fsd" :
        //AI movement ratio
        setInterval(()=>{
            player2.move();
        }, 900);
        //AI hiding ratio
        setInterval(()=>{
            let value = Math.round(Math.random());
            if(value == 0) {
                player2.hide();
            } else player2.show();
        },800); 
        //AI shooting ratio
        setInterval(()=>{
            if(player2.covered == false) {
                player2.shooting();
            }
            if(player2.ammo == 0) {
                player2.hide();
            } 
            },500) 
        AIminAccuracy = 80;
    break;
}
}







//LAUNCH RANDOM POWER-UP
setInterval(()=>{
    // powerUpToLaunch = "dEagle";
    powerUpToLaunch = powerUpsArray[minMaxRoundedRandom(0,5)];
    launchPowerUp(powerUpToLaunch);
},minMaxRoundedRandom(10000, 30000))



const launchPowerUp = () => {
    let powerUpDiv = document.createElement('div');
    if(powerUpToLaunch == "dEagle") {
        powerUpDiv.innerHTML="<div class='powerUpDiv' id='dEagle' draggable='true' ondragstart='drag(event)'><img class='powerUpImg' src='./assets/img/desertEagle.jfif' alt=''></div>";
    } else if(powerUpToLaunch == "mp5") {
        powerUpDiv.innerHTML="<div class='powerUpDiv' id='mp5' draggable='true' ondragstart='drag(event)'><img class='powerUpImg' src='./assets/img/mp5.jfif' alt=''></div>";
    } else if(powerUpToLaunch == "aa12") {
        powerUpDiv.innerHTML="<div class='powerUpDiv' id='aa12' draggable='true' ondragstart='drag(event)'><img class='powerUpImg' src='./assets/img/aa12.jfif' alt=''></div>";
    } else if(powerUpToLaunch == "ak47") {
        powerUpDiv.innerHTML="<div class='powerUpDiv' id='ak47' draggable='true' ondragstart='drag(event)'><img class='powerUpImg' src='./assets/img/ak47.jfif' alt=''></div>";
    } else if(powerUpToLaunch == "life") {
        powerUpDiv.innerHTML="<div class='powerUpDiv' id='life' draggable='true' ondragstart='drag(event)'><img class='powerUpImg' src='./assets/img/life.png' alt=''></div>";
    } else if(powerUpToLaunch == "xVision") {
        powerUpDiv.innerHTML="<div class='powerUpDiv' id='xVision' draggable='true' ondragstart='drag(event)'><img class='powerUpImg' src='./assets/img/xVision.jpg' alt=''></div>";
    }
    document.getElementById("powerUpZone").appendChild(powerUpDiv);
    powerUpPresent = true;

    setTimeout(()=>{
        document.getElementById("powerUpZone").innerHTML="";
        // powerUpPresent = false;
    },5000)
}


//DRAG BASIC FUNCTIONS
const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.currentTarget.id);
}
const allowDrop = (ev) => {
    ev.preventDefault();
}

const setXvision =()=>{
    document.getElementById('_topWall').classList.add('xVision');
    xVision = true;
}

const timeoutXvision = () =>{
    setTimeout(()=>{
        if(!xVisionAI){
            document.getElementById('_topWall').classList.remove('xVision');
            player2ImgSrc = player2ImgSrc.replace("crouch", "shoot");
            xVision = false;
        } else {
            xVisionAI == false;
        }
    }, 5000)
}


//Audio power-up sources
let lifeAudio= new Audio("./assets/audio/life.mp3");
let xVisionAudio= new Audio("./assets/audio/xVision.mp3");
let dEagleVoice= new Audio("./assets/audio/godlikeVoice.mp3");
let mp5Voice= new Audio("./assets/audio/perfectVoice.mp3");
let aa12Voice= new Audio("./assets/audio/comboVoice.mp3");
let ak47Voice= new Audio("./assets/audio/unstoppableVoice.mp3");
let humilationVoice= new Audio("./assets/audio/humiliation.mp3");
let ludicrousVoice= new Audio("./assets/audio/ludicrous.mp3");


const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text")

    if(data == "dEagle") {
        gunPlayer1 = new Gun("Desert Eagle", 20, 15, 15, './assets/img/desertEagle.jfif', dEagleAudio, dEagleRelAudio);
        dEagleVoice.play();
    } else if(data == "mp5") {
        gunPlayer1 = new Gun("MP5", 10, 25, 25,'./assets/img/mp5.jfif', mp5Audio, mp5RelAudio);
        mp5Voice.play();
    } else if(data == "aa12") {
        gunPlayer1 = new Gun("AA-12", 80, 8, 8,'./assets/img/aa12.jfif', aa12Audio, aa12RelAudio);
        aa12Voice.play();
    } else if(data == "ak47") {
        gunPlayer1 = new Gun("AK47", 50, 30, 30,'./assets/img/ak47.jfif', ak47Audio, ak47RelAudio);
        ak47Voice.play();
    } else if(data == "life") {
        lifeAudio.play();
        player1.life += 500;
    } else if(data == "xVision") {
        xVisionAudio.play();
        setXvision()
        timeoutXvision();
    }
    powerUpPresent = false;
    document.getElementById("powerUpZone").innerHTML="";
}



const password = "geekshubsacademy";
let passtry ="";
let ask;
const checkPassword = (elmnt) => {
    if(elmnt === password){
        player2.life = 10;
        ludicrousVoice.play();
    } else ask = false;

}
let xVisionAI;
const startBattle = () => {

    setInterval(() => {
        if(player2.life <= 0) {
            
        }
        console.log(player2.position, xPosition)

    //SELF REFRESH VARIABLES:
        //Stats during battle
        document.getElementById('character2').innerHTML = player2.characterType;
        document.getElementById('character1').innerHTML = player1.characterType;
        document.getElementById('gun2').innerHTML = gunPlayer2.name;
        document.getElementById('gun1').innerHTML = gunPlayer1.name;
        document.getElementById('life2').innerHTML = player2.life;
        document.getElementById('life1').innerHTML = player1.life;
        document.getElementById('ammo2').innerHTML = gunPlayer2.ammo;
        document.getElementById('ammo1').innerHTML = gunPlayer1.ammo;

        //Side of the character changes when Player2 is left or right player1
        if(player1.position < player2.position) {
            document.getElementById('_character1').classList.replace('character1L','character1R');
        } else if(player1.position > player2.position){
            document.getElementById('_character1').classList.replace('character1R','character1L');
        }
        //Player1 shooting animation
        if(player1.attack == true) {
            player1ImgSrc = player1ImgSrc.replace("(1)", "(4)");
            player1Img.src = player1ImgSrc;
        } else if(player1.attack == false) {
            player1ImgSrc = player1ImgSrc.replace("(4)", "(1)");
            player1Img.src = player1ImgSrc;
        }
        //Player2 shooting animation
        if(player2.attack == true) {
            player2ImgSrc = player2ImgSrc.replace("(1)", "(4)");
            player2Img.src = player2ImgSrc;
        } else if(player2.attack == false) {
            player2ImgSrc = player2ImgSrc.replace("(4)", "(1)");
            player2Img.src = player2ImgSrc;
        }
        player2.attack = false;



        if(AIgotPowerUp){
            if(AIpowerUp == "dEagle") {
                gunPlayer2 = new Gun("Desert Eagle", 20, 15, 15, './assets/img/desertEagle.jfif', dEagleAudio, dEagleRelAudio);
            } else if(AIpowerUp == "mp5") {
                gunPlayer2 = new Gun("MP5", 10, 25, 25,'./assets/img/mp5.jfif', mp5Audio, mp5RelAudio);
            } else if(AIpowerUp == "aa12") {
                gunPlayer2 = new Gun("AA-12", 80, 8, 8,'./assets/img/aa12.jfif', aa12Audio, aa12RelAudio);
            } else if(AIpowerUp == "ak47") {
                gunPlayer2 = new Gun("AK47", 50, 30, 30,'./assets/img/ak47.jfif', ak47Audio, ak47RelAudio);
            } else if(AIpowerUp == "life") {
                player2.life += 500;
            } else if(AIpowerUp == "xVision") {
                xVisionAI = true;
                timeoutXvision()
            }
            humilationVoice.play();
            AIgotPowerUp = false;
            AIpowerUp = "powerUpToLaunch";

            

        }


    }, 100);
}

        //Cheat for killing player2
        window.addEventListener('keydown', (event)=>{
            if((event.keyCode = 13)&&(!ask)&&(screen3active)){
                passtry = prompt('Good try but you can do it better..');
                checkPassword(passtry);
                ask = true;
            }
        })









// // //DATA REFRESHING
// setInterval(()=>{
// console.log(powerUpToLaunch)
// },500)