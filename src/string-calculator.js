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

        return parseTwoNumbers(input);
    };

    function parseTwoNumbers(input) {
        var numbers = input.split(',');
        return parseSingleNumber(numbers[0]) + parseSingleNumber(numbers[1]);;
    }

    function parseSingleNumber(numberAsString) {
        return parseInt(numberAsString, 10);
    }

    function isSingleNumber(numbers) {
        return numbers.indexOf(',') === -1;
    }

}

module.exports = Calculator;
