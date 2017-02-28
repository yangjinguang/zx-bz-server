'use strict';

import {Router} from 'express'
import {CertController} from "./cert.controller";

class CertRouterClass {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/:type', (req, res) => CertController.getItems(req, res));
    }
}
export const CertRouter = new CertRouterClass().router;


