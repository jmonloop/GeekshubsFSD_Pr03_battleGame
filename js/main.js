//screen control
let screen1 =document.getElementById('screen1');
let screen2 =document.getElementById('screen2');
let screen3 =document.getElementById('screen3');




//char. selection background
let charBckgrnd;

//stats div
let screen2Stats = document.getElementById('_screen2CharactersStats');


//guns div = screen2Guns
let gunsDiv = document.getElementById('_screen2Guns');
//gun selection background
let gunBckgrnd;
//gun selectors
let gunDesertEagle = document.getElementById('desertEagleDiv');
let gunMp5 = document.getElementById('mp5Div');
let gunAa12 = document.getElementById('aa12Div');
let gunAk47 = document.getElementById('ak47Div');
let gunChosen;
let gunPlayer1;
let gunPlayer2;

//dummy initialization
// gunPlayer1 = new Gun("Desert Eagle", 20, 15, 15, './assets/audio/DesertEagle.mp3', './assets/audio/DesertEagleRel.mp3');
// gunPlayer2 = new Gun("Desert Eagle", 20, 15, 15, './assets/audio/DesertEagle.mp3', './assets/audio/DesertEagleRel.mp3');




//difficulty div
let screen2GunsDifficulty = document.getElementById('_screen2GunsDifficulty');
// difficulties selector
let diffEasy = document.getElementById('_easy');
let diffMedium = document.getElementById('_medium');
let diffHard = document.getElementById('_hard');
let diffFsd = document.getElementById('_fsd');
let difficultyChosen;

//AI difficulty parameters:
let AIhiding;
let AImoving;
let AIshooting;
let AIminAccuracy=30;


//players initalitation
let player1;
let player2;







//Screen1 to Screen2: Click anywhere
document.querySelector('#screen1').addEventListener('mousedown', ()=>{
    screen1.style.display = 'none';
    screen2.style.display = 'flex';
})


// Screen2 to select guns and difficulty: Select character and click next
document.querySelector('.screen2NextButton').addEventListener('mousedown', ()=>{
    if(player1 != undefined) {
        screen2Stats.style.display = 'none';
        screen2GunsDifficulty.style.display = 'flex';
    }
})

//Guns audio sources
dEagleAudio = "./assets/audio/DesertEagle.mp3"
dEagleRelAudio = "./assets/audio/DesertEagleRel.mp3"
mp5Audio = "./assets/audio/mp5.mp3"
mp5RelAudio = "./assets/audio/mp5Rel.mp3"
aa12Audio = "./assets/audio/shotgun.mp3"
aa12RelAudio = "./assets/audio/shotgunRel.mp3"
ak47Audio = "./assets/audio/ar15.mp3"
ak47RelAudio = "./assets/audio/ar15Rel.mp3"


//Select gun
document.querySelector('#desertEagleDiv').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(gunPlayer1 == undefined)) {
        gunDesertEagle.style.backgroundColor ='blue';
        gunPlayer1 = new Gun("Desert Eagle", 20, 15, 15, './assets/img/desertEagle.jfif', dEagleAudio, dEagleRelAudio);
    } else if(gunPlayer1 != undefined) {
        gunDesertEagle.style.backgroundColor = 'gray';
        gunMp5.style.backgroundColor = 'gray';
        gunAa12.style.backgroundColor = 'gray';
        gunAk47.style.backgroundColor = 'gray';
        gunPlayer1 = undefined;
    }
})
document.querySelector('#mp5Div').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(gunPlayer1 == undefined)) {
        gunMp5.style.backgroundColor ='blue';
        gunPlayer1 = new Gun("MP5", 10, 25, 25,'./assets/img/mp5.jfif', mp5Audio, mp5RelAudio);
    } else if(gunPlayer1 != undefined) {
        gunDesertEagle.style.backgroundColor = 'gray';
        gunMp5.style.backgroundColor = 'gray';
        gunAa12.style.backgroundColor = 'gray';
        gunAk47.style.backgroundColor = 'gray';
        gunPlayer1 = undefined;
    }
})
document.querySelector('#aa12Div').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(gunPlayer1 == undefined)) {
        gunAa12.style.backgroundColor ='blue';
        gunPlayer1 = new Gun("AA-12", 80, 8, 8,'./assets/img/aa12.jfif', aa12Audio, aa12RelAudio);
    } else if(gunPlayer1 != undefined) {
        gunDesertEagle.style.backgroundColor = 'gray';
        gunMp5.style.backgroundColor = 'gray';
        gunAa12.style.backgroundColor = 'gray';
        gunAk47.style.backgroundColor = 'gray';
        gunPlayer1 = undefined;
    }
})
document.querySelector('#ak47Div').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(gunPlayer1 == undefined)) {
        gunAk47.style.backgroundColor ='blue';
        gunPlayer1 = new Gun("AK47", 50, 30, 30,'./assets/img/ak47.jfif', ak47Audio, ak47RelAudio);
    } else if(gunPlayer1 != undefined) {
        gunDesertEagle.style.backgroundColor = 'gray';
        gunMp5.style.backgroundColor = 'gray';
        gunAa12.style.backgroundColor = 'gray';
        gunAk47.style.backgroundColor = 'gray';
        gunPlayer1 = undefined;
    }
})

// Select Difficulty 
document.querySelector('#_easy').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffEasy.style.color = 'green';
        difficultyChosen = "easy"
        gunPlayer2 = new Gun("MP5", 10, 25, 25,'./assets/img/mp5.jfif', mp5Audio, mp5RelAudio);
        player2 = new Character(2, "Navy Seal", 1200, gunPlayer2, 0);
        AIdifficulty();
    } else if(difficultyChosen != undefined) {
        diffEasy.style.color = 'black';
        diffMedium.style.color = 'black';
        diffHard.style.color = 'black';
        diffEasy.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
        gunPlayer2 = undefined;
    }
})
document.querySelector('#_medium').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffMedium.style.color = 'yellow';
        difficultyChosen = "medium"
        gunPlayer2 = new Gun("Desert Eagle", 20, 15, 15, './assets/img/desertEagle.jfif', dEagleAudio, dEagleRelAudio);
        player2 = new Character(2, "Spetnaz", 1500, gunPlayer2, 0);
        AIdifficulty();
    } else if(difficultyChosen != undefined) {
        diffMedium.style.color = 'black';
        diffEasy.style.color = 'black';
        diffHard.style.color = 'black';
        diffFsd.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
        gunPlayer2 = undefined;
    }
})
document.querySelector('#_hard').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffHard.style.color = 'violet';
        difficultyChosen = "hard"
        gunPlayer2 = new Gun("AK47", 50, 30, 30,'./assets/img/ak47.jfif', ak47Audio, ak47RelAudio);
        player2 = new Character(2, "Legionario", 2000, gunPlayer2, 100);
        AIdifficulty();
    } else if(difficultyChosen != undefined) {
        diffHard.style.color = 'black';
        diffMedium.style.color = 'black';
        diffEasy.style.color = 'black';
        diffFsd.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
        gunPlayer2 = undefined;
    }
})
document.querySelector('#_fsd').addEventListener('mousedown', ()=>{
    if((player1 != undefined)&&(difficultyChosen == undefined)) {
        diffFsd.style.color = 'red';
        difficultyChosen = "fsd"
        gunPlayer2 = new Gun("AA-12", 80, 8, 8,'./assets/img/aa12.jfif', aa12Audio, aa12RelAudio);
        player2 = new Character(2, "Special Ops", 2500, gunPlayer2, 100);
        AIdifficulty();
    } else if(difficultyChosen != undefined) {
        diffFsd.style.color = 'black';
        diffMedium.style.color = 'black';
        diffHard.style.color = 'black';
        diffEasy.style.color = 'black';
        difficultyChosen = undefined;
        player2 = undefined;
        gunPlayer2 = undefined;
    }
})


//Screen 2 to Screen3: Select gun, difficulty and click next
document.querySelector('.screen2NextButton').addEventListener('mousedown', ()=>{
    if((difficultyChosen != undefined)&&(gunPlayer1 != undefined)) {
        screen2.style.display = 'none';
        screen3.style.display = 'flex';

        //Player1 character generation
        if(player1.characterType == "Navy Seal") {
            player1Img = document.getElementById('_character1imgHero1');
            player1ImgSrc = player1Img.src;
            player1Img.style.display = 'block';
        } else if(player1.characterType == "Spetnaz") {
            player1Img = document.getElementById('_character1imgHero2');
            player1ImgSrc = player1Img.src;
            player1Img.style.display = 'block';
        } else if(player1.characterType == "Legionario") {
            player1Img = document.getElementById('_character1imgHero3');
            player1ImgSrc = player1Img.src;
            player1Img.style.display = 'block';
        } else if(player1.characterType == "Special Ops") {
            player1Img = document.getElementById('_character1imgHero4');
            player1ImgSrc = player1Img.src;
            player1Img.style.display = 'block';
        }

        //Player2 character generation
        if(player2.characterType == "Navy Seal") {
            player2Img = document.getElementById('_character2imgHero1');
            player2ImgSrc = player2Img.src;
            player2Img.style.display = 'block';
        } else if(player2.characterType == "Spetnaz") {
            player2Img = document.getElementById('_character2imgHero2');
            player2ImgSrc = player2Img.src;
            player2Img.style.display = 'block';
        } else if(player2.characterType == "Legionario") {
            player2Img = document.getElementById('_character2imgHero3');
            player2ImgSrc = player2Img.src;
            player2Img.style.display = 'block';
        } else if(player2.characterType == "Special Ops") {
            player2Img = document.getElementById('_character2imgHero4');
            player2ImgSrc = player2Img.src;
            player2Img.style.display = 'block';
        }
    }
})















//PLAYER SELECTION
document.querySelector('#_screen2Char1').addEventListener('mousedown', ()=>{
    if(player1 == undefined) {
        player1 = new Character(1, "Navy Seal", 1000, gunPlayer1, 0);
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
        player1 = new Character(1, "Spetnaz", 1200, gunPlayer1, 0);
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
        player1 = new Character(1, "Legionario", 2000, gunPlayer1, 100);
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
        player1 = new Character(1, "Special Ops", 1000, gunPlayer1, 100);
        charBckgrnd = document.getElementById('_screen2Char4');
        charBckgrnd = document.getElementById('_screen2CharDiv4');
        charBckgrnd.style.backgroundColor="blue";
    } else if(player1 != undefined) {
        player1 = undefined;
        charBckgrnd.style.backgroundColor="black";
    }
})










// setInterval(() => {
//     console.log(difficultyChosen)
// }, 500);