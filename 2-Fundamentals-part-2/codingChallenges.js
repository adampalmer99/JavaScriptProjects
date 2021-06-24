// Arrow function
// const calcAge = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }



// const calcAverage = (a, b, c) => (a + b + c) / 3;
// //test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koala's win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);

// //test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);
// let winner = checkWinner(scoreDolphins, scoreKoalas);

// console.log(`----------------`)
// console.log(`average age work`)

// const calcAverageAge = (a, b, c, d) => (a + b + c + d) / 4;

// const fattysAverageAge = calcAverageAge(21, 25, 56, 59);
// console.log(fattysAverageAge);

// if (fattysAverageAge > 50) {
//     console.log(`By gosh they're old!`);
// } else {
//     console.log(`Not so old bastards but still pretty old bastards`);
// }

// const ageAnalysis = function (averageAge, targetAge) {
//     if (averageAge > targetAge) {
//         console.log(`Too old`);
//     } else if (averageAge === targetAge) {
//         console.log(`good age`);
//     } else {
//         console.log(`Too young`);
//     }
// }

// let analysedAge = ageAnalysis(67, 14);



//Coding challenge 2
// my attempt
// const bill = 125;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);

// const bill2 = 555;
// const tip2 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2
// console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value was ${bill2 + tip2}`);

// const bill3 = 44;
// const tip3 = bill3 <= 300 && bill3 >= 50 ? bill3 * 0.15 : bill3 * 0.2
// console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value was ${bill3 + tip3}`);

// const tips = [tip, tip2, tip3];
// console.log(tips);

// const bills = [bill, bill2, bill3];
// console.log(bills);
// CLEAN VERSION
// const calctip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);


//Coding challenge 3

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// };


// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;

//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

//"Mark Miller's bmi (27.3) is higher than John Smith's (24.2)"

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }

//                  CODING CHALLENGE 4

const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calctip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));