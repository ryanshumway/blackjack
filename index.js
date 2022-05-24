let firstCard = Math.floor(Math.random() * 11) + 1;
let secondCard = Math.floor(Math.random() * 11) + 1;
let cardsArray = [firstCard, secondCard];

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let message = '';

let cardsEl = document.getElementById('cards-el');
let sumDisplay = document.getElementById('sum');
let messageEl = document.getElementById('messageEl');
let buttonText = document.getElementById('buttonText');
let newGameText = document.getElementById('newGameButton');
let newCardButton = document.getElementById('drawNewCard');

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cardsArray.length; i++) {
    cardsEl.textContent += cardsArray[i] + " "
  }
  sumDisplay.textContent = sum;
  if (sum <= 20) {
    message = 'do you want to draw another card?';
  } else if (sum === 21) {
    message = 'You have blackjack!';
    hasBlackJack = true
  } else {
    isAlive = false;
    buttonText.textContent = 'Start Over'
    message = 'Shucks, you lost.';
  }
  messageEl.textContent = message
}

function newCard() {
  let thirdCard = Math.floor(Math.random() * 11) + 1;
  sum += thirdCard;
  cardsArray.push(thirdCard);
  renderGame();
}

function isGameOver() {
  if (sum < 21) {
    buttonText.style.display = 'none'
    newGameText.style.display = true
  } else if (sum > 21) {
    buttonText.style.display = 'none'
  } else if(sum < 21) {
    newGameText.style.display = 'none'
  }
}