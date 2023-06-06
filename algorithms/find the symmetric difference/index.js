// Link to problem: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
function sym() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var arg = [];
    for (var i = 0; i < arguments.length; i++) {
        arg.push(arguments[i]);
    }
    var symDiff = function (arrayOne, arrayTwo) {
        var result = [];
        arrayOne.forEach(function (item) {
            if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
            ;
        });
        arrayTwo.forEach(function (item) {
            if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
                result.push(item);
            }
            ;
        });
        return result;
    };
    return arg.reduce(symDiff);
}
;
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
