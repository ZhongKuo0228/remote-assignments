const express = require('express');
const router = express.Router();

//----------------------</trackName>---------------------
router.get('/',(req, res) =>{    
    const userName = req.query.name    
    res.cookie("username",userName); 
    res.render('trackName',{userName});
});



//----------------------<reference app.js>---------------------
module.exports = router;