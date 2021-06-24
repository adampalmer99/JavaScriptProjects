'use strict';

// function logger() {
//     console.log('My name is Adam');
// }

// // calling / running / invoking the function(Executing or using the function defined previously)
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num); 

// Function delcaration 
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// //Function expression
// const age1 = calcAge1(1991);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


//Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Adam"));
// console.log(yearsUntilRetirement(1980, "Bob"));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearsUntilRetirement(1991, "Adam"));
// console.log(yearsUntilRetirement(1950, "Dave"));


// const years = new Array(1999, 1991, 1980, 2000, 2021);
// console.log(years);
// console.log(years[0]);


// const friend1 = 'Michael';
// const friend2 = 'Dwight';
// const friend3 = 'Jim';

// const friends = ['Michael', 'Dwight', 'Jim'];
// console.log(friends);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Phyllis';     // mutate the array, can't change the entire array
// console.log(friends);


// const firstName = 'Adam';
// const Adam = [firstName, 'Palmer', 2021 - 1999, 'teacher', friends];
// console.log(Adam);
// console.log(Adam.length);


// //exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Michael', 'Dwight', 'Jim'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop();  // last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); //First
// console.log(friends);

// console.log(friends.indexOf('Dwight'));
// console.log(friends.includes('Michael'));
// console.log(friends.includes('Adam'));

// if (friends.includes('Michael')) {
//     console.log("You have a friend called Michael");
// }

// objects

// const adam = {
//     firstName: 'Adam',
//     lastName: 'Palmer',
//     age: 2037 - 1999,
//     job: 'Developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(adam);


// // dot vs bracket notation

// console.log(adam.lastName);
// console.log(adam['lastName']);

// const nameKey = 'Name';
// console.log(adam['first' + nameKey]);
// console.log(adam['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Adam? Choose between firstName, lastName, age, job and friends');
// console.log(adam[interestedIn]);

// if (adam[interestedIn]) {
//     console.log(adam[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// }

// adam.location = 'Hull';
// adam['twitter'] = '@adampalmer';

//Challenge
//"Adam has 3 friends, and his best friend is called Michael"

// const adam = {
//     firstName: 'Adam',
//     lastName: 'Palmer',
//     age: 2037 - 1999,
//     job: 'Developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(`${adam.firstName} has ${adam.friends.length} friends, his best friend is called ${adam.friends[0]} `);

//object methods

// const adam = {
//     firstName: 'Adam',
//     lastName: 'Palmer',
//     birthYear: 1999,
//     job: 'Developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicence: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         console.log(this);
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${adam.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence `
//     }
// };


// console.log(adam.calcAge());
// // console.log(adam['calcAge'](1999));

// console.log(adam.age);
// console.log(adam.age);
// console.log(adam.age);

// //challenge
// //"Adam is a 38 year old developer and he has a drivers licence"

// console.log(adam.getSummary());

//LOOPS

// for loop keeps running while condition is true
// rep ++ = rep + 1
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Liting weights repetition ${rep}`);
// }


// const adam = [
//     'Adam',
//     'Palmer',
//     2037 - 1999,
//     'Coder',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];
// const types = [];

// for (let i = 0; i < adam.length; i++) {
//     //reading from adam array
//     console.log(adam[i], typeof adam[i]);


//     //Filling types array
//     types.push(typeof adam[i]);
//     // types[i] = typeof adam[i];
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('---ONLY STRINGS---')
// for (let i = 0; i < adam.length; i++) {
//     if (typeof adam[i] !== 'string') continue;

//     console.log(adam[i], typeof adam[i]);
// }

// console.log('---BREAK WITH NUMBER---')
// for (let i = 0; i < adam.length; i++) {
//     if (typeof adam[i] === 'number') break;

//     console.log(adam[i], typeof adam[i]);
//     //loop is terminated where first number is found, only printed up to number
// }


// const adam = [
//     'Adam',
//     'Palmer',
//     2037 - 1999,
//     'Coder',
//     ['Michael', 'Peter', 'Steven']
// ];

// // 0, 1, ..., 4
// //4, 3, ..., 0

// for (let i = adam.length - 1; i >= 0; i--) {
//     console.log(i, adam[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}🏋️‍♂️`);
//     }
// }

//                  WHILE LOOP


// for (let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
//     rep++;
// }


let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end');
}

