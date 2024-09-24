const { bowlingScoreCalculator } = require('../bowlingScoreCalculator.js');

describe('bowlingScoreCalculator', () => {
  it('should calculate a perfect game of strikes', () => {
    const playerRolls = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
    const expectedScoresByFrame = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it ('should calculate a game with all gutter balls', () => {
    const playerRolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const expectedScoresByFrame = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it ('should calculate a game with all spares', () => {
    const playerRolls = [1, '/', 2, '/', 3, '/', 4, '/', 5, '/', 6, '/', 7, '/', 8, '/', 9, '/', 1, '/', 1];
    const expectedScoresByFrame = [12, 13, 14, 15, 16, 17, 18, 19, 11, 11];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it ('should calculate a game of random rolls', () => {
    const playerRolls = [1, 4, 4, 5, 6, '/', 5, 3, 'X', 0, 1, 7, '/', 6, 3, 'X', 2, 7];
    const expectedScoresByFrame = [5, 9, 15, 8, 11, 1, 16, 9, 19, 9];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it ('should calculate an in-progress game with latest roll as a strike', () => {
    const playerRolls = [1, 4, 'X'];
    const expectedScoresByFrame = [5, null];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it('should calculate an in-progress game with latest roll as a spare', () => {
    const playerRolls = [1, 4, '/'];
    const expectedScoresByFrame = [5, null];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it ('should calculate an in-progress game with latest roll as a number', () => {
    const playerRolls = [1, 4, 9];
    const expectedScoresByFrame = [5];
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedScoresByFrame);
  });

  it ('should fail with invalid input', () => {
    const playerRolls = 'foobar';
    const expectedError = 'Invalid input, please provide an array of player rolls';
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedError);
  });

  it ('should fail with too many rolls', () => {
    const playerRolls = new Array(22).fill(0);
    const expectedError = 'Invalid input, too many rolls';
    const result = bowlingScoreCalculator(playerRolls);
    expect(result).toEqual(expectedError);
  });
});