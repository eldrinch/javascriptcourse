'use strict';

// ########### 131 FUNCTION ACCEPTING CALLBACK FUNCTIONS ###########
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`); //Original string: JavaScript is the best! || Original string: JavaScript is the best!
  console.log(`Transformed String ${fn(str)}`); //Transformed String JAVASCRIPT is the best! || Transformed String javascriptisthebest!
  console.log(`Transformed by: ${fn.name}`); //Transformed by: upperFirstWord  Transformed by: oneWord
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('^|^');
};

document.body.addEventListener('click', high5);

['Eldrin', 'Isabel', 'Daniel', 'Cristian'].forEach(high5b);

const tema = oneWord('La Cosa Loca de la Vita');
console.log(tema);

// ########### 130 FIRST CLASS AND HIGUER-ORDER FUNCTIONS ###########

// ########### 129 HOW PASSING ARGUMENTS WORKS: VALUE vs REFERENCE ###########

// const flight = 'LH123';
// const eldrin = {
//   name: 'Eldrin Córdova',
//   passport: 123456789,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LP456';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 123456789) {
//     alert('Check in');
//   } else {
//     alert('Wrong passwort');
//   }
// };

// checkIn(flight, eldrin); //Check in
// console.log(flight); //LH123
// console.log(eldrin); //{name: 'Mr. Eldrin Córdova', passport: 123456789}

// //Is the same as doing
// const flightNum = flight;
// const passenger = eldrin;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(eldrin);
// checkIn(flight, eldrin); //wrong password
// console.log(eldrin);

//Passing by Value & Passing by Reference, JS dont have passing by reference only  passing by value

// ########### 128 DEFAULT PARAMETERS ###########
// const bookings = [];

// const createBooking = function(only
//   flightNum,
//   numPassengers =1,
//   price=199*numPassengers){

//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   }
//   console.log(booking);
//   bookings.push(booking)

// }

// createBooking('LAH123') //{flightNum: 'LAH123', numPassengers: undefined, price: undefined}
// createBooking('LAH123',2,800 ) //{flightNum: 'LAH123', numPassengers: 2, price: 800}
// createBooking('LAH123',5) //{flightNum: 'LAH123', numPassengers: 5, price: 995}
// createBooking('LAH123',undefined,700) //{flightNum: 'LAH123', numPassengers: 1, price: 700}
