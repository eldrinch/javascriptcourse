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


// ***** Introduction to Objects *****
// 1 Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments)

const myCountry = {
    country: 'Brasil',
    capital: 'Brasilia',
    language: 'Portuguese',
    population: 210,
    neighbours: ['Peru', 'Argentina', 'Paraguay'],
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland: function() {
        // this.island = this.neighbours.length === 0 ? 'true' : 'false';
        // return this.island;
        this.island = !Boolean(this.neighbours.length);
        return this.island;
    }
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// ***** Dot vs. Bracket Notation *****
// 1 Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// 2 Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
console.log(myCountry.population += 2);
console.log(myCountry['population'] -= 2);

// ***** Object Methods *****
// 1 Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// 2 Call the 'describe' method
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
// 3 Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
// Even simpler version(see why this works...)
// this.island = !Boolean(this.neighbours.length)


// ***** Iteration: The for Loop *****
// 1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console(for numbers 1 to 50): 'Voter number 1 is currently voting'
for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}


// ***** Looping Arrays, Breaking and Continuing *****
// 1 Let's bring back the 'populations' array from a previous assignment

const populations = [1441, 1353, 210, 60]

function percentageOfWorld1(populations) {
    return (populations / 7900) * 100;
}
// 2 Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld1' that you created earlier.

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

// 3 Confirm that 'percentages2' contains exactly the same values as the 'percentages' array that we created manually in the previous assignment, and reflect on how much better this solution is



// ***** Looping Backwards and Loops in Loops *****

// 1 Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let y = 0; y < listOfNeighbours[i].length; y++) {
        // console.log(`${listOfNeighbours[y] }`);
    }
    console.log(listOfNeighbours[i]);
}


// 2 Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country 
// 3 You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉


// ***** The while Loop *****
// 1 Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')

const populations = [1441, 1353, 210, 60]

function percentageOfWorld1(populations) {
    return (populations / 7900) * 100;
}

const percentages3 = [];

let i = 0;
while (i < populations.length) {
    let perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;

}
console.log(percentages3);

// 2 Reflect on what solution you like better for this task: the for loop or the while
// loop?
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


// ***** ARRAYS methods *****

const friends = ['Michel', 'Steven', 'Peter'];


//Add Elements
//friends.push('Jay'); //insert the element 'Jay' to the object, position: final.
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

//  ***** Objects ******

// Define key value pairs, give a name to value elements from array, then we can give each of these values from array a name. the curly braces are to define a new object, fill up this object with key value pairs, the key is the variable name, then a colon and then the value, this can be any type that we want here, separate the other value with commas, ARRAYS is used more for order data, and OBJECTS for more unstructured data.

const eldrinArray = [
    'Eldrin',
    'Córdova',
    2021 - 1975,
    'developer', ['Michael', 'Peter', 'Steven']
];
// this OBJECT called eldrin has five properties, this is called the object literal syntax.
const eldrin = {
    firstName: 'Eldrin', // each of these keys is called property, property 'firstName' with value 'Eldrin'
    lastName: 'Córdova',
    age: 2021 - 1975,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven']
};

// how to retrieve elements from object
console.log(eldrin);
console.log(eldrin.lastName);
console.log(eldrin['lastName']);

const nameKey = 'Name';
console.log(eldrin['first' + nameKey]); // JS add name to first and make a string inside the bracket
console.log(eldrin['last' + nameKey]);

// console.log(jonas.'last' + nameKey) hear have a problem of unexpected string we need a brackets for make a string.

const interestedIn = prompt('What do you want to  know about Eldrin? Choose between, firstName, lastName, age, job, and friends');

if (eldrin[interestedIn]) {
    console.log(eldrin[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
}

//how to introduce properties in the object
eldrin.location = 'Brasil';  // create the property 'location" and insert the value 'Brasil'
eldrin['twitter'] = '@eldrincordova'; // create the property 'twitter" and insert the value '@eldrincordova'
console.log(eldrin);

//Challenge
//'Eldrin has 3 friends, and his best friend is called Michael'
console.log(`${eldrin.firstName} has ${eldrin.friends.length} friends, and his best friend is called ${eldrin.friends[0]} `);

// search OPERATORS : mdm operators precedence


// ***** OBJECT METHODS *****

const eldrin = {
    firstName: 'Eldrin', // each of these keys is called property, property 'firstName' with value 'Eldrin'
    lastName: 'Córdova',
    birthYear: 1975,
    job: 'Developer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function(birthYear) { //this is a function type "expression" inside the object call METHOD
    //     return 2021 - birthYear;
    // }

    // calcAge: function() { // using METHOD 'this' to fill the function, this <> 'name of the object'.
    //     console.log(this);
    //     return 2021 - this.birthYear;
    // }

    calcAge: function() { // using METHOD 'this' to fill the function, this <> 'name of the object'.
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense? 'a': 'no'} drivers license.`
    }
};

// console.log(eldrin.calcAge(1975));
// console.log(eldrin['calcAge'](1975)); //Other way to call the method with brackets
console.log(eldrin.calcAge());

console.log(eldrin.age);
console.log(eldrin.age);
console.log(eldrin.age);

//Challenge
// "Eldrin is 46 years old developer, and he has a driver's license"

console.log(eldrin.getSummary());


// ***** Iteration The for Loop *****


// for loops keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);

} 

// Looping arrays, Breaking and Countinuing
const eldrin = [
    'Eldrin',
    'Córdova',
    2021 - 1975,
    'developer', ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

// eldrin[5 does NOT exist]
for (let i = 0; i < eldrin.length; i++) {
    console.log(eldrin[i], typeof eldrin[i]);

    // Filling the types array 
    // types[i] = typeof eldrin[i];

    types.push(typeof eldrin[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020, 1975];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}
console.log(ages);


//continue and break
console.log('---- ONLY STRINGS ----');
for (let i = 0; i < eldrin.length; i++) {
    if (typeof eldrin[i] !== 'string') continue;
    console.log(eldrin[i], typeof eldrin[i]);
}

console.log('---- BREAK WITH NUMBERS ----');
for (let i = 0; i < eldrin.length; i++) {
    if (typeof eldrin[i] === 'number') break;
    console.log(eldrin[i], typeof eldrin[i]);
}
// ***** LOOPING BACKWARDS AND LOOPS IN LOOPS ***** 

for (let i = eldrin.length - 1; i >= 0; i--) {
    console.log(i, eldrin[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-----Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
    }
}
*/

// ***** The While LOOP *****
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE:  Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//     console.log(`Tou rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

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


//  ***** Coding Challenge #2 *****
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100

// ***** description way ***** 
// function calcTip(bill) {
//     if (bill <= 300 && bill >= 50) {
//         console.log(bill * 0.15);
//     } else {
//         console.log(bill * 0.2);
//     }
// }

// ***** expression way *****
const calcTip = function(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

//  ***** arrow way *****
// const calcTip = bill => bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0;

// 2. And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125, 555, 44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];
console.log(total);
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) GOOD LUCK



//  ***** Coding Challenge #3 *****
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

}
markMiller.calcBMI(); // we need call this method for insert the property bmi into the object. need to explicited called.

const johnSmit = {
    fullName: 'John Smit',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}
johnSmit.calcBMI();

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
console.log(markMiller);
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (markMiller.bmi > johnSmit.bmi) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi} is higher than ${johnSmit.fullName}'s BMI (${johnSmit.bmi}) `)
} else if (johnSmit.bmi > markMiller.bmi) {
    console.log(`${johnSmit.fullName}'s BMI (${johnSmit.bmi} is higher than ${markMiller.fullName}'s BMI (${markMiller.bmi} ) `)
}

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// GOOD LUCK



// ***** Coding Challenge #4 *****
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

const calcTip = function(bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bill.length; i++) {
    const tip = calcTip(bill[i]);
    tips.push(tip);
    totals.push(tip + bill[i]);
}
// This is not necessary solution is more simple
// for (let y = 0; y < tips.length; y++) {
//     const total = tips[y] + bill[y];
//     totals.push(total);
// }
console.log(bill, tips, totals);


// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays.


// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to 
// solve it:
// const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]; 
//     const average = sum / i + 1;
//     console.log(average, sum)
// }
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
const calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        //sum = sum +arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([1, 2, 3]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements) 
// 4.3. Call the function with the 'totals' array GOOD LUCK
*/