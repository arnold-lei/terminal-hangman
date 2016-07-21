var term = require( 'terminal-kit' ).terminal
var inquirer = require('inquirer');
var urban = require('urban');
var letter = require('./letter');

var word=[];
var blanks;
var definition=[];
var guess = [];

term.clear();
term.blink('loading');
//When the game starts, the user will see a series of blank tiles and the user will be prompted to guess letters

//If the letter the user guesses is right then 


var question = [{
    type: 'input',
    name: 'guess',
    y: 1,
    message: 'Welcome to Hangman! Please guess a letter:',
    validate: function(value){
    	if(isNan(vaule) == true){
    		return true;
    	} else {
    		return false;
    	}
    }
  }];



function generateWord(){
	urban.random().first(function(entry) {
		term.clear();
	    term.bold(entry.word + ': ');
	    term(entry.definition+'\r\n\r\n');
	    //create world object
	    word.push(entry.word);
	    definition.push(entry.definition);
	    //create the blanks on screen
	    letter(word);
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