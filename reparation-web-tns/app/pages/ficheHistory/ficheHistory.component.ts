import { Component, OnInit } from "@angular/core";

import { UserService } from "./../../shared/user.service";

@Component({
    selector: "login",
    templateUrl: 'pages/ficheHistory/ficheHistory.html' //Path relative to "app" folder
})

export class FicheHistoryComponent implements OnInit {
    protected users;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            (res) => {
                this.users = res;
                console.log(this.users);
            },
            (err) => {
                console.log(err);
            });
    }

}