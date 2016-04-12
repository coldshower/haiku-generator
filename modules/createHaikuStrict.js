var toolkit = require('./toolkit');

var getRandomNumber = toolkit.getRandomNumber,
		capitalize = toolkit.capitalize;

function createHaikuStrict(structure_arr, formattedData) {
	function checkValidHaiku(structure_arr, poem_total_syllables) {
		var sum = structure_arr.reduce(function(a, b) {
			return a + b;
		});
		return (sum === poem_total_syllables);
	}

	function nestStructure(structure_arr, poem_structure) {
		var result = [],
				structure_idx = 0;

		poem_structure.forEach(function(total_syllables) {
			var current_syllables = 0,
					line = [];
			while (current_syllables < total_syllables) {
				var word = structure_arr[structure_idx];
				line.push(word);
				current_syllables += word;
				structure_idx += 1;
			}
			result.push(line);
		})
		return result;
	}

	function createLine(line_arr, line_idx) {
		var line = [];
		line_arr.forEach(function(num, index) {
			var word_idx = getRandomNumber(formattedData[num].length);
			var word = formattedData[num][word_idx]['word'];

			if (line_idx === 0 && index === 0) {
				word = capitalize(word);
			}
			line.push(word);
		});
		return line.join(' ');
	}

	if (!checkValidHaiku(structure_arr, 17)) {
		console.log("Your structure does not have the right number of syllables.")
		return;
	}

	var haiku_structure = nestStructure(structure_arr, [5, 7, 5]);
	
	var haiku = [];
	haiku_structure.forEach(function(line_arr, index) {
		haiku.push(createLine(line_arr, index));
	});

	return haiku.join(',\n') + ".";
}

module.exports = createHaikuStrict;