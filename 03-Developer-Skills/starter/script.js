// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//SOLVING PROBLEMS

//PROBLEM:
//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
//-what is temperature amplitude? the difference between the highest and lowest temps in the given array
//-how to compute the max and min temps?
//-what's a sensor error and what should we do with it? Probably ignore it

//2) breaking up into sub-problems
//-how to ignore errors?
//-find max value in temp array
//-find min value in temp array
//-subtract min value from max value (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;

//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM 2:
//function should now receive two arrays of temperatures

//1) understanding the problem:
//with 2 arrays--should we implement the same functionality twice? NO! Just merge the two arrays at the beginning

//2) breaking up into sub-problems
//- merge 2 arrays

// const calcTempAmplitudeNew = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;

//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//----------------------------------------------------------------------

//DEBUGGING

//bugs are normal
//debugging is the process of finding, fixing, and preventing bugs

//1st step is to IDENTIFY that there is a bug
//2nd step is to FIND where exactly in the code the bug is happening
//3rd step is to FIX the bug--replace the existing wrong code with new code that works
//Final step is to PREVENT it from happening again--search rest of the code for the same bug somewhere else // writing tests

//----------------------------------------------------------------------

//DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     //FIX
//     value: Number(prompt("Degrees celsius:")),
//   };
//   //FIND
//   console.log(measurement);
//   console.table(measurement);
//   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// //IDENTIFY
// console.log(measureKelvin());

//-----------------------------------------------------------------

//Using debugger

// const calcTempAmplitudeBug = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const currTemp = temps[i];
//     if (typeof currTemp !== "number") continue;

//     if (currTemp > max) max = currTemp;

//     if (currTemp < min) min = currTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

//CODING CHALLENGES

//Coding Challenge #1

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// const arr = data1.concat(data2);

// const printForecast = function (arrOfNums) {
//   let tempString = "...";
//   for (let i = 0; i < arr.length; i++) {
//     tempString += `${arr[i]}°C in ${i + 1} days ... `;
//   }

//   console.log(tempString);
// };

// console.log(printForecast(arr));
