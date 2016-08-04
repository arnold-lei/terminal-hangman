var term = require( 'terminal-kit' ).terminal
var inquirer = require('inquirer');
var game = require('./game');


var blanks;
var guess = [];
var guessRemaining = 9;
var hint; 

term.clear();
term.blink('loading....');
//When the game starts, the user will see a series of blank tiles and the user will be prompted to guess letters

//If the letter the user guesses is right then 







game();

