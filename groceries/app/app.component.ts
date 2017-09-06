import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
  /* REMEMBER: login.android.css -> login.css (Under Android folder) */
})
export class AppComponent {
  protected isLoggingIn = true;
  protected user: User;
  
  constructor() {
    this.user = new User();
    this.user.email = "nativescriptrocks@telerik.com";
  }

  public submit() {
    console.log("submitted");
    alert("You’re using: " + this.user.email); /* Opens a simple Alert Dialog */
  }

  public toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}