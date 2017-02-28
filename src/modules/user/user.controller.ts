'use strict';
import {UserDao} from "./user.dao";
import {HttpRes} from "../../services/http-res.service";
import {User} from "./user.model";
import {Token} from "../../services/token.service";
import {Request, Response} from "express-serve-static-core";
import * as md5 from 'md5'

class UserControllerClass {

    constructor() {
    }

    public login(req: Request, res: Response) {
        if (!req.body.username || !req.body.password) {
            HttpRes.notAuth(res);
            return;
        }
        UserDao.selectByUsername(req.body.username).then((user: User) => {
            if (md5(req.body.password + user.salt) == user.password) {
                Token.create(user).then((token: String) => {
                    user.token = token;
                    console.log(user)
                    HttpRes.success(res, user.serialize());
                }).catch((err) => {
                    console.log(err);
                    HttpRes.notAuth(res);
                })
            } else {
                HttpRes.notAuth(res);
            }
        }).catch((err) => {
            HttpRes.notAuth(res)
        })
    }

    public logout(req: Request, res: Response) {
        Token.verify(req).then((user: User) => {
            UserDao.deleteToken(user.id).then(() => {
                HttpRes.success(res, '退出成功')
            }).catch((err) => {
                HttpRes.error(res);
            })
        }).catch((err) => {
            HttpRes.notAuth(res)
        })
    }


    public getProfile(req: Request, res: Response) {
        Token.verify(req).then((user: User) => {
            UserDao.selectById(user.id).then((user: User) => {
                if (user) {
                    HttpRes.success(res, user.serialize());
                } else {
                    HttpRes.notAuth(res)
                }
            }).catch((errData) => {
                HttpRes.error(res)
            });
        }).catch((err) => {
            console.log(err)
            HttpRes.notAuth(res)
        })
    }
}
export const UserController = new UserControllerClass();

