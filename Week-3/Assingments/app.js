//npm init -y
//install express,nodemon,pug,cookie-parser
//----------------------<Module Setting>---------------------
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//----------------------<Template Setting>---------------------
app.set("view engine", "pug");
//----------------------<Routes>---------------------
const mainRoutes = require("./routes");
const dataRoutes = require("./routes/data");
const sumRoutes = require("./routes/sumHint");
const trackNameRoutes = require("./routes/trackName");
const myNameRoutes = require("./routes/myName");

app.use(mainRoutes);
app.use("/data", dataRoutes);
app.use("/sum", sumRoutes);
app.use("/trackName", trackNameRoutes);
app.use("/myName", myNameRoutes);

//----------------------<static files>---------------------
app.use(express.static("sum"));
const path = require("path");
app.use("/sum", express.static(path.join(__dirname, "sum")));
// app.get('/sum', (req, res) => {
//     res.sendFile(path.join(__dirname,'sum.html'));   //直連html文件使用
// });

//----------------------<listen>---------------------
app.listen(3000, () => {
    console.log("My Server Is Running!");
});
