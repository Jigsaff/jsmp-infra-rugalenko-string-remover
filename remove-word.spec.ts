const assert = require('assert');
const removeWordFromString = require('./index.js');

describe('word-remover function', function () {
    it('must remove a word from the string', function () {
        assert.equal(removeWordFromString('java', 'javascript'), 'script');
        assert.equal(removeWordFromString('most', 'mostly sunny'), 'ly sunny');
    });

    it('shouldn\'t delete anything if there is no such word in the string', function () {
        assert.equal(removeWordFromString('javascript', 'mostly sunny'), 'mostly sunny');
    });
});
