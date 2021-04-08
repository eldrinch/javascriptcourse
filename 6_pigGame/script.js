'use strict';

const player0El = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

console.log(score1El.textContent);

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

let playing = true;

const onBtnRoll = function() {
    btnRoll.addEventListener('click', function() {
        if (playing) {
            const dice = Math.trunc(Math.random() * 6) + 1;
            diceEl.classList.remove('hidden');
            diceEl.src = `img/dice-${dice}.png`;

            if (dice !== 1) {
                currentScore += dice;
                document.getElementById(
                    `current--${activePlayer}`
                ).textContent = currentScore;
            } else {
                switchPlayer();
            }
        }
    });
};
const onBtnHold = function() {
    btnHold.addEventListener('click', function() {
        if (playing) {
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent =
                scores[activePlayer];
            if (scores[activePlayer] >= 10) {
                playing = false;

                diceEl.classList.add('hidden');
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.add('player--winner');
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.remove('player--active');
            } else {
                switchPlayer();
            }
        }
    });
};

btnNew.addEventListener('click', function() {
    console.log(true);
    if (playing == false) playing == true;
    onBtnRoll();
    onBtnHold();
});