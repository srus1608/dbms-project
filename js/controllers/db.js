const mysql = require("mysql");
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: "dbms",
    password: process.env.PASSWORD,
    database: process.env.DB,

});

connection.connect((error)=>{
    if(error) throw error;
    console.log("Connected to mysql")
});

module.exports = connection;