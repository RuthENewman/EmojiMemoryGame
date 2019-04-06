const memoryCards = document.querySelectorAll('.memory-card');

let cardIsFlipped = false;
let lockedBoard = false;
let firstCard
let secondCard;

memoryCards.forEach(card => card.addEventListener('click', flipCard))

function initialize() {
  shuffle();
}


function flipCard() {
  if (lockedBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!cardIsFlipped) {
    cardIsFlipped = true;
    firstCard = this;
    return;
  }
    secondCard = this;
    doCardsMatch();
}

function doCardsMatch() {
  let cardsMatch = firstCard.dataset.emoji === secondCard.dataset.emoji
  cardsMatch ? disableCards() : unflipCards()
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetCards();
}

function unflipCards() {
  lockedBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetCards();
  }, 1000)
}

function resetCards() {
  cardIsFlipped = false;
  lockedBoard = false;
  firstCard = null
  secondCard = null;
}

(function shuffle() {
  memoryCards.forEach(card => {
    let randomPosition = Math.floor(Math.random() * 12)
    card.style.order = randomPosition;
  });
})();
