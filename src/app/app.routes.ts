import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RedirectComponent} from "./components/redirect/redirect.component";
import {authGuard} from "./services/auth/auth.guard";

export const routes: Routes = [
  // discord oauth
  {path: 'login', component: LoginComponent},
  {path: 'redirect', component: RedirectComponent},


  // this is going to be our landing page, LoginComponent as placeholder
  {path: '', component: LoginComponent, pathMatch: 'full', canActivate: [authGuard]},

];

