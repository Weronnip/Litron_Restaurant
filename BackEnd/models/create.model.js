import { connection } from "./db";

module.exports = {
    createData:function(inputData, callback) {
        let sql = 'INSERT INTO products SET ?';
        connection.query(sql, inputData, function (err, data) {
            if(err) throw err;
            return callback(data);
        });
    }
}