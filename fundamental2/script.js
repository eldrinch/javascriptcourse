'use strict';
/*
// 5 falsy : ''. 0, undefined, NaN, null.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive ;D');

// const interface = 'Audio'; // reserved word!!
// const private = 534;  // reserved word!!

*/

function logger() {
    console.log('My name is Eldrin');
}

// calling / running / invoking function
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