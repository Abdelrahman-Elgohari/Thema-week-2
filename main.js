document.addEventListener('DOMContentLoaded', function () {
    const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
  
    let shuffledCards = shuffleArray(cardValues);
    let selectedCards = [];
    let matchedCards = [];
  
    const gameBoard = document.getElementById('game-board');
  
    // Create the game board
    shuffledCards.forEach(value => {
      const card = document.createElement('div');
      card.className = 'card';
      card.dataset.value = value;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  
    function flipCard() {
      const card = this;
  
      // Check if the card is already flipped or matched
      if (card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
      }
  
      card.classList.add('flipped');
      selectedCards.push(card);
  
      // Check if two cards are flipped
      if (selectedCards.length === 2) {
        setTimeout(checkMatch, 1000);
      }
    }
  
    function checkMatch() {
      const [card1, card2] = selectedCards;
      const value1 = card1.dataset.value;
      const value2 = card2.dataset.value;
  
      if (value1 === value2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
      } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
      }
  
      selectedCards = [];
  
      // Check if all cards are matched
      if (matchedCards.length === shuffledCards.length) {
        alert('Gefeliciteerd! Je hebt het spel gewonnen.');
      }
    }
  
    function shuffleArray(array) {
      const shuffledArray = array.slice();
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    }
  });
  