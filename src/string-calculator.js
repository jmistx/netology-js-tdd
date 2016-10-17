var Calculator = function() {
    var self = this;
    var defaultValue = 0;


    self.add = function(numbers) {
        if (!numbers) {
            return defaultValue;
        }

        return 1;
    };

}

module.exports = Calculator;
