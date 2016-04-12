function createHaiku(structure_arr, probability_arr, formattedData) { // format for structure_arr: [5, 7, 5]
	function getRandomNumber(max) {
		return Math.floor(Math.random() * (max + 1));
	}

	function syllableToUse(random_num) {
		for (var i = 0, len = probability_arr.length; i < len; i++) {
			if (probability_arr[i] >= random_num) {
					return i;
				}
		}
	}

	function capitalize(string) {
		return string[0].toUpperCase() + string.slice(1);
	}

	function createLine(numSyll, current_line) {
		var currentSyll = 0;
		var line = "";

		while (currentSyll < numSyll) {
			var syllables_left = numSyll - currentSyll;
			var random = getRandomNumber(probability_arr[syllables_left]);
			var syllable_key = syllableToUse(random);	

			var chosen_word_index = getRandomNumber(formattedData[syllable_key].length);
			var chosen_word = formattedData[syllable_key][chosen_word_index].word;
			
			if (current_line === 1 && currentSyll === 0) {
				chosen_word = capitalize(chosen_word);
			} 
			
			line += chosen_word + " ";

			currentSyll += +syllable_key;
		}
		return line.slice(0, -1);
	}


	var haiku = '';

	structure_arr.forEach(function(syllables, index) {
		var lines = structure_arr.length,
				current_line = index + 1;
		haiku += createLine(syllables, current_line);
		if (current_line < lines) {
			haiku += ",\n";
		} else {
			haiku += ".";
		}
	});

	return haiku;
}

module.exports = createHaiku;