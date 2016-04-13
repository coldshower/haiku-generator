function formatDict(string) {
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

	function makeDictionary(linesArr) { // categorizes all the words by syllable count. e.g. obj['4'] would return an array of all the words with 4 syllables.
		return linesArr.reduce(function(a, line) {
			var lineSplit = line.split("  ");
			var word = cleanWord(lineSplit[0]);
			var syllables = syllableCount(lineSplit[1]);			
			
			a[word] = syllables;
			return a;
		}, {});
	}

	var linesArr = string.split("\n");

	return makeDictionary(linesArr);
}

module.exports = formatDict;