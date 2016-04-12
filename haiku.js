var fs = require('fs');
var formatData = require('./modules/formatData');
var lengthCalculate = require('./modules/lengthCalculate')
var createHaiku = require('./modules/createHaiku');


var cmuDict = fs.readFileSync('./cmudict.txt', 'utf-8');

var formattedData = formatData(cmuDict);

var probability_arr = lengthCalculate(formattedData);

var haiku = createHaiku([5,7,5], probability_arr, formattedData);

console.log(haiku);