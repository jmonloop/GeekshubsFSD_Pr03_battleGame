


//Declaration of guns objects
const pistol = {
    //gunType-> Just name of the gun
    gunType : "pistol",
    //damage-> points of life will rest to the other player (min0-max100)
    damage : 20,
    //ammo-> quantity of bullets remaining before reload (min0-max150)
    ammo : 15,
    //intialAmmo is used for reload() method
    initialAmmo : 15,
    //speed of attack and loss of ammo (min800 - max50)
    fireRate : 500
};

const mp5 = {
    //gunType-> Just name of the gun
    gunType : "MP5",
    //damage-> points of life will rest to the other player (min0-max100)
    damage : 10,
    //ammo-> quantity of bullets remaining before reload (min0-max150)
    ammo : 25,
    //intialAmmo is used for reload() method
    initialAmmo : 25,
    //speed of attack and loss of ammo (min800 - max50)
    fireRate : 100
};

const shotgun = {
    //gunType-> Just name of the gun
    gunType : "Shotgun",
    //damage-> points of life will rest to the other player (min0-max100)
    damage : 80,
    //ammo-> quantity of bullets remaining before reload (min0-max150)
    ammo : 8,
    //intialAmmo is used for reload() method
    initialAmmo : 8,
    //speed of attack and loss of ammo (min800 - max50)
    fireRate : 800
};

const ar15 = {
    //gunType-> Just name of the gun
    gunType : "AR-15",
    //damage-> points of life will rest to the other player (min0-max100)
    damage : 50,
    //ammo-> quantity of bullets remaining before reload (min0-max150)
    ammo : 30,
    //intialAmmo is used for reload() method
    initialAmmo : 30,
    //speed of attack and loss of ammo (min800 - max50)
    fireRate : 80
};

//SHOOTING METHOD PRE-FUNCTIONS
let fire = false;
//If user clicks on topVoid, topWall or centerVoid, calls player1.shooting() for fire
document.querySelectorAll('.shooting1').forEach(item =>{
    item.addEventListener("mousedown", (e)=>{
        if((e.button === 0)) {
            fire = true;
            player1.shooting();
        }
    });
});
//If user release click, calls player1.shooting() for stop firing
document.addEventListener("mouseup", ()=>{
        fire = false;
        player1.shooting();
})


let xPosition;
let xMaxPosition;
let xMinPosition;

//MOVE METHOD PRE-FUNCTIONS
document.querySelector("#_bottomWall").addEventListener('mousedown', (e)=>{
    xPosition = e.clientX;
    xMinPosition = 1;

    xMaxPosition = screen.width;
    
    console.log("MAX", xMaxPosition)
    console.log (xPosition)

    player1.move();



    // if(xPosition > 929) xPosition = 929;
    // if(xPosition < 50) xPosition = 50;
    
    // document.getElementById("_character1R").style.left= (xPosition -100) +"px";
    
    
})




//Declaration of Character
class Character {

    constructor(player, characterType, life, gun, stamina, position, src) {
        //Player defines who owns the character (1=user, 2=AI);
        this.player = player;
        //Name of the differente characters
        this.characterType = characterType;
        //Life goes down when character is damaged (min0-max1000)
        this.life = life;
        //gun is inherited from the object gun
        this.gun = gun;
        //stamina determines how quickly the character gets out of cover (min0-max100)
        this.stamina = stamina;
        //position defines which position is the character when gets out of cover
        this.position = position;
        //src sets the png image for animating the character
        this.src = src;


        this.attack = false;
        this.covered = false;
    }

    show(){
        if(this.player == 1) {
            if(this.covered === true) {
                let player1Img = document.getElementById('_character1img');
                let player1ImgSrc = player1Img.src;
                player1ImgSrc = player1ImgSrc.replace("crouch", "shoot");
                player1Img.src = player1ImgSrc;
    
                this.covered = false;
            }
        } else if (this.player == 2) {
            document.getElementById('_character2img').style.display = "block";
            this.covered = false;
        }

    }

    //Hides and reloads ammo when click on the player1 wall
    hide(){
        
        if(this.player == 1) {
            if(this.covered === false) {
                let player1Img = document.getElementById('_character1img');
                let player1ImgSrc = player1Img.src;
                player1ImgSrc = player1ImgSrc.replace("shoot", "crouch");
                player1Img.src = player1ImgSrc;
                this.gun.ammo = this.gun.initialAmmo;
                this.covered = true;
            }
        } else if (this.player == 2) {
            if(this.covered === false) {
                document.getElementById('_character2img').style.display = "none";
                this.gun.ammo = this.gun.initialAmmo;
                this.covered = true;
            }
        }
    }

    move(){
        if(this.covered = true);{
            if(xPosition > (xMaxPosition)) xPosition = (xMaxPosition);
            if(xPosition < 1) xPosition = 1;
            
            //-150 is for centering the image to the click
            document.getElementById("_character1R").style.left= (xPosition -150) +"px";
            this.position = xPosition;
        }

    }

    shooting = () => {
        let timeId = setTimeout(()=>{
            if(fire === true) {
                if(this.gun.ammo > -1000000000) {
                    this.gun.ammo -=1;
                    this.attack = true;
                    if(player1.attack === true) {
                        console.log("player1 is shooting");
                        player2.beDamaged();
                    } else if ( player2.attack === true) {
                        console.log("player2 is shooting");
                        player1.beDamaged();
                    }
                }

                this.shooting();
            }
            if(fire === false) clearTimeout(timeId);
        }, this.gun.fireRate);
    }


    

    beDamaged() {
        if(player1.attack === true) {
            player2.life -= player1.gun.damage;
            console.log(player1, player2)
        }
        if(player2.attack === true) {
            player1.life -= player2.gun.damage;
            console.log(player1, player2)
        }
    }

};
let player1Pos = "derecha";

let hero1src = './img/png/characters/crouch1.png'
let hero2src = './img/png/characters/crouch2.png'
let hero3src = './img/png/characters/crouch3.png'
let hero4src = './img/png/characters/crouch4.png'


let player1 = new Character(1, "Navy Seal", 1000, pistol, 100, player1Pos, hero1src);
let player2 = new Character(2, "Spetnaz", 1000, mp5, 100, player1Pos, hero2src);
let player3 = new Character(3, "Legionario", 1000, shotgun, 100, player1Pos, hero3src);
let player4 = new Character(4, "Special Ops", 1000, ar15, 100, player1Pos, hero4src);



// document.querySelector('_bottomWall').addEventListener('mousedown', player1.hide());
// document.querySelector('#screen1').addEventListener('mouseup', player1.shoot(), player1.reload());






