'use strict';

import {Router} from 'express'
import {QuestionController} from "./question.controller";

class QuestionRouterClass {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/', (req, res) => QuestionController.get(req, res));
    }
}
export const QuestionRouter = new QuestionRouterClass().router;


