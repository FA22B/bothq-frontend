import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {

  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private httpClient: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.route
      .queryParamMap
      .subscribe(
        params => {
          let loggedIn = params.get("success")

          if (loggedIn === "true") {
            this.authService.setLoggedIn(true)
          }
        }
      )

    this.router.navigateByUrl("")
  }
}
