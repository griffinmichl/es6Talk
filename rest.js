/*
Rest Parameters
----------------------------------------
The rest parameter syntax allows us to represent an indefinite number of arguments as an array

*/

function printArgs(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printArgs(1,2,3,4,5);
// 1
// 2
// [3, 4, 5]

function quiz1(a, ...b) {
  console.log(b.length);
}

quiz1(1,2,3,4,5);

function quiz2(...args) {
  return args.sort();
}

quiz2(3,1,2)

function (){
  var args = Array.prototype.slice.call(arguments, f.length);

}
