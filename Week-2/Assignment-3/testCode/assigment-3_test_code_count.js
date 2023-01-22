function count(input) {
    let countResult = {};
        for ( i = 0; i < input.length; i++){
           let countLetter = input.filter(function(value){
          return value === input[i];
        });
        countResult[countLetter[0]] = countLetter.length;  //相同key值及對應結果會一直迭代，所以只會留一組
        }
        return countResult;
}
let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}


function groupByKey(input) {
// your code here
}
let input2 = [
{ key: "a", value: 3 },
{ key: "b", value: 1 },
{ key: "c", value: 2 },
{ key: "a", value: 3 },
{ key: "c", value: 5 },
];
console.log(groupByKey(input2));
// should print {a:6, b:1, c:7}


//--------------------------------------------- ? : 算if不能使用
function count(input) {
    let input_result = {};
    for(let i = 0; i < input.length; i++){
        let num = input[i];
        input_result[num] = input_result[num]?input_result[num]+1:1;
    };
    return input_result;
};

let input1 = ["a", "b", "c", "a", "c", "a", "x"]
console.log(count(input1));

//-------------------------------------------------


//--------------------------------------------------------
function count(input){
    let countResult = {};
    for ( i = 0; i < input.length; i++){
    let countResult = input.filter(function(value){
        return value === 'a';
        });
    }   
   
    return countResult;
}

let input1 = ['a','b','c','a','c','a','c'];
console.log(countAandB(input1));

//--------------------------------------------------------OK-----
let input = ["a", "b", "c", "a", "c", "a", "x"];

let countResult = {};
for ( i = 0; i < input.length; i++){
  let countLetter = input.filter(function(value){
      return value === input[i];
  });
    console.log(countLetter);
  
    // let everyResult = `${countLetter[0]} : ${countLetter.length},`;
    // console.log(everyResult);
    
    countResult[countLetter[0]] = countLetter.length;
    console.log(countResult);
}  

//--------------------------------------------------------改function-----
let input = ["a", "b", "c", "a", "c", "a", "x"];

let countResult = {};
for ( i = 0; i < input.length; i++){
  let countLetter = input.filter(function(value){
      return value === input[i];
  });
  
   return (countResult[countLetter[0]] = countLetter.length);
    
}  
    console.log(countResult);

    //--------------------------
    function count(input) {
        let countResult = {};
        for ( i = 0; i < input.length; i++){
           let countLetter = input.filter(function(value){
          return value === input[i];
        });
        
        return (countResult[countLetter[0]] = countLetter.length);
        
        }  
      }
    let input1 = ["a", "b", "c", "a", "c", "a", "x"];
    console.log(count(input1));
        // should print {a:3, b:1, c:2, x:1}

