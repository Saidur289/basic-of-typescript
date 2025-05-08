console.log("hello world ...");
function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
}
const result = true;
const tilte = 'Result is :'
// add(4, 5, result, tilte)
// type assignment and good practice 
// let number1: number;
// number1 = 5
// let title = 'hello world';
// tilte = 0; give error already assign in string 
