
//用迴圈遍歷的方式抓出陣列中的分組
/////////////////////////////////////////////////////////////////
let input = ['a','b','c','a','c','a','c'];
let input_result = {};
    for(var i=0;i<input.length;i++){
        var num = input[i];
        input_result[num] = input_result[num]?input_result[num]+1:1;
    };

console.log(input_result);
/////////////////////////////////////////////////////////////////




//用迴圈遍歷的方式抓出陣列中的分組包裝成function
/////////////////////////////////////////////////////////////////
function countAandB(input) {
    let input_result = {};
    for(var i=0;i<input.length;i++){
        var num = input[i];
        input_result[num] = input_result[num]?input_result[num]+1:1;
    };
    return input_result;
};

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));



/////////////////////////////////////////////////////////////////

//用迴圈遍歷的方式抓出陣列中的分組並加總在一起，包裝成function
/////////////////////////////////////////////////////////////////
function countAandB(input) {
    let input_result = {};
    for(var i = 0;i<input.length;i++){
        var num = input[i];
        input_result[num] = input_result[num]?input_result[num]+1:1;
    };

    let result = Object.keys(input_result).reduce(function(letters,number){
        return input_result[number] + letters;
    },0); 

    return result;  
};

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));

/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
function countAandB(input) {
    let input_result = {};
    for(var i = 0;i<input.length;i++){
        var num = input[i];
        input_result[num] = input_result[num]?input_result[num]+1:1;
    };



    let result = Object.keys(input_result).reduce(function(letters,number){
        return input_result[number] + letters;
    },0); 

    return result;  
};

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));



//////////////////////////////////////////////////////////////////

function countAandB(input) {

    function is_a(value){
        return value
    }


    let input = {a: 3, b: 1, c: 3};
    let letter_a = input.filter(function(value){
        return value === 'a';
    });

    letter_a;



///////////////////////////////////////////////

let input = ['a','b','c','a','c','a','c'];

let is_a = input.filter(function(value, index, arr){
    return value === 'a';
});
let is_b = input.filter(function(value, index, arr){
    return value === 'b';
});

let Aandsum = 0
AandBsum = is_a.length+is_b.length
AandBsum;


///////////////////////////////////////////////OK~~~~~~~

function countAandB(input){
    let is_a = input.filter(function(value, index, arr){
        return value === 'a';
    });
    let is_b = input.filter(function(value, index, arr){
        return value === 'b';
    });
    
    let Aandsum = 0
    AandBsum = is_a.length+is_b.length
    return AandBsum;
}

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));



