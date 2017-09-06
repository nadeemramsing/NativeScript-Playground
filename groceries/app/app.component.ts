import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template:
  /* The res:// syntax tells NativeScript to use a platform-specific resource, in this case an image. Platform-specific resources go in your app's app/App_Resources folder. */
  `
  <FlexboxLayout flexDirection="column" justifyContent="space-around">
    <TextField hint="Email Address" keyboardType="email"
    autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>
    
    <Button text="Sign in" class="submit-button" (tap)="submit()"></Button>
    <Button text="Sign up for Groceries"></Button>
    <Image alignSelf="center" src="res://logo_login" stretch="none"></Image>
    
  </FlexboxLayout>
`,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"] /* Component-specific styling */
  /* REMEMBER: login.android.css -> login.css (Under Android folder) */
})
export class AppComponent {

  constructor(){}

  public submit() {
    console.log("submitted");
  }
}