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

// const friends = ["Michael", "Steven", "Peter"];

// //we can add an element to the end of an array
// // friends.push("Jay");
// console.log(friends);

// //push can return a value as well
// const newLength = friends.push("Jay");
// console.log(newLength); //4

// //we can add an element to the beginning of an array
// friends.unshift("John");
// console.log(friends);

// //we can remove an element from the end of an array
// console.log(friends.pop()); //don't need to pass in an argument, it's going to take the last element
// //pop returns the removed element as its value--Jay
// console.log(friends); //Jay is gone

//we can remove an element from the beginning of an array
// friends.shift(); //first
// console.log(friends); //John is gone

// console.log(friends.indexOf("Steven")); //returns number--index of 1
// console.log(friends.indexOf("Bob")); //returns -1 because Bob is not an element that exists in the friends array

// console.log(friends.includes("Steven")); //returns true
// console.log(friends.includes("Bob")); //returns false
// //includes method uses strict equality

// //we can use the includes method to write conditional statements

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

//------------------------------------------------------------------------

//Introduction to Objects:

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

//key value pairs, can't do that in arrays
//each key is called a property

//ojbects should be used for less structured data, data that we actually want to name and retrieve by name

//------------------------------------------------------------------------

//Dot vs. Bracket Notation:
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// //accessing values in object using dot notation
// console.log(jonas.lastName);

// //we can do it using brackets as well

// console.log(jonas["lastName"]);

//inside the brackets we don't have to stick just to keys, we can insert expressions as well...
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(interestedIn);
// console.log(jonas[interestedIn]); //returns teacher, if user inputs job, etc...

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

//adding properties to object
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

//Challenge
//recreate this sentence in a dynamic way, with no hard-coding
//"Jonas has three friends, and his best friend is called Michael"

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

//----------------------------------------------------------------------

//Object Methods:

//object methods are functions attached to an object

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
// },

//instead of continally calling this function every time we need to use the age variable, we can calculate it just once and store it in the object
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   //Challenge: write a method that returns this string
//   //"Jonas is a 46-year old teacher, and he has a driver's license"
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());

// //instead of calling function again we can access age value like this
// console.log(jonas.age);
// console.log(jonas.getSummary());

//------------------------------------------------------------------------

//Iteration: The For Loop:

//loops allow us to automate repetitive tasks

//doing it this way is NOT best practice
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//instead we can do a for loop
//for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//-------------------------------------------------------------------------

//Looping Arrays, Breaking and Continuing

//one of the most useful applications of for loops is to loop through arrays

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   //reading from array
//   console.log(jonas[i], typeof jonas[i]);
//   //Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

//continue and break
//continue is to exit the current iteration and go to the next iteration of the loop immediately
// console.log("-------ONLY STRINGS--------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue; //don't do the rest of the code for this iteration, we only want to log strings

//   console.log(jonas[i], typeof jonas[i]);
// }

// //break is to exit the loop completely

// console.log("-------BREAK WITH NUMBER--------");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break; //after the first number is found, loop is terminated, nothing more is logged to console
//   console.log(jonas[i], typeof jonas[i]);
// }

//----------------------------------------------------------------------

//Looping Backwards and Loops in Loops:

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// //looping backwards
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

//looping inside of a loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------------------Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }
// }

//-----------------------------------------------------------------------

//The While Loop:

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1; //this has to be specified outside of loop for this while loop, but you don't always need that for a while loop

// //with a while loop, you can only specify a condition
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   rep++;
// }

//while loop is more versatile and can be used in many different ways than a for loop
//while loop does not have to depend on a counter variable, so if you don't know how many iterations a loop will have, a while loop is a good option, perhaps a better option than the for loop

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

//-----------------------------------------------------------------------

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

// const neighbors = ["France", "Switzerland", "Austria"];
// console.log(neighbors);
// neighbors.push("Utopia");
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }
// neighbors[2] = "Republic of Austria";
// console.log(neighbors);

// const myCountry = {
//   country: "Italy",
//   capital: "Rome",
//   language: "Italian",
//   population: 60,
//   neighbors: ["France", "Switzerland", "Austria"],

//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}.`
//     );
//   },

//   checkIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//     // this.hasDriversLicense ? "a" : "no"} driver's license.
//   },
// };

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries, and a capital called ${myCountry.capital}`
// );

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry["population"] -= 2;
// console.log(myCountry.population);

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percentages2 = [];

// const populations = [329.5, 206.1, 97.34, 105];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);

// const listOfNeighbors = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let j = 0; j < listOfNeighbors[i].length; j++) {
//     console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//   }
// }

// -----------------------------------------------------------------------

// CODING CHALLENGES

// Coding Challenge #1

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

// Coding Challenge #2

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(totals);

//Coding Challenge #3

// const markInfo = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const johnInfo = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// markInfo.calcBMI();
// johnInfo.calcBMI();

// if (markInfo.calcBMI > johnInfo.calcBMI) {
//   console.log(
//     `${markInfo.fullName}'s BMI (${markInfo.bmi}) is higher than ${johnInfo.fullName}'s (${johnInfo.bmi})!`
//   );
// } else {
//   console.log(
//     `${johnInfo.fullName}'s BMI (${johnInfo.bmi}) is higher than ${markInfo.fullName}'s (${markInfo.bmi})!`
//   );
// }

//Coding Challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
//   console.log(tips);
//   console.log(totals);
// }

// //Bonus
// let sum = 0;

// const calcAverage = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage(totals));
