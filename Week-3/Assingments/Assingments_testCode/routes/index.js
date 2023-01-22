const express = require('express');
const router = express.Router();

//----------------------</>{index}---------------------
router.get('/',(req, res) =>{          
    res.render('index');
});


//----------------------<reference app.js>---------------------
module.exports = router;