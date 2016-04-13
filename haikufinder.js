var fs = require('fs');
var formatDict = require('./modules_for_haikufinder/formatDict');
var formatText = require('./modules_for_haikufinder/formatText');
var findHaiku = require('./modules_for_haikufinder/findHaiku');
// var formatHaiku = require('./modules_for_haikufinder/formatHaiku');

var text = fs.readFileSync(process.argv[2], 'utf-8'),
		dict = fs.readFileSync(process.argv[3], 'utf-8');

var formatted_text = formatText(text),
		formatted_dict = formatDict(dict);

var haikuArray = findHaiku(formatted_text, formatted_dict);

console.log(haikuArray.join("\n\n"));