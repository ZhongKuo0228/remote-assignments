const express = require('express');
const router = express.Router();

//----------------------</>{index}---------------------
router.get('/',(req, res) =>{          
    res.render('sumHint');
});


//----------------------<reference app.js>---------------------
module.exports = router;