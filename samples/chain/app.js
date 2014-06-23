// Imports Chain
var Chain = Feature.Chain;

// CREATES new Chain Object
var chain = new Chain(

    function (text) {
        return prompt(text);
    },

    function (text, result) {
        alert(text + " " + result);
        // last chain can also return something like:
        return true;
    }

);

// RUNS Chain with specified arguments
var x = chain.run(
    "Hey dude, what's your name?",
    "Welcome"
);