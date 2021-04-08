'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//##1 Starting Conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
//##4.1 we need store que result of player in array, score player1 is position 0  and player2 is position 1
// const scores = [0, 0];
//##3.1.1 Create a variable for store the current score
// let currentScore = 0;
//##3.3.1 create e new variable to know which player is active
// let activePlayer = 0;
let scores, currentScore, activePlayer, playing;
// let playing = true;

// //##7.1 create a function 'init' for refactor all this code and add the starting conditions
// of the game
const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

//5.1 create the function for dry de code
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0; //Zero the last player's score
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // active the other player
    player0El.classList.toggle('player--active'); //toggle the class 'player--active' between the players
    player1El.classList.toggle('player--active'); //
};

//##2 Rolling dice functionality

btnRoll.addEventListener('click', function() {
    if (playing) {
        //##2.1. Need to start generating value when dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);
        //2.2 Display dice click event and show the dice
        diceEl.classList.remove('hidden');
        //2.3 associate dice to a image name property
        diceEl.src = `img/dice-${dice}.png`;

        //3. Check for rolled 1: if true, the condition is if dice ===1 change the player and zero the current score
        if (dice !== 1) {
            //##3.1 Add dice to current score
            //##3.2 currentScore = currentScore + dice; Create a variable currentScore
            currentScore += dice;
            // add the value currentScore to player active
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;
            // current0El.textContent = currentScore; // this will change when the result be one
        } //##3.3 create a variable activePlayer for define who player is active
        else {
            switchPlayer();
            // ## 3.4switch to next player, start the current score in 0
            // document.getElementById(`current--${activePlayer}`).textContent = 0; //Zero the last player's score

            // currentScore = 0;
            // activePlayer = activePlayer === 0 ? 1 : 0; // active the other player
            // player0El.classList.toggle('player--active'); //change the background with toggle the class 'player--active' between the players
            // player1El.classList.toggle('player--active');
        }
    }
});

btnHold.addEventListener('click', function() {
    //##6 create variable playing for finish the functionalities
    if (playing) {
        //##4 create array for store the sum of values from currentScore
        //##4.1 Add current score to active player's score
        scores[activePlayer] += currentScore; //scores + currentScore
        // scores[1] = scores[1] + currentScore
        //sum in score--player
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        //##4.2 Check if player's score is >=100
        if (scores[activePlayer] >= 100) {
            //##4.3 create a variable 'playing' with value default TRUE for stop
            // the execution of the code, if the condition is true them finish the game
            //6.1 Playing is false now no more functionalities eo
            playing = false;
            //##4.2.1 hidden the dice
            diceEl.classList.add('hidden');

            //##4.2.2 add to the winner player the class 'player--winner'

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            //##4.2.3 remove the class player active
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } //5 here we reuse a code use in btnRoll for than we create a
        // function for call the sniped code
        else {
            switchPlayer();
        }
    }
    //switch to the next player
});

btnNew.addEventListener('click', init);
//##7 reset all visual properties.
// //##7.1 create a function 'init' for refactor all this code
// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');