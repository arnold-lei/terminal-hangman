var term = require( 'terminal-kit' ).terminal
var inquirer = require('inquirer');
var urban = require('urban');

var word = [];
var definition = [];
var guess = [];
term.clear();

//When the game starts, the user will see a series of blank tiles and the user will be prompted to guess letters

//If the letter the user guesses is right then 

var question = [{
    type: 'input',
    name: 'guess',
    message: 'Welcome to Hangman! Please guess a letter:'
  }];



function generateWord(){
	urban.random().first(function(entry) {
	    term.bold(entry.word + ': ' );
	    word.push(entry.word);
	    definition.push(entry.definition)
	});

};


generateWord();
console.log(word);

inquirer.prompt(question).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
  guess.push(answers.guess)
  console.log(guess)
}).then(function(ans){
	console.log(ans)
});