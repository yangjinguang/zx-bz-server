'use strict';
import {User} from "./user.model";
import {Mysql} from "../../services/mysql.service";

class UserDaoClass {
    private sqls = {
        selectById: 'select * from user where id = ?',
        selectByUsername: 'select * from user where username = ?',
        updateToken: 'update user set token = ? where id = ?',
        deleteToken: 'update user set token = NULL where id = ?'
    };

    constructor() {
    }


    public selectById(id: Number) {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.selectById, [id]).then((rows: Array<User>) => {
                resolve(new User(rows[0]))
            }).catch((err) => {
                console.log(err);
                reject('查询失败')
            })
        })
    }

    public selectByUsername(username: String) {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.selectByUsername, [username]).then((rows: Array<User>) => {
                if (rows.length > 0) {
                    resolve(new User(rows[0]))
                } else {
                    reject()
                }
            }).catch((err) => {
                reject('查询失败')
            })
        })
    }

    public updateToken(id: Number, token: String) {
        return Mysql.run(this.sqls.updateToken, [token, id]);
    }

    public deleteToken(id: Number) {
        return Mysql.run(this.sqls.deleteToken, [id]);
    }

}

const UserDao = new UserDaoClass();

export {
    UserDao
}