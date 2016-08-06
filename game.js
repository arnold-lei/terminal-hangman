var urban = require('urban');
var term = require('terminal-kit').terminal;
var wurd = require('./word');
var letter = require('./letter');
var inquirer = require('inquirer');
var userGuess = [];
var entry = {};

function generateWord(){
	urban.random().first(function(werd) {
		term.clear();
		entry = new wurd(werd.word, werd.definition);
	    letter(entry.word);
	    console.log('Word: ' + werd.word);
	    console.log('Definition: ' + werd.definition)
	    guess();
	});
};

var question = [{
    type: 'input',
    name: 'guess',
    y: 1,
    message: 'Welcome to Hangman! Please guess a letter: ',
    // validate: function(value){
    // 	if(isNan(vaule) == true){
    // 		return true;
    // 	} else {
    // 		return false;
    // 		guess.push(value);
    // 		console.log(guess);
    // 	}
    // }
}];

var checkLetter = function(arr, guess){
	for(var i = 0; i < arr.length; i++){
		if(guess.indexOf(arr.letters)){
			console.log(guess)
		}
	}
}

var guess = function(){
	inquirer.prompt(question).then(function (answers) {
		console.log(userGuess);
		userGuess.push(answers.guess);
		guess()
	})
}

module.exports = generateWord;
