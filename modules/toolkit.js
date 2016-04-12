function getRandomNumber(max) {
		return Math.floor(Math.random() * (max));
}

function capitalize(string) {
		return string[0].toUpperCase() + string.slice(1);
}

module.exports = {
	getRandomNumber: getRandomNumber,
	capitalize: capitalize
};