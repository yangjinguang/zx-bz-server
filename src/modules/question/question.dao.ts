'use strict';

import {Mysql} from "../../services/mysql.service";

class QuestionDaoClass {
    private sqls = {
        select: 'select * from questions'
    };

    constructor() {
    }

    public select() {
        return new Promise((resolve, reject) => {
            Mysql.run(this.sqls.select, []).then((rows: Array<any>) => {
                resolve(rows)
            })
        })
    }
}

export const QuestionDao = new QuestionDaoClass();