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
  //將key值的內容抽離，單獨做成一個陣列onlyLetter
  let onlyLetter = [];
  for (i = 0; i < input.length; i++){
    onlyLetter.push(input[i].key);
  }

  //將只有key值的陣列重複的部分刪掉，再做成一個新陣列letterList
  let letterList = onlyLetter.filter(function(element, index, arr){
      return arr.indexOf(element) === index;
    });


  //用巢狀迴圈去來分別計算每個key值字母對應的Value總和LetterResult然後做成一個值回傳到groupResult的物件內。
  let groupRuselt = {};
  for (i = 0; i < letterList.length; i++){
    let LetterResult = 0;    //每次進迴圈前，把總和值歸零
    for (j = 0; j < input.length; j++){
      if(letterList[i] == input[j].key){
        LetterResult = LetterResult + input[j].value;
      }else{
        LetterResult;
      }
      // console.log(LetterResult);
    }
    groupRuselt[letterList[i]] = LetterResult;
    
  }
  return groupRuselt;

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