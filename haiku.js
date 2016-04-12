var fs = require('fs');
var formatData = require('./formatData');
var lengthCalculate = require('./lengthCalculate')
var createHaiku = require('./createHaiku');


var cmuDict = fs.readFileSync('./cmudict.txt', 'utf-8');

var formattedData = formatData(cmuDict);

console.log(lengthCalculate(formattedData))

console.log(formattedData['0']);
