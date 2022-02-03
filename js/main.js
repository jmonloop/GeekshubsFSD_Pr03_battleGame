//screen control
let screen1 =document.getElementById('screen1');
let screen2 =document.getElementById('screen2');
let screen3 =document.getElementById('screen3');
//char. selection background
let charBckgrnd;
//stats / difficulty divs
let screen2Stats = document.getElementById('_screen2CharactersStats');
let screen2Difficulty = document.getElementById('_screen2Difficulty');
// difficulties selector
let diffEasy = document.getElementById('_easy');
let diffMedium = document.getElementById('_medium');
let diffHard = document.getElementById('_hard');
let diffFsd = document.getElementById('_fsd');
let difficultyChosen;
//players initalitation
let player1;
let player2;







//Screen1 to Screen2: Click anywhere
document.querySelector('#screen1').addEventListener('mousedown', ()=>{
    screen1.style.display = 'none';
    screen2.style.display = 'flex';
})


// Screen2 to select difficulty: Select character and click next
document.querySelector('.screen2NextButton').addEventListener('mousedown', ()=>{
    if(player1 != undefined) {
        screen2Stats.style.display = 'none';
        screen2Difficulty.style.display = 'flex';
    }
})


// Select Difficulty 
document.querySelector('#_easy').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffEasy.style.color = 'green';
        difficultyChosen = "easy"
        player2 = new Character(1, "Navy Seal", 1000, pistol, 100, 0, hero1src);
    } else if(difficultyChosen != undefined) {
        diffEasy.style.color = 'black';
        diffMedium.style.color = 'black';
        diffHard.style.color = 'black';
        diffEasy.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
    }
})
document.querySelector('#_medium').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffMedium.style.color = 'yellow';
        difficultyChosen = "medium"
        player2 = new Character(2, "Spetnaz", 1200, mp5, 100, 0, hero2src);
    } else if(difficultyChosen != undefined) {
        diffMedium.style.color = 'black';
        diffEasy.style.color = 'black';
        diffHard.style.color = 'black';
        diffFsd.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
    }
})
document.querySelector('#_hard').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffHard.style.color = 'violet';
        difficultyChosen = "hard"
        player2 = new Character(3, "Legionario", 2000, shotgun, 0, 100, hero3src);
    } else if(difficultyChosen != undefined) {
        diffHard.style.color = 'black';
        diffMedium.style.color = 'black';
        diffEasy.style.color = 'black';
        diffFsd.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
    }
})
document.querySelector('#_fsd').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffFsd.style.color = 'red';
        difficultyChosen = "fsd"
        player2 = new Character(3, "Legionario", 2000, shotgun, 0, 100, hero3src);
    } else if(difficultyChosen != undefined) {
        diffFsd.style.color = 'black';
        diffMedium.style.color = 'black';
        diffHard.style.color = 'black';
        diffEasy.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
    }
})


//Screen 2 to Screen3: Select difficulty and click next
document.querySelector('.screen2NextButton').addEventListener('mousedown', ()=>{
    if(difficultyChosen != undefined) {
        screen2.style.display = 'none';
        screen3.style.display = 'flex';
    }
})













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
    console.log(difficultyChosen)
}, 500);