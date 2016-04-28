/*
An arrow function expression has a shorter syntax compared
to function expressions and lexically binds the this value
(does not bind its own this, arguments, super, or new.target).
Arrow functions are always anonymous.
*/

{
  var data = [1,2,3,4,5,6,7,8];

  // Instead of:
  var squaredEvenNumbersES5 = data
    .filter(function(elem) { return elem % 2 === 0 })
    .map(function(elem) { return elem * elem });

  // We can do:
  var squaredEvenNumbersES6 = data
    .filter(elem => elem % 2 === 0)
    .map(elem => elem * elem);
}

{
  var projectES5 = {
    owner: 'Griffin',
    todos: ['learn ES6', 'take out the trash', 'finish lightning talk'],
    taskReminder: function() {
      this.todos.forEach(function(todo) {
        console.log('Hey, ' + this.owner + '! Be sure to ' + todo + '!');
      // Instead of:
      }.bind(this));
    }
  };

  var projectES6 = {
    owner: 'Griffin',
    todos: ['learn ES6', 'take out the trash', 'finish lightning talk'],
    taskReminder: function() {
      // We can do:
      this.todos.forEach((todo) => {
        console.log('Hey, ' + this.owner + '! Be sure to ' + todo + '!');
      });
    }
  };
}

// Excercise: Fix Dade's procrastinate method so it logs the correct properties.
{
  var dade = {
    name: 'Zero Cool',
    hobby: 'hack the planet',
    procrastinate: function() {
      console.log('Hmm...');
      setTimeout(function() {
        console.log('Maybe ' + this.name + ' will '+ this.hobby + ' tomorrow.')
      }, 1000)
    }
  };

  dade.procrastinate();
}

// Excercise: Convert the following so that the callbacks use ES6 syntax
{
  var mentors = [
    {name: 'Sunny', team: 'Atlas'},
    {name: 'Beth', team: 'Titan'},
    {name: 'Magee', team: 'Atlas'},
    {name: 'Dan', team: 'Titan'},
    {name: 'Zach', team: 'Titan'}
  ];
  var giantEighthFloorMentors = mentors
    .filter(function(mentor) { return mentor.team === 'Titan' })
    .map(function(mentor) { return Object.assign(mentor, {size: 'giant'}) });

  console.log(giantEighthFloorMentors);
}
