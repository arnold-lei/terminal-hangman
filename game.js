var urban = require('urban');
var term = require('terminal-kit').terminal;
var wurd = require('./word');
var letter = require('./letter');
var inquirer = require('inquirer');	
var userGuess;

function generateWord(){
	urban.random().first(function(werd) {
		term.clear();
		var entry = new wurd(werd.word, werd.definition);
	    letter(entry.word);
	    guess();
	});	
};

var question = [{
    type: 'input',
    name: 'guess',
    y: 1,
    message: 'Welcome to Hangman! Please guess a letter: ',
    validate: function(value){
    	if(isNan(vaule) == true){
    		return true;
    	} else {
    		return false;
    		guess.push(value);
    		console.log(guess);
    	}
    }
}];

var guess = function(){
	inquirer.prompt(question).then(function (answers) {
	  userGuess.push(answers.guess)
	  term(answer.guess)
	}).then(function(ans){
		guess.push(ans);
		term(guess)
		guess()
	});
}

module.exports = generateWord;