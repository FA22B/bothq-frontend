import {Injectable, OnInit} from '@angular/core';
import {DiscordGuild} from "../../../types";
import {ServerManagementService} from "../server-management/server-management.service";
import {BehaviorSubject, combineLatest, map, Observable, ReplaySubject, switchMap} from "rxjs";
import {PluginData} from "../../models/plugin-data.model";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  private serverListRefresh = new ReplaySubject<void>();
  serverList$: Observable<DiscordGuild[]>;

  private selectedServerIdRefresh = new BehaviorSubject<string | undefined>(undefined)
  selectedServer$: Observable<DiscordGuild | undefined>

  constructor(
    private serverManagementService: ServerManagementService,
    private authService: AuthService
  ) {
    this.serverList$ = this.serverListRefresh.asObservable().pipe(
      switchMap(() => this.serverManagementService.getAllServers())
    );

    this.selectedServer$ = combineLatest([this.serverList$,  this.selectedServerIdRefresh.asObservable()]).pipe(
      map(([servers, selectedId]) => {
        if (selectedId === undefined)
          return undefined;

        return servers.find((server) => server.id == selectedId);
      })
    )

    this.authService.loggedIn$.subscribe(loggedIn => {
      if (loggedIn)
        this.updateServers()
    })
  }



  updateServers(){
    this.serverListRefresh.next()
  }


  selectServer(serverId?: string) {
    this.selectedServerIdRefresh.next(serverId);
  }
}
