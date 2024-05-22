import {Injectable} from '@angular/core';
import {BHQServer} from "../../bhqserver";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  serverList = [new BHQServer('Chuck Norris Jokes', 'Have the Bot tell a random Chuck Norris Joke from: https://api.chucknorris.io', true),
    new BHQServer('Auto Role', 'Automatically assigns roles to users based on their activity.', false),
    new BHQServer('Auto Voice', 'Automatically creates voice channels on demand and deletes them again, when that demand fades.', false),
    new BHQServer('Auto Mod', 'Automatically moderates your server.', true),
    new BHQServer('Auto Welcome', 'Automatically welcomes new members.', false),
    new BHQServer('Auto Leave', 'Automatically says goodbye to members who leave.', true),
    new BHQServer('Auto Nickname', 'Automatically changes nicknames.', false),
    new BHQServer('Auto Message', 'Automatically sends messages.', true),]

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
