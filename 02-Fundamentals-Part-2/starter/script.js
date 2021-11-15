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

//special form of function expression that is shorter and therefore faster to write

//arrow function:               //implicit return
//simplest form
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3); //46

// //gets more complex when we add more parameters and/or more code

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement; //can't do implicit since we have more code here
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

//-------------------------------------------------------------------------

//Functions Calling Other Functions:

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//-------------------------------------------------------------------------

//Reviewing Functions:

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1; //shows that the number actually has no meaning
//   }

//   //return keyword--first it returns the value as it's instructed, but then it exits the functions immediately
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//ALL functions can receive data, transform data, and return data

//--------------------------------------------------------------------------

//Introduction to Arrays:

//how we would have to do it without arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// //an array is a data structure, like a big container into which we can throw variables, and reference them in the future

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// //another way to write arrays
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); //Michael
// console.log(friends[2]); //Peter

// console.log(friends.length); //gives us the amount of elements in the array

// //we can use .length to get the last element of an array
// console.log(friends[friends.length - 1]);

// //we can mutate the contents of the array, no matter if it's const or let, because it isn't a primitive data type
// friends[2] = "Jay";
// console.log(friends); //Jay has replaced Peter

// //but we can't replace the entire array this way
// // friends = ["Bob", "Alice"]; //throws an error message: assignment to constant variable

// //an array can hold values of different types at the same time
// //we can even put other arrays inside of array
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

//Exercise

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years)); //this won't work, becquse it's an array, so it's like asking the code to subtract an array from 2037, gives us NaN

// //we can still use the function on individual array elements though

// const age1 = calcAge(years[0]); //function is called with 1990
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// //since we started with an array, it's a nice idea to end with an array as well
// //we can place function calls into an array
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages); //the same values from line 211, but now they're placed in an array

//--------------------------------------------------------------------------

//Basic Array Operations (Methods)

//methods are functions that you can apply directly to an array

const friends = ["Michael", "Steven", "Peter"];

//we can add an element to the end of an array
// friends.push("Jay");
console.log(friends);

//push can return a value as well
const newLength = friends.push("Jay");
console.log(newLength); //4

//we can add an element to the beginning of an array
friends.unshift("John");
console.log(friends);

//we can remove an element from the end of an array
console.log(friends.pop()); //don't need to pass in an argument, it's going to take the last element
//pop returns the removed element as its value--Jay
console.log(friends); //Jay is gone

//we can remove an element from the beginning of an array
friends.shift(); //first
console.log(friends); //John is gone

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

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const popOfUSA = percentageOfWorld1(329.5);
// const popOfNigeria = percentageOfWorld1(206.1);
// const popOfVietnam = percentageOfWorld1(97.34);
// console.log(popOfUSA, popOfNigeria, popOfVietnam);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const popOfUSA = percentageOfWorld2(329.5);
// const popOfNigeria = percentageOfWorld2(206.1);
// const popOfVietnam = percentageOfWorld2(97.34);
// console.log(popOfUSA, popOfNigeria, popOfVietnam);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const popOfUSA = percentageOfWorld3(329.5);
// const popOfNigeria = percentageOfWorld3(206.1);
// const popOfVietnam = percentageOfWorld3(97.34);
// console.log(popOfUSA, popOfNigeria, popOfVietnam);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const describePopulation = (country, population) => {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
//   console.log(description);
// };

// describePopulation("USA", 329);
// describePopulation("Nigeria", 206);
// describePopulation("Vietnam", 97);

// const populations = [329, 206, 97, 105];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

//-------------------------------------------------------------------------

//CODING CHALLENGES

//Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(85, 54, 49);
// const avgKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avg1, avg2) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No one wins!");
//   }
// };

// checkWinner(avgDolphins, avgKoalas);
