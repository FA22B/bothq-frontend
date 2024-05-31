import {Component} from '@angular/core';
import {ServerPluginDataService} from "../../../services/server-plugin-data/server-plugin-data.service";
import {PluginCollapseComponent} from "../plugin-collapse/plugin-collapse.component";
import {PluginData} from "../../../models/plugin-data.model";
import {ServerDataService} from "../../../services/server-data/server-data.service";
import {DiscordGuild} from "../../../../types";

@Component({
  selector: 'app-server-settings',
  standalone: true,
  imports: [
    PluginCollapseComponent
  ],
  templateUrl: './server-settings.component.html',
  styleUrl: './server-settings.component.css'
})
export class ServerSettingsComponent {
  pluginList?: PluginData[]
  server?: DiscordGuild

  constructor(pluginDataService: ServerPluginDataService,
              serverDataService: ServerDataService) {
    pluginDataService.pluginList$.subscribe(plugins => this.pluginList = plugins);
    serverDataService.selectedServer$.subscribe(server => this.server = server);
  }

}
