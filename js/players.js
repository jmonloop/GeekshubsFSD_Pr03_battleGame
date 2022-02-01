


//Declaration of Gun
class Gun {
    constructor(gunType, damage, attack, ammo, fireRate) {
        //gunType-> Just name of the gun
        this.gunType = gunType;
        //damage-> points of life will rest to the other player (min0-max100)
        this.damage = damage;
        //attack-> if gun is shooting (bool)
        this.attack = attack;
        //ammo-> quantity of attacks remaining before reload (min0-max150)
        this.ammo = ammo;
        this.initialAmmo = ammo;
        //speed of attack and loss of ammo (min500 - max50)
        this.fireRate = fireRate;
    }
    
    shoot(){
        //shoot method detects when user holds down left click button or touches screen
        let firing;

        //myTime determines the firing rate of the gun and so changes its variable properties
        const myTime = () => {
            let setTimeId = setTimeout(() =>{
                if(firing) {
                    //Gun fires only if ammo > 0
                    if(this.ammo > 0) {
                        this.ammo -=1;
                        this.attack = true;
                        console.log("player1 is shooting");
                        player2.beDamaged();
                        myTime();
                    }

                }   else clearTimeout(setTimeId);

        
                //Minimum fireRate is 500, maximum is 50
            }, this.fireRate);
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

    //Reload fills ammo when player hides
    reload(){
        window.addEventListener('mouseup', ()=>{
            this.ammo = this.initialAmmo;
        })
    }
}



//Instances guns
let gun1 = new Gun("Pistol", 20, false, 15, 500);
let gun2 = new Gun("MP5", 10, false, 25, 100);
let gun3 = new Gun("Shotgun", 80, false, 8, 200);
let gun4 = new Gun("AR15", 50, false, 30, 80);









//Declaration of Character
class Character {

    constructor(characterType, life, gun, stamina, position) {
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
    }


    attack() {
        this.gun.shoot();
    }
    cover() {
        this.gun.reload();
    }

    beDamaged() {
        if(player1.gun.attack === true) {
            this.life -= player1.gun.damage;
            console.log(player1, player2)
        }
    }

};
let player1Pos = "derecha";

let player1 = new Character("Navy Seal", 1000, gun1, 100, player1Pos);
let player2 = new Character("Spetnaz", 1000, gun1, 100, player1Pos);
let player3 = new Character("Legionario", 1000, gun1, 100, player1Pos);
let player4 = new Character("Ninja", 1000, gun1, 100, player1Pos);


document.querySelector('#screen1').addEventListener('mouseup', player1.attack(), player1.gun.reload());

// //Generando variables básicas de entorno

// let allCars = [coche1,coche2,coche3,coche4];

// let team1 = [];

// let team2 = [];

// let ganador = "";