'use strict';
/*
// ***** Functions *****

// 1 Write a function called 'describeCountry' which takes three parameters:'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

// 2 Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console

const countryFinland = describeCountry('Finland', 6, 'Helsinki.');
const countryPeru = describeCountry('Perú', 24, 'Lima.');
const countryBrasil = describeCountry('Brasil', 210, 'Brasilia.');
console.log(countryFinland, countryPeru, countryBrasil);



// ***** Function Declarations vs. Expressions *****

// 1 The world population is 7900 million people.Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents.For example, China has 1441 million people, so it 's about 18.2% of the world population

// 2 To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

// 3 Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console

const percentChina = percentageOfWorld1(1441);
const percentPeru = percentageOfWorld1(28);
const percentBrasil = percentageOfWorld1(210);

console.log(percentChina, percentPeru, percentBrasil);

// 4 Create a function expression which does the exact same thing, called percentageOfWorld2', and also call it with 3 country populations(can be the same populations)

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}
const percentChina2 = percentageOfWorld2(1441);
const percentPeru2 = percentageOfWorld2(28);
const percentBrasil2 = percentageOfWorld2(210);

console.log(percentChina2, percentPeru2, percentBrasil2);

// Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'

const percentageOfWorld3 = population => (population / 7900) * 100;
const percentChina3 = percentageOfWorld3(1441);
const percentPeru3 = percentageOfWorld3(28);
const percentBrasil3 = percentageOfWorld3(210);

console.log(percentChina3, percentPeru3, percentBrasil3);


// ***** Functions Calling Other Functions *****

// 1 Create a function called 'describePopulation'. Use the function type you like the most. This  function takes in two arguments: 'country' and 'population', and returns a string like this: 'China  has 1441 million people, which is about 18.2% of the world.'

// function describePopulation(country, population) {
//     return `${country} has ${population} million people, which is about 18.2% of the world.'`
// }

// 2 To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier.
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

function describePopulation(country, population) {
    const percentCountry = percentageOfWorld1(population)
    return `${country} has ${population} million people, which is about ${percentCountry} of the world.'`
}

const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}
const describePopulation2 = function(country, population) {
    const percentCountry2 = percentageOfWorld2(population)
    return `${country} has ${population} million people, which is about ${percentCountry2} of the world.'`
}

const percentageOfWorld3 = population => (population / 7900) * 100;
const describePopulation3 = (country, population) => {
    const percentCountry3 = percentageOfWorld3(population)
    return `${country} has ${population} million people, which is about ${percentCountry3} of the world.'`
}

// 3 Call 'describePopulation' with data for 3 countries of your choice.

console.log(describePopulation('China', 1441));
console.log(describePopulation('Peru', 28));
console.log(describePopulation('Brasil', 210));

console.log(describePopulation2('India', 1353));
console.log(describePopulation2('Argentina', 45));
console.log(describePopulation2('Canada', 38));

console.log(describePopulation3('Thailand', 70));
console.log(describePopulation3('Spain', 47));
console.log(describePopulation3('Italia', 60));


// ***** Introduction to Arrays  *****

// 1 Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
const populations = [1441, 1353, 210, 60]

// 2 Log to the console whether the array has 4 elements or not (true or false)
console.log(populations.length === 4); //true
// 3 Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage values
const percentageOfWorld1 = function(populations) {
    return (populations / 7900) * 100;
}
const percentChina = percentageOfWorld1(populations[0]);
const percentIndia = percentageOfWorld1(populations[1]);
const percentBrasil = percentageOfWorld1(populations[2]);
const percentCanada = percentageOfWorld1(populations[3]);

const percentages = [percentChina, percentIndia, percentBrasil, percentCanada];
console.log(percentages);

const percentages1 = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages1);

//  ***** Basic Array Operations (Methods) *****
// 1 Create an array containing all the neighbouring  countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
const neighbours = ['Peru', 'Argentina', 'Colombia'];

// 2 At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
neighbours.push('Utopia');
console.log(neighbours);

// 3 Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array 
neighbours.pop();
console.log(neighbours);
// 4 If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central European country :D'`);
}

// 5 Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
neighbours[neighbours.indexOf('Argentina')] = 'Republica Argentina';
console.log(neighbours);
*/



/*
##########################################################################################################################################################################################################################################################################################


// 5 falsy : ''. 0, undefined, NaN, null.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive ;D');

// const interface = 'Audio'; // reserved word!!
// const private = 534;  // reserved word!!


function logger() {
    console.log('My name is Eldrin');
}

// ***** calling / running / invoking function *****
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juiceFruit = fruitProcessor(5, 0);
console.log(juiceFruit);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// ***** Function declaration *****
// ###  OBS: Function that can be used before it's declared. ###

const age1 = calcAge1(1975);
console.log(age1);

function calcAge1(birthYear) {
    //const age = 2021 - birthYear; other way to write this function
    return 2021 - birthYear;
}

// ***** Function expression *****

// anonymous function + simple

const numFruits = function(apples, oranges) {
    return `Juice with ${apples} apples and ${oranges} oranges.`;
};
const totalFruit = numFruits(5, 6);
console.log(totalFruit);

const calcAge2 = function(birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1975);
console.log(age1, age2);

//the function declaration cam i call before I defined different to the function expression than call after defined


// ***** Arrow Function *****

const numFruits = (apples, oranges) => `Juice with ${apples} apples and ${oranges} oranges.`;
const totalFruits = numFruits(3, 5);
console.log(totalFruits);


const calcAge = birthYear => 2021 - birthYear;
const age3 = calcAge(1975);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const calcAge = 2021 - birthYear;
    const retirement = 65 - calcAge;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1975, 'Eldrin'));
console.log(yearsUntilRetirement(2007, 'Daniel')); *
/


// ***** Functions Calling Other Functions *****
// ******* declaration way ********

function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of    oranges.`;
    return juice;
}
console.log(fruitProcessor(4, 7));


//  ******* expression way *******
const cutPieces = function(fruit) {
    return fruit * 4;
}

const fruitProcessor1 = function(apple, orange) {
    const piecesApple = cutPieces(apple);
    const piecesOrange = cutPieces(orange);
    return `Juice with ${piecesApple} pieces of apples and ${piecesOrange} pieces of oranges.`
}
console.log(fruitProcessor1(5, 7));


//  ******* arrow way *******
const cutPieces = fruit => fruit * 4;
const fruitProcessor2 = (apple, orange) => {
    const applePieces = cutPieces(apple);
    const orangePieces = cutPieces(orange);
    return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
}
console.log(fruitProcessor2(2, 3));


// const calcAge = function(birthYear) {
//     return 2021 - birthYear;
// }

// const yearUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement}`);
//         return retirement;
// } else {
//     console.log(`${firstName} has already retired`);
//     return -1
// }
// }
// console.log(yearUntilRetirement(1975, 'Eldrin'));
// console.log(yearUntilRetirement(1955, 'Doris'));


function calcAge(birthYear, firstName) {
    const age = 2021 - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}
const age = calcAge(1975, 'Eldrin');


// ***** arrays *****
// The two more important data structure at least in Javascript are arrays and objects.M
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // insert 'Jay into array'
console.log(friends);
console.log(friends[2]);
// friends = ['Bob', 'Alice'] //Assignment to constant variable, not can change all the array.

const firstName = 'Eldrin';
const eldrin = [firstName, 'Córdova', 2021 - 1975, 'developer', friends];
console.log(eldrin);
console.log(eldrin.length);

//Exercise
const calcAge = function(birthYear) {
    return 2021 - birthYear;
}
const years = [1990, 1967, 1975, 2002, 2010, 2018]

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// ***** array methods *****

const friends = ['Michel', 'Steven', 'Peter'];

//Add Elements

//friends.push('Jay');
const newLength = friends.push('Jay'); // add element in the last position of array
console.log(friends);
console.log(newLength)

friends.unshift('John'); //  add element in the first position of array
console.log(friends);


//Remove elements
//friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift() // First
console.log(friends);
console.log(friends.indexOf('Steven')); // index.Of ('element') return the index which this element is located
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); // Method includes is very restricted 23 =/= '23' whe comparative 

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/






/*
##########################################################################################################################################################################################################################################################################################

// ***** Coding Challenge #1 *****
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calcAverage = averageScore => averageScore / 3;

// scoreData1Dolphins = 44 + 23 + 71, scoreData1Koalas = 65 + 54 + 49;
// scoreData2Dolphins = 85 + 54 + 41, scoreData1Koalas = 23 + 34 + 27;

// 2. Use the function to calculate the average for both teams

// const calcTimeAverage = function(averageDolphins, averageKoalas) {
//         const avgKoalas = calcAverage(averageKoalas);
//         const avgDolphins = calcAverage(averageDolphins);
//         console.log(`Average ${avgDolphins} Koalas and average ${avgKoalas} Dolphins`);
//         if (avgKoalas > avgDolphins && (avgKoalas >= 2 * avgDolphins)) {
//             console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//             return;
//         } else if (avgDolphins > avgKoalas && (avgDolphins >= 2 * avgKoalas)) {
//             console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//             return;
//         } else {
//             console.log(`no time winner`);
//             return;
//         }
//         return calcTimeAverage;
//     }
// const checkWinner = calcTimeAverage(44 + 23 + 71, 65 + 54 + 49);
// test 1
const calcAverage1 = (a, b, c) => (a + b + c) / 3;
let scoreDolphins1 = calcAverage1(44, 23, 71);
let scoreKoalas1 = calcAverage1(65, 54, 49);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`);
    }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
//test Data 1
console.log(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins1, scoreKoalas1);
//checkWinner(549, 234)
// Test data 2
scoreKoalas1 = calcAverage1(85, 54, 41);
scoreDolphins1 = calcAverage1(23, 34, 27);
console.log(scoreDolphins1, scoreKoalas1);
checkWinner(scoreDolphins1, scoreKoalas1);
// 5. Ignore draws this time
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 
// GOOD LUCK

*/

//  ***** Coding Challenge #2 *****
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new 
// array) GOOD LUCK