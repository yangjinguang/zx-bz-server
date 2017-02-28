'use strict';
import {HttpRes} from "../../services/http-res.service";
import {Response, Request} from "express-serve-static-core";
import {QuestionDao} from "./question.dao";

class QuestionControllerClass {

    constructor() {
    }

    public get(req: Request, res: Response) {
        let type = Number(req.params.type);
        QuestionDao.select().then((result) => {
            HttpRes.success(res, result)
        }).catch((err) => {
            HttpRes.error(req)
        })
    }
}

export const QuestionController = new QuestionControllerClass();

