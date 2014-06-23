/*// Imports Chain
var Chain = Feature.Chain;

// CREATES new Chain Object
var chain = new Chain(

    function (text) {
        return prompt(text);
    },

    function (text, result) {
        alert(text + " " + result);
        // last chain can also return something like:
        // return true;
    }

);

// RUNS Chain with specified arguments
chain.run(
    "Hey dude, what's your name?",
    "Welcome"
);*/

// Imports CallbackChain
var Chain = Feature.CallbackChain;

// CREATES new CallbackChain Object
var chain = new Chain(

    function (text, nextFunction) {
        console.log(arguments);
        var name = prompt(text);
        return nextFunction(name);
    },

    function (text, nextFunction, result) {
        console.log(arguments);
        var feeling = prompt(text[0] + result + text[1]);
        return nextFunction(feeling);
    },

    function (texts, nextFunction, result) {
        console.log(arguments);
        var age = prompt(texts[0] + result + texts[1]);
        return nextFunction(age);
    },

    function (texts, nextFunction, result) {
        console.log(arguments);
        alert(texts[0] + result + texts[1]);
        return true;
    }

);

// RUNS CallbackChain with specified arguments
var x = chain.run(
    "Hey dude, what's your name?",
    ["Welcome ", ", How are you?"],
    ["You feeling ", " .. good to know :D, Whats your age?"],
    ["Your Age ", ", So Interesting (Not Really..)"]
);