import {Component, EventEmitter, Output} from '@angular/core';
import {ServerDataService} from "../../../services/server-data/server-data.service";
import {DiscordGuild, Permission} from "../../../../types";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {
  @Output() loginEvent = new EventEmitter<boolean>()
  serverList?: DiscordGuild[]

  constructor(private router: Router, public dataservice: ServerDataService, public authservice: AuthService) {

    this.dataservice.getServers()
    this.serverList = this.dataservice.getServerList()
      .filter(server => (BigInt(server.permissions) & Permission.ADMINISTRATOR) != Permission.NONE)
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

  logIn() {
    this.loginEvent.emit(true)
  }
}
