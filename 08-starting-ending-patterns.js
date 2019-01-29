/*
    * One of the edge cases we need to account for in regex is starting and ending patterns
    * Luckily for us, this is pretty simple with some new special characters
    * Start of string: "^"
    * End of string: "$"
*/

const valuesToTest = ['category', 'cataclysm', 'catastrophe', 'cat', 'dogma'];

valuesToTest.forEach(value => {
    // Matches strings that start with 'cat'
    const regex = new RegExp(/^cat/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - category --> pass
// - cataclysm --> pass
// - cat --> pass 
// - dogma --> fail

const valuesToTest2 = ['jumping', 'running', 'sprinted', 'ing'];

valuesToTest2.forEach(value => {
    // Matches strings that end with 'ing'
    const regex = new RegExp(/ing$/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - jumping --> pass
// - running --> pass
// - sprinted --> fail
// - ing --> pass