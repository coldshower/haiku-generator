function findHaiku(text, dict) {
	var structure,
			haikuArray,
			haikus = [];

	text.forEach(function(word, index) {
		haikuArray = [[], [], []],
		structure = [5, 7, 5];

		var dynamic_idx = index,
				current_line = 0,
				keep_going = true;

		while (keep_going) {
			var word = text[dynamic_idx];
			if (word in dict && dict[word] <= 7) {
				haikuArray[current_line].push(word);
				structure[current_line] -= +dict[word];
				dynamic_idx += 1;

				if (structure[current_line] === 0 && current_line === 2) {
					haikus.push(haikuArray);
					keep_going = false;
				}	else if (structure[current_line] === 0) {
					current_line += 1;
				} else if (structure[current_line] < 0) {
					keep_going = false;
				}
			} else {
				keep_going = false;
			}
		}
	});
	return haikus;	
}

module.exports = findHaiku;