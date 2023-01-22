function toNumber(input){
let group = ['0','a','b','c','d','e'];
let toNumberResult = []
for(var i=0; i<input.length;i++){
    let toNumber = group.indexOf(input[i]);     
    toNumberResult.push(toNumber);
};
return console.log(toNumberResult);
};

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(toNumber(input2))