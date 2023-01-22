//npm init -y 
//install express,nodemon,pug,body-parser,cookie-parser
//create majoy_JS, majoy_index.pug(use PUG),routes4index.js
//set sum_path
//----------------------<Module Setting>---------------------
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
//----------------------<Template Setting>---------------------
app.set('view engine', 'pug');
//----------------------<Routes>---------------------
const mainRoutes = require('./routes');
const dataRoutes = require('./routes/data');
const sumRoutes = require('./routes/sumHint');
const myNameRoutes = require('./routes/myName');
const trackNameRoutes = require('./routes/trackName');


app.use(mainRoutes);
app.use('/data', dataRoutes);
app.use('/sum', sumRoutes);
app.use('/myName', myNameRoutes);
app.use('/trackName', trackNameRoutes);

//----------------------<static files>---------------------
app.use(express.static('sum'));
const path = require('path')
app.use('/sum', express.static(path.join(__dirname, 'sum')))
// app.get('/sum', (req, res) => {
//     res.sendFile(path.join(__dirname,'sum.html'));   //直連html文件使用
// });


//----------------------<listen>---------------------
app.listen(3000, () => {
    console.log('My Server Is Running!')
});