const con = require("./db.js");

// exports.login = function(req, res, next) {
//     let username = req.body.username;
//     let password = req.body.password;

//     let sql = `select user`
// }

exports.login = function (req, res) {
    sql = `CREATE TABLE new(test_id int(255), test_name varchar(255));`
    con.query(sql, (err, result, fields)=>{
        if(err) throw err;
        else{
            if(result.length != 0){
                console.log(result);
            }
        }
    });
}

exports.create = function (req, res) {
    sql=`INSERT INTO users()`
}