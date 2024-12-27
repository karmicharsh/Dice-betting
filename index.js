import { determineWinner, checkGuess, getResultText } from './gameLogic.js';

export function setupDiceGame() {
  let playCount = 0;
  const maxPlays = 5;
  
  function createPlayAgainButton() {
    const button = document.createElement('button');
    button.textContent = 'Play Again';
    button.className = 'play-again-btn';
    button.onclick = rollDice;
    document.querySelector('.container').appendChild(button);
  }
  
  function rollDice() {
    const randNumber1 = Math.floor(Math.random() * 6) + 1;
    const randNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Update dice images
    document.querySelector(".img1").setAttribute("src", `./images/dice${randNumber1}.png`);
    document.querySelector(".img2").setAttribute("src", `./images/dice${randNumber2}.png`);
    
    const correctAnswer = determineWinner(randNumber1, randNumber2);
    const resultText = getResultText(randNumber1, randNumber2);
    
    // Get user's guess
    const userGuess = prompt("Which Player are you betting on? (Enter 1 for Player 1, 2 for Player 2, or D for Draw)");
    
    if (userGuess === null) {
      document.querySelector("h1").innerHTML = "Game cancelled!";
      return;
    }
    
    const isCorrect = checkGuess(userGuess, correctAnswer);
    const feedbackText = isCorrect ? "🎉 You won the bet!" : "😢 Better luck next time!";
    
    document.querySelector("h1").innerHTML = `${resultText}<br><span class="feedback">${feedbackText}</span>`;
    
    // Show play again button after first play
    if (!document.querySelector('.play-again-btn')) {
      createPlayAgainButton();
    }
    
    playCount++;
    if (playCount === maxPlays) {
      showEnjoymentBanner();
    }
  }
  
  function showEnjoymentBanner() {
    const banner = document.createElement('div');
    banner.className = 'enjoyment-banner';
    banner.innerHTML = `
      <div class="banner-content">
        <h3>Are you enjoying the game?</h3>
        <button onclick="handleEnjoyment(true)">Yes</button>
        <button onclick="handleEnjoyment(false)">No</button>
      </div>
    `;
    document.body.appendChild(banner);
  }
  
  // Expose these functions globally for the onclick handlers
  window.handleEnjoyment = function(enjoyed) {
    if (!enjoyed) {
      alert("It's not like you don't have to sign up!");
    }
    window.location.href = './login.html';
  };
  
  // Set up initial click handler
  document.querySelector("#playButton").addEventListener("click", rollDice);
}