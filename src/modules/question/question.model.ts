'use strict';

export class CertItem {
    public id: Number;
    public title: String;
    public answer: String;


    constructor(data) {
        this.id = data['id'];
        this.title = data['title'];
        this.answer = data['answer'];
    }
}
