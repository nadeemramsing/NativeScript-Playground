import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'list', component: ListComponent, outlet: "left" },
    { path: 'form', component: FormComponent, outlet: "left" },
    { path: 'table', component: TableComponent, outlet: "left" }

    /* // otherwise redirect to home 
    { path: '**', redirectTo: '' } */
]