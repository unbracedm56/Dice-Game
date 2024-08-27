// generating random number between 1 and 6 for dice 1
var randomNumber1 = Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1) + 1;

//generating random number between 1 and 6 for dice 2
var randomNumber2 = Math.random();
randomNumber2*=6;
randomNumber2=Math.floor(randomNumber2)+1;

//changing the images of dice 1 based on the random number
if(randomNumber1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}else if(randomNumber1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}else if(randomNumber1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}else if(randomNumber1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}else if(randomNumber1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}else if(randomNumber1===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

//changing the images of dice 2 based on the random number
if(randomNumber2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}else if(randomNumber2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}else if(randomNumber2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}else if(randomNumber2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}else if(randomNumber2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}else if(randomNumber2===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}

//changing the title to display the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins!!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!! 🚩";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!!";
}
