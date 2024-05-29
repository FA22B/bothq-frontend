import {Component} from '@angular/core';
import {ServerDataService} from "../../../services/server-data/server-data.service";
import {ServerManagementService} from "../../../services/server-management/server-management.service";
import {DiscordGuild} from "../../../../types";
import {Router} from "@angular/router";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {
  serverList?: DiscordGuild[]

  constructor(private router: Router, public dataservice: ServerDataService, private serverManagementService: ServerManagementService) {

    this.serverManagementService.getAllServers().subscribe(servers => {
      this.serverList = servers
    })
  }

  serverSettings(serverId: string) {
    this.dataservice.selectServer(serverId);

    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
      this.router.navigateByUrl('/server-settings');
    });
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
