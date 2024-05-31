import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  ReplaySubject,
  switchMap
} from "rxjs";
import {PluginData} from "../../models/plugin-data.model";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ServerPluginDataService {

  private pluginListRefresh = new ReplaySubject<void>();
  pluginList$: Observable<PluginData[]>;

  private selectedPluginIdRefresh = new BehaviorSubject<number>(-1);
  selectedPlugin$: Observable<PluginData | undefined>

  private API_PLUGIN = '/api/v1/plugins';

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
    this.pluginList$ = this.pluginListRefresh.asObservable().pipe(
      switchMap(() => this.getAllPlugins())
    );

    this.selectedPlugin$ = combineLatest([this.pluginList$,  this.selectedPluginIdRefresh.asObservable()]).pipe(
      map(([plugins, selectedId]) => {
        if (selectedId == -1)
          return undefined;

        return plugins.find((plugin) => plugin.pluginId == selectedId);
      })
    )

    this.authService.loggedIn$.subscribe(loggedIn => {
      if (loggedIn)
        this.updatePlugins()
    })

    this.updatePlugins();
  }


  updatePlugins() {
    this.pluginListRefresh.next();
  }

  selectPlugin(pluginId: number) {
    this.selectedPluginIdRefresh.next(pluginId)
  }


  private getAllPlugins(): Observable<PluginData[]> {
    return this.httpClient.get<PluginData[]>(this.API_PLUGIN);
  }
}
