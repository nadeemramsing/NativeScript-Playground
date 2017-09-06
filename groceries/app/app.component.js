"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("./shared/user/user");
var AppComponent = (function () {
    function AppComponent() {
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "nativescriptrocks@telerik.com";
    }
    AppComponent.prototype.submit = function () {
        console.log("submitted");
        alert("You’re using: " + this.user.email); /* Opens a simple Alert Dialog */
    };
    AppComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: 'pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBUTFDLElBQWEsWUFBWTtJQUl2QjtRQUhVLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSTNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRywrQkFBK0IsQ0FBQztJQUNwRCxDQUFDO0lBRU0sNkJBQU0sR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7SUFDOUUsQ0FBQztJQUVNLG9DQUFhLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDLENBQUMsZ0NBQWdDO1FBQ3JHLHFFQUFxRTtLQUN0RSxDQUFDOztHQUNXLFlBQVksQ0FpQnhCO0FBakJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdIC8qIENvbXBvbmVudC1zcGVjaWZpYyBzdHlsaW5nICovXG4gIC8qIFJFTUVNQkVSOiBsb2dpbi5hbmRyb2lkLmNzcyAtPiBsb2dpbi5jc3MgKFVuZGVyIEFuZHJvaWQgZm9sZGVyKSAqL1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICBwcm90ZWN0ZWQgdXNlcjogVXNlcjtcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJuYXRpdmVzY3JpcHRyb2Nrc0B0ZWxlcmlrLmNvbVwiO1xuICB9XG5cbiAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgICBhbGVydChcIllvdeKAmXJlIHVzaW5nOiBcIiArIHRoaXMudXNlci5lbWFpbCk7IC8qIE9wZW5zIGEgc2ltcGxlIEFsZXJ0IERpYWxvZyAqL1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG59Il19