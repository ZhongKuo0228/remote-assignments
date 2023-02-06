function twoSum(nums, target) { 
    // your code here
    }
    /*
    For example:
    twoSum([2, 7, 11, 15], 9); 
    Should returns:
    [0, 1] 
    Because:
    nums[0]+nums[1] is 9 
    */

//--------------------------------------------------

let input = [2, 7, 11, 15];
let traget = 9;
let result = {};
for( let i = 0; i < input.length; i++){
    let newTraget = traget -input[i];
    do{
        let j = i+1;
            j++;        
    }while(input[j]-newTraget == 0;)      
    result = {i,j}
    console.log(result);
}

