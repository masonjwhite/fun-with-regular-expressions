/*
    * Character sets are nice, but what if we wanted to match any character a-z?
    * Typing this would be a pain in the butt and flimsy! [abcdefghijklmnopqrstuvwxy]
    * Ranges solve this problem by allowing us to use "a-z" or "A-z" or "0-9"
    * IMPORTANT: Since its still a character set they still only occupy 1 space in regex
*/

const valuesToTest = ['mason', 'Mason', 'jason', 'Jason', 'tayson', 'grayson'];

valuesToTest.forEach(value => {
    // A-z matches lower and upper case letters from a-z
    const regex = new RegExp(/[A-z]ason/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - mason --> pass
// - Mason --> pass
// - jason --> pass
// - Jason --> pass
// - tayson --> pass
// - grayson --> fail

/*
    * We can also test numerical ranges! 
*/

const valuesToTestNum = ['a0', 'a1', 'a2', 'b0', 'b1'];

valuesToTestNum.forEach(value => {
    // A-z matches lower and upper case letters from a-z
    // 1-9 matches numbers 1-9
    const regex = new RegExp(/[A-z][1-9]/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - 'a0' --> fail because 0 is not in 1-9
// - 'a1' --> pass
// - 'a2' --> pass
// - 'b0' --> fail because 0 is not in 1-9
// - 'b1' --> pass