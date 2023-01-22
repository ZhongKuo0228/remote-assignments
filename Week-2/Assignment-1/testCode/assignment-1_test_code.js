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


//-----------------------------function max(numbers) -用for --雖然Ok但邏輯怪怪的
let input = [5, 2, 7, 1, 6];
for ( i = 0; i < input.length+2; i++ ){ //每次只抓每個陣列的前兩個做比較，總共需要做+2=7次，但i++沒有意義，改用條件迴圈do while
  if( input[0] > input[1] ){  //每次只抓每個陣列的前兩個做比較
    input.splice( 1 , 1 );
  }else{
    input.splice( 0 , 1 );
  }
  
  console.log(input);  
  
}

//-----------------------------function max(numbers) -用do....while OK!
let input = [5, 2, 7, 1, 6];
do {
    if( input[0] > input[1] ){  //每次只抓每個陣列的前兩個做比較
      input.splice( 1 , 1 );
    }else{
      input.splice( 0 , 1 );
    }
    console.log(input);
  } while (input.length > 1) 


//-------------------------------function findPosition(numbers, target) -OK
let numbers = [5 , 7, 2, 7 , 1, 5,7];
let target = 7;
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
  console.log(`c=${checkTheSame}`);
  console.log(`index=${indexCount}`);
}

if(target == numbers[0] && checkTheSame == 1 && indexCount == 0){      //陣列第一個就是索引值
  console.log('0');
}else if(target == numbers[0] && checkTheSame > 1 && indexCount > 1){  //陣列第一個就是索引值，且有重複
  console.log(`0 (the first position)`);
}else if(checkTheSame == 1 && indexCount > 0){    //陣列只有1個索引值
  console.log(indexCount);
}else if(checkTheSame > 1 && indexCount > 0){     //陣列有重複索引值
  console.log(`${indexCount} (the first position)`);
}else{
  console.log('-1');
}
//-------------------------------