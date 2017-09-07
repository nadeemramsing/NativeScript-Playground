import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from 'nativescript-angular/http';
/* NativeScriptHttpModule = a NativeScript wrapper of Angular's HttpModule */

import { AppComponent } from "./app.component";

@NgModule({
  schemas: [NO_ERRORS_SCHEMA], /* NO_ERRORS_SCHEMA used in case of AoT issues */
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
