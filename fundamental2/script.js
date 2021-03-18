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

console.log(describePopulation2('India', 1441));
console.log(describePopulation2('Argentina', 28));
console.log(describePopulation2('Canada', 210));

console.log(describePopulation3('Thailand', 1441));
console.log(describePopulation3('España', 28));
console.log(describePopulation3('Italia', 210));
*/



/*
##########################################################################################################################################################################################################################################################################################*/

/*
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
// console.log(yearUntilRetirement(1975, 'Edlrin'));
// console.log(yearUntilRetirement(1955, 'Doris'));


function calcAge(birthYear, firstName) {
    const age = 2021 - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
}
const age = calcAge(1975, 'Eldrin');
*/


/*
##########################################################################################################################################################################################################################################################################################
*/

// ***** Coding Challenge #1 *****
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 
// GOOD LUCK