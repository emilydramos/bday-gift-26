const pinDisplay = document.getElementById('pin-input');
let actualPin = ''; 
const CORRECT_PIN = '0514'; // Set your desired password here
const REDIRECT_URL = 'main.html'; // Set your destination page here

function addNumber(num) {
    if (actualPin.length < 4) { 
        actualPin += num;
        pinDisplay.value += '*'; // Appends an asterisk instead of the number
    }
}

function clearInput() {
    actualPin = '';
    pinDisplay.value = '';
}

function submitPin() {
    if (actualPin === CORRECT_PIN) {
        window.location.href = REDIRECT_URL; // Redirects the user
    } else {
        alert("Incorrect PIN. Please try again.");
        clearInput();
    }
}


// event listener for birthday image
 const image = document.getElementById('birthdaycat');

  image.addEventListener('click', () => {
    // 1. Add the spin class to trigger the animation
    image.classList.add('spin-effect');

    // 2. Remove the class after the animation finishes
    image.addEventListener('animationend', () => {
      image.classList.remove('spin-effect');
    }, { once: true }); // { once: true } ensures the listener doesn't pile up
  });