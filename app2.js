//! There where a few things that were not complete or incorrect, I made some notes of those things and added some examples. Overall you did a good job just missed a few things, let me know if you want to meet up for a tutoring session or anything. Also I think its fine to tab in your console.log()'s if you'd like however I typically like to reserve tabs to denote parent / child relationships, the choice is yours just keep consistent with whatever you choose. 

//--- step 5
var num1 = prompt('Enter a number');
console.log(num1);

//--- step 6
var num2 = prompt('Enter in another number');
console.log(num2);

//--- step 7
// alert('You chose... wisely'); //! You where supposed to return the solution of num1 to the num2 power!!
// alert(num1 ** num2); //! One method 
alert(Math.pow(num1, num2)); //! Another method using the Math object



//--- step 8
console.log(Math.floor(Math.random() * 3) + 1); //! Great job!

//--- step 9
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(alphabet);  

//--- step 10
alphabet.pop('f');
console.log(alphabet);

//--- step 11
alphabet.push('g');
console.log(alphabet);

//--- step 12
alphabet.shift();
console.log(alphabet);

//--- step 13
alphabet.unshift(1)
console.log(alphabet);

//! Great work on everything here!

//--- step 14
//? Completed


//--- step 15
// alphabet.splice(2, 3, 'cat', 'dog', 'rabbit'); //! Close but no cigar, you inserted 3 strings, the prompt was to insert an array. I added that code in below otherwise though great work w/ the splice method, seems like you have a pretty good hold of how it works!
alphabet.splice(2, 3, ['dog', 'cat', 'rabbit'])
console.log(alphabet);

//--- step 16

// var copied = alphabet.slice(); //! You need to specify which indexes you're using to make the copy, the first parameter we pass is the starting index, the second is the index up to but NOT including. Checkout the code example below
var copied = alphabet.slice(0, 3); //? Start at index 0 go up to index 3, but don't include index 3. 
console.log(copied);

//--- step 17

// console.log(alphabet[3]); //! This returns "g" which is the third element of the alphabet array which currently looks something like this [1, 'b', ['dog', 'cat', 'rabbit], 'g'] If we want to get "dog" we need to first specify that we want the element in index 2, e.g. alphabet[2], this should give use the entire array ['dog', 'cat', 'rabbit'], next we want to specify we want the first element of that inner array or 'dog' which is index 0. So that is how we get alphabet[2][0]
console.log(alphabet[2][0]);