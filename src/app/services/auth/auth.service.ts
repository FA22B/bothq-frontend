import { Injectable } from '@angular/core';

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

  public loggedIn = false


  constructor() { }


  getLoginAddress(){
    return "http://localhost:8080/oauth2/authorization/discord-client"
  }
}
