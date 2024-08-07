// user entering a game number

let gameNum=25;

let userNum = prompt("Enter the game number: ");

while(userNum!= gameNum){
   userNum =  prompt("you have entered the wrong game number , enter the game number:")
}
console.log("congratulations , you have guessed the right game number.")