"use strict";

//LECTURES

//Activating Strict Mode:

//strict mode is something that can be activated in JS to help us write more secure code
//by more secure code, we mean code that is less prone to errors or bugs
//strict mode does this in two ways:
//1. it forbids us from doing certain things
//2. create visible errors for us in certain situations, instead of just failing silently

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive!");

// const interface = "Audio"; //reserved word error message

//-------------------------------------------------------------------------

//Functions:

//a function is a piece of code that we can reuse over and over again, can hold one or more complete lines of code

// defining the function
// function logger() {
//   console.log("My name is Jonas");
// }

// // calling/running/invoking the function
// logger(); //My name is Jonas
// logger();
// logger();

//functions are like machines--they can receive data and return data

//parameters--like variables, specific to their function
//arguments--the actual values of the parameters

// function fruitProcessor(apples, oranges) {
//   //apples and oranges will be numbers when the function is called
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice; //this will be the result of calling this function
// }

// //what happened to return? it is the result, so its value has now replaced the written code, once the function has been executed, so we can store it in a variable...
// const appleJuice = fruitProcessor(5, 0); //apples will become 5 and oranges will become 0
// //and then log it out
// console.log(appleJuice);
// //we can also log out result directly, without storing it in a variable
// console.log(fruitProcessor(5, 0));

// //and we can go right ahead and use that function again, as many times as we want!

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

//functions allow us to write more easy to maintain code, because we can write big chunks of code that can be reused over and over

//JS also has many built-in functions that we can take advantage of

//-------------------------------------------------------------------------

//Function Declarations vs. Expressions:

//declarations use the function keyword to declare and define a function

//function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1); //46

// //function expression
// //also known as an anonymous function
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);

// console.log(age1, age2); //46 46

//-------------------------------------------------------------------------

//Arrow Functions:
//-------------------------------------------------------------------------

//ASSIGNMENTS

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const describeCzech = describeCountry("czech", 5.5, "wangdangle");
// const describeFrance = describeCountry("france", 4, "paris");
// const describeNigeria = describeCountry("nigeria", 1, "bokakeem");

// console.log(describeCzech);
// console.log(describeFrance);
// console.log(describeNigeria);
