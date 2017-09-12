import { OutletComponent } from "./pages/outlet/outlet.component"

/* For more info: https://docs.nativescript.org/core-concepts/angular-navigation#page-router-outlet */
export const routes = [
    { path: "", component: OutletComponent, children: [] }
];

export const navigatableComponents = [
    OutletComponent
];
/* Instead of putting them one by one in Module's declarations (ES6's spread operator used) */