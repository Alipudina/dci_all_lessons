
var randomNumber = 777;
var standardWinnings = 10;
var jackpot = 1000;

if (randomNumber < 500) {
  standardWinnings = 0;
} else if (randomNumber < 700  || randomNumber >= 800 && randomNumber < 900) {
  standardWinnings = standardWinnings * 2;
} else if (randomNumber < 800) {

  switch (randomNumber) {
    case 777:
      standardWinnings = jackpot;
      break;
    case 778:
      standardWinnings = jackpot / 5;
      break;
    case 776:
      standardWinnings = jackpot / 2;
      break;
    default:
      standardWinnings = standardWinnings * 10;
  }

} else {
  standardWinnings = standardWinnings * 5;
}

console.log(`Total Winnings: ${standardWinnings}`);
