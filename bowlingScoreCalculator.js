const bowlingScoreCalculator = (playerRolls) => {
  // handle invalid input
  if (!Array.isArray(playerRolls)) return 'Invalid input, please provide an array of player rolls';
  if (playerRolls.length > 21) return 'Invalid input, too many rolls';

  const scoresByFrame = [];
  let frameScore = 0;
  let frameIndex = 0;
  let roll = 1; // 1 or 2, used for open frames

  const nextFrame = () => {
    if (frameIndex < 10) {
      frameIndex++;
      scoresByFrame.push(frameScore);
      frameScore = 0;
      roll = 1;
    }
  };

  const handleFrameWithBonus = (bonus) => {
    frameScore = 10;
    if (bonus !== null) {
      frameScore += bonus;
    } else {
      frameScore = null;
    }
    nextFrame();
  };

  // iterate through the player rolls and calculate the scores by frame
  for (let i = 0; i < playerRolls.length; i++) {
    const playerRoll = playerRolls[i];
    if (isStrike(playerRoll)) {
      const strikeBonus = getStrikeBonus(playerRolls, i);
      handleFrameWithBonus(strikeBonus);
    } else if (isSpare(playerRoll)) {
      const spareBonus = getSpareBonus(playerRolls, i);
      handleFrameWithBonus(spareBonus);
    } else {
      // basic frame
      frameScore += playerRoll;
      if (roll === 2) {
        nextFrame();
      } else {
        roll++;
      }
    }
  }

  return scoresByFrame;
}

// helper functions
const isStrike = (playerRoll) => {
  return playerRoll === 'X';
}

const isSpare = (playerRoll) => {
  return playerRoll === '/';
}

const getStrikeBonus = (playerRolls, index) => {
  // get the next two rolls for the bonus
  let bonusRoll1 = playerRolls[index + 1];
  let bonusRoll2 = playerRolls[index + 2];
  // if the next two rolls are not available, return null
  if (bonusRoll1 === undefined || bonusRoll2 === undefined) return null;

  let bonus = 0;
  // add first bonus roll
  if (isStrike(bonusRoll1)) {
    bonus += 10;
  } else {
    bonus += bonusRoll1;
  }
  // add second bonus roll
  if (isStrike(bonusRoll2)) {
    bonus += 10;
  } else if (isSpare(bonusRoll2)) {
    // if the second next roll is a spare, add 10, but remove the previous roll (bonusRoll1 in this case)
    bonus += 10 - bonusRoll1;
  } else {
    bonus += bonusRoll2;
  }
  return bonus;
}

const getSpareBonus = (playerRolls, index) => {
  // get the next roll for the bonus
  let bonusRoll1 = playerRolls[index + 1];
  // if the next roll is not available, return null
  if (bonusRoll1 === undefined) return null;

  let bonus = 0;
  if (bonusRoll1 === 'X') {
    bonus += 10;
  } else {
    bonus += bonusRoll1;
  }
  return bonus;
}

module.exports = { bowlingScoreCalculator };