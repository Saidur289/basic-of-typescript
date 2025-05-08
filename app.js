// console.log("hello world ...");
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
// console.log(person.nickname); type error give typescript but it is run by javascript 
// array method by typescript 
var persons = {
    name: 'Riaz Ahmed',
    ages: 26,
    hobbies: ['sports', 'cooking'],
    // tuple : means fixed array length 
    role: [2, 'author']
};
// persons.role.push('admin')//it is happen after apply the tuple it default 
// console.log(persons.role);
// persons.role = [45, 'admin', 'keno'] // because length is fixed it is give me error 
var favoriteActivity;
favoriteActivity = ['sports'];
for (var _i = 0, _a = persons.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // console.log(hobby);
}
// start enum here 
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var persona = {
    name: 'Riaz Ahmed',
    ages: 26,
    hobbies: ['sports', 'cooking'],
    // tuple : means fixed array length 
    role: Role.AUTHOR
};
if (persona.role === Role.ADMIN) {
    console.log('It is admin bro....');
}
if (persona.role === Role.AUTHOR) {
    console.log('It is author bro....');
}
