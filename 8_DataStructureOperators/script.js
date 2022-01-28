'use strict';

const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  //thu:
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  //fri:
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  // sat:
  //[`day-${4 + 2}`]:
  [weekdays[5]]: {
    open: 0, //open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Clássico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Brochette', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', '´Pasta', 'Risotto'],
  openingHours,
  //ES¨enhanced object literals
  //openingHours: openingHours,
  // openingHours: {
  //     thu: {
  //         open: 12,
  //         close: 22,
  //     },
  //     fri: {
  //         open: 11,
  //         close: 23,
  //     },
  //     sat: {
  //         open: 0, //open 24 hours
  //         close: 24,
  //     },
  // },
  //with this method create a new array, to extract element from the other arrays
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //we create a method where pass a object into the function as an argument and the function will then immediately destructure that object, is a one argument one object
  // orderDelivery: function({obj}) {
  //     console.log(obj);
  // },
  orderDelivery(
    { starterIndex, mainIndex, time, address } // orderDelivery: function({ starterIndex, mainIndex, time, address } //104  In the function we can use default values // orderDelivery: function({ starterIndex = 1, mainIndex = 0, time = '22:00', address, })
  ) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

////////////////////////////////////////////
//######### 122 WORKING WITH STRINGS - PART2 ########
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
//Fix capitalization in name
const passenger = 'ELdRiN'; 
const passengerLower = passenger.toLowerCase(); //eldrin
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Eldrin

//Comparing E-MAILS
const email = 'hello@start.com';
const loginEmail = '  Hello@start.Com \n'

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizeEmail); //true

//Replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#','$').replace(',','.') 
console.log(priceUS); //288.97$

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));

console.log(announcement.replace(/door/g,'gate')); //using regular expression g for global

//Booleans
const plane = 'Airbus A320neo'
console.log(plane.includes('A320')); //true
console.log(plane.includes('Boeing')); //false
console.log(plane.includes('Airb'));//true

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function(items){
 const baggage = items.toLowerCase();

 if (baggage.includes('knife') || baggage.includes('gun')){
   console.log('You are NOT allowed to board');
 }else{
   console.log('Wellcome aboard!');
 }
}
checkBaggage('I have a laptop, some Food and  pocket Knife') //You are NOT allowed to board
checkBaggage('Socks and camera')//Welcome aboard!
checkBaggage('Got some snacks and a gun for protection')//You are NOT allowed to board






 






/////////////////////////////////////////////////////////
// ##### 121 WORKING WITH STRINGS - PART1 #####

// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log('');

// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log(plane[2]); //2

// console.log(airline.length); //16
// console.log('B737'.length); //4
 
// console.log(airline.indexOf('r')); //6
// console.log(airline.lastIndexOf('r')); //10
// console.log(airline.indexOf('portugal')); //-1 key sensitive
// console.log(airline.slice(4)); //Air Portugal
// console.log(airline.slice(4,7)); // Air

// console.log(airline.slice(0, airline.indexOf(' '))); //TAP
// console.log(airline.slice(airline.lastIndexOf(' ')+1)); //Portugal

// const checkMiddleSeat = function(seat){
//   //B and E are middle seats
//   const s = seat.slice(-1);
//     if(s === 'B' || s === 'E')
//       console.log('You got the middle seat');
//       else console.log('You got lucky');     
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Eldrin')); //String{'Eldrin}
// console.log(typeof new String('Eldrin')); //object
// console.log(new String('Eldrin').slice(1)); //ldrin
// console.log(typeof new String('Eldrin').slice(0)); //string

////////////////////////////////////////////
//######### 109 LOGICAL ASSIGNMENT OPERATOR #########

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests  || 10;
// // rest2.numberGuests = rest2.numberGuests  || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// // the logical knowledge assigment operator for the nullish coalescing operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assigment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

/////////////////////////////////////////////////////////
// ##### 118 DATA STRUCTURES, MODERN OPERATORS AND STRINGS #####
// There are essentially three sources of data.
// First: Form the program itself: Data written directly in source code (e.g. status message) that will be displayed on a webpage based on user actions.

// Second: From the UI user interface, Data input from the user or data written in DOM (e.g. tasks in to app the users tasks in a todo app or expenses in a budget app or anything like that.) from the web page it can either be data that the user inputs into some form or data test already written somehow in the DOM.

// Third: External Sources. Data fetched for example from web Application Cache(e.g. recipe objects) API stands for Application Programming Interface use a web API to get data from other web applications.

// We usually always have collections of data that we then need to store somewhere.  we use data structures, there are four built-in data structures in JavaScript. we need a way of deciding between them.

// The first decision What we just need
// Do we need a simple list of values? We're gonna use an array or a set.
// Do we need key value pairs?, We need an object or a map.
// Key value pair we have a way of describing the values, so by using the key, in a list like an array or a set, we simply have the values without any description

// Data from web APIs usually comes in a special data format called JSON is essentially just text so a long string but it can easily be converted to JavaScript objects because it uses the same formatting as JavaScript objects and arrays. So here we have three objects that describe recipes. Title ans a publisher values are then described using a key,  each of these recipe objects in itself can be seen as a value. Creating an array of objects is extremely common in JavaScript.
// JSON data format example;
// {
//   'count':3,
//   'recipes':[
//     {
//       'publisher': '101 cookbooks',
//       'title': 'Best pizza Dough Ever',
//     },
//   ],
// }
// Other Built-in
// Mention that there are also WeakSets and WeakMaps data structures in JavaScript.
// NON-BUILT IN JavaScript;
// There are even more data structures that are used in programming, but which are not built into JavaScript, these can be stacks, queues, linked lists, trees or hash tables.

const ARRAYS = ['code', 'eat', 'code']; // (3) ["code", "eat", "code"]
// Use when you need ORDERED list of values (might contain duplicates)
// Use when you need MANIPULATE data because there are a ton of useful array methods.

const SETS = new Set(['code', 'eat', 'code']); // Set(2) {"code", "eat"}
// Use when you need to work with UNIQUE values.
// Use when HIGH-PERFORMANCE is really important because operations like searching for an item or deleting an item from a set can be up to 10 times faster in sets than in arrays.
// Use or REMOVE DUPLICATES from ARRAYS.

// Sets, not meant to replace arrays but rather to compliment them whenever we are dealing with unique values.

const OBJECTS = {
  task: 'code',
  date: 'today',
  repeat: 'true',
};

// More TRADITIONAL key/value store ('abused' objects), because we didn't have maps before ES6
// Easier to write and access values with '.' and '[]' it is to write them and to access data by simply using the dot or the brackets operator.
// Use when you need to include FUNCTIONS (methods)
// Use when working with JSON (can convert to map)

const MAPS = new Map([
  ['task', 'code'],
  ['date', 'today'],
  ['repeat', 'true'],
]);
// Better performance
// Keys can have ANY data type
// Easy to iterate
// Easy to compute size of a map.
// Use when you simply need to map key to values,
// Use when you need keeys that are NOT strings

/*

/////////////////////////////////////////////////////////
// ##### 117 MAPS: ITERATION #####
// Other way to fill a MAP, using a array of array, where the first element is the key and the next is the value
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again!'],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours)); //we have a Map here. trick when u need a map when u have a object
console.log(hoursMap);
// Iteration is possible because MAPS are ITERABLES and the for loop is available for them, objects convert iterables when use .entries
// try to print if the key is a number
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
//const answer = Number(prompt(`Your answer`));
const answer = 3;
console.log(answer);
// observe than use a first get to compare the value 3 and then nest in other GET 'true or false' for get the value.
console.log(question.get(question.get('correct') === answer));

console.log('----- Convert a Map back to array -----');
console.log(...question);
console.log(question.entries()); // MapIterator
console.log([...question.keys()]); // (7) ["question", 1, 2, 3, "correct", true, false]z
console.log([...question.values()]); // (7) ["What is the ---","C" ---]


/////////////////////////////////////////////////////////
// ##### 116 MAPS: FUNDAMENTALS #####
// Map is a data structure that we can use to map values to keys. So, just like an object data is stored in key value pairs in maps. in maps, the keys can have any type in objects, in objects the keys are basically always strings but in maps it could even be objects, or arrays, or other maps.
const rest = new Map();
// we can fill up  the map with a set method
rest.set('name', 'Clasico Italiano');
rest.set(1, 'Firenze Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //show all content 'rest'
// console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open ;D')
  .set(false, 'We are close :(');

// To read data from a map we use the GET method. ll we need to do is to pass in the name of the key.

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// We can also check if a map contains a certain key. THe HAS method
console.log(rest.has('categories'));
rest.delete(2); //delete a key 2
//rest.clear(); //clear all keys from the object

console.log(rest.size); //the number of keys this object has, 8
// ############
rest.set([1, 2], 'Test'); //we create a key array but when we call don't work
console.log(rest.get([1, 2])); // try to call the key but is UNDEFINED the reason for that is these two arrays are actually not the same object. even though we wrote them in the same way and so, they have the same elements, they are not the same object in the heap, And, the key here is exactly this object. the key define like key and no the array call in the GET method.
// ############
// to this work we do the next, first create a variable
const array = [1, 2]; // and them
rest.set(array, 'teste');
console.log(rest.get(array)); // this show that we can use objects as map keys
// Use the map in a DOM, is the key of this map entry, and it can enable some advanced functionality.
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);

/////////////////////////////////////////////////////////
// ##### 115 SETS #####
// SETS is a collection of unique values, that means that a SET can never have any duplicates. And that property makes them useful in certain situations, the order of elements in the set is irrelevant
//CREATE a new SET
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); //Ser(3){"Pasta","Pizza","Rissoto"}
// Pass a string, is iterable
console.log(new Set('Eldrin')); //{E,l,d,r,i,n}
// to know how many are the same element
console.log(ordersSet.size);
// to know if exist or not the element
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
// to add a element
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
//to delete a element
// ordersSet.delete('Risotto');
// ordersSet.delete('Pizza'); //Delete all elements Pizza
// ordersSet.clear(); //Delete all the elements
// In sets there are no indexes. there is no way of getting values out of a set. Because if all values are unique, and if their order does not matter.
console.log(ordersSet);
//Set are iterables
for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// This way don't need create a new variable 'staffUnique'
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('eldrinrafaelcordovaherencia').size);

////////////////////////////////////////////////////////
// ##### 113 LOOPING OBJECTS: Object keys, Values and entries #####

//Property NAMES
const properties = Object.keys(openingHours);
//console.log(properties); // (3)[he return the elements properties like array]
console.log(`We are open on ${properties.length} days`); //And instead store this into a variable
let openStr = `We are open on ${properties.length} days: `;
//for (const day of Object.keys(openingHours))
for (const day of properties) {
  // use 'properties' better option like array
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// const suma = [3, 5, 7];
// let igual = `La suma e: `;
// for (const num of suma.entries()) {
//   igual += Number(num[1]);
//   console.log(num);
//   //   console.log(igual);
// }
// console.log(igual);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

for (const [key, { open, close }] of values.entries()) {
  console.log(`${key + 1}: ${open} , ${close}`);
}

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close ${close}`);
}


////////////////////////////////////////////////////////
// ##### 112 OPTIONAL CHAINING (.?) #####
// optional chaining if a certain property does not exist,then undefined is returned immediately. And so that will then avoid the error. only if the property that is before the question.
if (restaurant.openingHours && restaurant.openingHours.mon) {
  //here check if the object 'restaurant' have the property 'mon' but we need check first if openingHours exist, only if this two parameters are TRUE then we execute 'open'
  console.log(restaurant.openingHours.mon.open);
}

//console.log(restaurant.openingHours.mon.open); // Erro undefined

//WITH optional chaining
//console.log(restaurant.openingHours.mon?.open); //accept the value '0'
//console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

for (const day of days.entries()) {
  //console.log(day);
  //  const open = restaurant.openingHours[day]?.open || 'close'; //problem her because have '0' value
  const open = restaurant.openingHours[day]?.open ?? 'close'; // ? ask if the property open exist, and for accept '0' and 'undefined' values we use the nullish coalescing operator. '??'
  console.log(`On ${day}, we open at ${open}`);
}

// METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

//ARRAYS, to see if the array is empty
const users = [{ name: 'Eldrin', email: 'eldrinc@hotmail.com' }];
//const users = [];
console.log(users[0]?.name ?? 'User array empty');

//equivalent
if (users.length > 0) console.log(users[0].name);
else console.log('use array empty');


////////////////////////////////////////////////////////
// ##### 111 ENHANCED OBJECT LITERALS #####
// 'restaurant' is a object literal so you can see that because we basically wrote this object literally in our code using this curly braces syntax. ES6 introduced three ways, which make it easier:
// First off let's say that we have an object that is outside of this object. So let's take one nested object and create a separate object with it. and just write the name of the object to introduce like property inside the object.
// Second enhancement to object literals is about writing methods So in ES6 we no longer have to create a property, and then set it to a function expression, So essentially, we create a property just like we do all the other properties and then we set that to a function expression. 'test: function(som)' === 'test(som)'
// Third enhancement is that we can now actually compute property names instead of having to write them out manually and literally. And compute just means like calculate


////////////////////////////////////////////////////////
// ##### 110 LOOPING ARRAYS: THE FOR-OF LOOP #####
    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
    for (const item of menu) console.log(item); // show all elements individually of array 'menu'
    //for (const item of menu.entries()) {
    // 'item is now an array'
    //   console.log(item); // show each element and index [index, element]
    //console.log();
    //}
    for (const [i, el] of menu.entries()) {
        console.log(`${i + 1}: ${el}`);
    }
    //console.log(menu.entries()); // Array Iterator
    //console.log([...menu.entries()]); // [7(2)]


    ///////////////////////////////////////////////////////
    //##### 108 NULLISH COALESCING OPERATOR #####
    restaurant.numGuest = 0; //'0' is a falsy value
    const guest = restaurant.numGuest || 10;
    console.log(guest); // 10

    // Nullish; null and undefined (NOT INCLUDED '0' and '')
        const guestCorrect = restaurant.numGuest ?? 10;
        console.log(guestCorrect); // 0


////////////////////////////////////////////////////////
// ##### 107 SHORT CIRCUITING (&& AND ||) ##### 
    console.log('-----OR-----'); The OR operator short circuits, when the first operator is true.
    // Use ANY type data type, return ANY data type, short-circuiting
    console.log(3 || 'Eldrin');
    console.log('' || 'Eldrin');
    console.log(true || 0);
    console.log(undefined || null);
    console.log(undefined || 0 || null || 'Hello' || 23 || null);
    restaurant.numGuest = 0;
    const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
    console.log(guest1);
    const guest2 = restaurant.numGuest || 10;
    console.log(guest2);
    //PROBLEM the VALUE '0' is a problem because is a false positive
    console.log('-----AND-----'); // The AND operator short circuits, when the first value is falsy
    console.log(0 && 'Eldrin');
    console.log(7 && 'Eldrin');
    console.log(true && 0);
    console.log(undefined && null);
    console.log('Hello' && 23 && null && 'Eldrin');
    // we can use the AND operator to actually avoid an if statement like this one, where all we want to do is to check if a certain property or value actually exists.
    // if (restaurant.orderPizza) {
    //     restaurant.orderPizza('mushrooms', 'spinach');
    // }
    restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //If orderPizza exist them then the second part here will be evaluated. And so here in this second operand, we can then call the function.
    //And as for practical applications, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true.
    // ##### RESUME 'OR' AND 'AND' operator  #####
    // OR operator will return the first truthy value of all the operands or simply the last value if all of them are falsy. 
    // AND operator will return the first falsy value or the last value if all of them are truthy. 
    
    
///////////////////////////////////////////////
// ##### 105, 106 RESUME SPREAD AND REST #####
    // The SPREAD and REST syntax both look exactly the same but they work in opposite ways depending on where they are used.SPREAD operator is used where we would otherwise write values, separated by a comma. The REST pattern is basically used where we would otherwise write variable names separated by commas.
    //The REST pattern can be used where we would write variable names, separated by commas and not values separated by commas.
    
    // 106 ##### REST PATTERN AND PARAMETERS #####
    // ### DESTRUCTURING ###

    // SPREAD, because on RIGHT side of '='
    const arr = [1, 2, ...[3, 4]];
    const [a, b ...others] = [1, 2, 3, 4, 5];
    console.log(a, b, others); //  1 2 [3, 4, 5] Create array others 

    // REST, because on LEFT side of =, the rest can be collect the first and third element and add the other array, there can only ever be ONE rest element in any destructuring assignment and most be the last element. 
    const [pizza, , rissoto, ...otherFood] = [
        ...restaurant.mainMenu,
        ...restaurant.mainMenu,
    ];
    console.log(pizza, rissoto, otherFood);
    // Objects
    const { sat, ...weekdays } = restaurant.openingHours;
    console.log(sat, weekdays); //create a object only contain fri an thu!!!
    //### FUNCTIONS ###
    // rest arguments
    const add = function(...numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        console.log(sum);
    };
    add(2, 3);
    add(5, 3, 7, 2);
    add(8, 2, 5, 3, 2, 1, 4);
    const x = [23, 5, 76];
    // demo how to SPREAD open the array but the function with REST encapsulate in array again;
    add(...x);
    restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms [3]
    restaurant.orderPizza('mushrooms'); // mushrooms []
    
////////////////////////////////////////////////
// 105 ##### THE SPREAD OPERATOR #####
    // Takes all the elements from the array, and it also doesn't create new variables. we can only use it in places where we would otherwise write values separated by commas.
    const arr = [7, 8, 9];
    const badNewAr = [1, 2, arr[0], arr[1], arr[2]];
    console.log(badNewAr); // [1,2,7,8,9]
    const newArr = [1, 2, ...arr];
    console.log(newArr); // [1,2,7,8,9]
    console.log(...newArr); // 1,2,7,8,9
    console.log(1, 2, 7, 8, 9); //1,2,7,8,9
    const newMenu = [...restaurant.mainMenu, 'Gnocci'];
    console.log(newMenu); //['Pizza', '´Pasta', 'Risotto', 'Gnocci'] Creating a new array from scratch
    // Copy array
    // Spread operator create shallow copies of arrays and to merge two arrays together.
    const mainMenuCopy = [...restaurant.mainMenu];
    // join two arrays
    const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
    console.log(menu); //create a new array 'menu' with all elements from mainMenu and starterMenu
    // What is an Iterable? there are different iterables in JavaScript. are things like all arrays, strings, maps, or sets, but NOT objects. So basically, most of the built-in data structures in JavaScript are now iterables, but except objects.
    // Strings are iterables,
    const str = 'Eldrin';
    const letters = [...str, ' ', 'C.'];
    console.log(letters); // ["E","l","d","r","i","n"," ","C"]
    console.log(...str); // E l d r i n
    // ${} this not a place that expects multiple values separated by a comma,  multiple values separated by a comma are usually only expected when we pass arguments into a function, or when we build a new array.
    // console.log(`${...str}`);  //error
    //Real-world examples
    const ingredients = [
        prompt("Let's make pasta! Ingredient 1?"), //('Let\'s make pasta!')
        prompt('Ingredient 2?'),
        prompt('Ingredient 3?'),
    ];
    console.log(ingredients);
    restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
    restaurant.orderPasta(...ingredients);
    //Objects since ES2018
    const newRestaurant = { foundedIn: 1991, ...restaurant, founder: 'Guiseppe' };
    console.log(newRestaurant);//
    const restaurantCopy = {...restaurant };
    restaurantCopy.name = 'Ristorante Roma';
    console.log(restaurantCopy.name); //Ristorante Roma
    console.log(restaurant.name); // Clasico Italiano
    
    
/////////////////////////////////////////////////////
//##### 104 DESTRUCTURING OBJECTS ###
    const { name, openingHours, categories } = restaurant;
    console.log(name, openingHours, categories);
    // change the name of the property for a new name with the same values, help with third party-data
    
    // assign different variables to the property, rename the property
    const {
        name: restaurantName,
        openingHours: hours,
        categories: tags,
    } = restaurant;
    console.log(restaurantName, hours, tags);
    //Default values
    const { menu = [], starterMenu: starters = [] } = restaurant;
    console.log(menu, starters); // [] , starterMenu
    //Mutating variables
    let a = 111;
    let b = 999;
    const obj = { a: 23, b: 27, c: 14 };
    //when we start a line with a curly brace like this then JavaScript expects a code block, And since we cannot assign anything to a code block, the trick is to wrap all of this into a parenthesis.
    ({ a, b } = obj);
    console.log(a, b);
    // Nested Objects
    const {
        fri: { open: o, close: c },
    } = openingHours;
    console.log(o, c);
    // ##### Call methods inside the object ###
    restaurant.orderDelivery({
        time: '22:30',
        address: 'Via del Sole, 21',
        mainIndex: 2,
        starterIndex: 2,
    });
    restaurant.orderDelivery({
        address: 'La Cosa Nostra, 99',
        starterIndex: 3,
    });

////////////////////////////////////////////////////
// ##### 103  DESTRUCTURING ARRAY #####
    const arr = [2, 3, 4];
    const a = arr[0];
    const b = arr[1];
    const c = arr[2];
    const [x, y, z] = arr;
    console.log(x, y, z);
    console.log(arr); //the original array is not destructing
    const [first, , second] = restaurant.categories;
    console.log(first, second);
    //we change to use let because we gonna change positions
    let [main, secondary] = restaurant.categories;
    console.log(main, secondary);
    // Switching variables without destructing 
    const temp = main;
    main = secondary;
    secondary = temp;
    console.log(main, secondary);
    //other way
    [main, secondary] = [secondary, main];
    console.log(main, secondary);
    // call the method and destructuring the new array, receive 2 return values from a function
    const [starter, mainCourse] = restaurant.order(2, 0);
    console.log(starter, mainCourse);
    const nested = [2, 4, [5, 6]];
    // const [i, , j] = nested;
    // console.log(i, j);
    //destructuring array inside array, nested destructuring
    const [i, , [j, k]] = nested;
    console.log(i, j, k);
    //Default values, give value 1 to case don't have element in the array
    const [p = 1, q = 1, r = 1] = [8, 9];
    console.log(p, q, r);       


/////////////////////////////////////////////
// ###### CHALLENGES #####
    */

const odds = {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
};
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotse',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'maskerano',
    'chump',
    'chump',
    'chump',
  ],
  date: 'Nov 9th, 2031',
  odds,
};

/*
// ###### Coding Challenge #1 #####
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
// 2. The first player in any player array is the goalkeeper and the others are field players. For ern unich (team 1) create one variable ('gk') with the goalkeeper's name, and one array fieldPlayers') with ll the remaining 10 field players
const [gk, ...fieldPlayers] = players1; // the REST create a new array 'fieldPlayers'
console.log(gk, fieldPlayers);
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ayers1Final') containing all the original team1 players plus  'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and am2')
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array)  prints each of them to the console, along with the number of goals that were scored in total number of layer names passed in)
const printGoals = function(...players) {
    console.log(players); [4]
    console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored); // 4
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely in, without using an if/else statement or the ternary operator.
team1 < team2 && console.log('team1 1 is more likely to win'); // 
team1 > team2 && console.log('team1 2 is more likely to win');
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored GOOD LUCK 😀
    
///////////////////////////////////////
// Coding Challenge #2

// Let's continue with our football betting app!
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [gol, jogador] of game.scored.entries()) {
  console.log(`Goal ${gol + 1}: ${jogador} `);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const oddsGame = Object.values(odds);

let sum = 0;
for (const [team, value] of oddsGame.entries()) sum += value / oddsGame.length;
console.log(`the average odd is ${sum.toFixed(2)}`);

// The other solution
let sum1 = 0;
for (const odd of oddsGame) sum1 += odd;
sum1 /= oddsGame.length;
console.log(sum1);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const [team, odd] of Object.entries(odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
//console.log(`Odd of ... ${odd}`);
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  console.log(player);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
// GOOD LUCK 😀
*/

// ###### Coding Challenge #3 #####
/*1. Crate an array 'events' of the differret game events that happened (no duplicates)
2. After the game has finishes, is was found that the yellow card from minute 64 was unfair. So remove this event from the game log.
3. Print the following string to the console:"An event happend , on average, every 9 minutes" (keep in mind that a game has 90 minuts).
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF]17: GOAL
GOOD LUCK */

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow Card'],
//   [69, 'Red Card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow Card'],
// ]);

// const events = new Set (gameEvents.values());
// console.log(events);

// //2.
// gameEvents.delete(64);
// //3.
// consolelog(`An event happend , on average, every ${90/gameEvents.size} minutes`);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// consolelog(`An event happend , on average, every ${time/gameEvents.size} minutes`);
// //4.
// for (const [min,event]of gameEvents){
//   const half = min <= 45? 'FIRST': 'SECOND';
//   console.log(`[${half}[HALF] ${min}: ${event} `)
// }


