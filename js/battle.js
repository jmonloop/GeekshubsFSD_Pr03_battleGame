



const AIdifficulty = () => {
switch (difficultyChosen) {
    case "easy" :
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
            },1500) 
        AIminAccuracy = 30;
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
        }, 800);
        //AI hiding ratio
        setInterval(()=>{
            let value = Math.round(Math.random());
            if(value == 0) {
                player2.hide();
            } else player2.show();
        },500); 
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







setInterval(()=>{
    //STATS INTIALITATION:
document.getElementById('character2').innerHTML = player2.characterType;
document.getElementById('character1').innerHTML = player1.characterType;

document.getElementById('life2').innerHTML = player2.life;
document.getElementById('life1').innerHTML = player1.life;

document.getElementById('ammo2').innerHTML = gunPlayer2.ammo;
document.getElementById('ammo1').innerHTML = gunPlayer1.ammo;
},200)


















// //DATA REFRESHING
setInterval(()=>{
console.log(typeof(AIhiding));
},500)