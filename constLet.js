/*
The let statement declares a block scope local variable,
optionally initializing it to a value.

The const declaration creates a read-only reference to a value.
It does not mean the value it holds is immutable, just that the
variable identifier cannot be reassigned.
*/

// Instead of...
var x = 5;

// We now do...
const x = 5; // if we never reassign x
let x = 5; // if we do reassign x

// var - function scoped
{
  function varTest() {
    var x = 31;
    if (true) {
      var x = 71;  // same variable!
      console.log(x);  // 71
    }
    console.log(x);  // 71
  }
}

// const+let - BLOCK scoped!
{
  function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // different variable
      console.log(x);  // 71
    }
    console.log(x);  // 31
  }
}

// var - declaration hoisted to top of scope
{
  function do_something() {
    console.log(foo); // undefined
    var foo = 2;
  }
}

// const+let - Temporal Dead Zone
{
  function myScope() {
    console.log(x); // Syntax Error Thrown
    let x = 5;
  }
}


// var+let - able to reassign
{
  var x = 1;
  x = 2; // no problem

  let y = 1;
  y = 2; // no problem
}

// const - read only after assignment
{
  const x = 5;
  x = 2; // error thrown: 'x is read-only'
}
