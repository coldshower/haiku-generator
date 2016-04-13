function findHaiku(text, dict) {
	var structure,
			haikuArray,
			haikus = [];

	text.forEach(function(word, index) { // foreach word in the text, I loop starting from the current word to see if it is a start of a viable haiku
		haikuArray = [[], [], []],
		structure = [5, 7, 5];

		var dynamicIdx = index, // dynamicIdx is just how I track where I am currently in the nested while loop
				currentLine = 0,
				keepGoing = true;

		while (keepGoing) {
			var currentWord = text[dynamicIdx].toLowerCase();
			if (currentWord in dict && dict[currentWord] <= 7) { // if the currentWord in the text is not a word in the dictionary, or it has more than 7 syllables, then a haiku from here is impossible
				haikuArray[currentLine].push(currentWord);
				structure[currentLine] -= (+dict[currentWord]);
				dynamicIdx += 1;

				if (structure[currentLine] === 0) { // this marks the finish of a line, so I have to join the words with a space
					haikuArray[currentLine] = haikuArray[currentLine].join(" ");
					if (currentLine === 2) { // this marks the finish of an entire haiku, so I must export it now.
						haikus.push(haikuArray.join(",\n") + ".");
						keepGoing = false;
					}
					currentLine += 1;
				} else if (structure[currentLine] < 0) { // if there are too many syllables, then I have to stop as well because the words don't match a haiku structure
					keepGoing = false;
				}

			} else {
				keepGoing = false;
			}
		}
	});
	return haikus;	
}

module.exports = findHaiku;