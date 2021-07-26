//dice game program - version 1
//Georgia Dann
//27/07/2021

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

let name1 = (player1name || newRandomName1);
let name2 = (player2name || newRandomName2);
let pointPlayer1 = 0;
let pointPlayer2 = 0;
let round = 1;
//setting round and points to 0 

play()
function play(){
  roll = Math.floor(Math.random() * 6 + 1);
do{
 let player1Roll = prompt(name1 + ' type "roll" to roll the dice');
  if(player1Roll == 'roll'){
    console.log('You got the number ' + roll);
  } else{
    player1Roll = prompt('type "roll" to roll the dice');
  }

  let player2Roll



} 
}

