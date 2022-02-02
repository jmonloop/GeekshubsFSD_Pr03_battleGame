
const battle = () =>{



// console.log(player2.position);

}

setInterval(()=>{
    player2.move();
},1000);


let hideOrShow = false
setInterval(()=>{
    let value = Math.round(Math.random());
    if(value == 0) {
        player2.hide();
    } else player2.show();
        


},500)