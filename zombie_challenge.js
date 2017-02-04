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

// Continue running the game until either the player's or the zombie's health 
// decreases to zero
//while( (userHealth > 0) && (zombieHealth > 0) ) {
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
		console.log('Zombie chose ' + randomNumber);
	});
//}

// The user lost
// if ( userHealth <=0 ){
// 	console.log('Dude... you lost. Zombies are eating your brain :-X.');
// } else {
// 	// The user won
// 	console.log('SMASHING! ZOMBIE DEFEATED!!!');
// }


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