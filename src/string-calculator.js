var Calculator = function() {
    var self = this;
    var defaultValue = 0;

    self.add = function(numbers) {
        if (!numbers) {
            return defaultValue;
        }

        if (isSingleNumber(numbers)) {
            return parseSingleNumber(numbers);
        }

        return parseSingleNumber(numbers[0]) + parseSingleNumber(numbers[2]);;
    };

    function parseSingleNumber(numberAsString) {
        return parseInt(numberAsString, 10);
    }

    function isSingleNumber(numbers) {
        return numbers.indexOf(',') === -1;
    }

}

module.exports = Calculator;
