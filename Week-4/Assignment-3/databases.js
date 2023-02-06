//---MySQL Connect------------------------------------
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

let pool = mysql
    .createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: 3306,
    })
    .promise();

pool.getConnection((err) => {
    if (err) {
        console.log("SQL connecting error");
    } else {
        console.log("SQL connecting success");
    }
});
// 確認目前user tables資料----------------------------------
export async function getAllTables() {
    const [rows] = await pool.query(`SELECT * FROM user `);
    return rows;
}
const allTables = await getAllTables();
console.log(allTables);
//查找sql用的async------------------------------------------
export async function checkEmail(email) {
    const [rows] = await pool.query(`SELECT email FROM user WHERE email = ?`, [email]);
    return rows;
    // console.log(rows.length);
}
export async function checkSignIn(email, password) {
    const [rows] = await pool.query(`SELECT * FROM user WHERE email = ? AND password = ? `, [email, password]);
    return rows;
}
export async function createMember(email, password) {
    const [result] = await pool.query(`INSERT INTO user(email,password) VALUES(?,?)`, [email, password]);
    return result.insertID;
}
