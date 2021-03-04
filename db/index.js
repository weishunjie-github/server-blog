const mysql = require('mysql');
const dbOption = require('./config')
// 创建连接池
const pool = mysql.createPool(dbOption)
// 获取连接

function query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, conn) => {
            if (err) {
                reject(err);
                return
            }
            conn.query(sql, params, (err, res) => {
                // release 释放连接池
                conn.release();
                if (err) {
                    reject(err);
                    return
                }
                resolve(res)
            })
        });
    })
}
module.exports = query
