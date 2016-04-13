var toolkit = require('./toolkit.js');
var lengthCalculate = require('./lengthCalculate'); 

var getRandomNumber = toolkit.getRandomNumber,
		capitalize = toolkit.capitalize;

function createHaikuFree(structureArr, formattedData) { // format for structure_arr: [5, 7, 5]
	function syllableToUse(randomNum) { // probability_arr is a snowball array of the total number of words in each syllable category
		for (var i = 0, len = probabilityArr.length; i < len; i++) { // [# of words with 0 syll, # of words with 1 and 0 syll, # of words with 2, 1, 0 syll, etc...]
			if (probabilityArr[i] >= randomNum) {
				return i;
			}
		}
	}

	function createLine(numSyll, currentLine) {
		var currentSyll = 0;
		var line = [];

		while (currentSyll < numSyll) {
			var syllablesLeft = numSyll - currentSyll;
			var random = getRandomNumber(probabilityArr[syllablesLeft]);
			var syllableKey = syllableToUse(random);	

			var chosenWordIndex = getRandomNumber(formattedData[syllableKey].length); // randomly chooses a word index
			var chosenWord = formattedData[syllableKey][chosenWordIndex]['word']; // sets chosenWord to the randomly chosen word
			
			if (currentLine === 1 && currentSyll === 0) { // if it is the very first word in the haiku, capitalize it
				chosenWord = capitalize(chosenWord);
			} 
			
			line.push(chosenWord);

			currentSyll += (+syllableKey);
		}
		return line.join(' ');
	}

	var probabilityArr = lengthCalculate(formattedData); // only purpose is to randomly select a word from multiple syllable properties in my obj
	var haiku = [];

	structureArr.forEach(function(syllables, index) {
		var lines = structureArr.length,
				currentLine = index + 1;
		haiku.push(createLine(syllables, currentLine));
	});

	return haiku.join(',\n') + '.';
}

module.exports = createHaikuFree;