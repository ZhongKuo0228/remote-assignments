//---Modlues：express,nodemon,mysql2,express-session(代替cookie-parser),ejs,dotenv;
//---Modlues Setting----------------------------------
import express from "express";
const app = express();
import session from "express-session";
app.use(session({ secret: "anything", resave: false, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//---Views Engine-------------------------------------
app.set("view engine", "ejs");
app.set("views", "./views");
//---MySQL Connect------------------------------------
import { getAllTables, checkEmail, checkSignIn, createMember } from "./databases.js";
//---Views Routers-----------------------------------------
app.get("/", function (req, res) {
    res.render("index.ejs");
});

app.get("/member", function (req, res) {
    //如果seesion是空值，則直接轉回到首頁
    if (!req.session.member) {
        res.redirect("/");
        return;
    }
    const session = req.session.member;
    const userEmail = session[0].email; //有記錄session的才能進入member頁面
    res.render("member.ejs", { userEmail: userEmail });
});

app.get("/signout", function (req, res) {
    req.session.member = null; //登出，清除session資料
    res.redirect("/");
});

app.get("/error", function (req, res) {
    const errorMessage = req.query.errorMessage;
    res.render("error.ejs", { errorMessage: errorMessage });
});

//---Routers : register----------------------------
app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    //檢查輸入的資料內容
    //檢查輸入的資料是否爲空值
    if (email.length == 0 || password.length == 0) {
        res.render("index", { errCode: "註冊失敗，電子郵件or密碼不可爲空值" });
    } else if (email.includes("@") == false) {
        //檢查email格式;
        res.render("index", { errCode: "註冊失敗，電子郵件格式錯誤" });
    } else {
        const checkEmailResult = await checkEmail(email);
        if (checkEmailResult.length >= 1) {
            console.log("email重覆註冊");
            res.render("index", { errCode: "註冊失敗，email重複" });
        } else {
            console.log("email可以使用");
            await createMember(email, password);
            req.session.member = [{ email: email, password: password }];
            res.redirect("member"); //完成後回到首頁
        }
    }
});

//---Routers : login----------------------------
app.post("/member", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    //檢查輸入的資料內容
    //檢查輸入的資料是否爲空值
    if (email.length == 0 && password.length == 0) {
        res.render("index", { errCode: "登入失敗，帳號or密碼不可爲空值" });
    } else {
        //確認資料
        const checkEmailAndPassword = await checkSignIn(email, password);
        if (checkEmailAndPassword.length >= 1) {
            console.log(checkEmailAndPassword);
            console.log("登入成功");
            req.session.member = checkEmailAndPassword; //登入成功，記錄會員在session
            res.redirect("member"); //成功的話，可以進到member
        } else {
            res.render("index", { errCode: "登入失敗，電子信箱或密碼錯誤" });
        }
    }
});

//---listen-----------------------------------------
app.listen(3000, () => {
    console.log("My Server Is Running!");
});
