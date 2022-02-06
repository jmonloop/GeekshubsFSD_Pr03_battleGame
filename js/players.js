//MOVE AND SHOOTING METHODS PRE-FUNCTIONS
//X position
let xPosition;
let xMaxPosition;
let xMinPosition;

let player2Data;
let yTargetPosition;
let yPosition;

let powerUpsArray = ["life", "dEagle", "mp5", "aa12", "ak47", "xVision" ]
let powerUpToLaunch;
let powerUpPresent;
let AIgotPowerUp;
let AIpowerUp;

let mainThemeAudio = new Audio("/assets/audio/mainTheme.mp3");
let beep = new Audio("./assets/audio/beep2.mp3")
let selectPlayerBeep = new Audio("./assets/audio/selectPlayerBeep.mp3")
let unselectPlayerBeep = new Audio("./assets/audio/unselectPlayerBeep.mp3")
let dEagleSelection = new Audio("./assets/audio/DesertEagleRel.mp3");
let mp5Selection = new Audio("./assets/audio/MP5Rel.mp3");
let aa12Selection = new Audio("./assets/audio/shotgunRel.mp3");
let ak47Selection = new Audio("./assets/audio/ar15Rel.mp3");

//Guns audio sources
dEagleAudio = "./assets/audio/DesertEagle.mp3"
dEagleRelAudio = "./assets/audio/DesertEagleRel.mp3"
mp5Audio = "./assets/audio/mp5.mp3"
mp5RelAudio = "./assets/audio/mp5Rel.mp3"
aa12Audio = "./assets/audio/shotgun.mp3"
aa12RelAudio = "./assets/audio/shotgunRel.mp3"
ak47Audio = "./assets/audio/ar15.mp3"
ak47RelAudio = "./assets/audio/ar15Rel.mp3"



document.querySelector('#screen3').addEventListener('mousedown', (e)=>{
// document.querySelector("#_bottomWall").addEventListener('mousedown', (e)=>{
    xPosition = e.clientX;
    xMinPosition = 1;

    player2Data = document.getElementById('_character2').getBoundingClientRect();
    yTargetPosition = player2Data.top + 50;
    yPosition = e.clientY;


    //X position limitation depending on the screen width (custom break points)
    if(screen.width > 1936) xMaxPosition = screen.width * 0.80;
    if((screen.width > 1836)&&(screen.width <= 1936)) xMaxPosition = screen.width * 0.82;
    if((screen.width > 1736)&&(screen.width <= 1836)) xMaxPosition = screen.width * 0.84;
    if((screen.width > 1636)&&(screen.width <= 1736)) xMaxPosition = screen.width * 0.88;
    if((screen.width > 1536)&&(screen.width <= 1636)) xMaxPosition = screen.width * 0.91;
    if((screen.width > 1436)&&(screen.width <= 1536)) xMaxPosition = screen.width * 0.94;
    if(screen.width <= 1436) xMaxPosition = screen.width * 0.99;
    

    player1.move();
    return xPosition;
})



//GUN CLASS
class Gun {
    constructor(name, damage, ammo, initialAmmo, img, shootSound, reloadSound) {
        this.name = name;
        this.damage = damage;
        this.ammo = ammo;
        this.initialAmmo = initialAmmo;
        this.img = img;
        this.shootSound = shootSound;
        this.reloadSound = reloadSound;
    }
    playShoot(){
        let shootSound = new Audio(this.shootSound);
        shootSound.play();
    }
    playReload(){
        let reloadSound = new Audio(this.reloadSound);
        reloadSound.play();
    }
}


let xVision;


//SHOOTING METHOD PRE-FUNCTIONS
//If user clicks on topVoid, topWall or centerVoid, calls player1.shooting() for fire
document.querySelectorAll('.shooting1').forEach(item =>{
    item.addEventListener("mousedown", (e)=>{
        if((e.button === 0)) {
            xPosition = e.clientX;
            yPosition = e.clientY;
            player1.shooting();
        }
    });
});
document.getElementById('screen3').addEventListener("mouseup", (e)=>{
    player1.attack = false;
});


//PLAYER2 (AI) SHOOTING PRE-METHOD
let AIaccuracy = 0;
//This function returns a random rounded number between two limits.
const minMaxRoundedRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

//Character generation variables declaration:
let player1Img;
let player1ImgSrc;
let player2Img;
let player2ImgSrc;



//Declaration of Character
class Character {

    constructor(player, characterType, life, gun, position) {
        //Player defines who owns the character (1=user, 2=AI);
        this.player = player;
        //Name of the differente characters
        this.characterType = characterType;
        //Life goes down when character is damaged (min0-max1000)
        this.life = life;
        //gun is inherited from the object gun
        this.gun = gun;
        //position defines which position is the character when gets out of cover
        this.position = position;



        this.attack = false;
        this.covered = true;
    }

    show(){
        if(this.player == 1) {
            if(this.covered === true) {
                player1ImgSrc = player1ImgSrc.replace("crouch", "shoot");
                player1Img.src = player1ImgSrc;
    
                this.covered = false;
            }
        } else if (this.player == 2) {
            player2Img.style.display = "block";
            this.covered = false;
            if((powerUpPresent)&&(AIaccuracy > 80)){
                document.querySelector('.powerUpDiv').classList.toggle('getPowerUp');
                AIgotPowerUp = true;
                AIpowerUp = powerUpToLaunch;
                powerUpPresent = false;
            }
        }

    }

    //Hides and reloads ammo when click on the player1 wall
    hide(){
        if(this.player == 1) {
            player1ImgSrc = player1ImgSrc.replace("shoot", "crouch");
            player1Img.src = player1ImgSrc;
            gunPlayer1.ammo = gunPlayer1.initialAmmo;
            if(this.covered == false) gunPlayer1.playReload();
            this.covered = true;
            
        } else if (this.player == 2) {
            if(this.covered == false) {
                if(!xVision) {
                    player2Img.style.display = "none";
                } else if(xVision) {
                    player2ImgSrc = player2ImgSrc.replace("shoot", "crouch");
                    player2Img.src = player2ImgSrc;
                }
                 

                gunPlayer2.ammo = gunPlayer2.initialAmmo;
                gunPlayer2.playReload();
                this.covered = true;
            }
        }
    }

    move(){

        if(xPosition > (xMaxPosition)) xPosition = (xMaxPosition);
        if(xPosition < 1) xPosition = 1;
        
        //-150 is for centering the image to the click
        // player2.position = xPosition;
        
        if(this.player == 1) {
            if(this.covered==true) {
                document.getElementById("_character1").style.left= (xPosition -150) +"px";
                this.position = xPosition -150;
            }
            
        } else if (this.player == 2) {
            this.position = minMaxRoundedRandom(1,xMaxPosition);
            if(player2.position < 1) player2.position = 1;
            if(player2.position > xMaxPosition) player2.position = xMaxPosition;
            document.getElementById("_character2").style.left= (player2.position) + "px";
        }
    }

    shooting = () => {
        if((this.player == 1)&&(!this.covered)&&(gunPlayer1.ammo > 0)) {
            gunPlayer1.ammo -=1;
            this.attack = true;
            gunPlayer1.playShoot();

            if((player2.position >= xPosition*0.1)&&(player2.position <= xPosition*1.3)&& 
            (yTargetPosition >= yPosition * 0.2)&&(yTargetPosition <= yPosition*1.3)) {
                if((!player2.covered)||(xVision)) {
                    player2.life -= gunPlayer1.damage;
                }
            }

            
        } else if((this.player == 2)&&(!this.covered)&&(gunPlayer2.ammo > 0)){
            gunPlayer2.ammo -=1;
            gunPlayer2.playShoot();
            this.attack = true;
            if((player1.covered== false)||(xVisionAI)) {
                AIaccuracy = minMaxRoundedRandom(AIminAccuracy,100);
                if(AIaccuracy > 80) {
                    player1.life -= gunPlayer2.damage;
                } 
            }
        }
    }
};









