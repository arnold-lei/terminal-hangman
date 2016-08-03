//constructor 
// contain all of the methods which will check the letters guessed versus the random word selected.
var term = require( 'terminal-kit' ).terminal;

function Word(wurd, def){
	this.word = wurd; 
	this.letters = wurd.split('');
	this.definition = def;
	this.print = function(){
		term.bold(entry.word + ': ');
	    term(entry.definition+'\r\n\r\n');
	}
}

module.exports = Word