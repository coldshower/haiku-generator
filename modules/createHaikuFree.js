var toolkit = require('./toolkit.js');
var lengthCalculate = require('./lengthCalculate'); 

var getRandomNumber = toolkit.getRandomNumber,
		capitalize = toolkit.capitalize;

function createHaikuFree(structure_arr, formattedData) { // format for structure_arr: [5, 7, 5]
	function syllableToUse(random_num) { // probability_arr is a snowball array of the total number of words in each syllable category
		for (var i = 0, len = probability_arr.length; i < len; i++) { // [# of words with 0 syll, # of words with 1 and 0 syll, # of words with 2, 1, 0 syll, etc...]
			if (probability_arr[i] >= random_num) {
				return i;
			}
		}
	}

	function createLine(numSyll, current_line) {
		var currentSyll = 0;
		var line = [];

		while (currentSyll < numSyll) {
			var syllables_left = numSyll - currentSyll;
			var random = getRandomNumber(probability_arr[syllables_left]);
			var syllable_key = syllableToUse(random);	

			var chosen_word_index = getRandomNumber(formattedData[syllable_key].length);
			var chosen_word = formattedData[syllable_key][chosen_word_index]['word'];
			
			if (current_line === 1 && currentSyll === 0) {
				chosen_word = capitalize(chosen_word);
			} 
			
			line.push(chosen_word);

			currentSyll += +syllable_key;
		}
		return line.join(' ');
	}

	var probability_arr = lengthCalculate(formattedData); // only purpose is to randomly select a word from multiple syllable properties in my obj
	var haiku = [];

	structure_arr.forEach(function(syllables, index) {
		var lines = structure_arr.length,
				current_line = index + 1;
		haiku.push(createLine(syllables, current_line));
	});

	return haiku.join(',\n') + '.';
}

module.exports = createHaikuFree;