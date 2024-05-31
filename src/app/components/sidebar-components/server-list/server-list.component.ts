import {Component, EventEmitter, Output} from '@angular/core';
import {ServerDataService} from "../../../services/server-data/server-data.service";
import {DiscordGuild, Permission} from "../../../../types";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {filter, map, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-server-list',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {
  @Output() loginEvent = new EventEmitter<boolean>()
  serverList?: DiscordGuild[]
  loggedIn: boolean = false;

  constructor(private router: Router,
              public dataService: ServerDataService,
              public authService: AuthService) {
    this.dataService.serverList$.pipe(
      map(servers => servers
        .filter(server => (
          BigInt(server.permissions) & Permission.ADMINISTRATOR) != Permission.NONE))
    ).subscribe(servers => this.serverList = servers);

    authService.loggedIn$.subscribe(loggedIn => this.loggedIn = loggedIn)
  }



  serverSettings(serverId: string) {
    this.dataService.selectServer(serverId);

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
