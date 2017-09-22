import { PageOutletComponent } from "./pages/page-outlet/page-outlet.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { FicheHistoryComponent } from "./pages/ficheHistory/ficheHistory.component";
import { NewFicheComponent } from "./pages/newFiche/newFiche.component";

/* For more info: https://docs.nativescript.org/core-concepts/angular-navigation#page-router-outlet */
export const routes = [
    {
        path: "root", component: PageOutletComponent, children: [
            { path: "login", component: LoginComponent },
            { path: "home", component: HomeComponent },
            { path: "fiche-history", component: FicheHistoryComponent },
            { path: "new-fiche", component: NewFicheComponent }
        ]
    },
    { path: "", redirectTo: "/root/fiche-history", pathMatch: "full" }
];

export const navigatableComponents = [
    PageOutletComponent,
    LoginComponent,
    HomeComponent,
    FicheHistoryComponent,
    NewFicheComponent
];
/* Instead of putting them one by one in Module's declarations (ES6's spread operator used) */