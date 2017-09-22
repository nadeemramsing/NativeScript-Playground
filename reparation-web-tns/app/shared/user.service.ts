import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
/* import { Observable } from 'rxjs/Rx'; */

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { Config } from "./app.config";
import { HeaderService } from "./headers.service";

@Injectable()
export class UserService {
    private headers;

    constructor(private http: Http, headerService: HeaderService) {
        this.headers = headerService.getHeaders();
    }

    public getUsers = getUsers;
}

function getUsers() {
    return this.http.get(Config.BASEURL + "users", { headers: this.headers })
        .map(res => res.json()) //Needed; ELSE error!
        /* .do(res => res) */
        ;
}