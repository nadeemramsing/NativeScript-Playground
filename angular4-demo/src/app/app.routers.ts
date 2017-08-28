import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ViewComponent} from './view/view.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'search1', component: SearchComponentComponent },
    { path: 'search2/:name', component: SearchComponentComponent },
    //IF route params used, it must always be provided before activating route; ELSE, won't be activated.
    
    { path: 'view', component: ViewComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
]