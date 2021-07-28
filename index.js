//dice game program - version 1
//Georgia Dann
//27/07/2021
// let gameChoice = prompt('would you like to play a with rounds or a race to a certain number?');
let gameChoice = prompt('would you like to play the game as round or race?');
while(gameChoice <= 0 || isNaN(gameChoice) || gameChoice == null || gameChoice % 1 != 0){
  console.log('Not a valid entry')
  let gameChoice = prompt('would you like to play the game as round or race?');
  if(gameChoice == race){
    function race()
  }
}
if(gameChoice == round){
  let roundPick = prompt('How many rounds would you like to play?');
  while(roundPick <= 0 || isNaN(roundPick) || roundPick == null || roundPick % 1 != 0){
  console.log('Not a valid number');
  roundPick = prompt('How many rounds would you like to play?');
}} else if (gameChoice == race){
  let racePick = prompt('What point number would you like to race to?');
  while(racePick <= 0 || isNaN(racePick) || racePick == null || racePick % 1 != 0){
  console.log('Not a valid number');
  let racePick = prompt('What point number would you like to race to?');
} 


// let roundPick = prompt('How many rounds would you like to play? 1-10');

// while(roundPick <= 0 || isNaN(roundPick) || roundPick == null || roundPick % 1 != 0){
//   console.log('Not a valid number')
//   roundPick = prompt('How many rounds would you like to play? 1-10');
  
// }

// having list of player names ready to be picked
randomName1 = ['pogchamp42069','swaggyolympian','spicyfeet','Mark',];
let newRandomName1 = randomName1[Math.floor(Math.random()* 4 + 0 )];
randomName2 = ['dancercat26','speedybunny','Zac','cheekyfingernail'];
let newRandomName2 = randomName2[Math.floor(Math.random()* 4 + 0 )];

//letting the player 1 choose their name
let player1 = prompt('Player 1 please enter a name:');
if(player1 == ''){
  console.log('welcome ' + newRandomName1 + ', good luck!');
} else{
  console.log('Welcome ' + player1 + ', good luck!');
}
//letting player 2 choose their name
let player2 = prompt('Player 2 please enter a name:');
if(player2 == ''){
   console.log('welcome ' + newRandomName2 + ', good luck!');
} else{
  console.log('Welcome ' + player2 + ', good luck!');
}

//setting round and points to 0
let name1 = (player1 || newRandomName1);
let name2 = (player2 || newRandomName2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let round = 1;
//if rund is smaller than the amount of rounds picked it will play and repeat game 
while(round<=roundPick){
  play()
}
function play(){
  roll1 = Math.floor(Math.random() * 6 + 1);
  roll2 = Math.floor(Math.random() * 6 + 1);
do{
  //loop for player 1 to roll the dice
 let player1Roll = prompt(name1 + ' type "roll" to roll the dice');
 while(player1Roll != 'roll'){
   player1Roll = prompt(name1 + ' type "roll" to roll the dice')
 } console.log(name1 + ' got ' + roll1);

//loop for player 2 to roll the dice
 let player2Roll = prompt(name2 + ' type "roll" to roll the dice');
 while(player2Roll != 'roll'){
   player2Roll = prompt(name2 + ' type "roll" to roll the dice')
 } console.log(name2 + ' got ' + roll2);

//declare the winner and add points
if(roll1 > roll2){
  console.log(name1 + ' wins this round!');
  pointPlayer1++
} else if(roll1 < roll2){
  console.log(name2 + ' wins this round!');
  pointPlayer2++
} else{
  console.log('Its a draw!');
}

// if (roll1==2){
//   console.log`${name1} gets 2 points!`;
//   pointPlayer1+2;
// } else if (roll2==2){
//   console.log`${name2} gets 2 points!`;
//   pointPlayer2+2;
// }

//make a winner for after rounds
let winner = '';
if(pointPlayer1 > pointPlayer2){
   winner = name1;
}else if(pointPlayer1 < pointPlayer2){
   winner = name2;
} else{
   winner = `${name1} ${name2}`;
}
 
//state winner of the round
if(round<roundPick){
  let plural = pointPlayer1!=1?'s':'';
console.log(`${name1} has ${pointPlayer1} point${plural}!`)
let plural2 = pointPlayer2!=1?'s':'';
console.log(`${name2} has ${pointPlayer2} point${plural2}!`)
} else{
  console.log(name1 + ' got ' + pointPlayer1 + ' points!');
  console.log(name2 + ' got ' + pointPlayer2 + ' points!');
  console.log('Congratulations ' + winner + ', you won!');
}

round++
}while(round == roundPick)

}

