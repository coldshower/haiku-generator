function formatData(string) {
	function syllableCount(string) {
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
		return string.replace(/\(\d\)/, "").toLowerCase();
	}

	function syllableObjectMaker(linesArr) {
		return linesArr.reduce(function(a, line) {
			var lineSplit = line.split("  ");
			var syllables = syllableCount(lineSplit[1]);
			var clean_word = cleanWord(lineSplit[0]);
			var word_obj = { word: clean_word, syllables: syllables};
			
			if (a[syllables]) {
				a[syllables].push(word_obj);
			} else {
				a[syllables] = [word_obj];
			}
			return a;
		}, {});
	}

	var linesArr = string.split("\n");
	// console.log(linesArr.length);

	var syllable_obj = syllableObjectMaker(linesArr);

	return syllable_obj;
}

module.exports = formatData;
