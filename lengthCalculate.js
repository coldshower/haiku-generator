function lengthCalculate(obj) {
	var lengths = [];
	var count = 0;
	for (var key in obj) {
		count += obj[key].length;
		lengths.push(count);
	}
	return lengths;
}

module.exports = lengthCalculate;