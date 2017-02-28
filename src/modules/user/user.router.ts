'use strict';

import {Router} from 'express'
import {UserController} from "./user.controller";

class UserRouterClass {
    public router: Router;

    constructor() {
        this.router = Router();
        this.router.get('/profile', (req, res) => UserController.getProfile(req, res));
        this.router.post('/login', (req, res) => UserController.login(req, res));
        this.router.get('/logout', (req, res) => UserController.logout(req, res));
    }
}

export const UserRouter = new UserRouterClass().router;