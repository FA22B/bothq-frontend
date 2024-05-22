import {Injectable} from '@angular/core';
import {BHQServer} from "../../bhqserver";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  serverList = [new BHQServer('Chuck Norris Server'),
    new BHQServer('Server A'),
    new BHQServer('Server B'),]

  public selectedServer?: BHQServer

  constructor() {
    let server = sessionStorage.getItem('selectedServer')
    if (server) this.selectedServer = this.serverList.find(s => s.name === server)
  }

  selectServer(server: BHQServer) {
    this.selectedServer = server
    sessionStorage.setItem('selectedServer', server.name)
  }
}
