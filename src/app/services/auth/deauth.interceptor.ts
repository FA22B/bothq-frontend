import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {Observable, tap, throwError} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

function handleAuthError(err: HttpErrorResponse): Observable<any> {
  if (err.status == 401 || err.status == 403) {
    inject(AuthService).loggedIn = false
  }
  return throwError(() => err)
}


export const deauthInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(tap({
    error: err => handleAuthError(err)
  }));
};

