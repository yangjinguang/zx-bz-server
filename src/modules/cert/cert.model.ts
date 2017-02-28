'use strict';

export class CertItem {
    public id: Number;
    public name: String;
    public desc: String;
    public type: Number;


    constructor(data) {
        this.id = data['id'];
        this.name = data['name'];
        this.desc = data['desc'];
        this.type = data['type'];
    }
}
