'use strict';

export class Apply {
    public id: Number;
    public certItemId: Number;
    public name: String;
    public shipType: String;
    public post: Number;
    public phoneCode: String;
    public phoneNumber: String;


    constructor(data) {
        this.id = data['id'];
        this.certItemId = data['certItemId'];
        this.name = data['name'];
        this.shipType = data['shipType'];
        this.post = data['post'];
        this.phoneCode = data['phoneCode'];
        this.phoneNumber = data['phoneNumber'];
    }
}
