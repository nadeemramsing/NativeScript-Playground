import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { routes } from './app.routers';
import { SearchComponentComponent } from './search-component/search-component.component';
/* import { DataServiceService } from './data-service.service'; */ //If imported in Module, service will be available in all of its components

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [/* DataServiceService */],
  bootstrap: [AppComponent]
})
export class AppModule { }
