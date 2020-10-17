

//------ step 3
//------ step 4

var game = new Object();
    win = 0;
    loss = 0;

   // console.log(win);



//------ step 5

var choices = ['rock', 'paper', 'scissors'];
    //console.log(choices);


//------ step 6

var random1 = (Math.floor(Math.random() * 3) + 0);

var random2 = (Math.floor(Math.random() * 3) + 0);


//------ step 7

var bot1 = choices[random1];
    console.log(bot1);
var bot2 = choices[random2];
    console.log(bot2);



// figure out what bot1 picked

if(random1 === random2) {
    console.log('tie');
} 

// if (random1 === 'rock' + random2 === 'paper') {
//     console.log('paper wins');
// } 

// if (random1 === 'rock' + random2 === 'scissors') {
//     console.log('rock wins');
// } 

// if  (random1 === 'paper' + random2 === 'rock') {
//     console.log('paper wins');
// } 

// if (random1 === 'paper' + random2 === 'scissor') {
//     console.log('scissor wins');
// } 

// if (random1 === 'scissor' + random2 === 'rock') {
//     console.log('rock wins');
// } 

// if (random1 === 'scissor' + random2 === 'paper') {
//     console.log('scissor wins');
// }