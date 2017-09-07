import { Component } from "@angular/core";

import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";

@Component({
    selector: "my-app",
    providers: [UserService],
    templateUrl: 'pages/login/login.html',
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
    /* REMEMBER: login.android.css -> login.css (Under Android folder) */
})

export class LoginComponent {
    protected isLoggingIn = true;
    protected user: User;

    /* 
    Why not run this.userService = new UserService() in the component’s constructor and forget the complexity of @Injectable and providers?
    The short answer is a dependency-injection-based approach to coding keeps your classes LESS COUPLED, and therefore more MAINTAINABLED and TESTABLE as your application evolves over time. 
    */
    constructor(private userService: UserService) {
        this.user = new User();
        this.user.email = "nativescriptrocks@telerik.com";
        this.user.password = "1234";
    }

    public submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    public login() {

    }
    signUp() {
        this.userService.register(this.user)
            .subscribe(
            //Success callback
            (res) => {
                //debugger;
                alert("Your account was successfully created.");
                this.toggleDisplay();
            },
            //Failure callback
            (err) => {
                //debugger;
                //err.body.message does not work (BUT no error message in Terminal or debug mode, UNLESS we write console.log())
                //=> For Http response, we should always write console.log() (in Service preferably; like we did with handleErrors())
                alert("Unfortunately we were unable to create your account.\n" + err._body.message)
            }
            );
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}