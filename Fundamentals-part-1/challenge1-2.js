//  ------ Challenge #1 ------ //

function BMICalculator(height, weight){
    let mass = weight / (height **2);
    return mass;
}

//  Test #1
let markHeight = 1.69;
let  markWeight = 78;
let markBMI =  BMICalculator(markHeight, markWeight);
// console.log(markBMI);

let johnHeight = 1.95;
let johnWeight = 92;
let johnBMI = BMICalculator(johnHeight, johnWeight);
// console.log(johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//  Test #2
// markHeight = 1.88;
// markWeight = 95;
// markBMI = BMICalculator(markHeight, markWeight);
// // console.log(markBMI);

// johnHeight = 1.76;
// johnWeight = 85;
// johnBMI = BMICalculator(johnHeight, johnWeight);
// // console.log(johnBMI);

// markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

//  ------ Challenge #2 ------ //

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${Math.round(markBMI * 10) / 10}) is higher than John's BMI (${Math.round(johnBMI * 10) / 10}).`);
} else {
    console.log(`John's BMI (${Math.round(johnBMI * 10) / 10}) is higher than Marks's BMI (${Math.round(markBMI * 10) / 10}).`)
}
