"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    /*
    Why not run this.userService = new UserService() in the component’s constructor and forget the complexity of @Injectable and providers?
    The short answer is a dependency-injection-based approach to coding keeps your classes LESS COUPLED, and therefore more MAINTAINABLED and TESTABLE as your application evolves over time.
    */
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nadeem@gmail.com";
        this.user.password = "1234";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (res) {
            _this.router.navigate(["/list"]);
        }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(
        //Success callback
        function (res) {
            //debugger;
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, 
        //Failure callback
        function (err) {
            //debugger;
            //err.body.message does not work (BUT no error message in Terminal or debug mode, UNLESS we write console.log())
            //=> For Http response, we should always write console.log() (in Service preferably; like we did with handleErrors())
            alert("Unfortunately we were unable to create your account.\n" + err._body.message);
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: 'pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUV6QywrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBVTdELElBQWEsY0FBYztJQUl2Qjs7O01BR0U7SUFDRix3QkFBb0IsV0FBd0IsRUFBVSxNQUFjO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQVAxRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQVF6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNWLFVBQUMsR0FBRztZQUNBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxDQUFDLEVBQ0QsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsK0NBQStDLENBQUMsRUFBdEQsQ0FBc0QsQ0FDaEUsQ0FBQztJQUNWLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsU0FBUztRQUNWLGtCQUFrQjtRQUNsQixVQUFDLEdBQUc7WUFDQSxXQUFXO1lBQ1gsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxrQkFBa0I7UUFDbEIsVUFBQyxHQUFHO1lBQ0EsV0FBVztZQUNYLGdIQUFnSDtZQUNoSCxxSEFBcUg7WUFDckgsS0FBSyxDQUFDLHdEQUF3RCxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkYsQ0FBQyxDQUNBLENBQUM7SUFDVixDQUFDO0lBRU0sc0NBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLGNBQWM7SUFSMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLGdDQUFnQztRQUNyRyxxRUFBcUU7S0FDeEUsQ0FBQztxQ0FVbUMsMEJBQVcsRUFBa0IsZUFBTTtHQVIzRCxjQUFjLENBc0QxQjtBQXREWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdIC8qIENvbXBvbmVudC1zcGVjaWZpYyBzdHlsaW5nICovXHJcbiAgICAvKiBSRU1FTUJFUjogbG9naW4uYW5kcm9pZC5jc3MgLT4gbG9naW4uY3NzIChVbmRlciBBbmRyb2lkIGZvbGRlcikgKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwcm90ZWN0ZWQgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIHVzZXI6IFVzZXI7XHJcblxyXG4gICAgLyogXHJcbiAgICBXaHkgbm90IHJ1biB0aGlzLnVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCkgaW4gdGhlIGNvbXBvbmVudOKAmXMgY29uc3RydWN0b3IgYW5kIGZvcmdldCB0aGUgY29tcGxleGl0eSBvZiBASW5qZWN0YWJsZSBhbmQgcHJvdmlkZXJzP1xyXG4gICAgVGhlIHNob3J0IGFuc3dlciBpcyBhIGRlcGVuZGVuY3ktaW5qZWN0aW9uLWJhc2VkIGFwcHJvYWNoIHRvIGNvZGluZyBrZWVwcyB5b3VyIGNsYXNzZXMgTEVTUyBDT1VQTEVELCBhbmQgdGhlcmVmb3JlIG1vcmUgTUFJTlRBSU5BQkxFRCBhbmQgVEVTVEFCTEUgYXMgeW91ciBhcHBsaWNhdGlvbiBldm9sdmVzIG92ZXIgdGltZS4gXHJcbiAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwibmFkZWVtQGdtYWlsLmNvbVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwiMTIzNFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xpc3RcIl0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvL1N1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy9GYWlsdXJlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAvL2Vyci5ib2R5Lm1lc3NhZ2UgZG9lcyBub3Qgd29yayAoQlVUIG5vIGVycm9yIG1lc3NhZ2UgaW4gVGVybWluYWwgb3IgZGVidWcgbW9kZSwgVU5MRVNTIHdlIHdyaXRlIGNvbnNvbGUubG9nKCkpXHJcbiAgICAgICAgICAgICAgICAvLz0+IEZvciBIdHRwIHJlc3BvbnNlLCB3ZSBzaG91bGQgYWx3YXlzIHdyaXRlIGNvbnNvbGUubG9nKCkgKGluIFNlcnZpY2UgcHJlZmVyYWJseTsgbGlrZSB3ZSBkaWQgd2l0aCBoYW5kbGVFcnJvcnMoKSlcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlxcblwiICsgZXJyLl9ib2R5Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcbn0iXX0=