import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'search1', component: SearchComponentComponent },
    { path: 'search2/:name', component: SearchComponentComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]