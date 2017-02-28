'use strict';
let DbConfig;
if (process.env.NODE_ENV == 'prod') {
    DbConfig = {
        mysql: {
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'zxbz', // 前面建的user表位于这个数据库中
            port: 3306,
            charset: 'utf8mb4_unicode_ci'
        }
    }
} else {
    DbConfig = {
        mysql: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'zxbz', // 前面建的user表位于这个数据库中
            port: 3306,
            charset: 'utf8mb4_unicode_ci'
        }
    }
}

export  {
    DbConfig
}