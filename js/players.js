


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

    //Reload hides and fills ammo
    reload(){
        window.addEventListener('mouseup', ()=>{
            this.gun.ammo = this.gun.initialAmmo;
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

let player1 = new Character("Navy Seal", 1000, pistol, 100, player1Pos);
let player2 = new Character("Spetnaz", 1000, mp5, 100, player1Pos);
let player3 = new Character("Legionario", 1000, shotgun, 100, player1Pos);
let player4 = new Character("Ninja", 1000, ar15, 100, player1Pos);



// document.querySelector('#screen1').addEventListener('mouseup', player1.shoot());
// document.querySelector('#screen1').addEventListener('mouseup', player1.shoot(), player1.reload());
