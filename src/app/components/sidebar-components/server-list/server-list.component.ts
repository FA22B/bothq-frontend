import {Component} from '@angular/core';
import {BHQServer} from "../../../bhqserver";
import {ServerDataService} from "../../../services/server-data/server-data.service";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {
  serverList?: BHQServer[]

  constructor(public dataservice: ServerDataService) {
    this.serverList = dataservice.serverList
  }

  selectServer(server: BHQServer) {
    this.dataservice.selectServer(server);
  }

  scrolling() {
    let element = document.getElementById('server-list-group')
    // @ts-ignore
    if (element.scrollTop > 5) {
      // @ts-ignore
      document.getElementById('serverShadowTop').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('serverShadowTop').style.opacity = 0
    }

    // @ts-ignore
    if ((element.scrollHeight - element.scrollTop - element.clientHeight) > 5) {
      // @ts-ignore
      document.getElementById('serverShadowBottom').style.opacity = 1
    } else {
      // @ts-ignore
      document.getElementById('serverShadowBottom').style.opacity = 0
    }
  }
}
