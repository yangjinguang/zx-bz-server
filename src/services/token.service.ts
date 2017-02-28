'use strict';

import * as jwt from 'jwt-simple'
import {SysConfig} from '../config/system.config'
import {User} from "../modules/user/user.model";
import {UserDao} from "../modules/user/user.dao";

class TokenClass {

    constructor() {
    }

    public create(user: User) {
        return new Promise((resolve, reject) => {
            let token = jwt.encode({
                id: user.id,
                username: user.username,
            }, SysConfig.jwtTokenSecret);
            UserDao.updateToken(user.id, token).then(() => {
                resolve(token);
            }).catch((err) => {
                reject(err)
            })
        })
    }

    private getToken(headers) {
        if (headers && headers.authorization) {
            return headers.authorization;
        }
        else {
            return null;
        }
    }

    public verify(req) {
        return new Promise((resolve, reject) => {
            try {
                let token = this.getToken(req.headers);
                console.log(token)
                let tokenInfo = jwt.decode(token, SysConfig.jwtTokenSecret);
                console.log(tokenInfo);
                UserDao.selectById(tokenInfo.id).then((user: User) => {
                    console.log(user)
                    if (user.token == token) {
                        resolve(user)
                    } else {
                        reject('token验证失败')
                    }
                }).catch((err) => {
                    reject('token验证失败')
                })
            } catch (err) {
                reject('token识别失败')
            }
        })

    }
}

export const Token = new TokenClass();