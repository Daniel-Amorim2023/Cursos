const nums = new Array(2, 5, 4, 3, 12, 45, 1, 3, 45, 78, 91, 31, 2, 3, 4, 56, 10);

const filterNumbers = nums.filter( value => value > 10);

// const filterNumbers = nums.filter( value =>  {return value > 10});

// const filterNumbers = nums.filter(function (value) {return value > 10});

// function filterCallback (value, index, array) {
//     return value > 10;
// }

// function filterCallback (value, index, array) {
//     if (value > 10) return true;
//     return false;
// }


console.log(filterNumbers);


// notes :

// will always return the same number of elements or less

