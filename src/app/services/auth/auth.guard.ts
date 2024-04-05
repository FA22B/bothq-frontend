import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).loggedIn) {
    return inject(Router).parseUrl("/home")
  }

  return true
};
