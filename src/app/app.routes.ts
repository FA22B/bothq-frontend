import {Routes} from '@angular/router';
import {RedirectComponent} from "./components/redirect/redirect.component";
import {authGuard} from "./services/auth/auth.guard";
import {HomeComponent} from "./components/home/home.component";

export const routes: Routes = [
  // discord oauth
  {path: 'home', component: HomeComponent},
  {path: 'redirect', component: RedirectComponent},


  // Landing Page
  {path: '', component: HomeComponent, pathMatch: 'full', canActivate: [authGuard]},

];

