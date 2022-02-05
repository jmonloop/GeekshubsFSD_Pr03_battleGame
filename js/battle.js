



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






//SELF UPDATE VARIABLES
setInterval(()=>{
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

  if(player1.attack == true) {
    player1ImgSrc = player1ImgSrc.replace("shoot1", "shoot12");
  }

},200)


















// // //DATA REFRESHING
// setInterval(()=>{
// console.log(xPosition, player2.position)
// },500)