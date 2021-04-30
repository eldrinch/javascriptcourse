'use strict';
/*
function calcAge(birthYear) {
    const age = 2021 - birthYear;

    function printAge() {
        // const output = `${firstName}, You are ${age}, born in ${birthYear}`;

        let output = `${firstName}, You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //Create NEW variable with same name as outer scope's variable
            const firstName = 'Rafael';
            //Reassingning outer scope's variable
            output = 'NEW OUTPUT';

            const str = `Oh and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str); ## var, JS cant find
        console.log(millenial);
        // console.log(add(2,5)); if we delete 'strcit mode' this gonna work
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Eldrin';
calcAge(1985);
// console.log(age); ## here in the global scope we do not have
// printAge();## access to any variables defined in any other scope.


// ##### When call the functions before you declare de variables. #####

// Try use this variables before define
//variables
console.log(me); //undefined
// console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
//console.log(year);

var me = 'Eldrin';
let job = 'teacher';
const year = 1975;

//Function
// We try to use this functions before define
console.log(addDecl(2, 3)); // here we call the number and hoisting is ok
console.log(addExpr(2, 3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow(2, 3)); //script.js:57 Uncaught ReferenceError: Cannot access 'addArrow' before initialization

// Functions declarations

function addDecl(a, b) {
    return a + b;
}

// Functions expression
// if change const to var we get different error
const addExpr = function(a, b) {
    //When the variable is CONST; Uncaught ReferenceError: Cannot access 'addExpr' before initialization
    //when change to VAR; Uncaught TypeError: addExpr is not a function
    return a + b;
};

//Arrow function

// when change to VAR get the next error; Uncaught TypeError: addArrow is not a function
var addArrow = (a, b) => a + b;


// let do example and attention because we get 'All products deleted' even though numProducts is actually 10
// So why did that happen? HOISTING the parameter !numProducts === undefined
//And that's because of the way hoisting works with var variables
console.log(numProducts); // the console show numProducts === undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}
// JUST DON'T USE VAR TO DECLARE VARIABLES Use CONST most of the time to declare variables
// and LET, if you really need to change, in order to write clean code you should declare
// your variables at the top of each scope.
// Always declare all your functions first, and use them only after the declaration

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// Look window object and see the properties WINDOW on console.
// Variables declared with VAR will create a property on the global window object.


// ##### the this keyword #####
// The 'this' keyword, will always take the value of the owner of the function
// in which, the this keyword is used. that it points to the owner of that function
// the  value of this keyword is not static, it's not always the same, its value
// is only assigned when the function is actually called.

// ++ METHOD this = <Object that is calling th method>

const eldrin = {
    firstName: 'Eldrin',
    year: 1975,
    calcAge: function() {
        return 2021 - this.year;
    },
};
eldrin.calcAge();

// ++ Simple function call this = undefined (In 'strict' mode) Otherwise

// ++ Arrow Functions this = <this of surrounding function (lexical this)>
// because it simply gets picked up from the outer lexical scope of the arrow
// function, arrow functions do not get their own 'this' keyword.

// ++ Event Listener this = <DOM element that the handler is attaches to>

// ++ 'this' will never point to the function, does NOT point to the function itself
// an also NOT the its variable environment

// These are two pretty common misconceptions


console.log(this);

// 'this' function expression
const calcAge = function(birthYear) {
    console.log(2021 - birthYear);
    console.log(this); // undefined
};
calcAge(1975);

// 'this' arrow function
const calcAgeArrow = birthYear => {
    console.log(2021 - birthYear);
    console.log(this); // window
};
calcAgeArrow(1985);

// 'this' inside of method
const eldrin = {
    year: 1975,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);
    },
};
eldrin.calcAge();

const maria = {
    year: 1985,
};

maria.calcAge = eldrin.calcAge; // we simply copy the calcAge method from eldrin to maria
maria.calcAge();

const f = eldrin.calcAge;
f(); //undefined


// var firstName = 'Maria'; //IN this case var create a property 'Maria' in window

const eldrin = {
    firstName: 'Eldrin',
    year: 1975,
    calcAge: function() {
        console.log(this);
        console.log(2021 - this.year);

        // First solution for use 'this  inside a regular function,
        // const self = this;
        //const isMillenial = function() {
        // console.log(this);
        //        console.log(self);
        // console.log(this.year >= 1981 && this.year <= 1996);
        //      console.log(self.year >= 1981 && self.year <= 1996);
        // };

        //Second solution
        const isMillenial = () => {
            // console.log(this);
            console.log(this);
            // console.log(this.year >= 1981 && this.year <= 1996);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    // YOU SHOULD NEVER EVER USE A ARROW FUNCTION AS A METHOD, always just use a
    // normal function expression
    // greet: () => {
    // console.log(this); // window
    //    console.log(`Hey ${this.firstName}`); //undefined
    //},
    // Use a function expression
    greet: function() {
        // console.log(this); // window
        console.log(`Hey ${this.firstName}`); //undefined
    },
};

eldrin.greet();
eldrin.calcAge();

// 'arguments' keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(3, 4, 7, 12);

// 'arguments' keyword doesn't work with arrow function, only in express and regular functions
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow(8, 2, 9);
*/

//##### PRIMITIVES VS OBJECTS (PRIMITIVE VS REFERENCE TYPES)
let age = 46;
let oldAge = age;
age = 47;
console.log(age);
console.log(oldAge);

const me = {
    firsName: 'Eldrin',
    age: 30,
};

const friend = me;
friend.age = 40;
console.log('friend:');

// PRIMITIVES ; Number, String, Boolean, Undefined, Null, Symbol, BigInt
// OBJECTS; Object literal, Arrays, Functions, Many more...
//## Primitives Types
let lastName = 'Gaspar';
let oldLastName = lastName;
lastName = 'Cordova';
console.log(lastName, oldLastName);

//## Reference Types
const maria = {
    firstName: 'Maria',
    lastName: 'Gaspar',
    age: 27,
};

const marriedMaria = maria;
marriedMaria.lastName = 'Cordova';
console.log('Before married: ', maria);
console.log('After Married: ', marriedMaria);

// we cant say 'marriedMaria' is equal a new empty object not possible because create a new position in the memory
// and therefore the reference to that position in memory will have to change here in this variable 'marriedMaria'
// in the STACK its a CONST and we cant not change a value in the STACK for this nor work
// Better is create a new object and don't try change the properties
//marriedMaria = {};

//## COPY OBJECTS
// FOR the copy the Object
const isabel = {
    firstName: 'Isabel',
    lastName: 'Gaspar',
    age: 27,
    family: ['Silvia', 'Fernanda'],
};

//create a new object in the HEAP and 'isabelCopy' is pointing to that object
const isabelCopy = Object.assign({}, isabel);
isabelCopy.lastName = 'Cordova';
console.log('Before married: ', isabel);
console.log('After Married: ', isabelCopy);
// attention this copy is not deep enough to change the object inside this object 'family'
// we'll use a property and library for resolve this problem