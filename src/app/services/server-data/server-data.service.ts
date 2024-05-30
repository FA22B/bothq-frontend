import {Injectable} from '@angular/core';
import {DiscordGuild} from "../../../types";
import {ServerManagementService} from "../server-management/server-management.service";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  serverList: DiscordGuild[] = []

  public selectedServer?: string
  public selectedServerName?: string

  constructor(private serverManagementService: ServerManagementService) {
    let server = sessionStorage.getItem('selectedServer')
    if (server) this.selectedServer = server
    let serverName = sessionStorage.getItem('selectedServerName')
    if (serverName) this.selectedServerName = serverName
  }

  selectServer(serverId: string) {
    this.selectedServer = serverId
    this.selectedServerName = this.getSelectedServerData()?.name
    sessionStorage.setItem('selectedServer', serverId)
    sessionStorage.setItem('selectedServerName', this.selectedServerName || '')
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
