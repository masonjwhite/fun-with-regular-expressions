/*
    * The final tools in our regex toolbelt are alternate characters and grouping
    * Alternate characters are denoted by the "|" character
    * Grouping characters are denoted by the "()" character
*/

const valuesToTest = ['atlanta', 'boston', 'oklahoma city', 'dallas', 'orlando'];

valuesToTest.forEach(value => {
    // Matches strings that start with vowels
    const regex = new RegExp(/^(a|e|i|o|u)/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - atlanta --> pass
// - boston --> fail
// - oklahoma city --> pass 
// - dallas --> fail
// - orlando --> pass

/*
    * Grouping allows us to to do exactly that, group characters together!
*/

const valuesToTest2 = ['642 5540', '421 4031', '421442', '42 42113'];

valuesToTest2.forEach(value => {
    // Matches strings that have 3 numbers followed by a space and 4 numbers
    const regex = new RegExp(/([0-9]{3,3} ([0-9]{4,4}))/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - 642 5540 --> pass
// - 421 4031 --> pass
// - 421442 --> fail (no space)
// - 42 42113 --> fail (only two numbers before space)