'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//querySelectorAll join all element with the same class and create a "Nodelist" than is like array
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal[i]).textContent); ## show the text content inside the class.
//console.log(btnsOpenModal);## show in the console the times click in the button.
//REFACTORING we use this make a valiavel with a function to call the methods than add and remove the classes handle the properties of web page

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
// btnsOpenModal[i].addEventListener('click', function() {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// });
btnCloseModal.addEventListener('click', closeModal);
// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });
overlay.addEventListener('click', closeModal);
// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

//HOw to respond to keyboard events, keyboard events === global events, we usually list and on the whole document, EventListener after document list all events happen in the page, there are three events for the keyboard
//keyup
//keypress
//keydown: when you press every key on the keyboard, in this case
document.addEventListener('keydown', function(e) {
    //I press any key
    console.log('A key was pressed');
    //information what key was hit, the function whit a push any key a event keydown, our handler function is waiting for that event to happen and when this event occurs JS generate  a object, and this contains all the information about the event itself, we can have access to information about that event in the event handler function, give a function a parameter 'e'.
    //JS call function when a keydown event happens  JS  pass in the event object as an argument, we do not call this function only defined

    console.log(e.key); // here we add to the argument the property of the object generate when the event happens. Now i actually know what key was pressed
    // if (e.key === 'Escape') {
    //     if (!modal.classList.contains('hidden')) {
    //         console.log('Escape was pressed');
    //     }
    //     closeModal();
    // }
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});