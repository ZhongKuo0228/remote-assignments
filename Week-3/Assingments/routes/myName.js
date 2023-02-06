const express = require('express');
const router = express.Router();

//----------------------</myName>---------------------
router.get('/',(req, res) =>{          
    res.render('myName',{ name: req.cookies.username});
});




//----------------------<reference app.js>---------------------
module.exports = router;