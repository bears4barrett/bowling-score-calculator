const { createInterface } = require('readline');
const { bowlingScoreCalculator } = require('./bowlingScoreCalculator.js');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter player rolls: ', (playerRollsString) => {
  try {
    // parse user input string to JSON array
    const playerRolls = JSON.parse(playerRollsString);
    const scoresByFrame = bowlingScoreCalculator(playerRolls);
    console.log('Scores by frame: ', scoresByFrame);
  } catch (error) {
    console.error('Invalid JSON input, please provide an array of player rolls');
  } finally {
    rl.close();
  }
});

// to allow bowlingScoreCalculator to be used in other files
module.exports = { bowlingScoreCalculator };
