import {Injectable} from '@angular/core';
import {BHQServer} from "../../bhqserver";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  serverList: BHQServer[] = []

  public selectedServer?: string

  constructor() {
    let server = sessionStorage.getItem('selectedServer')
    if (server) this.selectedServer = server
  }

  selectServer(serverId: string) {
    this.selectedServer = serverId
    sessionStorage.setItem('selectedServer', serverId)
  }
}
