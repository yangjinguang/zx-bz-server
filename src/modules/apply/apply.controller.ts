'use strict';
import {HttpRes} from "../../services/http-res.service";
import {Response, Request} from "express-serve-static-core";
import {ApplyDao} from "./apply.dao";
import {User} from "../user/user.model";
import {Token} from "../../services/token.service";

class ApplyControllerClass {

    constructor() {
    }

    public save(req: Request, res: Response) {
        ApplyDao.insert(req.body).then((result) => {
            HttpRes.success(res, result)
        }).catch((err) => {
            HttpRes.error(res)
        })
    }

    public get(req: Request, res: Response) {
        Token.verify(req).then((user: User) => {
            let page = req.query['page'] ? Number(req.query['page']) : 1;
            let limit = req.query['limit'] ? Number(req.query['limit']) : 10;
            ApplyDao.count().then((total) => {
                if (total > 0) {
                    ApplyDao.select(page, limit).then((result) => {
                        HttpRes.success(res, {
                            list: result,
                            page: page,
                            limit: limit,
                            total: total
                        })
                    }).catch((err) => {
                        HttpRes.error(res)
                    })
                } else {
                    HttpRes.success(res, {
                        list: [],
                        page: page,
                        limit: limit,
                        total: 0
                    })
                }
            }).catch((err) => {
                HttpRes.error(res)
            })
        }).catch((err) => {
            console.log(err)
            HttpRes.notAuth(res)
        })

    }

    public search(req: Request, res: Response) {
        let searchData = req.query;
        let page = req.query['page'] ? Number(req.query['page']) : 1;
        let limit = req.query['limit'] ? Number(req.query['limit']) : 10;
        if (searchData['name'] && searchData['phoneNumber']) {
            ApplyDao.countByNameAndPhoneNumber(searchData['name'], searchData['phoneNumber']).then((total) => {
                if (total > 0) {
                    ApplyDao.selectByNameAndPhoneNumber(searchData['name'], searchData['phoneNumber'], page, limit).then((result) => {
                        HttpRes.success(res, {
                            list: result,
                            page: page,
                            limit: limit,
                            total: total
                        })
                    }).catch((err) => {
                        HttpRes.error(res)
                    })
                } else {
                    HttpRes.success(res, {
                        list: [],
                        page: page,
                        limit: limit,
                        total: 0
                    })
                }
            }).catch((err) => {
                HttpRes.error(res)
            })
        } else if (searchData['name']) {
            ApplyDao.countByName(searchData['name']).then((total) => {
                if (total > 0) {
                    ApplyDao.selectByName(searchData['name'], page, limit).then((result) => {
                        HttpRes.success(res, {
                            list: result,
                            page: page,
                            limit: limit,
                            total: total
                        })
                    }).catch((err) => {
                        HttpRes.error(res)
                    })
                } else {
                    HttpRes.success(res, {
                        list: [],
                        page: page,
                        limit: limit,
                        total: 0
                    })
                }
            }).catch((err) => {
                HttpRes.error(res)
            })
        } else if (searchData['phoneNumber']) {
            ApplyDao.countByPhoneNumber(searchData['phoneNumber']).then((total) => {
                if (total > 0) {
                    ApplyDao.selectByPhoneNumber(searchData['phoneNumber'], page, limit).then((result) => {
                        HttpRes.success(res, {
                            list: result,
                            page: page,
                            limit: limit,
                            total: total
                        })
                    }).catch((err) => {
                        HttpRes.error(res)
                    })
                } else {
                    HttpRes.success(res, {
                        list: [],
                        page: page,
                        limit: limit,
                        total: 0
                    })
                }
            }).catch((err) => {
                HttpRes.error(res)
            })
        } else {
            HttpRes.success(res, {
                list: [],
                page: page,
                limit: limit,
                total: 0
            })
        }
    }

    public updateStatus(req: Request, res: Response) {
        Token.verify(req).then((user: User) => {
            let id = req.params.id;
            let status = req.body['status'];
            if (!status) {
                HttpRes.paramsError(res, '缺少status');
                return;
            }
            ApplyDao.updateStatusById(id, status).then((result) => {
                HttpRes.success(res, result)
            }).catch((err) => {
                HttpRes.error(res)
            })
        }).catch((err) => {
            HttpRes.notAuth(res)
        })

    }

    public delete(req: Request, res: Response) {
        Token.verify(req).then((user: User) => {
            let id = req.params.id;
            ApplyDao.deleteById(id).then((result) => {
                HttpRes.success(res, result)
            }).catch((err) => {
                HttpRes.error(res)
            })
        }).catch((err) => {
            HttpRes.notAuth(res)
        })

    }


}

export const ApplyController = new ApplyControllerClass();

