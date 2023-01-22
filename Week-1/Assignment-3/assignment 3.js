function countAandB(input){
    let is_a = input.filter(function(value){
        return value === 'a';
    });//範例的function是function(value, index, arr)，但index和arr都沒用到？
    let is_b = input.filter(function(value){
        return value === 'b';
    });
    
    let Aandsum = 0
    AandBsum = is_a.length+is_b.length
    return AandBsum;
}

function toNumber(input){
    let group = ['0','a','b','c','d','e'];
    let toNumberResult = []
    for(var i=0; i<input.length;i++){
        let toNumber = group.indexOf(input[i]);     
        toNumberResult.push(toNumber);
    };
    return toNumberResult;
};


let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2));