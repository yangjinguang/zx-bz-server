'use strict';

import {Mysql} from "../../services/mysql.service";

class CertDaoClass {
    private sqls = {
        selectItemsByType: 'select * from certItems where type = ?'
    };

    constructor() {
    }

    public selectItems(type: Number) {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.selectItemsByType, [type]).then((rows: Array<any>) => {
                resolve(rows)
            })
        })
    }
}

export const CertDao = new CertDaoClass();