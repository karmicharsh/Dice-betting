// Game logic utilities
export function determineWinner(dice1, dice2) {
    if (dice1 > dice2) return "1";
    if (dice2 > dice1) return "2";
    return "D";
  }
  
  export function checkGuess(userGuess, correctAnswer) {
    const normalizedGuess = userGuess.toUpperCase().trim();
    return normalizedGuess === correctAnswer;
  }
  
  export function getResultText(dice1, dice2) {
    if (dice1 > dice2) return "🚩 Player 1 Wins!";
    if (dice2 > dice1) return "Player 2 Wins! 🚩";
    return "Draw!";
  }