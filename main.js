var term = require( 'terminal-kit' ).terminal
var inquirer = require('inquirer');
var urban = require('urban');
var letter = require('./letter');
var wurd = require('./word');

var blanks;
var guess = [];
var guessRemaining = 9;
var hint; 

term.clear();
term.blink('loading');
//When the game starts, the user will see a series of blank tiles and the user will be prompted to guess letters

//If the letter the user guesses is right then 


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



function generateWord(){
	urban.random().first(function(werd) {
		term.clear();
		var entry = new wurd(werd.word, werd.definition);
	    letter(entry.word);
	    guess();
	});	
};

generateWord();

var guess = function(){
	inquirer.prompt(question).then(function (answers) {
	  term(JSON.stringify(answers, null, '  '));
	  guess.push(answers.guess)
	  term(guess)
	}).then(function(ans){
		guess.push(ans);
		term(guess)
	});
}