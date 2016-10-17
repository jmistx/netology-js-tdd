var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

describe('string calculator', function() {
    it('should return default value if input is empty', function() {
        var calculator = new Calculator();

        var result = calculator.add("");

        assert.equal(result, -1);
    });
});
