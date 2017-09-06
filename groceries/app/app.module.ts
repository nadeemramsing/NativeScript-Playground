import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  schemas: [NO_ERRORS_SCHEMA], /* NO_ERRORS_SCHEMA used in case of AoT issues */
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
