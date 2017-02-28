'use strict';
import {CertDao} from "./cert.dao";
import {HttpRes} from "../../services/http-res.service";
import {Response, Request} from "express-serve-static-core";

class CertControllerClass {

    constructor() {
    }

    public getItems(req: Request, res: Response) {
        let type = Number(req.params.type);
        CertDao.selectItems(type).then((result) => {
            HttpRes.success(res, result)
        })
    }
}

export const CertController = new CertControllerClass();

