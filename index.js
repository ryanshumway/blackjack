let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;

let cardsArray = [firstCard, secondCard];

let sum = firstCard + secondCard;
let cards = document.getElementById('cards');
let sumDisplay = document.getElementById('sum');

let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('messageEl');
let buttonText = document.getElementById('buttonText');
let newCardButton = document.getElementById('drawNewCard');

newCardButton.style.opacity = '0';

function renderGame() {
  if (sum <= 20) {
    
  } else if (sum === 21) {
    
    
    messageEl.textContent = message;
  } else {
    isAlive = false;
    buttonText.textContent = 'Start Over'
  }
  cards.textContent = 'Cards: ' + cardsArray[0] + ' ' + cardsArray[1];
  sumDisplay.textContent = sum;
}

function newCard() {
  let thirdCard = Math.floor(Math.random() * 11) + 1;
  sum += thirdCard;
  sumDisplay.textContent = sum + thirdCard;
  cardsArray.push(thirdCard);
  renderGame();
}

function smartMessageEl() {
  if (sum > 21) {
    message = 'Shucks, you lost.';
    messageEl.textContent = message
  } else if (sum === 21) {
    message = 'You have blackjack!';
    messageEl.textContent = message
  } else {
    message = 'do you want to draw another card?';
    messageEl.textContent = message;
  }
}
