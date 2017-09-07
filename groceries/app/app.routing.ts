import { LoginComponent } from "./pages/login/login.component";

export const routes = [
  { path: "", component: LoginComponent }
];

export const navigatableComponents = [
    LoginComponent
];
/* Instead of putting them one by one in Module's declarations (ES6's spread operator used) */