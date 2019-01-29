/*
    * Let's take our character sets and use the not "^" operator
    * Allows to "not" match on specific characters
    * They are still defined using "[]"
    * IMPORTANT: Charcater sets by default only occupy 1 space in regex
*/

const valuesToTest = ['mason', 'Mason', 'jason', 'Jason', 'grayson'];

valuesToTest.forEach(value => {
    const regex = new RegExp(/[^m]ason/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - mason --> fail -- thanks to not operator
// - Mason --> fail -- thanks to not operator
// - jason --> pass
// - Jason --> pass
// - grayson --> fail