/*
The rest parameter syntax allows us to represent
an indefinite number of arguments as an array.
*/


// Instead of:
function printArrayOfArgsES5() {
  return Array.prototype.slice.call(arguments)
}

// We can do:
function printArrayOfArgsES6(...args) {
  return args;
}

function quiz(a, ...b) {
  console.log(b.length);
}

quiz(1,2,3,4,5);

// Exercise: Convert this function to es6 using rest parameters
function sortInputsES5() {
  return Array.prototype.slice.call(arguments).sort();
}
