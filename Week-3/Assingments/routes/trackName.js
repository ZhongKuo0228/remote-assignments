const express = require('express');
const router = express.Router();

//----------------------</trackName>---------------------
router.get('/',(req, res) =>{
    let {name} = req.query;
    res.cookie('username',name);
    res.redirect('myName');
       
});

router.post('/',(req, res) =>{
    let trackName = req.body.username;
    let queryString = `trackName?name=${trackName}`;
    res.redirect(queryString);
          
});

//----------------------<reference app.js>---------------------
module.exports = router;