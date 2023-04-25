
//  Step 1
const bill = 430;
const tip = bill * (bill >= 50 && bill <= 300 ? .15 : .20);
const final = bill + tip;

// step 2
console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value ${final}.`)
