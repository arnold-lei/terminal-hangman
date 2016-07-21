var term = require( 'terminal-kit' ).terminal
var inquirer = require('inquirer');
var urban = require('urban');

var word=[];
var blanks;
var definition=[];
var guess = [];

term.clear();

//When the game starts, the user will see a series of blank tiles and the user will be prompted to guess letters

//If the letter the user guesses is right then 
var generateBlanks = function(word){
	blanks = word.split('');
	for(var i=0; i < blanks.length; i++){
		for(var x=0; x < guess.length; x++){
			if(guess[x].indexOf(blanks[i])){
				blanks[i] = guess[x];
			}else {
				blanks[i] = '_';
			}
		}
	}
	console.log(blanks)
}


var question = [{
    type: 'input',
    name: 'guess',
    message: 'Welcome to Hangman! Please guess a letter:',
    validate: function(value){
    	if(isNan(vaule) == true){
    		return true
    	} else {
    		return false
    	}
    }
  }];



function generateWord(){
	urban.random().first(function(entry) {
	    term.bold(entry.word + ': ');
	    term(entry.definition+'\r\n\r\n');
	    word.push(entry.word);
	    definition.push(entry.definition)
	    guess();
	});	
	
	
};



generateWord();

var guess = function(){
	inquirer.prompt(question).then(function (answers) {
	  console.log(JSON.stringify(answers, null, '  '));
	  guess.push(answers.guess)
	  console.log(guess)
	}).then(function(ans){
		console.log(ans)
	});
}