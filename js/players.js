


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






//Declaration of Character
class Character {

    constructor(characterType, life, gun, stamina, position, src) {
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
        this.covered = true;
    }

    show(){
        if(this.covered === true) {
            let player1Img = document.getElementById('_character1img');
            let player1ImgSrc = player1Img.src;
            player1ImgSrc = player1ImgSrc.replace("crouch", "shoot");
            player1Img.src = player1ImgSrc;

            this.covered = false;
        }
    }

    //Hides and reloads ammo when click on the player1 wall
    hide(){

        if(this.covered === false) {
        let player1Img = document.getElementById('_character1img');
        let player1ImgSrc = player1Img.src;
        player1ImgSrc = player1ImgSrc.replace("shoot", "crouch");
        player1Img.src = player1ImgSrc;
        this.gun.ammo = this.gun.initialAmmo;
        this.covered = true;
        }
        
        



    }

    shoot(){
        //shoot method detects when user holds down left click button or touches screen
        let firing;

        //myTime determines the firing rate of the gun and so changes its variable properties
        const myTime = () => {
            let setTimeId = setTimeout(() =>{
                if(firing) {
                    //Gun fires only if ammo > 0
                    if(this.gun.ammo > 0) {
                        this.gun.ammo -=1;
                        this.attack = true;
                        if(player1.attack === true) {
                            console.log("player1 is shooting");
                            player2.beDamaged();
                        } else if ( player2.attack === true) {
                            console.log("player2 is shooting");
                            player1.beDamaged();
                        }


                        myTime();
                    }

                }   else clearTimeout(setTimeId);

        
                //Minimum fireRate is 500, maximum is 50
            }, this.gun.fireRate);
        }

        window.addEventListener('mouseup', ()=>{
            firing = false;
            myTime();
        })

        window.addEventListener('mousedown', (e)=>{
            if(e.button === 0) {
                firing = true;
                myTime();
            }
        })
        

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


let player1 = new Character("Navy Seal", 1000, pistol, 100, player1Pos, hero1src);
let player2 = new Character("Spetnaz", 1000, mp5, 100, player1Pos, hero2src);
let player3 = new Character("Legionario", 1000, shotgun, 100, player1Pos, hero3src);
let player4 = new Character("Special Ops", 1000, ar15, 100, player1Pos, hero4src);



document.querySelector('_bottomWall').addEventListener('mousedown', player1.hide());
// document.querySelector('#screen1').addEventListener('mouseup', player1.shoot(), player1.reload());






