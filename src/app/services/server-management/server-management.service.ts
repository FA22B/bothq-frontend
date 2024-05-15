import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DiscordGuild} from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class ServerManagementService {
  private readonly API_URL = '/api/v1/servers';

  constructor(private httpClient: HttpClient) { }

  getAllServers(): Observable<DiscordGuild[]> {
    return this.httpClient.get<DiscordGuild[]>(this.API_URL);
  }
}
