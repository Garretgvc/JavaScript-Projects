// Test 1
let dolphins = (96 + 108 + 89) / 3;
let koalas = (88 + 91 + 110) / 3;

// Test 2
dolphins = (97 + 112 + 110) / 3;
koalas = (109 + 95 + 123) / 3;

// Ttest 3
dolphins = (97 + 112 + 110) / 3;
koalas = (109 + 95 + 106) / 3;

console.log(`Dolphins: ${Math.round(dolphins)}\n Kolalas: ${Math.round(koalas)}`);

if (dolphins > koalas && dolphins > 100) {
    console.log('Dolphins win!');
} else if (koalas > dolphins && koalas > 100) {
    console.log('Koalas win!')
} else if (koalas === dolphins && koalas > 100 && dolphins > 100) {
    console.log("It's a Tie!")
} else {
    console.log('No one wins.')
}