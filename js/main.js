//SCREENS CONTROL
let screen1 =document.getElementById('screen1');
let screen2 =document.getElementById('screen2');
let screen3 =document.getElementById('screen3');

document.querySelector('#screen1').addEventListener('mousedown', ()=>{
    screen1.style.display = 'none';
    screen2.style.display = 'flex';
})


let player1;
let player2;
// let player1 = new Character(1, "Navy Seal", 1000, pistol, 100, 0, hero1src);
// let player2 = new Character(2, "Spetnaz", 1000, mp5, 100, 0, hero2src);
// let player3 = new Character(3, "Legionario", 1000, shotgun, 0, 100, hero3src);
// let player4 = new Character(4, "Special Ops", 1000, ar15, 0, 100, hero4src);

let charBckgrnd;
//SELECT PLAYER
document.querySelector('#_screen2Char1').addEventListener('mousedown', ()=>{
    if(player1 == undefined) {
        player1 = new Character(1, "Navy Seal", 1000, pistol, 100, 0, hero1src);
        charBckgrnd = document.getElementById('_screen2Char1');
        charBckgrnd = document.getElementById('_screen2CharDiv1');
        charBckgrnd.style.backgroundColor="blue";
    } else if(player1 != undefined) {
        player1 = undefined;
        charBckgrnd.style.backgroundColor="black";
    }
})
document.querySelector('#_screen2Char2').addEventListener('mousedown', ()=>{
    if(player1 == undefined) {
        player1 = new Character(1, "Spetnaz", 1200, mp5, 100, 0, hero2src);
        charBckgrnd = document.getElementById('_screen2Char2');
        charBckgrnd = document.getElementById('_screen2CharDiv2');
        charBckgrnd.style.backgroundColor="blue";
    } else if(player1 != undefined) {
        player1 = undefined;
        charBckgrnd.style.backgroundColor="black";
    }
})



document.querySelector('#_screen2Char3').addEventListener('mousedown', ()=>{
    if(player1 == undefined) {
        player1 = new Character(1, "Legionario", 2000, shotgun, 0, 100, hero3src);
        charBckgrnd = document.getElementById('_screen2Char3');
        charBckgrnd = document.getElementById('_screen2CharDiv3');
        charBckgrnd.style.backgroundColor="blue";
    } else if(player1 != undefined) {
        player1 = undefined;
        charBckgrnd.style.backgroundColor="black";
    }
})
document.querySelector('#_screen2Char4').addEventListener('mousedown', ()=>{
    if(player1 == undefined) {
        player1 = new Character(1, "Special Ops", 1000, ar15, 0, 100, hero4src);
        charBckgrnd = document.getElementById('_screen2Char4');
        charBckgrnd = document.getElementById('_screen2CharDiv4');
        charBckgrnd.style.backgroundColor="blue";
    } else if(player1 != undefined) {
        player1 = undefined;
        charBckgrnd.style.backgroundColor="black";
    }
})










setInterval(() => {
    console.log(player1)
}, 500);