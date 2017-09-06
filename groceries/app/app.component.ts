import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template:
  `
  <FlexboxLayout flexDirection="column" justifyContent="space-around">
    <TextField hint="Email Address" keyboardType="email"
    autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Password" secure="true"></TextField>
    
    <Button text="Sign in"></Button>
    <Button text="Sign up for Groceries"></Button>
  </FlexboxLayout>
`
})
export class AppComponent { }