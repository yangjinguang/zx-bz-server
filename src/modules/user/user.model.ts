'use strict';

export class User {
    public id: Number;
    public username: String;
    public password: String;
    public salt: String;
    public role: Number;
    public token: String;
    public createAt: Date;

    constructor(userData: Object = {}) {
        this.id = userData['id'];
        this.username = userData['username'];
        this.password = userData['password'];
        this.salt = userData['salt'];
        this.role = userData['role'];
        this.token = userData['token'];
        this.createAt = userData['createAt'];
    }

    public serialize() {
        return {
            id: this.id,
            username: this.username,
            role: this.role,
            token: this.token,
            createAt: this.createAt
        }
    }
}