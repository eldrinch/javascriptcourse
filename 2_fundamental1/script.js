/*
// ***** Values and Variables *****

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;


// ***** Data Types *****

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//try to change one of the changed variables now, and observe what happens


// ***** let, const and var *****
 
language = 'portuguese';
const country = 'Brasil';
const continent = 'America';
let population = 140;
const isIsland = true;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(country);
console.log(continent);
console.log(population);


// ***** Basic Operators *****

//If your country split in half, and each half would contain half the population, then how many people would leave in each half?
console.log(population / 2);

//increase the population by 1 and log the result to the console
population++;
console.log(population);

// Finland has a population of 6 million, does your country have more people than Finland
console.log(population > 6);

//average population of a country is 33 million people. Does your country have less people than the average country?
console.log(population < 33);

//Based on the variables you created, create a nex variable 'description' which contain a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description1 =
    country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language;
console.log(description1);


// ***** Strings and Template Literals *****

//recreate the 'description' variable from the last assignment, this time using the template literal syntax
const description1 = `${country} is in ${continent} and it's ${population} million people speak ${language}`;
console.log(description1);

// ***** Taking Decisions: if / else Statements *****

//If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population ${33-population} below average`);
}

// ***** Type Conversion and Coercion *****

//1. Predict the result of these 5 operations without executing them:
'9' - '5'; //4
'19' - '13' + '17'; //'617'
'19' - '13' + 17; // 23
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2; //'1143'
// 2. Execute the operations to check if you were right

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
console.log(5 + 6); // 11
console.log(5 + 6 + '4'); //'114'
console.log(5 + 6 + '4' + 9); //'1149'
console.log(5 + 6 + '4' + 9 - 4); //1145
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143


// ***** Equality Operators: == vs. === *****

// 1 Declare a variable 'numNeighbors' based on a prompt input like this:
//prompt('How many neighbors countries does your country have?');

const numNeighbors = Number(prompt('How many neighbors countries does your country have?'));

// 2 If there is only 1 neighbor, log to the console 'Only 1 border!' (use loose equality == for now)
console.log(typeof numNeighbors);

if (numNeighbors === 1) {
    console.log('Only 1 border!')
}

// 3 Use an else-if block to log 'More than 1 border' in case 'numNeighbors' is greater than 1

else if (numNeighbors > 1) {
    console.log('More than 1 border');
}

// 4 Use an else block to log 'No borders' (this block will be executed when 'numNeighbors' is 0 or any other value)

else {
    console.log('No borders');
}

// 5 Test the code with different values of 'numNeighbors', including 1 and 0.

// 6 Change == to === , and test the code again, with the same values of 'numNeighbors'.Notice what happens when there is exactly 1 border!Why is this happening ? because a value is a string

// 7 Finally, convert 'numNeighbors' to a number, and watch what happens now when you input 1 

// 8 Reflect on why we should use the === operator and type conversion in this situation


// ***** Logical Operators *****

// 1 Comment out the previous code so the prompt doesn't get in the way

// 2 Let 's say Sarah is looking for a new country to live in. She wants to live in a country that speaks english, has less than 50 million people and is not an island.

language = 'portuguese';
const country = 'Brasil';
let population = 210;
const isIsland = false;

// 3 Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah 's criteria. Take your time with this, and check part of the solution if necessary.

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should line in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

// 4 If yours is the right country, log a string like this: 'You should live in Portugal :)'.If not, log 'Portugal does not meet your criteria :('

// 5 Probably your country does not meet all the criteria.So go back and temporarily change some variables in order to make the condition true(unless you live in Canada: D)


// *****  The switch Statement *****

const language = 'french'
switch (language) {
    case 'mandarin':
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3nd place');
        break;
    case 'hindi':
        console.log(`number 4`)
        break;
    case 'arabic':
        console.log(`5th most spoken language`)
        break;
    default:
        console.log(`Great language too :D`)
}


// ***** The Conditional (Ternary) Operator **
// 1 If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!

const country = 'Portugal';
const population = 210;
console.log(`${country}'s population is ${population>33 ? 'above' : 'below'} average`);

// 2 After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/










/*
##########################################################################################################################################################################################################################################################################################*/




/*console.log(typeof );
let js = 'amazing';
//if (js === 'amazing') alert('Java Script is FUN!');
console.log(40 + 8 + 23 - 10);
//variable name convention
let jonas_matilda = "JM";
let $function = 27;

let person = "Eldrin";
let PI = 3.1415;

let myFirstJob = "coder";
let myCurrentJob = "Developer";

console.log(myFirstJob);

// *****

let javascriptOsFun = true;
console.log(javascriptOsFun);

// console.log(typeof true);
console.log(typeof javascriptOsFun);
// console.log(typeof 23);
// console.log(typeof 'Eldrin');

javascriptOsFun = 'YES!';
console.log(typeof javascriptOsFun);

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
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Cordova';
console.log(lastName);

// ******

// Math operators
const now = 2037;
const ageEldrin = now - 1975;
const ageIsabel = now - 1975;
console.log(ageEldrin, ageIsabel);

console.log(ageEldrin * 2, ageEldrin / 10, 2 ** 3);
// 2**3 means 2 to the power 3 = 2*2*2

const firstName = 'Eldrin'
const lastName = 'Cordova'
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //5
x += 10; // x = x+10 = 25
x *= 4; // x = x*4 = 100
x++; // x = x+1
x--;
x--;
console.log(x);

// Comparison operators

console.log(ageEldrin > ageIsabel); // >, <, >=, <=
console.log(ageIsabel >= 18);
console.log(now-1975 > now-2018);

// *****

const now = 2037;
const ageEldrin = now - 1975;
const ageIsabel = now - 2018;
console.log(now - 1975 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x=y=10, x=10
console.log(x, y);

const averageAge = (ageEldrin + ageIsabel) / 2;
console.log(ageEldrin, ageIsabel, averageAge);

// *****

const firstName = 'Eldrin';
const job = 'Developer';
const birthYear = 1975;
const year = 2020;
const eldrin = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(eldrin);

const eldrinNew = `I 'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(eldrinNew);

console.log(`Just regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`); 

// *****

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license car 🚗`);
} else {
    const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years ;)`);
}

const birthYear = 1975;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Eldrin'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('25' > '18');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10
console.log(2 + 3 + 4 + '5'); //'95'
console.log('10' - '4' - '3' - 2 + '5'); //15

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Eldrin'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}

//**** 
const age = '18';
if (age === 18) console.log('You must became an adult :D(Strict) ');
if (age == 18) console.log('You must became an adult :D (loose)');

const favorite = Number(prompt(`What's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool!23 is an amazing number');
} else if (favorite === 7) {
    console.log('7 is also an amazing number');
} else if (favorite === 9) {
    console.log('Cool!23 is an amazing number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

// *****

const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) -> other way to write 'if'

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sara is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sara is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// *****

const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}

const dayWeek = 'lunes'
if (dayWeek === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (dayWeek === 'tuesday') {
    console.log('Prepare theory videos');
} else if (dayWeek === 'wednesday' || dayWeek === 'thursday') {
    console.log('Write code examples');
} else if (dayWeek === 'friday') {
    console.log('Record videos');
} else if (dayWeek === 'saturday' || dayWeek === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}



// *****
// statements(declarações) and expressions exist in JS expression produce values ang statements are like full sentences that translate are actions, actions that we want program to perform.
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Eldrin';
console.log(`I'm ${2021 - 1975} years old ${me}`)


// *****

const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
// console.log('I like to drink water');

// age >= 18 ? 'wine' : 'water'; //operator
const drink = age >= 18 ? 'wine' : 'water'; //expression
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

// 



/*
//##########################################################################################################################################################################################################################################################################################

// ***** CODING CHALLENGE 1 **** 

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1.2.3.Store Mark's and John's mass and height in variables
Calculate both their BMI's using the formula (you can even implement both versions)
Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
GOOD LUCK 😀

// const massMark = 50;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
const markHigherBMI = (bmiMark > bmiJohn);

//console.log(bmiMark, bmiJohn, markHigherBMI);


// ***** Coding Challenge #2 *****

// Use the BMI example from Challenge # 1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's BMI(28.3) is higher than John 's (23.9)!" Hint: Use an if / else statement�
// GOOD LUCK�

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's ${bmiJohn}`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's ${bmiMark}`);
}


// ***** Coding Challenge #3 *****

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1 Calculate the average score for each team, using the test data below.

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// 2 Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas is the winner of the competition`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Dolphins is draw with Koalas`);
// } else {
//     console.log(`Dolphins is the winner of the competition`)
// }

// 3 Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks😉
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(typeof scoreDolphins, typeof scoreKoalas);
console.log(scoreDolphins, scoreKoalas);

// if ((scoreKoalas > scoreDolphins) && (scoreKoalas >= 100 || scoreDolphins >= 100)) {
//     console.log(`Koalas is the winner of the competition`);
// } else if ((scoreKoalas < scoreDolphins) && (scoreKoalas >= 100 || scoreDolphins >= 100)) {
//     console.log(`Dolphins is the winner of the competition`);
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`Dolphins is draw with Koalas`);
// } else {
//     console.log(`No team wins the trophy.`)
// }

// 4 Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy. 
// Test data: §    
if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log(`Koalas win the trophy `);
} else if (scoreKoalas < scoreDolphins && scoreDolphins >= 100) {
    console.log(`Dolphins win the trophy`);
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log(`Both win the trophy`);
} else {
    console.log(`No team wins the trophy.`)
}
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110§
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123§
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
//  GOOD LUCK😀

*/

// ***** Coding Challenge #4 *****

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1 Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2 Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was  275, the tip was 41.25, and the total value 316.25”
// Test data:
//  Data 1: Test for bill values 275, 40 and 430
// Hints:
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// GOOD LUCK 😀



const bill = 275;

const tip = (bill <= 300 && bill >= 50) ? bill * 0.15 : bill * 0.2;

console.log(bill, tip, typeof bill, typeof tip);

console.log(`The bill was  ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);