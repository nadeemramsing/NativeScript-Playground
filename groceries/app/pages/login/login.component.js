"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    /*
    Why not run this.userService = new UserService() in the component’s constructor and forget the complexity of @Injectable and providers?
    The short answer is a dependency-injection-based approach to coding keeps your classes LESS COUPLED, and therefore more MAINTAINABLED and TESTABLE as your application evolves over time.
    */
    function LoginComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nativescriptrocks@telerik.com";
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
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFVN0QsSUFBYSxjQUFjO0lBSXZCOzs7TUFHRTtJQUNGLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVBsQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQVF6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFLLEdBQVo7SUFFQSxDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVM7UUFDVixrQkFBa0I7UUFDbEIsVUFBQyxHQUFHO1lBQ0EsV0FBVztZQUNYLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0Qsa0JBQWtCO1FBQ2xCLFVBQUMsR0FBRztZQUNBLFdBQVc7WUFDWCxnSEFBZ0g7WUFDaEgscUhBQXFIO1lBQ3JILEtBQUssQ0FBQyx3REFBd0QsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZGLENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVNLHNDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDckcscUVBQXFFO0tBQ3hFLENBQUM7cUNBVW1DLDBCQUFXO0dBUm5DLGNBQWMsQ0ErQzFCO0FBL0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdIC8qIENvbXBvbmVudC1zcGVjaWZpYyBzdHlsaW5nICovXHJcbiAgICAvKiBSRU1FTUJFUjogbG9naW4uYW5kcm9pZC5jc3MgLT4gbG9naW4uY3NzIChVbmRlciBBbmRyb2lkIGZvbGRlcikgKi9cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBwcm90ZWN0ZWQgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIHVzZXI6IFVzZXI7XHJcblxyXG4gICAgLyogXHJcbiAgICBXaHkgbm90IHJ1biB0aGlzLnVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCkgaW4gdGhlIGNvbXBvbmVudOKAmXMgY29uc3RydWN0b3IgYW5kIGZvcmdldCB0aGUgY29tcGxleGl0eSBvZiBASW5qZWN0YWJsZSBhbmQgcHJvdmlkZXJzP1xyXG4gICAgVGhlIHNob3J0IGFuc3dlciBpcyBhIGRlcGVuZGVuY3ktaW5qZWN0aW9uLWJhc2VkIGFwcHJvYWNoIHRvIGNvZGluZyBrZWVwcyB5b3VyIGNsYXNzZXMgTEVTUyBDT1VQTEVELCBhbmQgdGhlcmVmb3JlIG1vcmUgTUFJTlRBSU5BQkxFRCBhbmQgVEVTVEFCTEUgYXMgeW91ciBhcHBsaWNhdGlvbiBldm9sdmVzIG92ZXIgdGltZS4gXHJcbiAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcclxuICAgICAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcIjEyMzRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW4oKSB7XHJcblxyXG4gICAgfVxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAvL1N1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICAgICAgKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9kZWJ1Z2dlcjtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy9GYWlsdXJlIGNhbGxiYWNrXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAvL2Vyci5ib2R5Lm1lc3NhZ2UgZG9lcyBub3Qgd29yayAoQlVUIG5vIGVycm9yIG1lc3NhZ2UgaW4gVGVybWluYWwgb3IgZGVidWcgbW9kZSwgVU5MRVNTIHdlIHdyaXRlIGNvbnNvbGUubG9nKCkpXHJcbiAgICAgICAgICAgICAgICAvLz0+IEZvciBIdHRwIHJlc3BvbnNlLCB3ZSBzaG91bGQgYWx3YXlzIHdyaXRlIGNvbnNvbGUubG9nKCkgKGluIFNlcnZpY2UgcHJlZmVyYWJseTsgbGlrZSB3ZSBkaWQgd2l0aCBoYW5kbGVFcnJvcnMoKSlcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlxcblwiICsgZXJyLl9ib2R5Lm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcbn0iXX0=