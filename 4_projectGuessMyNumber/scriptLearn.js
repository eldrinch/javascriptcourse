'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 15;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
//##3 create a random number for guest ;)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//##8 introduce the score like state, out of the function.
let score = 20;
//show the best result. introduce the score
let highScore = 0;

//REFACTORING : make a function for invoke the methods, and past the parameter message into the block of the function.

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
};

//##1 first select the class and add a Listener, define first parameter the type of event and second parameter a handler function 'anonymous function', this is what gonna do when the method is happen.
document.querySelector('.check').addEventListener('click', function() {
    //##2 request the interaction with the user, store the value you get them convert in a number
    const guess = Number(document.querySelector('.guess').value);
    //##4 first scenario what the game do when the value is empty
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number');
        //##5 second scenario compare the right result with the interface user, the player wins
    } else if (guess === secretNumber) {
        //  document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number');
        // show the secret number
        document.querySelector('.number').textContent = secretNumber;

        //##10 we take the element from CSS file, is important use the ".style" property, on there specify the CSS property in camel case notation in case two words
        //Change the property background Color from style
        document.querySelector('body').style.backgroundColor = '#60b347';
        //Change the size of font
        document.querySelector('.number').style.width = '30rem';
        //the best score is stored
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    //REFACTORING : when the guest is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('message').textContent =
            //     guess > secretNumber ? 'Too high' : 'Too Low';
            displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
            score--;
            // document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');
            // document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
    }

    //##6 when the value is higher then secret number
    //else if (guess > secretNumber) {
    //##9 score is a value, number of attempts to guest the number.
    // if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    // }
    //##7 when the value is lower then secret number
    //} else if (guess < secretNumber) {
    // if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // } else {
    //     document.querySelector('.message').textContent = 'You lost the game!';
    //     document.querySelector('.score').textContent = 0;
    // }
    //}
});

///////////////////////////////////////////////////////////////////////////////////////////
//##11 Implement a game rest functionality, so that the player can make a new guess!

// 1 Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function() {
    // 2 In the handler function, restore initial values of the 'score' and 'secretNumber' variables
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // 3 Restore the initial conditions of the message, number, score and guess input fields
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.score').textContent = score;
    displayScore(score);
    // 4 Also restore the original background color(#222) and number width (15rem) GOOD LUCK 😀
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});