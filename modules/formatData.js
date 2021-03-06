function formatData(string) {
	function syllableCount(string) { // parses through the phonemes and increments if there is a number
		var strArr = string.split(" "),
				totalSyllables = 0;
		strArr.forEach(function(elem) {
			if (/^\w+\d$/.test(elem)) {
				totalSyllables += 1;
			}
		});
		return totalSyllables;
	}

	function cleanWord(string) {
		return string.replace(/\(\d\)/, "").toLowerCase(); // removes the '(n)' that some words have, and changes it to lowercase
	}

	function syllableObjectMaker(linesArr) { // categorizes all the words by syllable count. e.g. obj['4'] would return an array of all the words with 4 syllables.
		return linesArr.reduce(function(a, line) {
			var lineSplit = line.split("  ");
			var word = cleanWord(lineSplit[0]);
			var syllables = syllableCount(lineSplit[1]);			
			var wordObj = { word: word, syllables: syllables}; 
			// each element of the arrays is its own obj with two properties. 
			// Not useful in this project, but may be useful in future to expand on functionality.
			
			if (a[syllables]) { 
				a[syllables].push(wordObj);
			} else {
				a[syllables] = [wordObj];
			}
			return a;
		}, {});
	}

	var linesArr = string.split("\n");

	return syllableObjectMaker(linesArr);
}

module.exports = formatData;
