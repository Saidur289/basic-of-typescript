console.log("hello world ...");
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var result = true;
var tilte = 'Result is :';
add(4, 5, result, tilte);
