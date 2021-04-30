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

/*
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
    // 106 ##### REST PATTERN AND OARAMETERS #####
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
// 2. The first player in any player array is the goalkeeper and the others are field players. For ern unich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ieldPlayers') with ll the remaining 10 field players
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
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array)  rints each of them to the console, along with the number of goals that were scored in total mber of layer names passed in)
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

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
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
