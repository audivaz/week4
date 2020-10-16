

//------ step 3
//------ step 4

var game = new Object();
    win = 0;
    loss= 0;

   // console.log(win);



//------ step 5

var choices = ['rock', 'paper', 'scissors'];
    //console.log(choices);


//------ step 6

var random1 = (Math.floor(Math.random() * 3) + 0);

var random2 = (Math.floor(Math.random() * 3) + 0);


//------ step 7

var bot1 = choices[random1];

var bot2 = choices[random2];
    console.log(random1);

//------ step 8

if (bot1 > 1) {
    console.log('win')
} else {
    console.log('loss')
}
//------ step 9 

var results = ' ';
    console.log(results);




//------ step 10


if('win' > 0) {
    console.log(results + 'beats!');
}