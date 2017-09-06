import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  template:
  /* The res:// syntax tells NativeScript to use a platform-specific resource, in this case an image. Platform-specific resources go in your app's app/App_Resources folder. */
  `
  <FlexboxLayout flexDirection="column" justifyContent="space-around">
    <TextField hint="Email Address" keyboardType="email" [(ngModel)]="user.email"
    autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>
    
    <Button [text]="isLoggingIn ? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
    <Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
    <Image alignSelf="center" src="res://logo_login" stretch="none"></Image>
    
  </FlexboxLayout>
`,
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