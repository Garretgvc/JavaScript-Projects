
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores � 
*/

// #1
const calcAverage = (a, b, c) => (a + b + c) / 3;

// #2
const dolphins1 = calcAverage(44,23,71);
console.log(`Dolphins: ${dolphins1}`);
const koalas1 = calcAverage(65,54,49);
console.log(`Koalas: ${koalas1}`);

// #3
function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= (avgKoalas * 2)) return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
    else if (avgKoalas >= (avgDolhins * 2)) return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
    else return `There is no winner.`
}

// #4
// Data 1
const winner1 = checkWinner(dolphins1, koalas1)
console.log(winner1); 
// Data 2
const dolphins2 = calcAverage(85, 54, 41);
console.log(`Dolphins: ${dolphins2}`);
const koalas2 = calcAverage(23, 34, 27);
console.log(`Koalas: ${koalas2}`);

const winner2 = checkWinner(dolphins2, koalas2)
console.log(winner2); 

// #5
