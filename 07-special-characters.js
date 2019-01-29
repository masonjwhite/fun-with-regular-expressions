/*
    * There a number of special characters in regex
    * They allow us to mark certain characters as optional, allow any character, 
    * or limit conflicts by escaping certain characters
    * For full list: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
*/

const valuesToTest = ['mason', 'mason white', '_', ''];

valuesToTest.forEach(value => {
    // Matches one to many word characters potentially followed by whitespace
    const regex = new RegExp(/\w+\s?/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - mason --> pass
// - mason white --> pass
// - '_' --> pass ('_' is a valid word character. Trailing whitespace is optional)
// - '' --> fail

/*
    * Probably the most confusing special character is the escape ("\") character
    * At its core the escape character is used to match 
    * literally characters that have a special meaning in regex
    * They are also used to differentiate metacharacters from their normal counterparts
    * Example: \s vs. s 
    * Example: \[\] --> literally matching brackets (brackets are used in character sets)
*/

const valuesToTest2 = ['[lions]', '[tigers]', '[123]', '[]']

valuesToTest2.forEach(value => {
    // Matches one to many A-z characters in between brackets
    const regex = new RegExp(/\[[A-z]+\]/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - [lions] --> pass
// - [tigers] --> pass
// - [123] --> fail (has brackets but not letters)
// - [] --> fail (has brackets but no letters)