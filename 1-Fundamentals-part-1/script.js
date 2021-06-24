/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Adam");
console.log(23);

let firstName = "Adam";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name conventions
let adam_matilda = "AM";
let $function = 27;

let person = "Adam";
let PI = 3.1415;



let myFirstJob = "Lagger";
let myCurrentJob = "Programmer";

console.log(myFirstJob);
console.log(myCurrentJob);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Adam");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";

lastName = "palmer";
console.log(lastName);


//maths operators
const now = 2037;
const ageAdam = now - 1991;
const ageSarah = now - 2018;
console.log(ageAdam, ageSarah);

console.log(ageAdam * 2, ageAdam / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = "Adam";
const lastName = "Palmer";
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x-- // = 99
console.log(x);

//comparison operators
console.log(ageAdam > ageSarah); //>, <, >=, <=
console.log(ageAdam < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageAdam = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageAdam + ageSarah) / 2;
console.log(ageAdam, ageSarah, averageAge);


const firstName = "Adam";
const job = "Coder";
const birthYear = 1999;
const year = 2037


const Adam = "I'm " + firstName + ", a " + (year - birthYear) + "years old " + job + "!";
console.log(Adam);

const adamNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(adamNew);

console.log(`string
with
multiple
lines`);



const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving licence 😁`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😒`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// type conversion
const inputYear = `1999`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// type coercion
console.log(`I am ` + 21 + ` years old`)
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1
console.log(n); // '1' + 1 = 11, n = 11, 11 - 1 = 10. 1 string plus autmatically converted string


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Adam'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

//eg 2
const money2 = 100;
if (money2) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!");
}

//eg 3: height is undefined as it hasnt been assigned a value, so height is a falsy value
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is UNDEFINED");
}

let height2 = 123;
if (height2) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is UNDEFINED");
}


let height3 = 0;
if (height3) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is UNDEFINED");
}

//try to use strict equality operator in most cases, baso avoid ==
const age = '18';
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");


const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
    console.log("7 is also a cool number!")
} else if (favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23, 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

//Boolean notes↓
const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// const shouldDrive = hasDriversLicence && hasGoodVision;

// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}



//SWITCH STATEMENTS
const day = "monday";

switch (day) {
    case "monday":  //day === 'monday'
        console.log("Plan course structure");
        console.log("Go to coding meet up");
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend🍺');
        break;
    default:
        console.log('Not a valid day!');
}



if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to coding meet up");
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log("Record videos");
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend🍺');
} else {
    console.log('Not a valid day!');
}
// both of these achieve the same results⚠


3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = "23 is bigger";
}
const me = 'Adam';
console.log(`I'm ${2037 - 1991} years old ${me}`);

//ternary operator

const age = 23;
age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
 */

