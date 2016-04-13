var toolkit = require('./toolkit');

var getRandomNumber = toolkit.getRandomNumber,
		capitalize = toolkit.capitalize;

function createHaikuStrict(structureArr, formattedData) {
	function checkValidHaiku(structureArr, poemTotalSyllables) {
		var sum = structureArr.reduce(function(a, b) {
			return a + b;
		});
		return (sum === poemTotalSyllables);
	}

	function nestStructure(structureArr, poemStructure) {
		var result = [],
				structureIdx = 0;

		poemStructure.forEach(function(totalSyllables) {
			var currentSyllables = 0,
					line = [];
			while (currentSyllables < totalSyllables) {
				var word = structureArr[structureIdx];
				line.push(word);
				currentSyllables += word;
				structureIdx += 1;
			}
			result.push(line);
		})
		return result;
	}

	function createLine(lineArr, lineIdx) {
		var line = [];
		lineArr.forEach(function(num, index) {
			var wordIdx = getRandomNumber(formattedData[num].length);
			var word = formattedData[num][wordIdx]['word'];

			if (lineIdx === 0 && index === 0) {
				word = capitalize(word);
			}
			line.push(word);
		});
		return line.join(' ');
	}

	if (!checkValidHaiku(structureArr, 17)) {
		console.log("Your structure does not have the right number of syllables.")
		return;
	}

	var haiku_structure = nestStructure(structureArr, [5, 7, 5]);
	
	var haiku = [];
	haiku_structure.forEach(function(lineArr, index) {
		haiku.push(createLine(lineArr, index));
	});

	return haiku.join(',\n') + ".";
}

module.exports = createHaikuStrict;