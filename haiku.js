var fs = require('fs');

var cmuDict = fs.readFileSync('./cmudict.txt', 'utf-8');

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
			
			if (a[syllables]) {
				a[syllables].push(clean_word);
			} else {
				a[syllables] = [clean_word];
			}
			return a;
		}, {});
	}

	var linesArr = cmuDict.split("\n");
	console.log(linesArr.length);

	var syllable_obj = syllableObjectMaker(linesArr);

	return syllable_obj;
}

function createHaiku(structure) {
	

}

formatData(cmuDict);


