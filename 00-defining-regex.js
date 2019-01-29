// There are two different ways of defining a regular expression (regex)

// 1. Constructor
// - This is a great use case if we need to create dynamic 
const stringToMatch = 'baseball';
const myRegex = RegExp(stringToMatch);

// 2. Literal
// - This is a great use case if we need to create a quick shorthand regex
const myRegex = /abc123/;

// For sake of simplicity, I will only be using the test() method throughout this repo
// For full list of methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype
