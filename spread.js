/*
The spread operator allows an expression to be expanded
in places where multiple arguments (for function calls)
or multiple elements (for array literals) or multiple variables
(for destructuring assignment) are expected.
*/

// Instead of...
{
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  arr2.forEach(function(element) {
    arr1.push(element);
  });
}

// We can do...
{
  var arr1 = [0, 1, 2];
  var arr2 = [3, 4, 5];
  arr1.push(...arr2);
}

// Exercise: Convert this code snippet into es6 using spread operators
{
  function myFunction(x, y, z) { }
  var args = [0, 1, 2];
  myFunction.apply(null, args);
}
