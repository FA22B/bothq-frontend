import {Component} from '@angular/core';
import {PluginDataService} from "../../../services/plugin-data/plugin-data.service";
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

  constructor(public dataservice: PluginDataService, private serverDataService: ServerDataService) {
    this.pluginList = this.dataservice.getPluginList() || []

    this.server = this.serverDataService.getSelectedServerData()
  }

}
