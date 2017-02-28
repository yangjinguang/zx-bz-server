'use strict';
import {Response} from "express-serve-static-core";

class HttpResClass {
    constructor() {

    }

    public success(res:Response, resData) {
        res.status(200).json({
            code: 0,
            msg: '请求成功',
            data: resData
        })
    }

    public error(res) {
        res.status(500).json({
            code: 1,
            msg: '请求失败'
        })
    }

    public notAuth(res) {
        res.status(401).json({
            code: 1,
            msg: '用户未认证'
        })
    }

    public paramsError(res, msg) {

        res.status(400).json({
            code: 1,
            msg: '参数错误: ' + msg
        })
    }

    public file(res, file) {
        // res.setHeader('Content-disposition', 'filename=' + file.filename);
        res.set('Content-Type', file.file.contentType);
        res.setHeader('Content-Length', file.file.data.length);
        res.end(file.file.data);
    }

    public warning(res, msg) {
        res.status(400).json({
            code: 1,
            msg: msg
        })
    }
}

const HttpRes = new HttpResClass();

export {
    HttpRes
}