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
    const image1Path = `./images/dice${randNumber1}.png`;
    const image2Path = `./images/dice${randNumber2}.png`;

    console.log(`Image 1 Path: ${image1Path}`);
    console.log(`Image 2 Path: ${image2Path}`);

    document.querySelector(".img1").setAttribute("src", image1Path);
    document.querySelector(".img2").setAttribute("src", image2Path);

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
  }

  document.getElementById("playButton").addEventListener("click", rollDice);
}