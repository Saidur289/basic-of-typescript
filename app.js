// function types and void 
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result :", num);
}
// console.log(printResult(add(5, 7)));
// printResult(add(5, 7))
// let combineValues: Function;
// right here we use function types 
var combineValues;
combineValues = add;
// combineValues = printResult; //it is not valid 
// console.log(combineValues(20, 20)); answer : 20, undefined 
// after use function types now it is good for typescript 
// console.log(combineValues(20, 20)); //answer : 20 
// example of callback function 
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log('result: ', result);
});
