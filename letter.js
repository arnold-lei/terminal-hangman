//constructor
// should control whether or not a letter appears as a "_" or as itself on-screen.
var term = require( 'terminal-kit' ).terminal;

function generateBlanks(word){
	blanks = word.toString().split('');
	for(var i=0; i < blanks.length; i++){
		if (blanks[i] == ' '){

		}else {
			blanks[i] = '_';
		}
	}
	term(blanks + '\r\n');
}

module.exports = generateBlanks;