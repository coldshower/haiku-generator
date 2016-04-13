function formatText(text) {
	function grabText(text) {
		var regex_grabber = /^[\s\S]*(?:START OF THIS PROJECT GUTENBERG EBOOK)([\s\S]*)(?:END OF THIS PROJECT GUTENBERG EBOOK)[\s\S]*$/;

		return text.match(regex_grabber)[1];
	}

	var text_arr = grabText(text).split(/\W+/);
	return text_arr;
}

module.exports = formatText;