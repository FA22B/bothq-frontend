import {Injectable} from '@angular/core';
import {DiscordGuild} from "../../../types";
import {ServerManagementService} from "../server-management/server-management.service";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  serverList: DiscordGuild[] = []

  public selectedServer?: string

  constructor(private serverManagementService: ServerManagementService) {
    let server = sessionStorage.getItem('selectedServer')
    if (server) this.selectedServer = server
  }

  selectServer(serverId: string) {
    this.selectedServer = serverId
    sessionStorage.setItem('selectedServer', serverId)
  }

  getServers() {
    this.serverManagementService.getAllServers().subscribe(servers => {
      localStorage.setItem('serverList', JSON.stringify(servers))
    })
    this.serverList = this.getServerList()
  }

  getServerList() {
    return JSON.parse(localStorage.getItem('serverList') || '[]')
  }

  getSelectedServerData() {
    return this.serverList.find(server => server.id === this.selectedServer)
  }

  getSelectedServerId() {
    if (this.selectedServer) {
      return +this.selectedServer
    } else {
      return 0
    }
  }
}
