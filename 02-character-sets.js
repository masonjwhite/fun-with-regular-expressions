/*
    * Let's step things up a notch with character sets
    * Character sets let us make our regex more dynamic
    * They are defined using "[]"
    * IMPORTANT: Charcater sets by default only occupy 1 space in regex
*/

const valuesToTest = ['mason', 'Mason', 'jason', 'Jason', 'grayson'];

valuesToTest.forEach(value => {
    const regex = new RegExp(/[mj]ason/, 'gi');
    console.log(regex.test(value));
});

// Results:
// - mason --> pass
// - Mason --> pass
// - jason --> pass
// - Jason --> pass
// - grayson --> fail