"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    /*
    Why not run this.userService = new UserService() in the component’s constructor and forget the complexity of @Injectable and providers?
    The short answer is a dependency-injection-based approach to coding keeps your classes LESS COUPLED, and therefore more MAINTAINABLED and TESTABLE as your application evolves over time.
    */
    function LoginComponent(userService, router, page) {
        this.userService = userService;
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nadeem@gmail.com";
        this.user.password = "1234";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.backgroundImage = "res://bg_login";
        this.page.actionBarHidden = true;
    };
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
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 400
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: 'pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6QyxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBRzlCLCtDQUE4QztBQUM5QywrREFBNkQ7QUFVN0QsSUFBYSxjQUFjO0lBT3ZCOzs7TUFHRTtJQUNGLHdCQUFvQixXQUF3QixFQUFVLE1BQWMsRUFBVSxJQUFVO1FBQXBFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFQOUUsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFRekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQUEsaUJBUUM7UUFQRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDVixVQUFDLEdBQUc7WUFDQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDbkMsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQ2hFLENBQUM7SUFDVixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9CLFNBQVM7UUFDVixrQkFBa0I7UUFDbEIsVUFBQyxHQUFHO1lBQ0EsV0FBVztZQUNYLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0Qsa0JBQWtCO1FBQ2xCLFVBQUMsR0FBRztZQUNBLFdBQVc7WUFDWCxnSEFBZ0g7WUFDaEgscUhBQXFIO1lBQ3JILEtBQUssQ0FBQyx3REFBd0QsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZGLENBQUMsQ0FDQSxDQUFDO0lBQ1YsQ0FBQztJQUVNLHNDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNkLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxRQUFRLEVBQUUsR0FBRztTQUNoQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBakVHO0lBREMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQ1osaUJBQVU7aURBQUM7QUFGYixjQUFjO0lBUjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDckcscUVBQXFFO0tBQ3hFLENBQUM7cUNBYW1DLDBCQUFXLEVBQWtCLGVBQU0sRUFBZ0IsV0FBSTtHQVgvRSxjQUFjLENBbUUxQjtBQW5FWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXSAvKiBDb21wb25lbnQtc3BlY2lmaWMgc3R5bGluZyAqL1xyXG4gICAgLyogUkVNRU1CRVI6IGxvZ2luLmFuZHJvaWQuY3NzIC0+IGxvZ2luLmNzcyAoVW5kZXIgQW5kcm9pZCBmb2xkZXIpICovXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBcclxuICAgIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIHVzZXI6IFVzZXI7XHJcblxyXG4gICAgLyogXHJcbiAgICBXaHkgbm90IHJ1biB0aGlzLnVzZXJTZXJ2aWNlID0gbmV3IFVzZXJTZXJ2aWNlKCkgaW4gdGhlIGNvbXBvbmVudOKAmXMgY29uc3RydWN0b3IgYW5kIGZvcmdldCB0aGUgY29tcGxleGl0eSBvZiBASW5qZWN0YWJsZSBhbmQgcHJvdmlkZXJzP1xyXG4gICAgVGhlIHNob3J0IGFuc3dlciBpcyBhIGRlcGVuZGVuY3ktaW5qZWN0aW9uLWJhc2VkIGFwcHJvYWNoIHRvIGNvZGluZyBrZWVwcyB5b3VyIGNsYXNzZXMgTEVTUyBDT1VQTEVELCBhbmQgdGhlcmVmb3JlIG1vcmUgTUFJTlRBSU5BQkxFRCBhbmQgVEVTVEFCTEUgYXMgeW91ciBhcHBsaWNhdGlvbiBldm9sdmVzIG92ZXIgdGltZS4gXHJcbiAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJuYWRlZW1AZ21haWwuY29tXCI7XHJcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCIxMjM0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcclxuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9naW4oKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNpZ25VcCgpIHtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgLy9TdWNjZXNzIGNhbGxiYWNrXHJcbiAgICAgICAgICAgIChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vRmFpbHVyZSBjYWxsYmFja1xyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2RlYnVnZ2VyO1xyXG4gICAgICAgICAgICAgICAgLy9lcnIuYm9keS5tZXNzYWdlIGRvZXMgbm90IHdvcmsgKEJVVCBubyBlcnJvciBtZXNzYWdlIGluIFRlcm1pbmFsIG9yIGRlYnVnIG1vZGUsIFVOTEVTUyB3ZSB3cml0ZSBjb25zb2xlLmxvZygpKVxyXG4gICAgICAgICAgICAgICAgLy89PiBGb3IgSHR0cCByZXNwb25zZSwgd2Ugc2hvdWxkIGFsd2F5cyB3cml0ZSBjb25zb2xlLmxvZygpIChpbiBTZXJ2aWNlIHByZWZlcmFibHk7IGxpa2Ugd2UgZGlkIHdpdGggaGFuZGxlRXJyb3JzKCkpXHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cXG5cIiArIGVyci5fYm9keS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=