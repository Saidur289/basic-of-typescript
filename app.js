var userInput;
var userName;
userInput = 5;
userInput = 'saidur';
// userName = userInput; give me error 
if (userInput === 'string') {
    userName = userInput; // eta right way because for if condition 
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var message = generateError("An error occured", 500);
console.log({ message: message });
