const memoryCards = document.querySelectorAll('.memory-card');

memoryCards.forEach(card => card.addEventListener('click', flipCard))

function flipCard() {
  this.classList.toggle('flip');
}
