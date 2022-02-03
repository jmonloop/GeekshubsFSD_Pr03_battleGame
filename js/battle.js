let arrayDifficulty=["Easy", "Medium", "Hard", "FSD Bootcamp"];
let difficultyChosen = "easy";

let AIhiding;
let AImoving;
let AIminAccuracy=30;

const difficulty = () => {
switch (difficultyChosen) {
    case "Easy" :
        player2.characterType = "Navy Seal"
        AIhiding = 800;
        AImoving = 1000;
        AIminAccuracy = 30;
    break;

    case "Medium" :
        player2.characterType = "Legionario"
        AIhiding = 700;
        AImoving = 800;
        AIminAccuracy = 40;
    break;

    case "Hard" :
        player2.characterType = "Spetnaz"
        AIhiding = 700;
        AImoving = 800;
        AIminAccuracy = 60;
    break;

    case "FSD Bootcamp" :
        player2.characterType = "Special Ops"
        AIhiding = 600;
        AImoving = 500;
        AIminAccuracy = 80;
    break;
}
}


//AI MOVEMENT INTERVAL
setInterval(()=>{
    player2.move();
},10000); //AImoving

//AI HIDING INTERVAL
let hideOrShow = false
setInterval(()=>{
    let value = Math.round(Math.random());
    if(value == 0) {
        player2.hide();
    } else player2.show();
},500); // // AIhiding



//AI SHOOTING INTERVAL
setInterval(()=>{
    if(player2.covered == false) {
        player2.shooting();
    }
    if(player2.ammo == 0) {
        player2.hide();
    } 
},500)






//DATA REFRESHING
setInterval(()=>{
    console.log("AI Covered",player2.covered)
    console.log("AIAccuracy %", AIaccuracy)

    console.log("Player Covered", player1.covered)
},500)