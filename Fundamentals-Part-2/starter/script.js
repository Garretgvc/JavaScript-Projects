// -------- Functions -------- //
// #1
function describeCountry(country, population, capitalCity) {
    const countryInfo = `${country} has ${population} million people and it's capital is ${capitalCity}.`;
    return countryInfo;
};

// #2
const Finland = describeCountry('Finland', 6, 'Helsinki');
console.log(Finland);
const UnitedStates = describeCountry('United States', 332, 'Washington DC');
console.log(UnitedStates)
console.log('');


// -------- Function Declarations vs. Expressions -------- //
// #1 Declaration Funtion
function percentageOfWorld1(population) {
    const output = (population / 7900) * 100;
    const percent = `${output.toFixed(2)}%`;
    return percent;
}

// #3
const china = percentageOfWorld1(1441);
console.log(china);

const usa = percentageOfWorld1(332);
console.log(usa);

const india = percentageOfWorld1(1408);
console.log(india);

// #4 Function Expression
const percentageOfWorld2 = function (population) {
    const output2 = (population / 7900) * 100;
    return `${output2.toFixed(2)}%`
}

const china2 = percentageOfWorld2(1441);
console.log(china2);

const usa2 = percentageOfWorld1(332);
console.log(usa2);

const india2 = percentageOfWorld1(1408);
console.log(india2);
console.log('');


// -------- Arrow Function -------- //
// #1
const percentageOfWorld3 = population => {
    const percent2 = (population / 7900) * 100;
    return `${percent2.toFixed(2)}%`;
}
const china3 = percentageOfWorld2(1441);
console.log(china3);

const usa3 = percentageOfWorld1(332);
console.log(usa3);

const india3 = percentageOfWorld1(1408);
console.log(india3);
console.log('');


// -------- Functions Calling Other Functions -------- //
// #1 
    // Applying DRY by using a function from another lecture.
const describePopulation = (country, population) => {
    const percentpopulation = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is abouut ${percentpopulation} of the world.`
}

// #2
const china4 = describePopulation('China', 1441);
console.log(china4);
const usa4 = describePopulation('United States', 332);
console.log(usa4);
const india4 = describePopulation('India', 1408);
console.log(india4);
console.log('');


// -------- Introduction to Arrays -------- //
// #1
const populations = new Array(1441, 332, 1408, 6);
console.log(populations);

// #2
console.log(populations.length === 4);

// #3
const percentages = new Array(
    percentageOfWorld1(populations[0]), 
    percentageOfWorld2(populations[1]), 
    percentageOfWorld3(populations[2]), 
    percentageOfWorld1(populations[3])
);
console.log(percentages);
console.log('');


// -------- Basic Array Operations (Methods) -------- //
// #1
const neighbors = new Array('Canada', 'Mexico');
console.log(neighbors);
console.log(neighbors.length);

// #2
neighbors.push('Utopia')
console.log(neighbors);
console.log(neighbors.length);

// #3
neighbors.pop();
console.log(neighbors);
console.log(neighbors.length);

// #4
if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country.👎');
} else {
    console.log('Probably a central European country.👍');
}

// #5
const mexicoLocation = neighbors.indexOf('Mexico');
console.log(`Mexico Array location: ${mexicoLocation}`);

neighbors[mexicoLocation] = 'Old Mexico';
console.log(neighbors);
console.log('');



// -------- Introduction to Objects -------- //
// #1
const myCountry = {
    country: 'United States',
    capital: 'Washington DC',
    language: 'English',
    population: 332,
    neighbors: ['Mexico', 'Canada'],

    // #1 for Object Methods
    describe: function() {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    },

    // #3 for Object Methods
    checkIsland: function() {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
};


// -------- Dot vs. Bracket Notation -------- //
// #1
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// #2
myCountry.population += 2;
console.log('Dot notation: ' + myCountry.population);

myCountry['population'] -= 2;
console.log('Bracket notation: ' + myCountry.population);
console.log('');


// -------- Object Methods -------- //
// #1 in Introduction to Objects

// #2
console.log(myCountry.describe())
myCountry.checkIsland()
console.log(myCountry.isIsland);


// -------- Iteration: The for Loop -------- //
// #1
for (let i = 1; i <= 50; i++){
    console.log(`Voter number ${i} is currently voting.`);
}
console.log('');


// -------- Looping Arrays, Breaking and Continuing -------- //
// #1
const percentages2 = [];

// #2
for(each = 0; each < populations.length; each++) {
    percentages2[each] = percentageOfWorld1(populations[each]);
}
console.log(percentages);
console.log(percentages2);

// #3
const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
};
console.log(compareArrays(percentages, percentages2));
console.log('');


// -------- Looping Backwards and Loops in Loops -------- //
// #1
const listOfNeighbors =[
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]

// #2
for(let i = 0; i < listOfNeighbors.length; i++) {
    for(let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}
console.log('');


// -------- The while Loop -------- //
// #1
const percentages3 = [];
let i = 0;
while(i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    i++;
};
console.log(percentages3);
console.log('');