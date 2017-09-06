"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.submit = function () {
        console.log("submitted");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: 
        /* The res:// syntax tells NativeScript to use a platform-specific resource, in this case an image. Platform-specific resources go in your app's app/App_Resources folder. */
        "\n  <FlexboxLayout flexDirection=\"column\" justifyContent=\"space-around\">\n    <TextField hint=\"Email Address\" keyboardType=\"email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    \n    <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n    <Image alignSelf=\"center\" src=\"res://logo_login\" stretch=\"none\"></Image>\n    \n  </FlexboxLayout>\n",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFxQjFDLElBQWEsWUFBWTtJQUV2QjtJQUFjLENBQUM7SUFFUiw2QkFBTSxHQUFiO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLFlBQVk7SUFuQnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRO1FBQ1IsNktBQTZLO1FBQzdLLGtoQkFXRDtRQUNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDLENBQUMsZ0NBQWdDO1FBQ3JHLHFFQUFxRTtLQUN0RSxDQUFDOztHQUNXLFlBQVksQ0FPeEI7QUFQWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6XG4gIC8qIFRoZSByZXM6Ly8gc3ludGF4IHRlbGxzIE5hdGl2ZVNjcmlwdCB0byB1c2UgYSBwbGF0Zm9ybS1zcGVjaWZpYyByZXNvdXJjZSwgaW4gdGhpcyBjYXNlIGFuIGltYWdlLiBQbGF0Zm9ybS1zcGVjaWZpYyByZXNvdXJjZXMgZ28gaW4geW91ciBhcHAncyBhcHAvQXBwX1Jlc291cmNlcyBmb2xkZXIuICovXG4gIGBcbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCI+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcbiAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIj48L1RleHRGaWVsZD5cbiAgICBcbiAgICA8QnV0dG9uIHRleHQ9XCJTaWduIGluXCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCIgKHRhcCk9XCJzdWJtaXQoKVwiPjwvQnV0dG9uPlxuICAgIDxCdXR0b24gdGV4dD1cIlNpZ24gdXAgZm9yIEdyb2Nlcmllc1wiPjwvQnV0dG9uPlxuICAgIDxJbWFnZSBhbGlnblNlbGY9XCJjZW50ZXJcIiBzcmM9XCJyZXM6Ly9sb2dvX2xvZ2luXCIgc3RyZXRjaD1cIm5vbmVcIj48L0ltYWdlPlxuICAgIFxuICA8L0ZsZXhib3hMYXlvdXQ+XG5gLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0gLyogQ29tcG9uZW50LXNwZWNpZmljIHN0eWxpbmcgKi9cbiAgLyogUkVNRU1CRVI6IGxvZ2luLmFuZHJvaWQuY3NzIC0+IGxvZ2luLmNzcyAoVW5kZXIgQW5kcm9pZCBmb2xkZXIpICovXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IoKXt9XG5cbiAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgfVxufSJdfQ==