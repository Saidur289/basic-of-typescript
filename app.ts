function combine(input1:number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //     return +result;
    // }else{
    // return result.toString() ;    
    // }
    
}
const combineAges = combine(25 ,26, 'as-number')
const combineStringAges = combine("25" ,'26', 'as-number')
console.log(combineStringAges);
console.log(combineAges);
const combineNames = combine('saidur', 'rahman', 'as-text');
console.log(combineNames);
