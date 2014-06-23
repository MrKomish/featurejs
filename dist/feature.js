var Feature = (function () {

    var Feature = {};

    Feature.Chain = (function () {

        var Chain = function () {
            var chain = this.chainArray = Array.prototype.slice.call(arguments, 0);
        };

        Chain.prototype.run = function () {
            var chain, func, argument, result;

            chain = this.chainArray;
            for (var i = 0; i < chain.length; i++) {
                func = chain[i];
                argument = arguments[i];
                result = func(argument, result || null);
            }

            return result;
        };

        Chain.prototype.toArray = function () {
            return this.chainArray;
        };

        Chain.prototype.replace = function (partNumber, newFunc) {
            this.chainArray[partNumber] = newFunc;
            return this;
        };

        return Chain;

    })();

    Feature.CallbackChain = (function () {

        var Chain = function () {
            this.chainArray = Array.prototype.slice.call(arguments, 0);
        };

        Chain.prototype.run = function () {
            var self = this, chain = this.chainArray;
            this.arguments = arguments;
            this.i = 0;

            function generator() {
                return function (result) {
                    return chain[self.i](self.arguments[self.i++], generator(), result);
                };
            }

            return generator()(null);
        };

        Chain.prototype.toArray = function () {
            return this.chainArray;
        };

        Chain.prototype.replace = function (partNumber, newFunc) {
            this.chainArray[partNumber] = newFunc;
            return this;
        };

        return Chain;

    })();

    return Feature;

})();