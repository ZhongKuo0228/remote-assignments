const express = require('express');
const router = express.Router();

//----------------------</data>---------------------
// router.get('/',(req, res) =>{
//     res.render('data');
// });      
//----------------------</data?number>---------------------
router.get('/',(req, res) =>{
    const numbers = req.query.number;
    let noQuery ='';
    console.log(numbers);
    let numberResult;
    if(numbers == null){
        numberResult = 'Lack of Parameter';
        noQuery = 1;
    }else if(isNaN(numbers)){
        numberResult = 'Wrong Parameter!';
        noQuery = 0;
    }else{
        numberResult = ((1+Number(numbers))*Number(numbers))/2;
        noQuery = 0;
    }

    dataResult = [numbers,numberResult,noQuery];
    console.log(dataResult[2]);

    res.render('data', {dataResult});

});


//----------------------<reference app.js>---------------------
module.exports = router;