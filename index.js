var player1=prompt("Player1 - Enter your name:");
var player2=prompt("Player2 - Enter your name:");
var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-3

var randomDiceImage = "image" + randomNumber1 + ".jpg"; //image1.jpg - image3.jpg

var randomImageSource = "images/" + randomDiceImage; //images/image1.jpg - images/image3.jpg

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomImageSource2 = "images/image" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
document.querySelector(".player1").innerHTML=player1;
document.querySelector(".player2").innerHTML=player2;
//If player 1 wins
if (randomNumber1 == 1) {
  if (randomNumber2 == 2){
      document.querySelector("h2").innerHTML = "🚩 "+player2+" Wins!";
  }
  else if (randomNumber2 == 3){
      document.querySelector("h2").innerHTML = "🚩 "+player1+" Wins!";
  }

}
else if (randomNumber1 == 2) {
  if (randomNumber2 == 1){
      document.querySelector("h2").innerHTML = "🚩 "+player1+" Wins!";
  }
  else if (randomNumber2 == 3){
      document.querySelector("h2").innerHTML = "🚩 "+player2+" Wins!";
  }

}

else if (randomNumber1 == 3) {
  if (randomNumber2 == 1){
      document.querySelector("h2").innerHTML = "🚩 "+player2+" Wins!";
  }
  else if (randomNumber2 == 2){
      document.querySelector("h2").innerHTML = "🚩 "+player1+" Wins!";
  }
}
else{
    document.querySelector("h2").innerHTML = "Draw!";
}
