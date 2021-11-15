//LECTURES

//Values and Variables:

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//-----------------------------------------------------------------------

//Data Types:

// let javascriptIsFun = true; //variable holds a boolean value
// //the value holds the data type, not the variable
// console.log(javascriptIsFun); //returns true

// console.log(typeof true); //boolean
// console.log(typeof javascriptIsFun); //boolean
// console.log(typeof 23); //number
// console.log(typeof "Jonas"); //string

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun); //now it's a string

// let year;
// console.log(year); //undefined (value)
// console.log(typeof year); //undefined (type)

// year = 1991;
// console.log(year); //1991
// console.log(typeof year); //number

// console.log(typeof null); //object--this is regarded as a bug in JS, but never corrected for legacy reasons. It should return null, just like undefined returns undefined

//-----------------------------------------------------------------------

//let, const and var:

//use let keyword to declare variables that need to be able to be reassigned later on
//always use let keyword when declaring empty variables

// let age = 30;
// age = 31; //we mutated the age variable

// //use const keyword to declare variables that are not supposed to change at any point in the future
// //can't use const to declare empty variables

// const birthYear = 1991; //birth year can never change
// // birthYear = 1990; //JS won't let this happen

// // const job; //error

// //always use const by default and only use let when you know for sure it will be changing in the future

// //var is the old way of defining variables--never use it

// var job = "programmer";
// job = "teacher"; //can mutate just like with let

//however, var and let are much different than they first seem--let is block scoped and var is function scoped

//-----------------------------------------------------------------------

//Basic Operators:

//mathematical operators:
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 2 = 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// //assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 (25)
// x *= 4; //x = x * 4 (100)
// x++; //x = x + 1 (101)
// x--; //x = x - 1 (100)
// x--; //x = x - 1 (99)
// console.log(x);

// //comparison operators--used to create boolean values
// console.log(ageJonas > ageSarah); //true //we have >, <, >=, <=
// console.log(ageSarah >= 18); //true

// const isFullAge = ageSarah >= 18; //can store result in a variable

// console.log(now - 1991 > now - 2018); //true, calculating the ages and which one is greater all in one step

//-----------------------------------------------------------------------

//Operator Precedence:

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// //why are the subtractions executed before the comparison operator?
// //because of operator precedence--math operators have more precedence than comparison operators, meaning math operators are executed before comparison operators!
// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //minus operators are executed first, x = y = 10
// //assignment operators go from right to left
// console.log(x, y); //both are now 10

// //without the parantheses, the division would happen before the addition, parantheses have highest precedence
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// console.log(averageAge); //32.5

//-----------------------------------------------------------------------

//Strings and Template Literals:

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// //regular string concatenation
// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + "-year-old " + job + "!";

// //with template literal--much easier to manage
// const jonasNew = `I'm ${firstName}, a ${year - birthYear}-year-old ${job}!`;
// console.log(jonas);
// console.log(jonasNew);

// //we can use backticks to write all strings, even if we won't be using variables
// console.log(`Just a regular string...`);

// //using template literals to write multi-line strings
// //before template literals, this is how you had to do it:
// console.log("String with \n multiple \n lines");

// //but now you can:
// console.log(`String with
// multiple
// lines`);

//-------------------------------------------------------------------------

//Taking Decisions--if/else statements:

// const age = 15;

// //an if/else control structure--allows us to have more control over how our code is executed
// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//-----------------------------------------------------------------------

//Type Conversion and Coercion:

//type conversion: when we manually change a value's type from one to another
// const inputYear = "1991";
// console.log(Number(inputYear)); //returns as a number, but this does not change the original value, that is still a string
// console.log(inputYear + 18); //199118, does not do the calculation for us because 1991 is a string, not a number
// console.log(Number(inputYear) + 18); //2009

// //type coercion: when JS does something behind the scenes to change a value's type from one to another
// // the plus operator triggers a coercion to STRING
// console.log("I am " + 23 + " years old");
// //the minus operator triggers a coercion to NUMBER
// console.log("23" - "10" - 3); //10
// //both strings are converted to numbers so the multiply operator can work
// console.log("23" * "2"); //46

// let n = "1" + 1; //converts to a string 11
// n = n - 1; //converts to a number 10
// console.log(n); // 10

//------------------------------------------------------------------------

//Truthy and Falsy Values:

//falsy values are values that are not false initially but will be false when converted to a boolean
// 5 Falsy Values: 0, "", undefined, null, NaN

// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("Jonas")); //true
// console.log(Boolean({})); //true
// console.log(Boolean("")); //false

// //JS coerces values into boolean types when logical operators are used, and in logical contexts, like an if/else statement

// const money = 0; //0 is a number, but it will be coerced into false, becasue it is a falsy value
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height; //undefined, no value has been assigned to it, and undefined is a falsy value
// if (height) {
//   console.log("YAY! Height is defined!");
// } else {
//   console.log("Height is UNDEFINED");
// }

//------------------------------------------------------------------------

//Equality Operators-double equals vs. triple equals:

// const age = 18;
// if (age === 18) {
//   //true, so the code will run
//   //=== is a comparison operator that returns a true or false value, only returns true if both sides are exactly the same, this is the STRICT equality operator, it does not perform type coercion, so it only returns true if both values are exactly the same, including type
//   console.log("You just became an adult :D (strict)");
// }

// //== does do type coercion, it is the LOOSE equality operator, can create lots of bugs, avoid using!

// if (age == 18) {
//   //true, so the code will run
//   console.log("You just became an adult :D (loose)");
// }

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite); //
// console.log(typeof favorite); //string

// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite !== 23) {
//   //!== checks if two values are NOT EQUAL
//   console.log("Why not 23?");
// }

//------------------------------------------------------------------------

//Boolean Logic:

//and operator && all/both conditions must be true for the overall boolean value to be true

//or operator || only one condition needs to be true for the overall boolean value to be true

//not operator ! inverts a true or false value, has precedence over the and operator and the or operator

//-------------------------------------------------------------------------

//Logical Operators:

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

//-------------------------------------------------------------------------

//The Switch Statement:

// const day = "Monday";

// switch (day) {
//   case "Monday": //same as day === "Monday"
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "Tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Write code examples");
//     break;
//   case "Friday":
//     console.log("Record videos");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// const day = "Monday";

// if (day === "Monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "Tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Write code examples");
// } else if (day === "Friday") {
//   console.log("Record videos");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day!");
// }

//-------------------------------------------------------------------------

//Statements and Expressions:

//an expression is a piece of code that produces a value
//examples: 3 + 4, 1991, true, false,

//a statement is a bigger piece of code that is executed and does not produce a value by itself

//a statement is like a complete sentence, and expressions are like words that make up the sentences

//we write code through a series of actions, and those actions are statements
//like an if/else statement--they don't produce values, they perform actions and declare values

//-------------------------------------------------------------------------

//The Conditional (Ternary) Operator:

// const age = 15;

// // age >= 18 //this is the condition
// //   ? console.log("I like to drink wine") //this happens if condition is true
// //   : console.log("I like to drink water"); //this happens if condition is false

// const drink = age >= 18 ? "wine" : "water";
// // console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }

// // console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//-------------------------------------------------------------------------

//ASSIGNMENTS:

// const country = "United States of America";
// const continent = "North America";
// let population = 329500000;

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// let isIsland = false;
// let language;
// // console.log(typeof isIsland); //boolean
// // console.log(typeof population); //number
// // console.log(typeof country); //string
// // console.log(typeof language); //undefined

// language = "English";

// console.log(population / 2); //164750000
// population++;
// console.log(population); //329500001
// const popOfFinland = 6000000;
// // console.log(population > popOfFinland); //true
// const averagePopulation = 33000000;
// // console.log(population < averagePopulation); //false
// // const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// // console.log(description);

// if (population > averagePopulation) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${
//       averagePopulation - population
//     } million below average'`
//   );
// }

//Prediction:
// console.log("9" - "5"); //4 //correct
// console.log("19" - "13" + "17"); //617 //correct
// console.log("19" - "13" + 17); //23 //correct
// console.log("123" < 57); // false //correct
// console.log(5 + 6 + "4" + 9 - 4 - 2); //117 //wrong 1143

// const numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );

// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// const language = "english";

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

//-----------------------------------------------------------------------

//CODING CHALLENGES

//Coding Challenge #1

//Data 1 Set
// const heightMark = 1.69;
// const weightMark = 78;
// const heightJohn = 1.95;
// const weightJohn = 92;

// const markBMI = weightMark / heightMark ** 2;
// const johnBMI = weightJohn / heightJohn ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI); // 27.3
// console.log(johnBMI); // 24.1
// console.log(markHigherBMI); //true

//Data 2 Set:
// const heightMark = 1.88;
// const weightMark = 95;
// const heightJohn = 1.76;
// const weightJohn = 85;

// const markBMI = weightMark / heightMark ** 2;
// const johnBMI = weightJohn / heightJohn ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI); //26.8
// console.log(johnBMI); //27.4
// console.log(markHigherBMI); //false

//Coding Challenge #2

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

//Coding Challenge #3

// const avgScoreDolphins = (96 + 108 + 89) / 3;
// const avgScoreKoalas = (88 + 91 + 110) / 3;

// console.log(avgScoreDolphins);
// console.log(avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas) {
//   console.log("Dolphins win!");
// } else if (avgScoreKoalas > avgScoreDolphins) {
//   console.log("Koalas win!");
// } else {
//   console.log("It's a draw!");
// }

//Bonus #1

// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 123) / 3;

// console.log(avgScoreDolphins);
// console.log(avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins win!");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Koalas win!");
// } else {
//   console.log("It's a draw!");
// }

//Bonus #2

// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 106) / 3;

// console.log(avgScoreDolphins);
// console.log(avgScoreKoalas);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins win!");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Koalas win!");
// } else if (
//   avgScoreDolphins === avgScoreKoalas &&
//   avgScoreDolphins >= 100 &&
//   avgScoreKoalas >= 100
// ) {
//   console.log("It's a draw!");
// } else {
//   console.log("No one wins the trophy!");
// };

//Coding Challenge #4

// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
