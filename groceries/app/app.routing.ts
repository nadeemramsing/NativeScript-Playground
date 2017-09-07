import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";


/* For more info: https://docs.nativescript.org/core-concepts/angular-navigation#page-router-outlet */
export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent }
  
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent
];
/* Instead of putting them one by one in Module's declarations (ES6's spread operator used) */