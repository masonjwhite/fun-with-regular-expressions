/*
    * Another way to simplify and reduce repetition of our regex is repeating characters!
    * Allows us to avoid regex like: [0-9][0-9][0-9][0-9] for four digit numbers
    * NOTE: To match at least one character use "+"
    * IMPORTANT: These occupy MORE than one space in a regex
*/

const valuesToTest = ['a01234', 'b03422', 'a12444', 'a55052392', 'a234'];

valuesToTest.forEach(value => {
    // [a-z] one character must be a lower case letter from a-z
    // {5} at least 5 characters from 0-9 must be in a row to pass
    const regex = new RegExp(/[a-z][0-9]{5}/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - a01234 --> pass
// - b03422 --> pass
// - a12444 --> pass
// - a55052392 --> pass (because we said at LEAST 5 characters in a row and 'g' flag set)
// - a234 --> fail (because we only have 3 numerical characters after the letter)

/*
    * We can also specify ranges to our quantifiers
    * E.g. {3,5} --> repeat character 3 to 5 times
*/

const valuesToTest2 = ['category', 'cataclysm', 'catastrophe', 'cat', 'dogma'];

valuesToTest2.forEach(value => {
    // Match strings that start with 'cat' and have 1-5 letters after it
    const regex = new RegExp(/cat[a-z]{1,5}/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - category --> pass
// - cataclysm --> pass
// - catastrophe --> pass
// - cat --> fail (while it does start with 'cat', it has no other characters!)
// - dogma --> fail