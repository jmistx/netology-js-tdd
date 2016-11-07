var Calculator = function() {
    var self = this;
    var defaultValue = 0;

    self.add = function(input) {
        if (!input) {
            return defaultValue;
        }

        if (isSingleNumber(input)) {
            return parseSingleNumber(input);
        }

        return parseMultipleNumbers(input);
    };

    function parseMultipleNumbers(input) {
        var numbers = input.split(/[\n,]/);

        return numbers.reduce(function(a, b) {
            return parseSingleNumber(a) + parseSingleNumber(b);
        });
    }

    function parseSingleNumber(numberAsString) {
        return parseInt(numberAsString, 10);
    }

    function isSingleNumber(numbers) {
        return numbers.indexOf(',') === -1 && numbers.indexOf('\n') === -1;
    }
}

module.exports = Calculator;
