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

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2))