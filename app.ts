// function types and void 
function add(n1: number, n2: number){
    return n1 + n2;
}
function printResult(num: number):void{
    console.log("Result :", num);
}
// console.log(printResult(add(5, 7)));
// printResult(add(5, 7))
// let combineValues: Function;
// right here we use function types 
let combineValues: (a: number, b: number)=>number;
combineValues = add;
// combineValues = printResult; //it is not valid 
// console.log(combineValues(20, 20)); answer : 20, undefined 
// after use function types now it is good for typescript 
// console.log(combineValues(20, 20)); //answer : 20 
// example of callback function 
function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
 const result = n1 + n2;
 cb(result)   
}
addAndHandle(10, 20, (result) => {
    console.log('result: ', result);
})


































































































































