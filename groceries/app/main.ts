import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
/* 
.bootstrapModule() is what gets the app up and running
*/