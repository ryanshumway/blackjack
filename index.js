let firstCard = '';
let secondCard = '';
let numberResult = document.getElementById('cards');
let sum = document.getElementById('sumNumbers');

let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('messageEl');
let randomNumberTotal = '';

function startGame() {
  firstCard = Math.floor(Math.random() * 11) + 1;
  secondCard = Math.floor(Math.random() * 11) + 1;
  randomNumberTotal = firstCard + secondCard;
  if (randomNumberTotal <= 20) {
    message = 'do you want to draw another card?';
  } else if (randomNumberTotal === 21) {
    hasBlackJack = true;
    message = 'You have blackjack!';
  } else {
    isAlive = false;
    message = 'rip dude!';
  }
  messageEl.textContent = message;
  numberResult.textContent = 'Cards: ' + firstCard + ' ' + secondCard;
  sum.textContent = randomNumberTotal;
}

let buttonText = document.getElementById('buttonText');
let askForNewCard = document.getElementById('buttonText');
let newCardClick = document.getElementById('thirdCard');

askForNewCard.onclick = function newCard() {
  if (buttonMessage === 'Draw Another Card') {
    if (randomNumberTotal <= 20) {
      buttonMessage = 'Draw Another Card';
      newCardNumber = Math.floor(Math.random() * 11) + 1;
      newCardClick.textContent = newCardNumber;
      sum.textContent = newCardNumber + randomNumberTotal;
    } else if (randomNumberTotal === 21) {
      hasBlackJack = true;
      buttonMessage = 'You Won!';
      newCardClick.textContent = newCardNumber;
      sum.textContent = newCardNumber + randomNumberTotal;
    } else {
      isAlive = false;
      buttonMessage = 'You Lost';
      buttonText.style.backgroundColor = 'transparent';
      buttonText.style.border = '2px solid black';
      buttonText.style.color = 'black';
      newCardClick.textContent = newCardNumber;
      sum.textContent = newCardNumber + randomNumberTotal;
    }
  }
};
