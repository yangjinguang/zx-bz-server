# Daydream Server

## user


### 微信认证


GET /user/auth?code

返回值

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwib3BlbmlkIjoib0FoRmx2OGtfOElfb0xkYlBLd3pUUmM4RHV5MCIsIm5pY2tuYW1lIjoi5p2o6YeR5YWJ8J-MgCIsInRpbWUiOjE0ODQ5Njk5Mjk2Mzl9.25VO1Wscs9zKw8jKeMdtx3LaeEu5zxYK8PuEgsXDXac",
        "profile": {
            "id": 1,
            "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
            "nickname": "杨金光🌀",
            "sex": 1,
            "city": "朝阳",
            "province": "北京",
            "country": "中国",
            "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
            "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
            "role": null,
            "description": null
        }
    }
}
```


### 获取个人信息


GET /user/profile (header里要有Authorization:{{token}})

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "id": 1,
        "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
        "nickname": "杨金光🌀",
        "sex": 1,
        "city": "朝阳",
        "province": "北京",
        "country": "中国",
        "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
        "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
        "role": null,
        "description": null
    }
}
```


### 更新个人信息


PUT /user/profile (header里要有Authorization:{{token}})

提交数据
```json
{
    "role":1, // 身份
    "description": "xxxxxx" // 个人描述
}
```

返回数据 
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 2,
        "insertId": 1,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```

### 根据id获取用户信息


GET /user/:id

返回数据 

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "id": 1,
        "openid": "",
        "nickname": "BANGBANG",
        "sex": null,
        "city": null,
        "province": null,
        "country": null,
        "headimgurl": "http://localhost:3000/file/588f3e2c439db47fec9d6c58",
        "unionid": null,
        "role": 6,
        "description": "带着勇气去冒险",
        "totalGetTips": 2, //旅行建议通知个数
        "totalGetTipsNoRead": 1, // 旅行建议未读通知个数
        "totalGetReplies": 2, // 旅行体验回复通知个数
        "totalGetRepliesNoRead": 1, // 旅行体验回复通知未读个数
        "totalGetLikes": 1, // 点赞通知个数
        "totalGetLikesNoRead": 0 // 未读点赞通知个数
    }
}
```

## 旅行计划


### 获取列表


GET /travel/planList?page&limit

返回数据 
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "_id": "58832bc4da68a61f8cfa63d9",
            "title": "哈哈",
            "body": "大法师的发烧发",
            "user":{
                  // 详情见profile返回字段
             },
            "totalTips":1, // 旅行建议总条数
            "tips":[{  // 旅行建议,列表只返回一条
                // 详情见tips字段
            }],
            "__v": 0,
            "updateTime": "2017-01-21T09:37:08.497Z",
            "createTime": "2017-01-21T09:37:08.497Z"
        }], 
        "total": 1, 
        "limit": 10, 
        "page": 1
    }
}
```


### 获取某一条


GET /travel/plan/{{planId}}

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
       "_id": "58832bc4da68a61f8cfa63d9",
       "title": "哈哈",
       "body": "大法师的发烧发",
       "user":{
             // 详情见profile返回字段
        },
       "totalTips":1, // 旅行建议总条数
       "tips":[{  // 旅行建议,列表只返回一条
           // 详情见tips字段
       }],
       "__v": 0,
       "updateTime": "2017-01-21T09:37:08.497Z",
       "createTime": "2017-01-21T09:37:08.497Z"
    }
}
```


### 创建


POST /travel/plan

提交数据

```json
{
    "title": "哈哈",
    "body": "大法师的发烧发",
    "number": 2,
    "img": "URL",
    "type": 1,
    "budget": 10000
}
```

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "__v": 0,
        "title": "哈哈",
        "body": "大法师的发烧发",
        "_id": "58832bc4da68a61f8cfa63d9",
        "userId":1,
        "img": null,
        "updateTime": "2017-01-21T09:37:08.497Z",
        "createTime": "2017-01-21T09:37:08.497Z"
    }
}
```

## 旅行建议


### 列表


GET /travel/tipList/{{planId}}

返回数据
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "user": {
                "description": "一句话介绍自己",
                "role": 1,
                "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
                "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
                "country": "中国",
                "province": "北京",
                "city": "朝阳",
                "sex": 1,
                "nickname": "杨金光🌀",
                "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
                "id": 1
            },
            "_id": "58841891a164a854a1038b6d",
            "userId": 1,
            "body": "大发大水发送",
            "planId": "5883337c4d413c46f1f2f346",
            "__v": 0,
            "updateTime": "2017-01-22T02:27:29.899Z",
            "createTime": "2017-01-22T02:27:29.899Z",
            "img": ["a", "b"]
        }], 
        "total": 1, 
        "limit": 10, 
        "page": 1
    }
}
```


### 获取某一条


GET /travel/tip/{{tipId}}

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "user": {
            "description": "一句话介绍自己",
            "role": 1,
            "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
            "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
            "country": "中国",
            "province": "北京",
            "city": "朝阳",
            "sex": 1,
            "nickname": "杨金光🌀",
            "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
            "id": 1
        },
        "_id": "58841891a164a854a1038b6d",
        "userId": 1,
        "body": "大发大水发送",
        "planId": "5883337c4d413c46f1f2f346",
        "__v": 0,
        "updateTime": "2017-01-22T02:27:29.899Z",
        "createTime": "2017-01-22T02:27:29.899Z",
        "img": ["a", "b"]
    }
}
```


### 创建建议


POST /travel/tip

提交数据

```json
{
    "body": "xxxx",
    "img": ["a", "b"], 
    "planId": "5883337c4d413c46f1f2f346"
}
```
返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "__v": 0,
        "userId": 1,
        "body": "大发大水发送",
        "planId": "5883337c4d413c46f1f2f346",
        "_id": "58841891a164a854a1038b6d",
        "updateTime": "2017-01-22T02:27:29.899Z",
        "createTime": "2017-01-22T02:27:29.899Z",
        "img": ["a", "b"]
    }
}
```

## 旅行体验


### 体验列表


GET /experience/list

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "user": {
                "description": "一句话介绍自己",
                "role": 1,
                "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
                "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
                "country": "中国",
                "province": "北京",
                "city": "朝阳",
                "sex": 1,
                "nickname": "杨金光🌀",
                "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
                "id": 1
            },
            "totalReplies": 0,
            "_id": "588461a1d545c4635094ade9",
            "userId": 1,
            "__v": 0,
            "updateTime": "2017-01-22T07:39:13.795Z",
            "createTime": "2017-01-22T07:39:13.795Z",
            "img": []
        }],
        "total": 1,
        "page": 1,
        "limit": 10
    }
}
```


### 创建体验


POST /experience 

提交数据:

```json
{
    "title": "xxxx",
    "body": "xxxxxx",
    "img": ["ccccc", "dddd"]
}
```

返回数据
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "__v": 0,
        "userId": 1,
        "title": "体验",
        "body": "好开心好开心",
        "_id": "588484873bce2d6b7077f2b0",
        "updateTime": "2017-01-22T10:08:07.022Z",
        "createTime": "2017-01-22T10:08:07.022Z",
        "img": ["ccccc", "dddd"]
    }
}
```


### 回复


POST /experience/reply

提交数据

```json
{
    "body":"xxx",
    "experienceId":"58846274ad62a9637cac3cba"
}
```

返回数据
```json
 {
    "code": 0,
    "msg": "请求成功",
    "data": {
        "__v": 0,
        "userId": 1,
        "body": "回复2",
        "experienceId": "58846274ad62a9637cac3cba",
        "_id": "58846f043988f367246694ba",
        "updateTime": "2017-01-22T08:36:20.752Z",
        "createTime": "2017-01-22T08:36:20.752Z"
    }
}
```


### 获取体验所有回复


GET /experience/replyList/{{expId}}

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "user": {
                "description": "一句话介绍自己",
                "role": 1,
                "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
                "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
                "country": "中国",
                "province": "北京",
                "city": "朝阳",
                "sex": 1,
                "nickname": "杨金光🌀",
                "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
                "id": 1
            },
            "_id": "58846f013988f367246694b8",
            "userId": 1,
            "body": "回复",
            "experienceId": "58846274ad62a9637cac3cba",
            "__v": 0,
            "updateTime": "2017-01-22T08:36:17.052Z",
            "createTime": "2017-01-22T08:36:17.052Z"
        }],
        "total": 1, 
        "page": 1, 
        "limit": 10
    }
}
```

## 文件上传


### 上传


POST /file/upload

form-data方式 ,例子
```html
<form ref='uploadForm'
      id='uploadForm'
      action='http://localhost:3000/file/upload'
      method='post'
      encType="multipart/form-data">
    <input type="file" name="uploadFile"/>
    <input type='submit' value='Upload!'/>
</form>
```
返回数据
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "_id": "5884a99a22769a76cc1a86ff",
        "filename": "nevermind.jpg",
        "url": "/file/5884a99a22769a76cc1a86ff",
        "length": 29539
    }
}
```


### 获取文件


GET /file/{{id}}

返回数据: file


## 收藏

### 添加:

POST /collection

提交数据
```json
{"itemId":"58841891a164a854a1038b6d"}
```
返回数据:
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 3,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```


### 获取


GET /collection

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "id": 3,
            "userId": 1,
            "itemType": "travelTip",
            "itemId": "58841891a164a854a1038b6d",
            "travelTip": {
                "user": {
                    "description": "一句话介绍自己",
                    "role": 1,
                    "unionid": "ovHulwN7LKRo6lIKemGvKX9MPjxE",
                    "headimgurl": "http://wx.qlogo.cn/mmopen/PiajxSqBRaEJmF6xoUkjWGd2OV1ibVyaiaa4ykUVQKFhb6iapaOhJZXIXExCnE4ibRKdpicxyN8hhJwLoI9CQpVX6NrQ/0",
                    "country": "中国",
                    "province": "北京",
                    "city": "朝阳",
                    "sex": 1,
                    "nickname": "杨金光🌀",
                    "openid": "oAhFlv8k_8I_oLdbPKwzTRc8Duy0",
                    "id": 1
                },
                "_id": "58841891a164a854a1038b6d",
                "userId": 1,
                "body": "大发大水发送",
                "planId": "5883337c4d413c46f1f2f346",
                "__v": 0,
                "updateTime": "2017-01-22T02:27:29.899Z",
                "createTime": "2017-01-22T02:27:29.899Z",
                "img": ["a", "b"]
            }
        }],
        "total": 1,
        "page": 1, 
        "limit": 10
    }
}
```


### 删除


DELETE /collection/{{id}}

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 4,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
```


## 通知


### 获取列表


GET /notice/list?type&page&limit

>type 0:旅行建议 1:体验回复 2:体验回复再回复 3:点赞

返回数据:

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "id": 12,
            "userId": 1,
            "user": {...}
            "type": 0, // 类型 0 : 旅行建议
            "itemId": "5885b9125ccbf20ad9696d9c",
            "isRead": 0, // 是否已读 0: 否, 1: 是
            "fromUserId": 1, // 来自用户
            "fromUser":{...}
            "createTime": "2017-01-23T08:04:34.000Z",
            "item": {  // 建议详情
                "plan": {}, // 被回复的plan详细字段 
                "user": {}, // user详细字段
                "_id": "5885b9125ccbf20ad9696d9c",
                "userId": 1,
                "body": "建议建议2",
                "planId": "58833d78915f1e49d4f77b83",
                "__v": 0,
                "updateTime": "2017-01-23T08:04:34.154Z",
                "createTime": "2017-01-23T08:04:34.154Z",
                "img": ["a", "b"]
            }
        }, {
            "id": 13,
            "userId": 1,
            "user": {...}
            "type": 1, // 类型 1 : 旅行体验的回复
            "itemId": "5885ba292d284d0b178bea5d",
            "isRead": 0,
            "fromUserId": 1, // 来自用户
            "fromUser":{...}
            "createTime": "2017-01-23T08:09:13.000Z",
            "item": { // 回复详情
                "experience": {}, // 被回复的体验详情
                "user": {}, // user 详细字段
                "_id": "5885ba292d284d0b178bea5d",
                "userId": 1,
                "body": "回复7",
                "experienceId": "5885a3fafb1bc8063e3a645c",
                "__v": 0,
                "updateTime": "2017-01-23T08:09:13.507Z",
                "createTime": "2017-01-23T08:09:13.507Z"
            }
        }, {
            "id": 9,
            "userId": 1,
            "user": {...}
            "type": 2, // 类型 2 : 旅行体验的回复再回复 
            "itemId": "5885afa429984308dac3124d",
            "isRead": 1,
            "fromUserId": 1, // 来自用户
            "fromUser":{...}
            "createTime": "2017-01-23T07:24:20.000Z",
            "item": {
                "toReply": {}, // 被回复的回复的详情
                "toUser": {}, // 被回复的回复的user
                "user": {}, // 当前回复的user
                "_id": "5885afa429984308dac3124d",
                "userId": 1,
                "body": "回复5",
                "experienceId": "5885a3fafb1bc8063e3a645c",
                "toUserId": 1,
                "toReplyId": "5885af8a29984308dac3124c",
                "__v": 0,
                "updateTime": "2017-01-23T07:24:20.545Z",
                "createTime": "2017-01-23T07:24:20.545Z"
            }
        }],
        "total": 3,
        "page": 1,
        "limit": 10
    }
}
```


### 获取未读通知条数

GET /notice/noReadCount

返回数据

```json
{"code":0,"msg":"请求成功","data":1 // 条数}
```

### 改变通知未读状态

PUT /notice/read

提交数据
```json
{
    "status":1, // 状态 0: 未读,1: 已读
    "id":9 // 通知id
}
```
返回数据
```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 1  Changed: 1  Warnings: 0",
        "protocol41": true,
        "changedRows": 1
    }
}
```


## 我的各种列表


### 我的旅行需求

GET /travel/planList/my

返回数据同旅行计划列表



### 我的旅行建议


GET /travel/tipList/my

返回数据同旅行建议列表


### 我的旅行体验

GET /experience/list/my

返回数据同旅行体验列表


## 旅行产品


### 列表

GET /product/list?userId&page&limit

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "list": [{
            "user": {
                "description": "带着勇气去冒险",
                "role": 6,
                "unionid": null,
                "headimgurl": "http://localhost:3000/file/588f3e2c439db47fec9d6c58",
                "country": null,
                "province": null,
                "city": null,
                "sex": null,
                "nickname": "BANGBANG",
                "openid": "",
                "id": 1
            },
            "_id": "589969e5bc4db05387a298a6",
            "userId": 1,
            "title": "测试旅行产品",
            "img": "xxxxx",
            "link": "http://xxxxxx",
            "__v": 0,
            "updateTime": "2017-02-07T06:32:05.681Z",
            "createTime": "2017-02-07T06:32:05.681Z"
        }], 
        "page": 1, 
        "limit": 10, 
        "total": 1
    }
}
```


### 添加

POST /product

提交数据

```json
{
    "title": "测试旅行产品",
    "img":"1213123123",
    "link": "http://xxxxxx"
}
```

返回数据

```json
{
    "code": 0,
    "msg": "请求成功",
    "data": {
        "__v": 0,
        "userId": 1,
        "title": "测试旅行产品",
        "img": "1213123123",
        "link": "http://xxxx",
        "_id": "589969f2bc4db05387a298a7",
        "updateTime": "2017-02-07T06:32:18.644Z",
        "createTime": "2017-02-07T06:32:18.644Z"
    }
}
```

## 2月7日新添加接口

旅行建议条件查询
GET /travel/tipList/query?userId&planId&page&limit

>参数都不要求必填,比如只查询userId = 1的用户就是  query?userId=1

体验条件查询
GET /experience/list/query?userId&page&limit

## 点赞

### 点赞

> 不要用之前的点赞接口,否则收不到推送

POST /like

提交数据

```json
{
    "itemType": 0,
    "itemId": "xxx"
}
```

> itemType 0: 旅行建议 1: 旅行体验
> 再次提交取消点赞

