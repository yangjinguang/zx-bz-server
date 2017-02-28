'use strict';

import * as mysql from 'mysql'
import {DbConfig} from '../config/db.config'

const pool = mysql.createPool(DbConfig.mysql);

class MysqlService {
    constructor() {

    }

    public run(sql: String, data: Array<any>) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) throw err;
                connection.query(sql, data, (err, rows) => {
                    connection.release();
                    if (err) {
                        console.log(err);
                        reject()
                    }
                    resolve(rows);
                })
            })
        })
    }
}

export const Mysql = new MysqlService();

