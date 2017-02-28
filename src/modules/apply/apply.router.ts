'use strict';

import {Router} from 'express'
import {ApplyController} from "./apply.controller";

class ApplyRouterClass {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/', (req, res) => ApplyController.get(req, res));
        this.router.get('/search', (req, res) => ApplyController.search(req, res));
        this.router.post('/', (req, res) => ApplyController.save(req, res));
        this.router.put('/status/:id', (req, res) => ApplyController.updateStatus(req, res));
        this.router.delete('/:id', (req, res) => ApplyController.delete(req, res));
    }
}
export const ApplyRouter = new ApplyRouterClass().router;


