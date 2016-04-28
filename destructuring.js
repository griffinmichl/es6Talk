/*
The destructuring assignment syntax is a JavaScript
expression that makes it possible to extract data from
arrays or objects into distinct variables.
*/

{
  var module = {
    baz: function() {
      console.log('baz');
    },
    qux: function() {
      console.log('qux');
    }
  };

  // Instead of...
  var baz = module.baz;
  var qux = module.qux;

  // We can now do...
  var { baz, qux } = module;
  baz(); // -> 'baz'
  qux(); // -> 'qux'

  // This works for arrays, too!
  var arr = ['foo', 'bar'];
  var foo = arr[0];
  var bar = arr[1];

  var [foo, bar] = arr;

  // You'll commonly see this pattern in import/require statements:
  import { render } from 'react-dom';
  const { static, Router } = require('express');
}

// Excercise: Convert the following into ES6 destructuring assignments!
{
  var mentor = {
    name: 'Sunny',
    likes: ['Meteor', 'Bitcoin']
  };

  var name = mentor.name;
  var likes = mentor.likes;

  var hirs = ['Alexxis', 'Jake (good)', 'Jake (evil)', 'Griffin', 'Ian'];
  var alexxis = hirs[0];
  var goodJake = hirs[1];
  var evilJake = hirs[2];
}
