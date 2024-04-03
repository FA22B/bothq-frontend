import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Event} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private authService: AuthService,
              private httpClient: HttpClient) {
  }


  redirectDiscord($event: MouseEvent) {
    window.location.href = this.authService.getLoginAddress()
  }


  data: { user: string } | null = null



  getData() {
    this.httpClient.get<string>(
      "/api/v1/guild/1204755028934533160"    // bothq server
    ).subscribe(
      data => {
        console.log(data)
        this.data = {user: data}
      }
    )
  }
}
