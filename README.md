Bowling Score Calculator
========================
This is a simple bowling score calculator to provide the in-progress or final player score when given an array of player rolls.

Usage
-----
```
yarn start
```
OR
```
npm start
```

It will ask you to enter the player rolls:
```
Enter player rolls:
```

Provide it with an array of rolls from the player. Use "X" for strikes and "/" for spares.

Example:
```
Enter player rolls: [1, 4, 4, 5, 6, "/", 5, 3, "X", 0, 1, 7, "/", 6, 3, "X", 2, 7]
```

Alternatively, the "bowlingScoreCalculator" method is exported to allow it to be used in other files.


Test
----
To run the tests, you must first install [jest](https://github.com/jestjs/jest).
```
yarn install
```
OR
```
npm install
```

Next you may run the tests:

```
yarn test
```
OR
```
npm test
```