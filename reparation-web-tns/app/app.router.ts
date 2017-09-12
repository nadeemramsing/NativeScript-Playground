import { PageOutletComponent } from "./pages/page-outlet/page-outlet.component"

/* For more info: https://docs.nativescript.org/core-concepts/angular-navigation#page-router-outlet */
export const routes = [
    { path: "", component: PageOutletComponent, children: [] }
];

export const navigatableComponents = [
    PageOutletComponent
];
/* Instead of putting them one by one in Module's declarations (ES6's spread operator used) */