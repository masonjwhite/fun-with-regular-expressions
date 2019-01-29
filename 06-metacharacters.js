/*
    * How do we account for special characters in our regex?
    * Examples include: null, carriage return, whitespace, tab
    * For full list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    * To avoid conflict with other characters, most meta characters have a "\" (e.g. '\s')
    * IMPORTANT: These occupy one space in the regex
*/

const valuesToTest = ['1 art', '2 music', '3science', 'math'];

valuesToTest.forEach(value => {
    // Matches any digit 0-9 followed by a whitespace and any "word" character (A-z and _)
    const regex = new RegExp(/\d\s\w/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - 1 art --> pass
// - 2 music --> pass
// - 3science --> fail (no white space between number and letter)
// - math --> pass --> fail (no number)