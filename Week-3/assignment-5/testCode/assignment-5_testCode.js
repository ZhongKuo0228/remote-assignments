function twoSum(nums, target) { 
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++)
            if (nums[i] + nums[j] == target) {
            result = [i, j];
            }
        }
    if (result[1] > 0) { //j>0表示有配對成功
        result;
    } else {
        result = 'No twosum Result!'
    }
        console.log(result);
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

let input = [0, 7, 11, 0];
let traget = 1;
let result = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++)
    if (input[i] + input[j] == traget) {
      result = [i, j];
    }
}
if (result[1] > 0) { //j>0表示有配對成功
  result;
} else {
  result = 'No twosum Result!'
}
console.log(result);
