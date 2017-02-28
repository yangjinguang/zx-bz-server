'use strict';

import {Mysql} from "../../services/mysql.service";
import {Apply} from "./apply.model";

class ApplyDaoClass {
    private sqls = {
        insert: 'insert into applies (certItemId,name,shipType,post,phoneCode,phoneNumber,status,createAt) values(?,?,?,?,?,?,0,NOW())',
        count: 'select count(1) as total from applies',
        countByName: 'select count(1) as total from applies where name = ?',
        countByPhoneNumber: 'select count(1) as total from applies where phoneNumber = ?',
        countByNameAndPhoneNumber: 'select count(1) as total from applies where name = ? and phoneNumber = ?',
        select: 'select applies.*,certItems.name as certName  from applies left join certItems  on  applies.certItemId = certItems.id limit ?,?',
        selectByName: 'select applies.*,certItems.name as certName  from applies left join certItems  on  applies.certItemId = certItems.id where applies.name = ? limit ?,?',
        selectByPhoneNumber: 'select applies.*,certItems.name as certName  from applies left join certItems  on  applies.certItemId = certItems.id where applies.phoneNumber = ? limit ?,?',
        selectByNameAndPhoneNumber: 'select applies.*,certItems.name as certName  from applies left join certItems  on  applies.certItemId = certItems.id where applies.name = ? and applies.phoneNumber = ? limit ?,?',
        updateStatusById: 'update applies set status = ? where id = ?',
        deleteById: 'delete from applies where id = ?'
    };

    constructor() {
    }

    public count() {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.count, []).then((result) => {
                resolve(result[0]['total'])
            }).catch((err) => {
                reject(err)
            })
        })
    };

    public countByName(name: String) {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.countByName, [name]).then((result) => {
                resolve(result[0]['total'])
            }).catch((err) => {
                reject(err)
            })
        })
    };

    public countByPhoneNumber(phoneNumber: String) {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.countByPhoneNumber, [phoneNumber]).then((result) => {
                resolve(result[0]['total'])
            }).catch((err) => {
                reject(err)
            })
        })
    };

    public countByNameAndPhoneNumber(name: String, phoneNumber: String) {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.countByNameAndPhoneNumber, [name, phoneNumber]).then((result) => {
                resolve(result[0]['total'])
            }).catch((err) => {
                reject(err)
            })
        })
    };


    public insert(postData) {
        return new Promise((resolve, reject) => {
            let apply = new Apply(postData);
            Mysql.run(this.sqls.insert, [apply.certItemId, apply.name, apply.shipType, apply.post, apply.phoneCode, apply.phoneNumber]).then((result) => {
                resolve(result)
            }).catch((err) => {
                reject(err)
            })
        })
    }

    public select(page, limit) {
        let offset = (page - 1) * limit;
        return Mysql.run(this.sqls.select, [offset, limit]);
    }

    public selectByName(name, page, limit) {
        let offset = (page - 1) * limit;
        return Mysql.run(this.sqls.selectByName, [name, offset, limit]);
    }

    public selectByPhoneNumber(phoneNumber, page, limit) {
        let offset = (page - 1) * limit;
        return Mysql.run(this.sqls.selectByPhoneNumber, [phoneNumber, offset, limit]);
    }

    public selectByNameAndPhoneNumber(name, phoneNumber, page, limit) {
        let offset = (page - 1) * limit;
        return Mysql.run(this.sqls.selectByNameAndPhoneNumber, [name, phoneNumber, offset, limit]);
    }

    public updateStatusById(id, status) {
        return Mysql.run(this.sqls.updateStatusById, [status, id]);
    }

    public deleteById(id) {
        return Mysql.run(this.sqls.deleteById, [id]);
    }
}

export const ApplyDao = new ApplyDaoClass();