function binarySearchPosition(numbers, target) {
  let low = 0; //起始的index位置
  let upper = numbers.length - 1; //最大的index位置，陣列總長減1

  while (low <= upper) { 
    let mid = parseInt((low + upper) / 2); //取陣列的中間位置開始比較
      if (numbers[mid] < target) {         //中間值小於索引值，往右開始縮小範圍
        low = mid + 1;
      } else if (numbers[mid] > target) {  //中間值小於索引值，往左開始縮小範圍
        upper = mid - 1;
      } else {                             //中間值 = 索引值時，回傳中間值
        return mid;
      }
  }    
  return '-1';                             //索引值匹配不到時，回傳-1，表示不存在
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3



  //-----------------------------------------
  
  let numbers = [1, 2, 5, 6, 7];
  let target = 1;

  let low = 0;
  let upper = numbers.length - 1;

  while( low <= upper ){
    let mid = parseInt(( low + upper )/2);
      if ( numbers[mid] < target ){
        low = mid + 1;
      }else if(numbers[mid] > target){
        upper = mid - 1;
      }else{
        return mid;
      }  
    }
  return '-1';

console.log(mid);