const express = require('express');
const router = express.Router();

//----------------------</myName>---------------------
router.get('/',(req, res) =>{          
    res.render('myName',{ name: req.cookies.username});
});

router.post('/',(req, res) =>{      
    res.cookie('username',req.body.username);  
    // res.render('myName',{ name: req.body.username });
    res.redirect('myName');
    res.send('trackName',{ name: req.cookies.username});
    res.send('index',{ name: req.cookies.username});
});

//----------------------<reference app.js>---------------------
module.exports = router;