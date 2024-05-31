import {Component} from '@angular/core';
import {ServerPluginDataService} from "../../services/server-plugin-data/server-plugin-data.service";
import {PluginData} from "../../models/plugin-data.model";
import {AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {catchError, combineLatest, EMPTY, map, Observable, of, switchMap, throwError} from "rxjs";
import {SliderComponent} from "./slider/slider.component";
import {GroupComponent} from "./group/group.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ServerDataService} from "../../services/server-data/server-data.service";
import {DiscordGuild} from "../../../types";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-plugin-settings',
  standalone: true,
  imports: [
    NgSwitch,
    NgIf,
    NgForOf,
    NgSwitchCase,
    AsyncPipe,
    SliderComponent,
    GroupComponent,
    CheckboxComponent
  ],
  templateUrl: './plugin-settings.component.html',
  styleUrl: './plugin-settings.component.css'
})
export class PluginSettingsComponent {
  private API_SERVER = '/api/v1/servers';

  pluginData$: Observable<PluginData | undefined>;


  constructor(private pluginDataService: ServerPluginDataService,
              private serverDataService: ServerDataService,
              private httpClient: HttpClient) {

    this.pluginData$ = combineLatest([pluginDataService.selectedPlugin$, serverDataService.selectedServer$]).pipe(
      switchMap(([selectedPlugin, selectedServer]) => this.getSelectedPluginData(selectedPlugin, selectedServer))
    )
  }

  getSelectedPluginData(plugin?: PluginData, server?: DiscordGuild): Observable<PluginData | undefined> {
    if (plugin === undefined || server === undefined)
      return of(undefined);


    return this.httpClient.get<PluginData>(`${this.API_SERVER}/${server.id}/plugins/${plugin.pluginId}`);
  }
}

