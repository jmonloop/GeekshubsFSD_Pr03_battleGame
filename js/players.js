// const types = [heavy, runner, sniper];


//Declaration of Gun
class Gun {
    constructor(gunType, attack, ammo, fireRate) {
        this.gunType = gunType;
        this.attack = attack;
        this.ammo = 1000;
        // this.ammo = ammo;
        this.fireRate = fireRate;
    }

    shoot(){

        //Shoot method detects when user holds down left click button or touches screen
        let holding;
        let shots = 0;
        let shots2;

        const myTime = () => {
            let setTimeId = setTimeout(() =>{
                shots +=1;
                console.log(holding);


                if(holding === true) {
                myTime();
                } else clearTimeout(setTimeId);

            }, 1);
        }

        window.addEventListener('mouseup', ()=>{
            holding = false;
            // console.log('stop');
            myTime();
        })
        window.addEventListener('mousedown', (e)=>{
            if(e.button === 0) {
                holding = true;
                // console.log('shoot');
                myTime();
            }
        })
        

    }
}

//Detects if left button is clicked and calls gun.shoot()







//Instances guns
let gun1 = new Gun("Glock", 30, 15, 2);



document.querySelector('#screen1').addEventListener('onmouseup', gun1.shoot());




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