var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

describe('string calculator should', function() {
    it('return default value if input is empty', function() {
        var calculator = createCalculator();

        var result = calculator.add("");

        assert.equal(result, 0);
    });

    it('return single number if input is that single number', function() {
        var calculator = createCalculator();

        var sum = calculator.add('1');

        assert.equal(sum, 1);
    });

    it('return any single numbers if input is that single number', function() {
        var calculator = createCalculator();

        var sum = calculator.add('2')

        assert.equal(sum, 2);
    });

    it('return sum of two one-digit comma separated values', function() {
        var calculator = createCalculator();

        var sum = calculator.add('1,2')

        assert.equal(sum, 1 + 2);
    });

    it('return sum of any two comma separated values', function() {
        var calculator = createCalculator();

        var sum = calculator.add('123,456')

        assert.equal(sum, 123 + 456);
    });

    function createCalculator() {
        return new Calculator();
    }

});
