import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DiscordGuild, UserInfo} from "../../../types";

@Injectable({
  providedIn: 'root'
})
export class UserServerService {
  private readonly API_URL = '/api/v1/servers';

  constructor(private httpClient: HttpClient) { }

  getAllPlugins(serverId: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.API_URL}/${serverId}/plugins`);
  }

  getPluginConfiguration(serverId: string, pluginId: string): Observable<string> {
    return this.httpClient.get<string>(`${this.API_URL}/${serverId}/plugins/${pluginId}`);
  }

  updatePluginConfig(serverId: string, pluginId: string, config: string): Observable<string> {
    return this.httpClient.put<string>(`${this.API_URL}/${serverId}/plugins/${pluginId}`, config);
  }

  statusPlugin(serverId: string, pluginId: string, enabled: boolean): Observable<string> {
    return this.httpClient.post<string>(`${this.API_URL}/${serverId}/plugins/${pluginId}`, enabled);
  }

  deletePluginSettings(serverId: string, pluginId: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.API_URL}/${serverId}/plugins/${pluginId}`);
  }

  leaveServer(serverId: string): Observable<string> {
    return this.httpClient.delete<string>(`${this.API_URL}/${serverId}`);
  }

  getServerInfo(serverId: string): Observable<DiscordGuild> {
    return this.httpClient.get<DiscordGuild>(`${this.API_URL}/${serverId}`);
  }

  getMemberList(serverId: string): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>(`${this.API_URL}/${serverId}/members`);
  }
}
