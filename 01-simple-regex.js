/*
    * Any string can be a valid regular expression!
    * The 'g' and 'i' are flags which change the behavior of the regex
    * 'g': Global. Will match pattern multiple times in string
    * 'i': Case insensitivity. Exactly what it sounds like
*/

const valuesToTest = ['baseball', 'Baseball', 'I like baseball', 'basketball'];

valuesToTest.forEach(value => {
    const regex = new RegExp('baseball', 'gi');

    // .test() method returns a boolean whether or not the passed string is matched by the regex
    console.log(regex.test(value));
});

// Results:
// - baseball --> pass
// - Baseball --> pass -- thanks to 'i' flag
// - I like baseball --> pass -- thanks to 'g' flag
// - basketball --> fail