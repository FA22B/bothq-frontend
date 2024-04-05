import {Routes} from '@angular/router';
import {RedirectComponent} from "./components/redirect/redirect.component";
import {authGuard} from "./services/auth/auth.guard";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  // discord oauth
  {path: '/home', component: AppComponent},
  {path: 'redirect', component: RedirectComponent},


  // Landing Page
  {path: '/home', component: AppComponent, pathMatch: 'full', canActivate: [authGuard]},

];

