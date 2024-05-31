import {Routes} from '@angular/router';
import {RedirectComponent} from "./components/redirect/redirect.component";
import {authGuard} from "./services/auth/auth.guard";
import {HomeComponent} from "./components/landing-page/home/home.component";
import {PluginSettingsComponent} from "./components/plugin-settings/plugin-settings.component";
import {ServerSettingsComponent} from "./components/server-settings-page/server-settings/server-settings.component";

export const routes: Routes = [
  // discord oauth
  {path: 'home', component: HomeComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: 'plugin-settings', component: PluginSettingsComponent, canActivate: [authGuard]},
  {path: 'server-settings', component: ServerSettingsComponent, canActivate: [authGuard]},


  // Landing Page
  {path: '', component: HomeComponent, pathMatch: 'full', canActivate: [authGuard]},

];

