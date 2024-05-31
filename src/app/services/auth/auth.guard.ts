import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";
import {map, take} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.loggedIn$.pipe(
    take(1),
    map(loggedIn => {
      if (loggedIn) {
        return true;
      } else {
        router.navigate(['/home']);
        return false;
      }
    })
  );
};
