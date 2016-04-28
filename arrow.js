// Example:
{
	var project = {
		owner: 'Griffin',
		todos: ['learn ES6', 'take out the trash', 'fix my remind method'],
		taskReminder: function() {
			this.todos.forEach(function(todo) {
				console.log('Hey, ' + this.owner + '! Be sure to ' + todo + '!');
			});
		}
	};

	project.taskReminder();
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