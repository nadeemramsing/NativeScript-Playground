import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { setStatusBarColors } from "./utils/status-bar-util";
import { AppModule } from "./app.module";

setStatusBarColors();
platformNativeScriptDynamic().bootstrapModule(AppModule);
/* 
.bootstrapModule() is what gets the app up and running
*/