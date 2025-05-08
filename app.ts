// console.log("hello world ...");
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
// object and interface 
const person : {
name: string,
age: number
} = {
    name: 'Saidur Rahman',
    age: 30,
}
// console.log(person.nickname); type error give typescript but it is run by javascript 
// array method by typescript 
const persons : {
    name: string;
    ages: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: 'Riaz Ahmed',
    ages: 26,
    hobbies: ['sports', 'cooking'],
    // tuple : means fixed array length 
    role:[2, 'author']
}
// persons.role.push('admin')//it is happen after apply the tuple it default 
// console.log(persons.role);
// persons.role = [45, 'admin', 'keno'] // because length is fixed it is give me error 


let favoriteActivity: string[];
favoriteActivity = ['sports'];
for(const hobby of persons.hobbies){
    // console.log(hobby);
}
// start enum here 
enum Role {ADMIN='ADMIN', READ_ONLY=100, AUTHOR='AUTHOR'}
const persona = {
    name: 'Riaz Ahmed',
    ages: 26,
    hobbies: ['sports', 'cooking'],
    // tuple : means fixed array length 
    role:Role.AUTHOR
}
if(persona.role=== Role.ADMIN){
    console.log('It is admin bro....');
}
if(persona.role=== Role.AUTHOR){
    console.log('It is author bro....');
}


























































