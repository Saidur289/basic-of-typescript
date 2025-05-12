let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'saidur';
// userName = userInput; give me error 
if(userInput === 'string'){
    userName = userInput; // eta right way because for if condition 
}
// example about never types
function generateError(message: string, code: number):never{
    throw {message: message, errorCode: code}
}
const message= generateError("An error occured", 500)
console.log({message});