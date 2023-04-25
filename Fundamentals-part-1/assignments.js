//  ---- Values and Variables ----  //
//  #1
const country = 'United States';
const continent = 'North America';
let population = 374774106;

//  #2
console.log(country);
console.log(continent);
console.log(population);
console.log('');

//  ---- Data Types ----  //
//  #1
const isIsland = false;
let language;

//  #2
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log('');

//  ---- let, const, and var ----  //
//  #1
language = 'English';

//  #2
// change country, continent, and isIsland to const

//  #3
// continent = 'No-Earth America';
// uncaught TypeError: Assignment to constant variable

//  ---- Basic Operations ----  //
//  #1
countryHalves = population / 2;
console.log(countryHalves);

//  #2
population += 1;
console.log(population);

//  #3
let finlandPop = 6000000;
console.log( finlandPop < population);

//  #4
averagePop = 33000000;
console.log(population < averagePop);

//  #5
let description = country + ' is in ' + continent + ", and it's " + population + ' people speak ' + language;
console.log(description);
console.log('');

//  ---- Strings and Template Literals ----  //
//  #1
description = `${country} is in ${continent}, and it's ${population} people speak ${language}.` 

//  ---- if / else Statements ----  //
//  #1
if (population > 33000000) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33000000 - population} below average.`)
}

//  #2
// population  = 13000000;
if (population > 33000000) {
    console.log(`${country}'s population is above average.`);
} else {
    console.log(`${country}'s population is ${33000000 - population} below average.`)
}
console.log('');


//  ---- Type Conversion and Coercion ----  //
//  #1
console.log('9' - '5'); // 4
console.log('19' - '13' + '17 '); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // Fasle
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143
console.log('');


//  ---- Equality Operators: == vs. === ----  //

//  #1
// const numNeighbours = Number( prompt('How many neighbour countries does your country have?'));

//  #2
// if (numNeighbours === 1) console.log('Only 1 border!');

//  #3
// else if (numNeighbours > 1) console.log('More than 1 border.')

//  #4
// else console.log('No borders.')

//  ----  Logical Operators ----  //

//  #1
if ( language === 'English' && population <= 50,000,000 && isIsland === false) {
    console.log(`You should live in ${country}. 😀`)
} else {
    console.log(`${country} does not meet your criteria. 😐`)
}
console.log(' ');

//  ----  The switch Statement ----  //

//  #1
switch(language) {
    case 'Chinese':
    case 'Mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'Spanish':
        console.log('2nd place in number of native speakers.');
        break;
    case 'English':
        console.log('3rd place.');
        break;
    case 'Hindi':
        console.log('Number 4.');
        break;
    case 'Arabic':
        console.log('5th most spoken language.');
        break;
    default:
        console.log('Great language too. 😀')
}
console.log(' ')

//  ----  The Conditional (Ternary) Operator ----  //

//  #1
console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average.`)

