// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//PROBLEM 1:

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - Whats a sensor error? and what to do?

//2) Breaking up into sub-problems
// - how to ignore sensor errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max(amplitude) and return it

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//PROBLEM 2:
// function should now recieve 2 arrays of temperatures

//1) understanding the problem
// - with 2 arrays, should we implement functionality twice? NO! just merge 2 arrays
//concat example
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

//2) Breaking up into sub-problems
// - Merge 2 arrays?

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     // C) FIX
// value: Number(prompt('Degrees celsius:')), //Number was added to fix from string to number
//   };
//   // B) FIND
//   console.log(measurement);
//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY THE BUG
// console.log(measureKelvin());

// LINE 59 SHOWS THAT 10 IS A STRING (VALUE)

//USING A DEBUGGER

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     //debugger;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);

////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge 1

// 1) Understanding the problem
// - array transformed to string, separated by ...
// - what is the X days? answer: index +1 (i++)

// 2) breaking up into sub-problems
// - transform array into string
// - transform each element to string with ℃
// - strings need to contain day (index + 1)
// - add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//my attempt
// console.log(`... ${data1[0]}℃ ... ${data1[1]}℃ ... ${data1[2]}℃ ...`);
/////////////////////////////////////////////////////////////////////////

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForecast(data1);
