// Require the 'inquirer' package
var inquirer = require('inquirer');

console.log('***********************************************************');
console.log('***                                                     ***');
console.log('***  Welcome to Zombie Challenge! Try To stay alive!!!  ***');
console.log('***                                                     ***');
console.log('***********************************************************\n\n');

// The default health values for the user and the zombie
var userHealth = 70;
var zombieHealth = 15;

// The variables needed to store the random choices made during the game
var randomNumber;
var randomDamage;

// Run the game by prompting user to input a guess
promptUserInput();

// promptUserInput runs the prompt sequence asing the user to input a guess
function promptUserInput() {
	inquirer.prompt([
		{
			type: "list",
			message: "Try to stay alive! Guess a number [1-5] (Use arrow keys)",
			name: "userGuess",
			choices: ['1', '2', '3', '4', '5']

		}
	]).then(function (answers) {
		console.log('You guessed: ' + answers.userGuess);

		// Record the zombie guess
		randomNumber = getZombieGuess();
		console.log('Zombie chose: ' + randomNumber + '\n');

		// Determine who wins this round and update the player health
		if (parseInt(answers.userGuess) === randomNumber) {
			// User guessed correctly
			randomDamage = getRandomDamage();
			zombieHealth -= randomDamage;

			console.log('GO YOU! You hit the zombie for ' + randomDamage + '.');
			console.log('You have ' + userHealth + ' health left. The zombie has ' + zombieHealth + ' health left.');
			console.log('\n***********************************************************\n');
		} else {
			// User guessed incorrectly
			randomDamage = getRandomDamage();
			userHealth -= randomDamage;

			console.log('OUCH! The zombie slashed you for ' + randomDamage + '.');
			console.log('You have ' + userHealth + ' health left. The zombie has ' + zombieHealth + ' health left.');
			console.log('\n***********************************************************\n');
		}

		// Check to see the result of the current guessing round
		if ( (userHealth > 0) && (zombieHealth > 0) ) {
			// If both players are still around, prompt once again
			promptUserInput();
		} else {
			// If one of the players has died, end the game
			if ( userHealth <=0 ) {
				console.log('*************************************************************');
				console.log('***                                                       ***');
				console.log('***  Dude... you lost. Zombies are eating your brain :-X. ***');
				console.log('***                                                       ***');
				console.log('*************************************************************\n\n');
			} else {
				// The user won
				console.log('*************************************************************');
				console.log('***                                                       ***');
				console.log('***              SMASHING! ZOMBIE DEFEATED!!!             ***');
				console.log('***                                                       ***');
				console.log('*************************************************************\n\n');
			}
		}
	})
}

// getZombieGuess returns the random number that was guessed by the zombie
function getZombieGuess() {
	return getRandomIntInclusive(1, 5);
}

// getRandomDamage returns the random number for the damage being dealt
function getRandomDamage() {
	return getRandomIntInclusive(1, 5);
}

// getRandomIntInclusive returns a random integer between the parameters min and
// max inclusive.
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}