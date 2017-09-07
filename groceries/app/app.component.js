"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var user_service_1 = require("./shared/user/user.service");
var AppComponent = (function () {
    /*
    Why not run this.userService = new UserService() in the component’s constructor and forget the complexity of @Injectable and providers?
    The short answer is a dependency-injection-based approach to coding keeps your classes LESS COUPLED, and therefore more MAINTAINABLED and TESTABLE as your application evolves over time.
    */
    function AppComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nativescriptrocks@telerik.com";
        this.user.password = "1234";
    }
    AppComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AppComponent.prototype.login = function () {
    };
    AppComponent.prototype.signUp = function () {
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
            alert("Unfortunately we were unable to create your account." + err._body.message);
        });
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: 'pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUMsMkNBQTBDO0FBQzFDLDJEQUF5RDtBQVN6RCxJQUFhLFlBQVk7SUFJdkI7OztNQUdFO0lBQ0Ysc0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUGxDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBUTNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRywrQkFBK0IsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFTSw0QkFBSyxHQUFaO0lBRUEsQ0FBQztJQUNELDZCQUFNLEdBQU47UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTO1FBQ1Ysa0JBQWtCO1FBQ2xCLFVBQUMsR0FBRztZQUNGLFdBQVc7WUFDWCxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUNELGtCQUFrQjtRQUNsQixVQUFDLEdBQUc7WUFDRixXQUFXO1lBQ1gsZ0hBQWdIO1lBQ2hILHFIQUFxSDtZQUNySCxLQUFLLENBQUMsc0RBQXNELEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuRixDQUFDLENBQ0EsQ0FBQztJQUNOLENBQUM7SUFFTSxvQ0FBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksWUFBWTtJQVB4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDLENBQUMsZ0NBQWdDO1FBQ3JHLHFFQUFxRTtLQUN0RSxDQUFDO3FDQVNpQywwQkFBVztHQVJqQyxZQUFZLENBK0N4QjtBQS9DWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdIC8qIENvbXBvbmVudC1zcGVjaWZpYyBzdHlsaW5nICovXG4gIC8qIFJFTUVNQkVSOiBsb2dpbi5hbmRyb2lkLmNzcyAtPiBsb2dpbi5jc3MgKFVuZGVyIEFuZHJvaWQgZm9sZGVyKSAqL1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBwcm90ZWN0ZWQgdXNlcjogVXNlcjtcblxuICAvKiBcbiAgV2h5IG5vdCBydW4gdGhpcy51c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgpIGluIHRoZSBjb21wb25lbnTigJlzIGNvbnN0cnVjdG9yIGFuZCBmb3JnZXQgdGhlIGNvbXBsZXhpdHkgb2YgQEluamVjdGFibGUgYW5kIHByb3ZpZGVycz9cbiAgVGhlIHNob3J0IGFuc3dlciBpcyBhIGRlcGVuZGVuY3ktaW5qZWN0aW9uLWJhc2VkIGFwcHJvYWNoIHRvIGNvZGluZyBrZWVwcyB5b3VyIGNsYXNzZXMgTEVTUyBDT1VQTEVELCBhbmQgdGhlcmVmb3JlIG1vcmUgTUFJTlRBSU5BQkxFRCBhbmQgVEVTVEFCTEUgYXMgeW91ciBhcHBsaWNhdGlvbiBldm9sdmVzIG92ZXIgdGltZS4gXG4gICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWwgPSBcIm5hdGl2ZXNjcmlwdHJvY2tzQHRlbGVyaWsuY29tXCI7XG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCIxMjM0XCI7XG4gIH1cblxuICBwdWJsaWMgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvZ2luKCkge1xuXG4gIH1cbiAgc2lnblVwKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgIC8vU3VjY2VzcyBjYWxsYmFja1xuICAgICAgKHJlcykgPT4ge1xuICAgICAgICAvL2RlYnVnZ2VyO1xuICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgIH0sXG4gICAgICAvL0ZhaWx1cmUgY2FsbGJhY2tcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgICAgLy9lcnIuYm9keS5tZXNzYWdlIGRvZXMgbm90IHdvcmsgKEJVVCBubyBlcnJvciBtZXNzYWdlIGluIFRlcm1pbmFsIG9yIGRlYnVnIG1vZGUsIFVOTEVTUyB3ZSB3cml0ZSBjb25zb2xlLmxvZygpKVxuICAgICAgICAvLz0+IEZvciBIdHRwIHJlc3BvbnNlLCB3ZSBzaG91bGQgYWx3YXlzIHdyaXRlIGNvbnNvbGUubG9nKCkgKGluIFNlcnZpY2UgcHJlZmVyYWJseTsgbGlrZSB3ZSBkaWQgd2l0aCBoYW5kbGVFcnJvcnMoKSlcbiAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIgKyBlcnIuX2JvZHkubWVzc2FnZSlcbiAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gIH1cbn0iXX0=