import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly DISCORD_OAUTH = "https://discord.com/api/oauth2/authorize"
  private readonly CLIENT_ID = "1204752151499251803"
  private readonly RESPONSE_TYPE = "code"
  private readonly REDIRECT_URI = "http://localhost:4200/auth/discord/redirect" // TODO make dynamic / env variable based
  private readonly SCOPES = ["identify", "guilds"]
  private state: string | null = null

  constructor(private httpClient: HttpClient) {
  }

  private _loggedIn: boolean | null = null

  get loggedIn(): boolean {
    if (this._loggedIn === null) {
      this._loggedIn = true
      this.httpClient.get("/api/v1/servers").subscribe(() => {
      })
    }
    return this._loggedIn;
  }

  set loggedIn(value: boolean | null) {
    this._loggedIn = value;
  }

  getLoginAddress() {
    return "http://localhost:8080/oauth2/authorization/discord-client"
  }

  getLogoutAddress() {
    return "http://localhost:8080/logout"
  }
}
