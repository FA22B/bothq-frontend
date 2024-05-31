import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, distinctUntilChanged, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInRefresh = new BehaviorSubject(false)
  loggedIn$: Observable<boolean>



  constructor(private httpClient: HttpClient) {
    this.loggedIn$ = this.loggedInRefresh.asObservable().pipe(
      distinctUntilChanged()
    )

    this.httpClient.get("/api/v1/servers").pipe(take(1))
      .subscribe({
        next: () => this.setLoggedIn(true),
        // error: () => this.setLoggedIn(false)
      })
  }


  setLoggedIn(value: boolean) {
    this.loggedInRefresh.next(value)
  }


  getLoginAddress() {
    return "http://localhost:8080/oauth2/authorization/discord-client"
  }

  getLogoutAddress() {
    return "http://localhost:8080/logout"
  }

}
