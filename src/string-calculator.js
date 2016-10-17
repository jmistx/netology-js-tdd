var Calculator = function() {
    var self = this;
    var defaultValue = 0;

    self.add = function(numbers) {
        if (!numbers) {
            return defaultValue;
        }

        return parseInt(numbers);
    };

}

module.exports = Calculator;
