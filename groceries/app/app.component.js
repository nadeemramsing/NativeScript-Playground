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
        template: 
        /* The res:// syntax tells NativeScript to use a platform-specific resource, in this case an image. Platform-specific resources go in your app's app/App_Resources folder. */
        "\n  <FlexboxLayout flexDirection=\"column\" justifyContent=\"space-around\">\n    <TextField hint=\"Email Address\" keyboardType=\"email\" [(ngModel)]=\"user.email\"\n    autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n    <TextField hint=\"Password\" secure=\"true\"></TextField>\n    \n    <Button [text]=\"isLoggingIn ? 'Sign in' : 'Sign up'\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n    <Button [text]=\"isLoggingIn ? 'Sign up' : 'Back to login'\" (tap)=\"toggleDisplay()\"></Button>\n    <Image alignSelf=\"center\" src=\"res://logo_login\" stretch=\"none\"></Image>\n    \n  </FlexboxLayout>\n",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
        /* REMEMBER: login.android.css -> login.css (Under Android folder) */
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQTBDO0FBcUIxQyxJQUFhLFlBQVk7SUFJdkI7UUFIVSxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUkzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsK0JBQStCLENBQUM7SUFDcEQsQ0FBQztJQUVNLDZCQUFNLEdBQWI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsaUNBQWlDO0lBQzlFLENBQUM7SUFFTSxvQ0FBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksWUFBWTtJQW5CeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVE7UUFDUiw2S0FBNks7UUFDN0ssMm5CQVdEO1FBQ0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDckcscUVBQXFFO0tBQ3RFLENBQUM7O0dBQ1csWUFBWSxDQWlCeEI7QUFqQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTpcbiAgLyogVGhlIHJlczovLyBzeW50YXggdGVsbHMgTmF0aXZlU2NyaXB0IHRvIHVzZSBhIHBsYXRmb3JtLXNwZWNpZmljIHJlc291cmNlLCBpbiB0aGlzIGNhc2UgYW4gaW1hZ2UuIFBsYXRmb3JtLXNwZWNpZmljIHJlc291cmNlcyBnbyBpbiB5b3VyIGFwcCdzIGFwcC9BcHBfUmVzb3VyY2VzIGZvbGRlci4gKi9cbiAgYFxuICA8RmxleGJveExheW91dCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIj5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJFbWFpbCBBZGRyZXNzXCIga2V5Ym9hcmRUeXBlPVwiZW1haWxcIiBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIlxuICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgIDxUZXh0RmllbGQgaGludD1cIlBhc3N3b3JkXCIgc2VjdXJlPVwidHJ1ZVwiPjwvVGV4dEZpZWxkPlxuICAgIFxuICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5nSW4gPyAnU2lnbiBpbicgOiAnU2lnbiB1cCdcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgPEJ1dHRvbiBbdGV4dF09XCJpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJ1wiICh0YXApPVwidG9nZ2xlRGlzcGxheSgpXCI+PC9CdXR0b24+XG4gICAgPEltYWdlIGFsaWduU2VsZj1cImNlbnRlclwiIHNyYz1cInJlczovL2xvZ29fbG9naW5cIiBzdHJldGNoPVwibm9uZVwiPjwvSW1hZ2U+XG4gICAgXG4gIDwvRmxleGJveExheW91dD5cbmAsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXSAvKiBDb21wb25lbnQtc3BlY2lmaWMgc3R5bGluZyAqL1xuICAvKiBSRU1FTUJFUjogbG9naW4uYW5kcm9pZC5jc3MgLT4gbG9naW4uY3NzIChVbmRlciBBbmRyb2lkIGZvbGRlcikgKi9cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgcHJvdGVjdGVkIHVzZXI6IFVzZXI7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIHRoaXMudXNlci5lbWFpbCA9IFwibmF0aXZlc2NyaXB0cm9ja3NAdGVsZXJpay5jb21cIjtcbiAgfVxuXG4gIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJzdWJtaXR0ZWRcIik7XG4gICAgYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIgKyB0aGlzLnVzZXIuZW1haWwpOyAvKiBPcGVucyBhIHNpbXBsZSBBbGVydCBEaWFsb2cgKi9cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufSJdfQ==