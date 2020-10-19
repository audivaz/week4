

//------ step 3
//------ step 4

var game = new Object(); //? I think object literal syntax is easier I demo this just below. However you can complete the project with the syntax as shown below as well.
//     win = 0;
//     loss = 0;
game.win = 0; //? You can use these to complete the game object if you want to instantiate the object in this fashion 
game.loss = 0;
//! This is my recommendation, using Object Literal Notation 
// var game = {
//     win: 0,
//     loss: 0
// }

   // console.log(win);



//------ step 5

var choices = ['rock', 'paper', 'scissors'];
    //console.log(choices);


//------ step 6

// var random1 = (Math.floor(Math.random() * 3) + 0); //? It doesn't hurt anything to have it however we can remove to + 0
var random1 = Math.floor(Math.random() * 3);

// var random2 = (Math.floor(Math.random() * 3) + 0);
var random2 = Math.floor(Math.random() * 3);


//------ step 7

var bot1 = choices[random1];
    console.log(bot1);
var bot2 = choices[random2];
    console.log(bot2);



// figure out what bot1 picked

// if(random1 === random2) { //! This was really good! However the instructions say to check for tie last so I did it that way. However this was very good approach. Nice work. I added an example of couple different covered conditionals to demo how you could solve this problem. Check it out below. I also added a basic if/else if/else setup.
//     console.log('tie');
// } 

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

//? An example using a little bit of everything.
switch(bot1) {
    case 'rock':
        //? If / else if
        if(bot2 === 'scissors') {
            game.win++;
        } else if(bot2 === 'paper') {
            game.loss++;
        }
        break;
    case 'paper':
        //? Ternary (probably wouldn't use this as the else clause (null) is useless)
        (bot2 === 'rock') ? game.win++ : null;
        (bot2 === 'scissors') ? game.loss++ : null;
        break;
    //? If bot1 didn't chose 'rock' or 'paper' it must've chosen scissors so we can just use a default instead of checking if its scissors b/c by this point we know that it must be 'scissors'
    default:
        //? Switch stmt
        switch(bot2) {
            case 'paper':
                game.win++;
                break;
            case 'rock':
                game.loss++;
                break;
        }
        break; //? You don't have to end defaults w/ a break; but I just like to.
}

//! If/else style solution (recommended)
// if(bot1 ==='rock') {
//     if(bot2 === 'scissors') {
//         game.win += 1; //? Same as game.win++ 
//     } else if(bot2 === 'paper') {
//         game.loss += 1;
//     }
//     //? Don't need to check if bot2 === 'rock' b/c it would make it a tie, neither a win or a loss, so we don't really need to do anything w/ it for now.
// } else if(bot2 === 'paper') {
//     if(bot2 === 'rock') {
//         game.win++;
//     } else if(bot2 === 'scissors') {
//         game.loss++;
//     }
// } else {
//     //? If bot1 didn't have rock or paper, then it must've had rock so I'm going to use an else stmt since I know that is the value however you could've just as easily used an else if to explicitly checked for it.
//     if(bot2 === 'paper') {
//         game.win = 1; //? We can just assign it to 1 as well. This is kinda bad form but since this application isn't persistent (doesn't keep score through browser refreshes) we can just assign it instead of incrementing. 
//     } else if(bot2 === 'rock') {
//         game.loss = 1;
//     }
// }

//! Added in the necessary code to get the result string working
var result = '';

if (game.win > 0){
    // result += bot1 + " beats " + bot2; //? The instructions say to append though you could also do it this way. 
    result += bot1;
    result += ' beats ';
    result += bot2;
} else if (game.loss > 0) {
    // result += bot2 + ' beats ' + bot1;
    result += bot2;
    result += ' beats ';
    result += bot1;
} else { 
    result += 'tie game';
}
console.log(result); 