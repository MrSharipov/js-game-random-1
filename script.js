// let n = 0;
// let point1 = 0;
// let point2 = 0;

function player_1_game(){

    let arr = ["img/well.jpeg", "img/paper.png", "img/qaychi.png"];

    let random_1 = Math.floor(Math.random() * 3);
    // point1 = random_1;

    document.getElementById('p_1_Img').src = arr[random_1];
    
    // n++;
}

function player_2_game(){

    let arr = ["img/well.jpeg", "img/paper.png", "img/qaychi.png"];

    let random_2 = Math.floor(Math.random() * 3);
    // point2 = random_2;

    document.getElementById('p_2_Img').src = arr[random_2];
    
    // n++;
}

function reset() {
    document.getElementById('p_1_Img').src = "img/game.png";
    document.getElementById('p_2_Img').src = "img/game.png";
   
    // n = 0;
}
// function result() {
//     if(n==2){

//     } 
    
//     document.getElementById('result').innerHTML = point1;    
// }

