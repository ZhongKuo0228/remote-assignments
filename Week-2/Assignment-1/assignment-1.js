function max(numbers) {
    do {
        if( numbers[0] > numbers[1] ){  //每次只抓每個陣列的前兩個做比較
            numbers.splice( 1 , 1 );
        }else{
            numbers.splice( 0 , 1 );
        }

      } while (numbers.length > 1); 
    return numbers[0];
}

function findPosition(numbers, target) {
    let checkTheSame = 0;
    let indexCount = 0;
    for ( let i = 0; i < numbers.length; i++){
      if( target == numbers[i] && indexCount == 0){   //第1種情況，索引值和被被索引值相等，且還沒被找到過
          checkTheSame ++;
          indexCount = i;
      }else if( target == numbers[i] && indexCount > 0){ //第2種情況，索引值和被被索引值相等，已經被找到過
          checkTheSame ++;
          indexCount;      
      }else{
          checkTheSame;
          indexCount; 
      }
    }

    if(target == numbers[0] && checkTheSame == 1 && indexCount == 0){      //陣列第一個就是索引值
        return '0';
      }else if(target == numbers[0] && checkTheSame == 1 && indexCount >= 1){  //陣列第一個就是索引值，且第2個位置有重複
        return `0 (the first position)`;
      }else if(checkTheSame == 1 && indexCount > 0){    //陣列只有1個索引值
        return indexCount;
      }else if(checkTheSame > 1 && indexCount > 0){     //陣列有重複索引值
        return `${indexCount} (the first position)`;
      }else{
        return '-1';
      }
}
console.log(max([1, 2, 4, 5])); // should print 5
console.log(max([5, 2, 7, 1, 6])); // should print 7
console.log(findPosition([5, 2, 7, 1, 6], 5)); // should print 0
console.log(findPosition([5, 2, 7, 1, 6], 7)); // should print 2
console.log(findPosition([5, 2, 7, 7, 7, 1, 6], 7)); // should print2 (the first position)
console.log(findPosition([5, 2, 7, 1, 6], 8)); // should print -1