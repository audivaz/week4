var message = 'Hello world!';
console.log(message);
// console.log('hello world!'); //! We can also write this in just one line like this

// ! You want to use console.warn & console.error here not console.log! check out the below code to see an example
// var warning = 'This is a warning';
//     console.log(warning);

// var error = 'Error! System critical';
//     console.log(error);
console.warn('This is a warning!');
console.error('Error! System critical!');

var var1 = 'Crazy';
console.log(var1);

console.log('');
// console.log('\n'); //! Just showing another way to do the exact same way, good job!

// var var2 = '88'; //! This was supposed to be a number type not a string type. Remember '88' is a string and 88 is a number. Numbers will appear blue in the google chrome console while strings will appear black.
var var2 = 88;
console.log(var2);

console.log(var1 + ' ' + String(var2)); // Crazy 88, from the movie Kill Bill //! Good job parsing it into a string always a good idea to parse them explicitly. However when you add a number and a string together JS will automatically turn the number into a string.

//! You need add some of the data types we discussed in class here
/* This is a multiline comment.
All the text written here will not appear in the console 
or in the browser */

var var3 = 'string';
console.log(var3);

var3 = true;
console.log(var3);

var1 = 5;
console.log(var1);

var2 = '5';
console.log(var2);

// var var4 = var1 + var2; //! You need to convert var2 to a number! Checkout the line below to see the example
var var4 = var1 + Number(var2);
console.log(var4); // returns 10 instead of 55

//! We can also shorten this to one line like the below example
// console.log(var1 + Number(var2));
