import { Injectable } from '@angular/core';
import { Headers } from "@angular/http";


@Injectable()
export class HeaderService {
    
    /* Headers does not have @Injectable() decorator => cannot be injected */
    /* You need to instantiate it by your own */
    constructor() {}

    private createRequestHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    public getHeaders() {
        return this.createRequestHeader();
    }
}