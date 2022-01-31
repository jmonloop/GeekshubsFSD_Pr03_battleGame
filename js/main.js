//Clean game
const cleanGame = () => {
    player1 = [];
    player2 = [];
    player3 = [];
    player4 = [];
    player5 = [];
    player6 = [];
    player7 = [];
    player8 = [];
    player9 = [];
    player10 = [];
    winner = "";
}



const changeScreen = (arg) => {

    //Generamos la variable concatenada que nos advierte a que pantalla 
    //queremos ir.
    let wantedScreen = "screen" + arg;
    

    //Cada vez que entramos en la funcion se regenera el array con todas las pantallas, ya 
    //que anteriormente al filtrar algunas quedaban fuera, así empieza de nuevo el proceso
    let screenArray = ["screen1","screen2","screen3","screen4"];

    //Aquí filtramos del array aquella pantalla a la que queremos ir, ES DECIR,
    //guardamos todas las pantallas menos aquella a la que queremos ir, ya que al resto a todas
    //les queremos dar la propiedad display none
    screenArray = screenArray.filter(arg => !wantedScreen.includes(arg));

    //Antes de dar la propiedad display none al resto de pantallas, decimos a la que SI QUEREMOS
    //ver que tenga un display block, que la hará visible en el DOM (la web)
    document.getElementById(wantedScreen).style.display = "flex";

    //Recorremos el array de las pantallas y a todas las que hay les damos la propiedad display como none
    for (let screen of screenArray) {
        document.getElementById(screen).style.display = "none";
    }

}