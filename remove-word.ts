const removeWordFromString = (word: string, string: string): string => {
	const regExp = new RegExp(word);
	return string.replace(regExp, '');
}

module.exports = removeWordFromString;
