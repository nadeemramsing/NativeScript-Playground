"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.email = "nativescriptrocks@telerik.com";
    }
    AppComponent.prototype.submit = function () {
        console.log("submitted");
        alert("You’re using: " + this.email); /* Opens a simple Alert Dialog */
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: 
        /* The res:// syntax tells NativeScript to use a platform-specific resource, in this case an image. Platform-specific resources go in your app's app/App_Resources folder. */
        "\n  <FlexboxLayout flexDirection=\"column\" justifyContent=\"space-around\">\n    <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    \n    <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button text=\"Sign up for Groceries\"></Button>\n    <Image alignSelf=\"center\" src=\"res://logo_login\" stretch=\"none\"></Image>\n    \n  </FlexboxLayout>\n",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFxQjFDLElBQWEsWUFBWTtJQUd2QjtRQUZVLFVBQUssR0FBRywrQkFBK0IsQ0FBQztJQUVwQyxDQUFDO0lBRVIsNkJBQU0sR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztJQUN6RSxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLFlBQVk7SUFuQnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRO1FBQ1IsNktBQTZLO1FBQzdLLHdpQkFXRDtRQUNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDLENBQUMsZ0NBQWdDO1FBQ3JHLHFFQUFxRTtLQUN0RSxDQUFDOztHQUNXLFlBQVksQ0FTeEI7QUFUWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6XG4gIC8qIFRoZSByZXM6Ly8gc3ludGF4IHRlbGxzIE5hdGl2ZVNjcmlwdCB0byB1c2UgYSBwbGF0Zm9ybS1zcGVjaWZpYyByZXNvdXJjZSwgaW4gdGhpcyBjYXNlIGFuIGltYWdlLiBQbGF0Zm9ybS1zcGVjaWZpYyByZXNvdXJjZXMgZ28gaW4geW91ciBhcHAncyBhcHAvQXBwX1Jlc291cmNlcyBmb2xkZXIuICovXG4gIGBcbiAgPEZsZXhib3hMYXlvdXQgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCI+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIGtleWJvYXJkVHlwZT1cImVtYWlsXCIgWyhuZ01vZGVsKV09XCJlbWFpbFwiXG4gICAgYXV0b2NvcnJlY3Q9XCJmYWxzZVwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCI+PC9UZXh0RmllbGQ+XG4gICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG4gICAgXG4gICAgPEJ1dHRvbiB0ZXh0PVwiU2lnbiBpblwiIGNsYXNzPVwic3VibWl0LWJ1dHRvblwiICh0YXApPVwic3VibWl0KClcIj48L0J1dHRvbj5cbiAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbiAgICA8SW1hZ2UgYWxpZ25TZWxmPVwiY2VudGVyXCIgc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCI+PC9JbWFnZT5cbiAgICBcbiAgPC9GbGV4Ym94TGF5b3V0PlxuYCxcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdIC8qIENvbXBvbmVudC1zcGVjaWZpYyBzdHlsaW5nICovXG4gIC8qIFJFTUVNQkVSOiBsb2dpbi5hbmRyb2lkLmNzcyAtPiBsb2dpbi5jc3MgKFVuZGVyIEFuZHJvaWQgZm9sZGVyKSAqL1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgZW1haWwgPSBcIm5hdGl2ZXNjcmlwdHJvY2tzQHRlbGVyaWsuY29tXCI7XG5cbiAgY29uc3RydWN0b3IoKXt9XG5cbiAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKTtcbiAgICBhbGVydChcIllvdeKAmXJlIHVzaW5nOiBcIiArIHRoaXMuZW1haWwpOyAvKiBPcGVucyBhIHNpbXBsZSBBbGVydCBEaWFsb2cgKi9cbiAgfVxufSJdfQ==