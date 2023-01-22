const numbers = document.getElementById('ajax');



function fetchNumber(){
  const inputNumber = document.getElementById('inputNumber');
  let presetNumber = 0;
  if(inputNumber > 0){
    presetNumber = inputNumber;
  }else{
    presetNumber = 10;
  }
  console.log(inputNumber);
  let fetchURL=`http://localhost:3000/data?number=${presetNumber}`
  fetch(fetchURL)
    .then((response) => response.text())
    .then((text) => console.log(text));
 
}






// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     document.getElementById('ajax').innerHtml = xhr.responseText;
//   }
// }

// xhr.open('GET', 'http://localhost:3000/data');
// xhr.send();