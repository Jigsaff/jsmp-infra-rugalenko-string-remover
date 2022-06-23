var removeWordFromString = function (word, string) {
    var regExp = new RegExp(word);
    var replace = string.replace(regExp, '');
    return replace;
};
module.exports = removeWordFromString;
