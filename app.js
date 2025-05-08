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
// add(4, 5, result, tilte)
// type assignment and good practice 
// let number1: number;
// number1 = 5
// let title = 'hello world';
// tilte = 0; give error already assign in string 
// object and interface 
var person = {
    name: 'Saidur Rahman',
    age: 30,
};
console.log(person.nickname);
