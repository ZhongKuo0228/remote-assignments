const titleUpdate = document.getElementById('title');
titleUpdate.addEventListener('click',() =>{
    const headline = document.getElementById('title');
    headline.innerHTML = `Have a Good Time!`;

});


const btnUpdate = document.querySelector('.bottom_button')
const additionalMainBoxShow = document.getElementById('additional_main_box');
btnUpdate.addEventListener('click',() =>{
    const boxShow = document.getElementById('additional_main_box');
    boxShow.style.display = 'flex';
});