

let AIhiding;
let AImoving;
let AIminAccuracy=30;

const difficulty = () => {
switch (difficultyChosen) {
    case "easy" :
        player2.characterType = "Navy Seal"
        AIhiding = 800;
        AImoving = 1000;
        AIminAccuracy = 30;
    break;

    case "medium" :
        player2.characterType = "Spetnaz"
        AIhiding = 700;
        AImoving = 800;
        AIminAccuracy = 40;
    break;

    case "hard" :
        player2.characterType = "Legionario"
        AIhiding = 700;
        AImoving = 800;
        AIminAccuracy = 60;
    break;

    case "fsd" :
        player2.characterType = "Special Ops"
        AIhiding = 600;
        AImoving = 500;
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

document.getElementById('ammo2').innerHTML = player2.gun.ammo;
document.getElementById('ammo1').innerHTML = player1.gun.ammo;
},200)







// //PLAYERS INITIALITATION
// let player1 = new Character(1, "Navy Seal", 1000, pistol, 100, 0, hero1src);
// let player2 = new Character(2, "Spetnaz", 1000, mp5, 100, 0, hero2src);
// let player3 = new Character(3, "Legionario", 1000, shotgun, 0, 100, hero3src);
// let player4 = new Character(4, "Special Ops", 1000, ar15, 0, 100, hero4src);




    //AI MOVEMENT INTERVAL
    setInterval(()=>{
        player2.move();
    },1000); //AImoving

//     //AI HIDING INTERVAL
//     let hideOrShow = false
//     setInterval(()=>{
//         let value = Math.round(Math.random());
//         if(value == 0) {
//             player2.hide();
//         } else player2.show();
//     },500); // // AIhiding


//     //AI SHOOTING INTERVAL
// setInterval(()=>{
//     if(player2.covered == false) {
//         player2.shooting();
//     }
//     if(player2.ammo == 0) {
//         player2.hide();
//     } 
//     },100)














// //DATA REFRESHING
// setInterval(()=>{
// console.log("P1 life", player1.life);
// console.log("P1 ammo", player1.gun.ammo);
// console.log("P2 life", player2.life);
// console.log("P2 ammo", player2.gun.ammo);

// },500)