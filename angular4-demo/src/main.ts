import { enableProdMode } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //JIT

import { platformBrowser } from '@angular/platform-browser'; //AOT (smaller, better performance, ready to execute immediately); BEST FOR: Mobile Devices, High Latency Networks
//import { AppModuleNgFactory } from './app/app.module.ngfactory';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(AppModuleNgFactory);
