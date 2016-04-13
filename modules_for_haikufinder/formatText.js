function formatText(text) {
	function grabText(text) {
		var regexGrab = /^[\s\S]*(?:START OF THIS PROJECT GUTENBERG EBOOK)([\s\S]*)(?:END OF THIS PROJECT GUTENBERG EBOOK)[\s\S]*$/;

		return text.match(regexGrab)[1];
	}

	var textArr = grabText(text).split(/\W+/);
	return textArr;
}

module.exports = formatText;