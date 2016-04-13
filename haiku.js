var fs = require('fs');
var formatData = require('./modules/formatData');
var createHaikuFree = require('./modules/createHaikuFree');
var createHaikuStrict = require('./modules/createHaikuStrict');

var dict = fs.readFileSync('./cmudict.txt', 'utf-8');
var formattedData = formatData(dict);


/*
haikuFree randomly generates poems 
with the desired total syllable counts of each line.

haikuStrict is closer to what the assignment intended,
and will generate the words of a haiku based on the 
structure array
*/
var haikuFree = createHaikuFree([5,7,5], formattedData);
var haikuStrict = createHaikuStrict([1,4,3,2,2,5], formattedData);


console.log("haikuFree: \n" + haikuFree + "\n");
console.log("haikuStrict: \n" + haikuStrict + "\n");



