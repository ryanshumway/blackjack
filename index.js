let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;

let cardsArray = [firstCard, secondCard];
cardsArray.push(4)

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
    message = 'do you want to draw another card?';
    messageEl.textContent = message;
  } else if (sum === 21) {
    hasBlackJack = true;
    message = 'You have blackjack!';
    messageEl.textContent = message;
  } else {
    isAlive = false;
    message = 'Shucks, you lost.';
    messageEl.textContent = message;
    function startGameOver() {
      buttonText.textContent = 'Start a New Game';
    }
  }
  cards.textContent = 'Cards: ' + cardsArray[0] + ' ' + cardsArray[1];
  sumDisplay.textContent = sum;
}

function newCard() {
  let thirdCard = Math.floor(Math.random() * 11) + 1;
  sum += thirdCard;
  sumDisplay.textContent = sum + thirdCard;
  renderGame();
}
