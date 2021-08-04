//dice game program - version 1
//Georgia Dann
//27/07/2021


let pick = 0;
let gameChoice = null;
while(!isNaN(gameChoice) || gameChoice == null){
    gameChoice = prompt('would you like to play the game as round or race?');
  if(gameChoice == 'race'){
     pick = raceChoice();
  } else if(gameChoice == 'round'){
     pick = roundChoice();
  }else{
    console.log('Not a valid entry')
  }
  
}

function raceChoice(){
  let racePick = prompt('What point number would you like to race to?');
  while(racePick <= 0 || isNaN(racePick) || racePick == null || racePick % 1 != 0){
  console.log('Not a valid number');
   racePick = prompt('What point number would you like to race to?');
  } 
  return racePick
}

 function roundChoice(){
  let roundPick = prompt('How many rounds would you like to play?');
  while(roundPick <= 0 || isNaN(roundPick) || roundPick == null || roundPick % 1 != 0){
  console.log('Not a valid number');
  roundPick = prompt('How many rounds would you like to play?');
  }
  return roundPick;
}

function getNames(){
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
  let name1 = (player1 || newRandomName1);
  let name2 = (player2 || newRandomName2);
  return {name1: name1, name2: name2};
}

//setting round and points to 0

let pointPlayer1 = 0;
let pointPlayer2 = 0;
let round = 1;
let names = getNames();

 


//if round is smaller than the amount of rounds picked it will play and repeat game 

if(gameChoice == 'race'){
  while(pointPlayer1<pick && pointPlayer2<pick){
    playRace(names);
    
  }
} else if(gameChoice == 'round'){
  while(round<= pick){
    playRound(names);
    round++
    }
}



//if player picks race it will play this function
function playRace(names){  
  roll1 = Math.floor(Math.random() * 6 + 1);
  roll2 = Math.floor(Math.random() * 6 + 1);
  let name1 = names.name1
  let name2 = names.name2

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

  //make a winner for after rounds
  let winner = '';
  if(pointPlayer1 > pointPlayer2){
    winner = name1;
  } 
  else if(pointPlayer1 < pointPlayer2){
    winner = name2;
  } 
  else{
    winner = `${name1} ${name2}`;
  }

  //state winner of the round
  if(pointPlayer1 >= pick){      
      console.log(`${name1}'s final points: ${pointPlayer1}!`);      
      console.log(`${name2}'s final points: ${pointPlayer2}!`);
      console.log('Congratulations '+ name1 + ' You won!');
    } 
    else if(pointPlayer2>= pick){     
      console.log(`${name1}'s final points: ${pointPlayer1}!`);      
      console.log(`${name2}'s final points: ${pointPlayer2}!`);     
      console.log('Congratulations '+ name2 + ' You won!');      
    } 
    else if(pointPlayer1< pick){ 
      let plural = pointPlayer1!=1?'s':'';
      console.log(`${name1} has ${pointPlayer1} point${plural}!`)
      let plural2 = pointPlayer2!=1?'s':'';
      console.log(`${name2} has ${pointPlayer2} point${plural2}!`)
    } 
    else if(pointPlayer2 < pick){
      let plural = pointPlayer1!=1?'s':'';
      console.log(`${name1} has ${pointPlayer1} point${plural}!`)
      let plural2 = pointPlayer2!=1?'s':'';
      console.log(`${name2} has ${pointPlayer2} point${plural2}!`)  
    }
}


//if player picks round game it will play this function
function playRound(names){  
  roll1 = Math.floor(Math.random() * 6 + 1);
  roll2 = Math.floor(Math.random() * 6 + 1);
  let name1 = names.name1
  let name2 = names.name2

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
if(round<pick){
  let plural = pointPlayer1!=1?'s':'';
console.log(`${name1} has ${pointPlayer1} point${plural}!`)
let plural2 = pointPlayer2!=1?'s':'';
console.log(`${name2} has ${pointPlayer2} point${plural2}!`)
} else{
  console.log(name1 + ' got ' + pointPlayer1 + ' points!');
  console.log(name2 + ' got ' + pointPlayer2 + ' points!');
  console.log('Congratulations ' + winner + ', you won!');
}
}
