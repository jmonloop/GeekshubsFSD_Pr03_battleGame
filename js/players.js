// const types = [heavy, runner, sniper];


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
                        console.log("shooting", gun2);
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
            console.log("reload", gun2);
        })
    }
}



//Instances guns
let gun1 = new Gun("Pistol", 20, false, 15, 500);
let gun2 = new Gun("MP5", 10, false, 25, 100);
let gun3 = new Gun("Shotgun", 80, false, 8, 200);
let gun4 = new Gun("AR15", 50, false, 30, 80);




document.querySelector('#screen1').addEventListener('mouseup', gun2.shoot(), gun2.reload());




//Declaration of Character
class Character {

    constructor(charType, life, speed, stamina, gun) {
        this.charType = charType;
        this.life = life;
        this.speed = speed;
        this.stamina = stamina;
        this.gun = gun;
    }


    attack() {
        return this.attack += 30;
    }

    beDamaged() {
        return this.life -= 0;
    }

};

// //Instanciando corredores...

// let coche1 = new Coche("Gt","Ford",250,2000,50,"Gasolina")
// let coche2 = new Coche("Celica","Toyota",251,1900,70,"Gasolina");
// let coche3 = new Coche("TestaRossa","Ferrari",270,2300,55,"Gasolina");
// let coche4 = new Coche("Camaro","Chevrolet",299,1750,90,"Diesel");


// //Generando variables básicas de entorno

// let allCars = [coche1,coche2,coche3,coche4];

// let team1 = [];

// let team2 = [];

// let ganador = "";